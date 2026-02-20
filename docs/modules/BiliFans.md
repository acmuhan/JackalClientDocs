BiliFans
B站粉丝
分类：Web
描述：监控B站粉丝并发送通知。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliFans 是 JackalClient 的 Web 分类模块。启用后会围绕 B站粉丝 这一能力工作，核心行为是：监控B站粉丝并发送通知。

配置项
- Pause Duration (s)：类型=数值，默认=30L
- Notify Fans Increase：类型=布尔，默认=true
- Fans Change Event：类型=枚举，默认="Sound"
- HUD Color：类型=枚举，默认="Colorful"
- HUD Line Gap：类型=数值，默认=5
- Hide HUD When Menu On：类型=布尔，默认=true
- Notify Fans Decrease：类型=布尔，默认=true
- HUD Font Size：类型=数值，默认=30
- Connect Timeout (s)：类型=数值，默认=5L
- HUD：类型=布尔，默认=false
- HUD Opacity (0~1)：类型=数值，默认=0.8f
- HUD User Index (Sep With Semicolon)：类型=文本，默认=""
- HUD Format：类型=枚举，默认="Fans: Number"
- Action On Failure：类型=枚举，默认="Pause Temporarily"
- Async：类型=布尔，默认=true
- Threshold Max：类型=数值，默认=16U
- Show Fans Nickname (PRO)：类型=枚举，默认="Off"
- Notify Mode：类型=枚举，默认="Notify"
- HUD X Rate：类型=数值，默认=0.8f
- Custom Fans Decrease Sound：类型=文本，默认="pling_low.wav"
- User IDs (Sep With Semicolon)：类型=通用，默认=WORMWAKER_MID
- Update Cooldown (s)：类型=数值，默认=60L
- Custom Fans Decrease Command：类型=文本，默认=""
- HUD Y Rate：类型=数值，默认=0.75f
- Custom Fans Increase Command：类型=文本，默认=""
- Custom Fans Increase Sound：类型=文本，默认="levelup.wav"

历史更新
- 18. 修改 Bili Fans 使之可以通知客户端退出期间的粉丝变化。
- 15. 为 Bili Fans 添加新配置：
- 8. 添加模块： Bili Fans，监控B站粉丝数量，如果有变化会触发通知。

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
