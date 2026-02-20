PrivateWindow
隐私窗口
分类：Window
描述：防止一些私人窗口被截屏或者录屏。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
PrivateWindow 是 JackalClient 的 Window 分类模块。启用后会围绕 隐私窗口 这一能力工作，核心行为是：防止一些私人窗口被截屏或者录屏。

配置项
- WeChat New：类型=布尔，默认=true
- QQ NT：类型=布尔，默认=true
- Mode：类型=枚举，默认="Invisible (>= Win10
- Async：类型=布尔，默认=true
- Keep Checking Cooldown (ms)：类型=数值，默认=1000U
- Edge：类型=布尔，默认=true
- Steam：类型=布尔，默认=true
- Bilibili Desktop：类型=布尔，默认=true
- Edge Overlay Mode：类型=布尔，默认=false
- Record Window When Failed：类型=布尔，默认=true
- Policy：类型=枚举，默认="Simple Check"
- WeChat：类型=布尔，默认=true
- Clear Overlay Windows When Disabling：类型=布尔，默认=false
- Notify Each Window Affinity Result：类型=布尔，默认=true

历史更新
- 45. 为 PrivateWindow 添加配置：
- 8. 添加模块：PrivateWindow，可以将一些隐私窗口从捕获中去除。将会进行注入，所以如果失败，可以考虑提权。
- 21. 修复 PrivateWindow 关闭时的迭代器崩溃问题。

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
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无
