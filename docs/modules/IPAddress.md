IPAddress
IP地址
分类：Web
描述：查看本机IP地址及相关信息。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
IPAddress 是 JackalClient 的 Web 分类模块。启用后会围绕 IP地址 这一能力工作，核心行为是：查看本机IP地址及相关信息。

配置项
- AI Generated Description of IP Position：类型=布尔，默认=false
- IP Location Query Source：类型=枚举，默认="PearAPI"
- External IP Address Source URL：类型=枚举，默认=XorStringA("https:
- Output Local IP Details：类型=布尔，默认=true
- Connect Timeout (s)：类型=数值，默认=5L
- Location Cache Update Cooldown (ms)：类型=数值，默认=30000L
- Async：类型=布尔，默认=true
- Query External IP：类型=布尔，默认=true
- Query External IP Position：类型=布尔，默认=true
- Method：类型=枚举，默认="Curl"
- Use HTTPS When Query Position：类型=布尔，默认=true
- Output Verbose Connection Info：类型=布尔，默认=false
- Auto Console：类型=布尔，默认=true

历史更新
- 72. 为 IPAddress 添加配置：
- 20. 为 IP Address, IP Horror 和 Weather 添加 Auto Console 选项。
- 9. 添加模块：IPAddress，可以查看本机IP地址相关信息。

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
