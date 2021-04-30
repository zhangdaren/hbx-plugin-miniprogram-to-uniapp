# [HBuilder X 插件] 转换各种小程序为 uni-app 项目

转换微信、QQ、头条/抖音、支付宝/钉钉和百度等小程序转换到 uni-app 项目

遇到问题，如需紧急联系，请添加QQ群进行反馈，长期在线！社区不太经常上。

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

对于使用有疑问或建议，欢迎加入 QQ 群进行指导和反馈。
   
交流 QQ 群：   
1 群：780359397 <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=6cccd111e447ed70ee0c17672a452bf71e7e62cfa6b427bbd746df2d32297b64"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="小程序转uni-app讨论群" title="小程序转uni-app讨论群"></a> (已满)   
2 群：361784059 <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=vpt4K1r6Witx29ZsKcb_tqvinhcZzVhK&jump_from=webapi"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="小程序转uniapp研究二群" title="小程序转uniapp研究二群"></a>   

## 已完成

<!-- |微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|360小程序
|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|x -->

-   **支持微信、QQ、头条/抖音、支付宝/钉钉和百度等小程序转换到 uni-app 项目**
-   支持有/无云开发的小程序项目转换为 uni-app 项目
-   支持解析 TypeScript 小程序项目
-   支持解析使用 npm 模块的小程序项目
-   支持解析 include 标签
-   支持解析 template 标签
-   支持解析 Behavior 文件为 mixins 文件
-   合并使用 require 导入的 wxs 文件
-   setData() polyfill， setData 函数无须另外处理！
-   支持识别 App、Page、Component、VantComponent、Behavior 和纯 Javascript 文件的转换
-   使用[mp-html](https://ext.dcloud.net.cn/plugin?id=805)替换 wxParse(感谢网友 “爱瑞巴勒康忙北鼻” 的建议)
-   将所有非 static 目录下资源文件移入 static 目录，并修复所有能修复到的路径
-   对代码语法做了大量的兼容，如修复变量名与函数重名的情况等
-   对混淆代码进行语义化分析，并作反混淆处理
-   搜索template和setData里未声明的变量，智能识别变量类型，并在data里面进行声明！
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

### v1.0.8(20210430)
-   【重要】 [针对压缩代码]增加 -f 参数，默认为false，用于尽可能修复被混淆过的js代码，提升可读性！
-   【重要】 [针对压缩代码]三元表达式转换为if表达式(需增加-f参数)
-   【重要】 [针对压缩代码]getApp及this的变量名语义化(`var n = this;` ==> `var that = this;`)
-   【重要】 增加小程序大部分API函数的Polyfill，尽量避免调试报错，让项目先跑起来！(实验阶段)
-   【重要】 增加uni.navigateTo、uni.redirectTo不能跳转tabBar页面的Polyfill(不得已而为之)
-   【重要】 搜索template里未声明的变量，智能识别变量类型，并在data里面进行声明！
-   【重要】 升级 jyf-parse 为 mp-html v2.1.2（2021-04-24）
-   【重要】 增加getCurrentPages的处理
<!-- -   [新增] 组件picker的mode属性为region的检测(App和H5未实现region) -->
-   【重要】 使用[全兼容官方 picker mode=region 城市选择器](https://ext.dcloud.net.cn/plugin?id=1536) v1.0.6（2020-06-16）替换 `<picker mode="region"></picker>`
-   [新增] 对We UI组件的检测，并给出解决方案
-   [新增] 未定义函数的处理(增加空函数及console提示)
-   [新增] 当css里面含position:fixed且top:0，在H5平台对top增加header的高度
-   [新增] 使用vue-cli模式时，输入路径后面会增加vue-cli标识，以便与hBuilderX模式区分
-   [新增] 创建onLoad的副本refreshPage3389()，接管所有onLoad的调用(解决函数内直接调用onLoad而报错的问题)
-   ……等等一些微小的工作
-   
### v1.0.7(20201024)
-   更新miniprogram-to-uniapp版本，修复转换出来的uniapp项目缺少App.vue文件的bug
-   
### v1.0.1(20200831)
-   对非小程序项目进行二次判断

### v1.0.0(20200829)
-   基于项目[miniprogram-to-uniapp](https://github.com/zhangdaren/miniprogram-to-uniapp)创建HBuilder X插件


## LICENSE
This repo is released under the [MIT](http://opensource.org/licenses/MIT).
