# [HBuilder X 插件] 转换各种小程序为 uni-app 项目

转换微信、QQ、头条/抖音、支付宝/钉钉和百度等小程序转换到 uni-app 项目

## 使用方法

打开插件链接：[HBuilder X 插件 miniprogram-to-uniapp](https://ext.dcloud.net.cn/plugin?id=2656)，点击右侧绿色按钮“使用HBuilderX导入插件”。

在HBuilder X左侧项目管理器里，在小程序项目上右键，点击弹出菜单里面的 “miniprogram to uniapp”，然后等待插件运行结束即可。

![点击菜单](https://zhangdaren.gitee.io/articles/img/hbx_wtu_01.png)

![等待转换完成](https://zhangdaren.gitee.io/articles/img/hbx_wtu_02.png)


注意：   
1.工具的配置默认不需要动   
2.使用vant插件的项目，建议使用npm工具[miniprogram-to-uniapp](https://github.com/zhangdaren/miniprogram-to-uniapp)加-z参数进行转换，后续本工具将适配vant项目   
2.因hbuilder x判断的原因，可能有些小程序不能被识别为小程序，是因为项目里缺少package.json或project.config.json文件，手动创建或从别的项目中拷贝一个过来即可。   

## 使用指南

使用时遇到问题，请仔细阅读： [miniprogram to uniapp 工具答疑](https://github.com/zhangdaren/articles/blob/master/miniprogram-to-uniapp%E5%B7%A5%E5%85%B7%E7%AD%94%E7%96%91.md)

对于使用有疑问或建议，欢迎加入 QQ 群：780359397 进行讨论。

<a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=6cccd111e447ed70ee0c17672a452bf71e7e62cfa6b427bbd746df2d32297b64"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="小程序转uni-app讨论群" title="小程序转uni-app讨论群"></a>

## 已完成

-   支持微信、QQ、头条/抖音、支付宝/钉钉和百度等小程序转换到 uni-app 项目
-   支持解析 TypeScript 小程序项目
-   支持解析使用 npm 模块的小程序项目
-   支持解析 include 标签
-   支持解析 template 标签
-   支持解析 Behavior 文件为 mixins 文件
-   支持*.js', *.wxml 和\*.wxss 文件进行相应转换，并做了大量的优化
-   使用[jyf-parser](https://ext.dcloud.net.cn/plugin?id=805)替换 wxParse(感谢网友 “爱瑞巴勒康忙北鼻” 的建议)
-   ...

## 不支持转换的功能及组件

-   不支持转换反编译后的小程序项目
-   不支持转换使用 uni-app 编译的小程序项目
-   不支持转换使用 redux 开发的小程序(代表为：网易云信小程序 DEMO)
-   不支持转换使用 wxpage 开发的小程序(https://github.com/tvfe/wxpage)
-   不支持转换使用腾讯 omi 开发的小程序(https://github.com/Tencent/omi)
-   不支持转换小程序抽象节点 componentGenerics
-   不支持 component 里的 pageLifetimes 生命周期，请手动绕过
-   不支持使用 js 系统关键字作为函数或变量名(如 default、import、return、switch 等)
-   不支持以\$开头的变量名称，如 `Page({data:{$data:{name:"hello"}}})` ，刚好\$data 是 vue 内置变量，so 不支持，需手动修复
-   不支持以动态绑定的函数`<input @input="test{{index+1}}">`，需手动修复
-   更多，请参照[miniprogram to uniapp 工具答疑](https://github.com/zhangdaren/articles/blob/master/miniprogram-to-uniapp%E5%B7%A5%E5%85%B7%E7%AD%94%E7%96%91.md)

## 更新记录

### v1.0.2(20200901)
-   更新miniprogram-to-uniapp版本，优化异常情况的处理
-   
### v1.0.1(20200831)
-   对非小程序项目进行二次判断

### v1.0.0(20200829)
-   基于项目[miniprogram-to-uniapp](https://github.com/zhangdaren/miniprogram-to-uniapp)创建HBuilder X插件


## LICENSE
This repo is released under the [MIT](http://opensource.org/licenses/MIT).
