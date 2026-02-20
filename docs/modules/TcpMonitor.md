TcpMonitor
TCP监视
分类：Web
描述：监视指定进程的TCP连接的变化。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TcpMonitor 是 JackalClient 的 Web 分类模块。启用后会围绕 TCP监视 这一能力工作，核心行为是：监视指定进程的TCP连接的变化。

配置项
- IP Blacklist (Sep With Semicolon)：类型=文本，默认=""
- Process Id Whitelist (Zero For Any)：类型=文本，默认="0"
- Query External IP Position：类型=布尔，默认=false
- Process Name Whitelist (Empty For Any)：类型=文本，默认=""
- Ports Blacklist (e.g. 4-10,80)：类型=文本，默认=""
- IP Type：类型=枚举，默认="Remote"
- Exclude LAN IP：类型=布尔，默认=true
- Chatter Color (New Connection)：类型=枚举，默认="Gold"
- Chatter Type：类型=枚举，默认="Random"
- Process Name Blacklist (Empty For Disabled)：类型=文本，默认="JackalClient.exe"
- Filter Ports：类型=布尔，默认=false
- Check Cooldown (ms)：类型=数值，默认=1000L
- Ports Whitelist (e.g. 4-10,80)：类型=文本，默认="80,443"
- Port Type：类型=枚举，默认="Remote"
- IP Whitelist (Sep With Semicolon)：类型=文本，默认=""
- Filter IPs：类型=布尔，默认=false
- Process Id Blacklist (Zero For Disabled)：类型=文本，默认="0"
- Notify Mode：类型=枚举，默认="Chatter"
- Filter Processes：类型=布尔，默认=true
- Show IP Addresses：类型=布尔，默认=true
- Chatter Color (Closed Connection)：类型=枚举，默认="Purple"

历史更新
- 69. 新增模块：Tcp Monitor

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
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无
