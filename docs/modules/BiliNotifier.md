BiliNotifier
B站通知
分类：Web
描述：向你发送B站的通知。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliNotifier 是 JackalClient 的 Web 分类模块。启用后会围绕 B站通知 这一能力工作，核心行为是：向你发送B站的通知。

配置项
- Show Reply Content：类型=枚举，默认="Chatter"
- PREVIOUS DATA：类型=文本，默认="{\"at\":0,\"chat\":0,\"coin\":0,\"danmu\":0,\"favorite\":0,\"like\":0,\"recv_li ...
- Mode：类型=枚举，默认="Notify"
- Query Cooldown (s)：类型=数值，默认=5L
- Off：类型=文本，默认="Notify", "Chatter", "Actionbar", "Title", "WinToast"
- Ignore Negative Changes：类型=布尔，默认=true
- Connect Timeout (s)：类型=数值，默认=4L
- Notify Danmaku：类型=布尔，默认=true
- Reply Content Max Length：类型=数值，默认=80U
- Notify Coins：类型=布尔，默认=true
- Notify Comments：类型=布尔，默认=true
- Async：类型=布尔，默认=true
- Notify Uploader Helper Messages：类型=布尔，默认=true
- Notify Chats：类型=布尔，默认=true
- Notify System Messages：类型=布尔，默认=true
- Notify Likes：类型=布尔，默认=true
- Notify Ats：类型=布尔，默认=true
- Notify Favorites：类型=布尔，默认=true

历史更新
- 31. 为 Bili Notifier 添加配置：
- 15. 添加新模块：Bili Settings。表面上看是B站设定，其实按一下就可以扫码登录。Bili Notifier, Bili Console等模块会用到这里的 Cookies 等信息。
- 16. 添加新模块：Bili Notifier，可以通知你B站的消息种类和数量。注意：需要先用 Bili Settings 登录才能使用。

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
