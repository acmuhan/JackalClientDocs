BiliFeed
B站推荐
分类：Web
描述：从B站获取一些推荐视频。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliFeed 是 JackalClient 的 Web 分类模块。启用后会围绕 B站推荐 这一能力工作，核心行为是：从B站获取一些推荐视频。

配置项
- Connect Timeout (s)：类型=数值，默认=5L
- Style：类型=枚举，默认="Simple"
- Async：类型=布尔，默认=true
- Limit：类型=数值，默认=100U
- Auto Console：类型=布尔，默认=true

历史更新
- 17. 添加新模块：Bili Feed，给出B站视频推荐。

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
