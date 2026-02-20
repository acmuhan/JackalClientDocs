TcpKiller
TCP杀手
分类：Web
描述：断开指定进程的某些TCP连接。

需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TcpKiller 是 JackalClient 的 Web 分类模块。启用后会围绕 TCP杀手 这一能力工作，核心行为是：断开指定进程的某些TCP连接。

配置项
- IP Blacklist (Sep With Semicolon)：类型=文本，默认=""
- Ports Blacklist (e.g. 4-10,80)：类型=文本，默认=""
- IP Type：类型=枚举，默认="Remote"
- Process Id (Zero For Any)：类型=数值，默认=0
- Exclude LAN IP：类型=布尔，默认=true
- Mode：类型=枚举，默认="Once"
- Filter Ports：类型=布尔，默认=true
- Ports Whitelist (e.g. 4-10,80)：类型=文本，默认="80,443"
- Port Type：类型=枚举，默认="Remote"
- Keep Mode Cooldown (ms)：类型=数值，默认=200U
- IP Whitelist (Sep With Semicolon)：类型=文本，默认=""
- Notify Mode：类型=枚举，默认="Notify"
- Filter Processes：类型=布尔，默认=false
- Filter IPs：类型=布尔，默认=false
- Max Disconnection Count：类型=数值，默认=65535
- Notify：类型=枚举，默认="Smart"
- Process Name (Empty For Any)：类型=文本，默认=""

历史更新
- 4. 添加新模块：Tcp Killer，自动终止指定进程的 TCP 连接。

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
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无
