const hx = require("hbuilderx");
const os = require("os");
const fs = require('fs-extra');  //需v8.1.0版本才行
const path = require("path");
const utils = require("./utils/utils.js");
const wtu = require("miniprogram-to-uniapp");

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
			var isMiniApp = checkMiniApp(fsPath, outputChannel);
			if (isMiniApp) {
				outputChannel.appendLine("项目名：" + name + "    项目类型：" + nature + " (二次检测：MiniApp)");
				transform(params, outputChannel);
			} else {
				outputChannel.appendLine("检测到非小程序项目，请选择其他项目再试试~");
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
	let renameWxToUni = config.get('mpToUniapp.renameWxToUni');
	let mergeWxssIntoVue = config.get('mpToUniapp.mergeWxssIntoVue');
	// "mpToUniapp.checkVant": {
	// 	"type": "boolean",
	// 	"default": true,
	// 	"description": "自动识别vant并进行相应转换"
	// }
	// let isVantProject = config.get('mpToUniapp.checkVant');
	// console.log(renameWxToUni, mergeWxssIntoVue, isVantProject);

	try {
		//预处理
		wtu.preHandle(fsPath, outputChannel);

		//开始转换
		wtu.transform(fsPath, '', false, false, false, renameWxToUni, mergeWxssIntoVue, function(ouputFolder) {
			outputChannel.appendLine(
				"--------------------------------------------------------------------------------------------------");
			outputChannel.appendLine("转换后的项目" + name + "_uni" + "已经自动添加到HBuilder X左侧项目管理器里\n");
			outputChannel.appendLine("运行转换后的项目时，请先详细阅读答疑文档！\n");
			outputChannel.appendLine(
				"答疑文档：https://github.com/zhangdaren/articles/blob/master/miniprogram-to-uniapp%E5%B7%A5%E5%85%B7%E7%AD%94%E7%96%91.md\n"
			);
			outputChannel.appendLine("git地址：https://github.com/zhangdaren/miniprogram-to-uniapp, 欢迎各位大佬star和issue!");

			//添加这个项目到项目管理器
			utils.addProjectToHbxProjects(ouputFolder);
		});
	} catch (e) {
		//TODO handle the exception
		console.log("转换报错" + JSON.stringify(e))
		outputChannel.appendLine("转换报错: " + JSON.stringify(e));
	}
}



//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}

module.exports = {
	activate,
	deactivate
}
