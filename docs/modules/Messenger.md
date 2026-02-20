Messenger
消息通信
分类：Window
描述：接收到指定窗口消息时通知。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Messenger 是 JackalClient 的 Window 分类模块。启用后会围绕 消息通信 这一能力工作，核心行为是：接收到指定窗口消息时通知。

配置项
- Notify Mode：类型=枚举，默认="Console Output"
- Whitelist (Sep With Semicolon)：类型=文本，默认=""
- Whitelist Enabled：类型=布尔，默认=false
- Blacklist (Sep With Semicolon)：类型=文本，默认="WM_NULL;WM_MOUSEFIRST;WM_NCHITTEST;WM_SETCURSOR;WM_GETTEXT;WM_WINDOWPOSCHANGING ...
- Show Parameter Details：类型=布尔，默认=true
- Blacklist Enabled：类型=布尔，默认=true

历史更新
- 24. 添加模块： Messenger，通知收到的特定窗口消息。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)

相关资料
无
