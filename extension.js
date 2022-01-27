const hx = require("hbuilderx");
const os = require("os");
const fs = require('fs-extra'); //需v8.1.0版本才行
const path = require("path");
const utils = require("./utils/utils.js");
const wtu = require("miniprogram-to-uniapp");
const pkg = require('./package.json');

//该方法将在插件激活的时候调用
function activate(context) {
	let disposable = hx.commands.registerCommand('extension.mpToUniapp', (params) => {
		//管理
		let outputChannel = hx.window.createOutputChannel("miniprogram to uniapp");
		outputChannel.show();

		var fsPath = params.fsPath; //项目路径
		var workspaceFolder = params.workspaceFolder;
		var name = workspaceFolder.name; //项目名
		var nature = workspaceFolder.nature; //类型
		outputChannel.appendLine("");
		outputChannel.appendLine("开始转换为uniapp项目...");
		outputChannel.appendLine("项目路径：" + fsPath);

		if (nature === "MiniApp") {
			outputChannel.appendLine("项目名：" + name + "    项目类型：" + nature);
			transform(params, outputChannel);
		} else {
			//二次判断
			var isMiniApp = checkMiniApp(fsPath, outputChannel);
			if (isMiniApp) {
				outputChannel.appendLine("项目名：" + name + "    项目类型：" + nature + " (二次检测：MiniApp)");
				transform(params, outputChannel);
			} else {
				outputChannel.appendLine("检测到非小程序项目(识别为：" + nature + ")，请选择其他项目再试试~");
			}
		}
	});

	//订阅销毁钩子，插件禁用的时候，自动注销该command。
	context.subscriptions.push(disposable);
}


/**
 * 通过目录下面的app.json判断一个目录是否为小程序项目
 */
function checkMiniApp(folder, outputChannel) {
	var isMiniApp = false;
	let json_app = path.join(folder, "app.json");
	if (fs.existsSync(json_app)) {
		try {
			var appJson = fs.readJsonSync(json_app);
			var pages = appJson["pages"];
			if (pages && Array.isArray(pages)) {
				isMiniApp = true;
			}
		} catch (e) {
			outputChannel("解析项目里app.json报错");
		}
	}
	return isMiniApp;
}

/**
 * 转换小程序
 * @param {Object} params
 */
function transform(params, outputChannel) {
	var fsPath = params.fsPath; //项目路径
	var workspaceFolder = params.workspaceFolder;
	var name = workspaceFolder.name; //项目名
	//
	let config = hx.workspace.getConfiguration();
	// let vueAppCliMode = config.get('mpToUniapp.vueAppCliMode');
	// let renameWxToUni = config.get('mpToUniapp.renameWxToUni');
	let mergeWxssIntoVue = config.get('mpToUniapp.mergeWxssIntoVue');
	// let repair = config.get('mpToUniapp.repair');
	// "mpToUniapp.checkVant": {
	// 	"type": "boolean",
	// 	"default": true,
	// 	"description": "自动识别vant并进行相应转换"s
	// }
	// let isVantProject = config.get('mpToUniapp.checkVant');
	// console.log(renameWxToUni, mergeWxssIntoVue, isVantProject);

	let options = {
		// isVueAppCliMode: vueAppCliMode,
		// isRenameWxToUni: renameWxToUni,
		isMergeWxssToVue: mergeWxssIntoVue,
		// isRepair: repair,
		isHBuildXPlugin: true, //恒为true!
		outputChannel: outputChannel
	}

	try {
		//开始转换
		wtu.transform(fsPath, options, function(ouputFolder) {
			outputChannel.appendLine(
				"--------------------------------------------------------------------------------------------------"
			);
			var log = "转换后的项目" + name + "_uni" + "已经自动添加到HBuilder X左侧项目管理器里(如果没添加请手动在同级目录找到并添加)"
			outputChannel.appendLine(log);

			//添加这个项目到项目管理器
			utils.addProjectToHbxProjects(ouputFolder);

			hx.window.showInformationMessage(log);
		});
	} catch (e) {
		//TODO handle the exception
		console.log("转换报错: " + JSON.stringify(e))
		outputChannel.appendLine("转换报错: " + JSON.stringify(e));
		
		hx.window.showInformationMessage("转换报错: " + JSON.stringify(e));
	}
}



//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}

module.exports = {
	activate,
	deactivate
}
