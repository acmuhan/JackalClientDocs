AntiWebpage
反网页
分类：Web
描述：自动关闭不好的网页。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiWebpage 是 JackalClient 的 Web 分类模块。启用后会围绕 反网页 这一能力工作，核心行为是：自动关闭不好的网页。

配置项
- Title Keywords 1 Enabled：类型=布尔，默认=true
- Ctrl+W Internal Delay (ms)：类型=数值，默认=100
- Only On Browser：类型=布尔，默认=true
- Title Keywords Custom：类型=文本，默认=""
- Title Keywords 3：类型=文本，默认="page not found;404 not found;502 bad gateway"
- Title Keywords 3 Enabled：类型=布尔，默认=true
- Check Cooldown：类型=数值，默认=500U
- Title Keywords Custom Enabled：类型=布尔，默认=false
- Target Window：类型=枚举，默认="Foreground"
- Chatter Color：类型=文本，默认="255;203;0;230"
- Async：类型=布尔，默认=true
- Title Keywords 2：类型=文本，默认="博彩;新澳;荷官;超高赔率"
- Notify Mode：类型=枚举，默认="Notify"
- Title Keywords 1：类型=文本，默认="传奇;一刀;贪玩;霸主;鬼服;福利;0氪;免费送;打金服;上线即领"
- Operation：类型=枚举，默认="Close Page"
- Title Keywords 2 Enabled：类型=布尔，默认=true

历史更新
- 12. 添加模块：Anti Webpage，发现浏览器网页标题中有奇怪的关键词后，进行操作。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无
