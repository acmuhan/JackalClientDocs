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
PrivateWindow（隐私窗口）通过对特定窗口应用防捕获策略，减少隐私应用在录屏中的暴露。建议先使用默认策略和预设应用列表，确认稳定后再启用覆盖层与详细通知。
配置项
- Async（异步）
 类型：布尔；默认：true
 说明：异步处理目标窗口，减少批量窗口处理时的卡顿。
- Mode（模式）
 类型：枚举；默认："Invisible (>= Win10)"
 说明：选择窗口防捕获实现方式。Win10+ 推荐不可见模式；兼容性不足时可尝试覆盖层相关策略。
- Policy（策略）
 类型：枚举；默认："Simple Check"
 说明：决定何时以及如何重复应用防捕获。`Set Once` 占用最低，`Complete Check` 对动态窗口更稳。
 可选：Set Once（单次设置时间点）；Simple Check（简单检查）；Complete Check（完整检查）；Blatant Apply（暴力应用）
- Keep Checking Cooldown (ms)（持续检查冷却（毫秒））
 类型：数值；默认：1000U
 说明：周期检查间隔，仅在非 `Set Once` 策略下影响明显。窗口频繁重建时可适度降低。
- QQ NT（未收录）
 类型：布尔；默认：true
 说明：是否纳入该应用的预设窗口规则。若误伤正常窗口，可先关闭对应应用项。
- WeChat（微信）
 类型：布尔；默认：true
 说明：是否纳入该应用的预设窗口规则。若误伤正常窗口，可先关闭对应应用项。
- WeChat New（新版微信）
 类型：布尔；默认：true
 说明：是否纳入该应用的预设窗口规则。若误伤正常窗口，可先关闭对应应用项。
- Edge（未收录）
 类型：布尔；默认：true
 说明：是否纳入该应用的预设窗口规则。若误伤正常窗口，可先关闭对应应用项。
- Steam（Steam 游戏平台的窗口。）
 类型：布尔；默认：true
 说明：是否纳入该应用的预设窗口规则。若误伤正常窗口，可先关闭对应应用项。
- Bilibili Desktop（B站桌面客户端）
 类型：布尔；默认：true
 说明：是否纳入该应用的预设窗口规则。若误伤正常窗口，可先关闭对应应用项。
- Edge Overlay Mode（Edge 浏览器覆盖层模式）
 类型：布尔；默认：false
 说明：针对 Edge 类窗口启用覆盖层处理，普通模式无效时再开启。
- Clear Overlay Windows When Disabling（关闭时清空覆盖层窗口）
 类型：布尔；默认：false
 说明：关闭模块时主动清理覆盖层窗口，避免残留遮挡。
- Notify Each Window Affinity Result（逐窗口通知设置亲和结果）
 类型：布尔；默认：true
 说明：逐窗口输出设置结果，便于排查哪个窗口应用失败。日常使用可关闭减少提示。
- Record Window When Failed（失败时也记载窗口）
 类型：布尔；默认：true
 说明：即使失败也记录窗口，便于后续分析和补规则。
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

