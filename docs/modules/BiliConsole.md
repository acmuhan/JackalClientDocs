BiliConsole
B站控制台
分类：Web
描述：一个实用的交互式B站控制台。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliConsole 是 JackalClient 的 Web 分类模块。启用后会围绕 B站控制台 这一能力工作，核心行为是：一个实用的交互式B站控制台。

配置项
- Update Cooldown (ms)：类型=数值，默认=180000L
- User Medal Wall Y：类型=数值，默认=3
- Draw Periodically：类型=布尔，默认=false
- Draw Cooldown (ms)：类型=数值，默认=500L
- Show User Favorite Folders：类型=布尔，默认=true
- Show User Space Notice：类型=布尔，默认=true
- Update Periodically：类型=布尔，默认=false
- Single Coin Quantity：类型=数值，默认=2U
- User Medal Wall Display：类型=布尔，默认=true
- Show User Coin Videos：类型=布尔，默认=true
- Show User Like Videos：类型=布尔，默认=true
- Use Chinese Number Format：类型=布尔，默认=true
- Like When Coin：类型=布尔，默认=true
- Debug Output：类型=布尔，默认=false
- Show User Masterpieces：类型=布尔，默认=true
- Show User Top Video：类型=布尔，默认=true
- Auto Console：类型=布尔，默认=true
- User Medal Wall X：类型=数值，默认=110

历史更新
- 15. 添加新模块：Bili Settings。表面上看是B站设定，其实按一下就可以扫码登录。Bili Notifier, Bili Console等模块会用到这里的 Cookies 等信息。
- 17. 添加新模块：Bili Console，B站交互式控制台，工程量巨大的一个模块。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)

相关资料
无
