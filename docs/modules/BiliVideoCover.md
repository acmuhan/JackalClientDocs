BiliVideoCover
B站视频封面
分类：Web
描述：解析并提取指定的B站视频的封面。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliVideoCover 是 JackalClient 的 Web 分类模块。启用后会围绕 B站视频封面 这一能力工作，核心行为是：解析并提取指定的B站视频的封面。

配置项
- Keep：类型=布尔，默认=false
- Mode：类型=枚举，默认="Clipboard Forward"
- Async：类型=布尔，默认=true

历史更新
- 23. 添加模块 BiliVideoCover，提取视频封面。

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
