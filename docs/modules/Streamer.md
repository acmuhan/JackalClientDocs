Streamer
主播模式
分类：Web
描述：防止直播过程中发生意外。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Streamer 是 JackalClient 的 Web 分类模块。启用后会围绕 主播模式 这一能力工作，核心行为是：防止直播过程中发生意外。

配置项
- Sync Bili Live Status：类型=布尔，默认=true
- Bili Live Area：类型=枚举，默认="Current"
- Param build：类型=数值，默认=1234L
- Update Cooldown (ms)：类型=数值，默认=8000L
- Async：类型=布尔，默认=true
- Param version：类型=文本，默认="1.0.0"
- Bili Live Platform：类型=枚举，默认="pc_link"
- Bili Live Area Custom Id：类型=数值，默认=701L
- Toggle Bili Live Status (PRO)：类型=布尔，默认=false
- Toggle LiveStream Module：类型=布尔，默认=true
- Bili Live Stream Key Output：类型=枚举，默认="Both"

历史更新
- 39. 为 Streamer 添加配置项：
- 3. 添加了 Streamer 模块的更多的过滤项。
- 6. 添加模块：Streamer，打开这个模块后会自动隐藏一些隐私内容

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
