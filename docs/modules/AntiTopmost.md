AntiTopmost
反置顶
分类：Window
描述：抵御其他置顶窗口。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiTopmost（反置顶）建议先按默认配置运行一段时间，确认对目标窗口/系统行为的影响后，再从关键开关项开始逐步微调。
配置项
- Only Check Foreground（只检查前端）
 类型：布尔；默认：false
 说明：仅处理前台窗口置顶问题，副作用更小。
- Auto Untopmost（自动取消置顶）
 类型：布尔；默认：true
 说明：该开关会直接改变系统或窗口行为。建议逐项启用并观察，避免一次开启过多导致排查困难。
- Auto Bottom（自动置底）
 类型：布尔；默认：true
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Violence Policy（武力策略）
 类型：枚举；默认："Off"
 说明：该项决定执行策略。建议先用默认策略验证稳定性，再逐个切换比较效果与副作用。
 可选：Off（关闭）；Close Window（关闭窗口）；Kill Process（结束进程）
- Off（关闭）
 类型：文本；默认："Close Window", "Kill Process"
 说明：该项会影响模块行为，建议基于默认值小步调整。
- Notify Kill（通知击杀）
 类型：布尔；默认：true
 说明：用于控制结果反馈方式。调试阶段建议开启，日常使用可按需要关闭。
历史更新
无（HISTORY 中暂无明确记录）

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

