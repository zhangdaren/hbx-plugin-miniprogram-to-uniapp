# [HBuilder X 插件] 转换各种小程序为 uni-app 项目

转换微信、QQ、头条/抖音、支付宝/钉钉和百度等小程序转换到 uni-app 项目

遇到问题，如需紧急联系，请添加QQ群进行反馈，长期在线！社区不太经常上。

<font color="red" size="4" face="bold">**不支持转换 uni-app 发布的小程序项目！！！**</font>

<font color="red" size="4" face="bold">**不支持转换 uni-app 发布的小程序项目！！！**</font>

<font color="red" size="4" face="bold">**不支持转换 uni-app 发布的小程序项目！！！**</font>

## 使用方法

打开插件链接：[HBuilder X 插件 miniprogram-to-uniapp](https://ext.dcloud.net.cn/plugin?id=2656)，点击右侧绿色按钮“使用HBuilderX导入插件”。

在HBuilder X左侧项目管理器里，在小程序项目上右键，点击弹出菜单里面的 “miniprogram to uniapp v2”，然后等待插件运行结束即可。

![点击菜单](https://zhangdaren.gitee.io/articles/img/hbx_wtu_01.png)

![等待转换完成](https://zhangdaren.gitee.io/articles/img/hbx_wtu_02.png)

PS：如果转换失败或出现问题，请反馈到作者或QQ群，会及时回复的。也可使用[wtu npm版本](https://github.com/zhangdaren/miniprogram-to-uniapp)(工具优先更新npm版本)

## 使用指南

使用时遇到问题，请仔细阅读： [miniprogram to uniapp 工具答疑](https://www.yuque.com/docs/share/0166a691-6877-4138-818b-2a5ef77216b7)

对于使用有疑问或建议，欢迎加入 QQ 群进行指导和反馈。
   
交流 QQ 群：   
1 群：780359397 <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=6cccd111e447ed70ee0c17672a452bf71e7e62cfa6b427bbd746df2d32297b64"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="小程序转uni-app讨论群" title="小程序转uni-app讨论群"></a> (已满)

2 群：361784059 <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=vpt4K1r6Witx29ZsKcb_tqvinhcZzVhK&jump_from=webapi"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="小程序转uniapp研究二群" title="小程序转uniapp研究二群"></a>(已满)

3 群：603659851 <a target="_blank" href="https://jq.qq.com/?_wv=1027&k=3GSqQMIB"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="小程序转uniapp研究三群" title="小程序转uniapp研究三群"></a>

### 1.小程序转换支持度

| 小程序       | 转换支持 | 转换文档 |
| :----------- | :------: | :------: |
| 微信小程序   |    ✔     |          |
| QQ 小程序    |    ✔     |          |
| 头条小程序   |    ✔     |          |
| 支付宝小程序 |    ✔     |          |
| 百度小程序   |    ✔     |          |

### 2.第三方组件支持度

| 组件                     | 转换支持 | 转换文档 |
| :----------------------- | :------: | :------: |
| mode 为 region 的 picker |    ✔     |          |
| wxParse                  |    ✔     |          |
| We-UI                    |  开发中  |          |
| Vant                     |    ✖️    |          |

### 3.小程序功能转换完成度

| 功能                                                         | 转换支持 | 转换文档 |
| :----------------------------------------------------------- | :------: | -------- |
| 微信小程序云开发                                             |    ✔     |          |
| TS 小程序                                                    |    ✔     |          |
| include 标签解析                                             |    ✔     |          |
| template 标签解析                                            |    ✔     |          |
| Behavior 解析                                                |    ✔     |          |
| setData 函数(polyfill)                                       |    ✔     |          |
| 代码反混淆                                                   |    ✔     |          |
| 关键字语义化(如 var t = this; => var that = this;)           |    ✔     |          |
| 输出代码自动格式化(与 HBuilderX 格式化一致)                  |    ✔     |          |
| 对 template 和 js 里面**未声明的变量**进行声明               |    ✔     |          |
| 函数与变量名重名处理                                         |    ✔     |          |
| 函数与 prop 属性重名处理                                     |    ✔     |          |
| 变量名与 prop 属性重名处理                                   |    ✔     |          |
| 第三方组件的参数类型修复                                     |    ✔     |          |
| this.data.xxx 转换为 this.xxx                                |    ✔     |          |
| app.xxx 转换为 app.globalData.xxx                            |    ✔     |          |
| getApp().xxx 转换为 getApp().globalData.xxx                  |    ✔     |          |
| polyfill                                                     |    ✔     |          |
| 资源文件处理及路径修复                                       |    ✔     |          |
| js 系统关键字作为函数或变量名(如 default、switch、delete 等) |    ✔     |          |
| 以$开头的变量                                                |    ✔     |          |
| 动态绑定的函数`<input @input="test{{index+1}}">`             |    ✔     |          |
| 合并 wxs 文件                                                |    ✖️    |          |
| globalData 变量与函数重名处理                                |    ✖️    |          |
| globalData 未变量处理                                        |    ✖️    |          |

### 3.暂不支持的项目、组件和语法

| 功能                                                                       | 转换支持 | 转换文档 |
| :------------------------------------------------------------------------- | :------: | -------- |
| <font color="red" size="4" face="bold">使用 uniapp 发布的小程序项目</font> |    ✖️    |          |
| 使用 redux 开发的小程序(代表为：网易云信小程序 DEMO)                       |    ✖️    |          |
| 使用 wxpage 开发的小程序(https://github.com/tvfe/wxpage)                   |    ✖️    |          |
| 使用腾讯 omi 开发的小程序(https://github.com/Tencent/omi)                  |    ✖️    |          |
| 小程序抽象节点 componentGenerics                                           |    ✖️    |          |
| 组件间关系 relations                                                       |    ✖️    |          |
| component 里的 pageLifetimes 生命周期                                      |    ✖️    |          |
| echarts 组件                                                               |    ✖️    |          |

文档正在完善中，敬请期待~

## LICENSE
This repo is released under the [MIT](http://opensource.org/licenses/MIT).
