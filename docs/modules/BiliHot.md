BiliHot
B站热搜
分类：Web
描述：显示B站热搜。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliHot 是 JackalClient 的 Web 分类模块。启用后会围绕 B站热搜 这一能力工作，核心行为是：显示B站热搜。

配置项
- Interface：类型=枚举，默认="Standard"
- Auto Console：类型=布尔，默认=true
- Async：类型=布尔，默认=true
- Show Heat Score (Standard)：类型=布尔，默认=true
- Show Top (Mobile)：类型=布尔，默认=true
- Limit：类型=数值，默认=20U
- Connect Timeout (s)：类型=数值，默认=5L

历史更新
- 10. 添加模块：Bili Hot，显示指定数量的B站热搜。

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
