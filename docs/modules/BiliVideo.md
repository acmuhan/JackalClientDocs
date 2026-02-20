BiliVideo
B站视频
分类：Web
描述：查询并输出指定的B站视频的信息。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliVideo 是 JackalClient 的 Web 分类模块。启用后会围绕 B站视频 这一能力工作，核心行为是：查询并输出指定的B站视频的信息。

配置项
- Mode：类型=枚举，默认="Once"
- No Decrease Notification：类型=布尔，默认=false
- Auto Console：类型=布尔，默认=true
- Async：类型=布尔，默认=true
- User ID：类型=通用，默认=WORMWAKER_MID
- Query Cooldown (s)：类型=数值，默认=1L
- Video：类型=枚举，默认="Latest"
- Notify Prefix：类型=枚举，默认="Title"
- AID/BID/Link：类型=文本，默认=""
- Connect Timeout (s)：类型=数值，默认=4L
- Speak Changes：类型=布尔，默认=false
- Notify Mode：类型=枚举，默认="Chatter"

历史更新
- 22. /bilivideo 命令的参数现已支持完整链接。
- 23. 添加模块 BiliVideoCover，提取视频封面。
- 24. 添加模块 BiliVideo，输出视频各种信息。

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
