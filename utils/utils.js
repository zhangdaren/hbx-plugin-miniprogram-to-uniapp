var os = require("os");
var path = require("path");
var hx = require("hbuilderx");
var hbxExecutableProgram = "";

/**
 * 获取hbx路径
 */
function getHbxExecutableProgram() {
	if (hbxExecutableProgram) {
		//已经存在就直接使用缓存
		return hbxExecutableProgram;
	}
	const osName = os.platform();
	let appRoot = hx.env.appRoot;
	if (osName == 'darwin') {
		hbxExecutableProgram = path.join(path.dirname(appRoot), 'MacOS/HBuilderX');
	} else {
		hbxExecutableProgram = path.join(appRoot, 'HBuilderX.exe');
	};
	console.log("hbxExecutableProgram ", hbxExecutableProgram)
	return hbxExecutableProgram;
}


/**
 * 添加项目到项目管理器
 */
function addProjectToHbxProjects(folder) {
	var cp = require("child_process");
	var hbxExecutableProgram = getHbxExecutableProgram();
	cp.exec(hbxExecutableProgram + " " + folder, function(error, stdout, stderr) {
		if (error) {
			console.log(error.stack);
			console.log('Error code: ' + error.code);
			console.log('Signal received: ' + error.signal);
		}
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
	});

}


module.exports = {
	getHbxExecutableProgram,
	addProjectToHbxProjects
}
