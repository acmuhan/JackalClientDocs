IPHorror
IP恐惧
分类：Web
描述：根据提供的IP地址组装一个吓人的段落

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
IPHorror 是 JackalClient 的 Web 分类模块。启用后会围绕 IP恐惧 这一能力工作，核心行为是：根据提供的IP地址组装一个吓人的段落

配置项
- Copy to Clipboard：类型=布尔，默认=true
- Auto Console：类型=布尔，默认=true
- Async：类型=布尔，默认=true
- Log Destination Info：类型=布尔，默认=true
- Method：类型=枚举，默认="V1"
- Target IP Address：类型=文本，默认="127.0.0.1"

历史更新
- 24. 修正 IPHorror 的外国判定。
- 20. 为 IP Address, IP Horror 和 Weather 添加 Auto Console 选项。
- 27. 添加几个实验性模块：Totem, AutoTotem, QQInspect, IPHorror,

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
