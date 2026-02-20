Agent
AI代理
分类：Web
描述：使用一个简单的人工智能代理完成你的任务。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Agent 是 JackalClient 的 Web 分类模块。启用后会围绕 AI代理 这一能力工作，核心行为是：使用一个简单的人工智能代理完成你的任务。

配置项
- Output Real Ask：类型=布尔，默认=true
- Pause Task Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_NUMPAD0}}}
- Current Instruction：类型=枚举，默认="Run"
- MessageBox Confirm Timeout Enabled：类型=布尔，默认=true
- Max Allowed Asks：类型=数值，默认=100
- Command Confirmation：类型=枚举，默认="MessageBox"
- Allow Tool Preparation Missing：类型=布尔，默认=false
- File Confirmation：类型=枚举，默认="AI Basic Check"
- MessageBox Confirm Timeout (ms)：类型=数值，默认=60000L
- Max Allowed File Operations：类型=数值，默认=100
- Correct JSON Format：类型=布尔，默认=true
- Max Allowed Commands：类型=数值，默认=50
- Max Allowed Repeated Commands：类型=数值，默认=3
- MessageBox Confirm Timeout Operation：类型=枚举，默认="Cancel"

历史更新
无（HISTORY 中暂无明确记录）

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
