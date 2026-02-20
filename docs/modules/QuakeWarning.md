QuakeWarning
地震预警
分类：Web
描述：地震来临时提供预警。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
QuakeWarning 是 JackalClient 的 Web 分类模块。启用后会围绕 地震预警 这一能力工作，核心行为是：地震来临时提供预警。

配置项
- Check Cooldown (ms)：类型=数值，默认=30000L
- Min Warning Magnitude：类型=数值，默认=0.0
- Async：类型=布尔，默认=true
- Warning Filter：类型=枚举，默认="Global"
- Clear Events When Disabled：类型=布尔，默认=true
- AI Location Validation：类型=布尔，默认=false
- Max Warning Event Age (hour)：类型=数值，默认=3.0
- Min Warning Intensity：类型=数值，默认=0.0
- Connect Timeout (s)：类型=数值，默认=10L
- Notify Mode：类型=枚举，默认="Title"
- Quake Query Source：类型=枚举，默认="Auto"

历史更新
- 32. 添加模块：Quake Warning，提供地震预警

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
