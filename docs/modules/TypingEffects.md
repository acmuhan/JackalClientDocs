TypingEffects
打字效果
分类：Control
描述：打字时展示一些特效。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TypingEffects 是 JackalClient 的 Control 分类模块。启用后会围绕 打字效果 这一能力工作，核心行为是：打字时展示一些特效。

配置项
- Area Indicator Color：类型=枚举，默认="Red"
- Caret Indicator Capture Scale：类型=数值，默认=4.0f
- Caret Indicator：类型=枚举，默认="Temp"
- Selected Text Indicator Translation Exclude Characters：类型=文本，默认="^#{}<>\\/*|"
- Selected Text Indicator Translation Max Length：类型=数值，默认=300
- Selected Text Indicator Size：类型=数值，默认=30
- Caret Indicator Opacity (0~1)：类型=数值，默认=0.8f
- Caret Indicator Arrow Style：类型=枚举，默认="Up"
- Caret Easing：类型=布尔，默认=true
- Caret Indicator Style：类型=枚举，默认="Capture"
- IME Indicator Size：类型=数值，默认=50
- Area Indicator Easing Speed (0~1)：类型=数值，默认=0.2f
- IME Indicator Temp Duration (ms)：类型=数值，默认=3000L
- Selected Text Indicator Temp Duration (ms)：类型=数值，默认=5000L
- Caret Indicator Temp Duration (ms)：类型=数值，默认=5000L
- Caret Particles Amount：类型=数值，默认=1.0f
- Selected Text Indicator Mode：类型=枚举，默认="Translation"
- Not As Debuggee：类型=布尔，默认=true
- IME Indicator：类型=枚举，默认="Temp"
- Area Indicator：类型=枚举，默认="Off"
- Caret Particles：类型=枚举，默认="Moving"
- Selected Text Indicator Opacity (0~1)：类型=数值，默认=0.75f
- Caret Particles Color Jitter：类型=数值，默认=0.2f
- Area Indicator Easing：类型=布尔，默认=true
- Caret Indicator Capture Rotation Speed：类型=数值，默认=4.0f
- Caret Particles Color：类型=枚举，默认="Rainbow"
- Caret Indicator Color：类型=枚举，默认="Rainbow"
- Caret Indicator Size：类型=数值，默认=40
- Caret Update Cooldown (ms)：类型=数值，默认=500L
- IME Indicator Style：类型=枚举，默认="1"
- Selected Text Indicator：类型=枚举，默认="Off"
- Selected Text Indicator Color：类型=枚举，默认="Blue"
- Caret Easing Speed (0~1)：类型=数值，默认=0.05f

历史更新
- 20. 修复 TypingEffects 显示的 % 占位符注入导致崩溃的问题。
- 20. 添加模块：Typing Effects，打字特效
- 22. 为 Speaker / Typing Effects 添加配置项：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

相关资料
无
