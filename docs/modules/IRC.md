IRC
聊天室
分类：Web
描述：一个简单的在线聊天系统。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
IRC 是 JackalClient 的 Web 分类模块。启用后会围绕 聊天室 这一能力工作，核心行为是：一个简单的在线聊天系统。

配置项
- Message Length Limit Via GET：类型=数值，默认=39
- Console Output：类型=布尔，默认=true
- Taboo Filter：类型=布尔，默认=false
- Quick Send Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, '0'}}}
- Auto Change Name When Name Missing：类型=布尔，默认=true
- Message Send Timeout (s)：类型=数值，默认=20
- Underline Pro User Messages：类型=布尔，默认=true
- Cancel Sending Repeated Message：类型=布尔，默认=true
- Blatant Send：类型=布尔，默认=false
- Fast Send With # Prefix Command：类型=布尔，默认=true
- Text Database Update Method：类型=枚举，默认="POST"
- Message Notify Type：类型=枚举，默认="Notify"
- Message Fetch Interval (ms)：类型=数值，默认=5000L
- Blocked User Names (Sep With Semicolon) (PRO)：类型=文本，默认=""
- Message Fetch Timeout (s)：类型=数值，默认=20
- Speak Max Length：类型=数值，默认=60
- Debug Output：类型=布尔，默认=false
- Cancel Sending When As Guest：类型=布尔，默认=true
- Notify My Mentions：类型=枚举，默认="Notify"
- Speak Message：类型=布尔，默认=true
- Old Messages Threshold (s)：类型=数值，默认=180
- Async While Getting Username：类型=布尔，默认=true
- Ignore Old Messages：类型=布尔，默认=true
- Quick Send Style：类型=枚举，默认="Input Box"

历史更新
无（HISTORY 中暂无明确记录）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无
