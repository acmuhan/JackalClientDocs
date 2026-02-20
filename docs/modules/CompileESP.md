CompileESP
编译透视
[PRO]
分类：Process
描述：监控编译器进程并通知编译开始/结束。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
CompileESP（编译透视）用于监控编译器进程并通知编译开始/结束。
适合进程观测、控制与排障场景。
初次使用可优先调整：HUD、Hide HUD When Menu On、HUD Main Text。

配置项
- Show PID（显示进程ID）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show Command Line（显示命令行）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Show Duration（显示耗时）
 类型：布尔；默认：true
 说明：用于控制检测/刷新/动画节奏。默认值 true 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Arraylist Extra Info（模块列表额外信息）
 类型：枚举；默认："Type"
 说明：这是选项型配置。默认值 Type 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Type（类型）；Tool（工具）；Target File（目标文件）；Type File（类型 文件）
- HUD（是否显示HUD。）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：false
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- HUD Main Text（HUD主文本）
 类型：文本；默认："Compiling..."
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- HUD Subtext（HUD副文本）
 类型：枚举；默认："Type + Duration"
 说明：这是选项型配置。默认值 Type Duration + 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Off（关闭）；Type（类型）；Tool（工具）；Duration（时长）；Type Duration（类型 时长）；Type Tool Duration（类型 工具 时长）
- HUD Show Task Count（HUD显示任务数量）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- HUD X Rate（HUD 横坐标比例）
 类型：数值；默认：0.5f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.5f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- HUD Y Rate（HUD 纵坐标比例）
 类型：数值；默认：0.56f
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.56f 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- HUD Text Font Size（HUD 文本字号）
 类型：数值；默认：24
 说明：用于控制文本可读性。默认字号 24 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Text Gap（HUD文本间隔）
 类型：数值；默认：8
 说明：用于细调显示样式和间距。默认值 8 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Text Line Gap（HUD文本行间距）
 类型：数值；默认：3
 说明：用于细调显示样式和间距。默认值 3 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Padding（HUD内边距）
 类型：数值；默认：14
 说明：用于细调显示样式和间距。默认值 14 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Extra Height（HUD额外高度）
 类型：数值；默认：12
 说明：用于细调显示样式和间距。默认值 12 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Opacity (0~1)（HUD 不透明度）
 类型：数值；默认：0.92f
 说明：用于控制透明度。默认值 0.92f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- HUD Text Color（HUD文本颜色）
 类型：枚举；默认："White"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Subtext Color（HUD副文本颜色）
 类型：枚举；默认："Aqua"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Background（HUD背景）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- HUD Background Color（HUD 背景颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；Transparent（透明）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Background Opacity (0~1)（HUD 背景不透明度 (0~1)）
 类型：数值；默认：0.35f
 说明：用于控制透明度。默认值 0.35f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- HUD Background Roundness（HUD背景圆角度）
 类型：数值；默认：0.3f
 说明：用于细调显示样式和间距。默认值 0.3f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Loading Radius（HUD加载动画半径）
 类型：数值；默认：18.0f
 说明：用于细调显示样式和间距。默认值 18.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Loading Thickness（HUD加载动画粗细）
 类型：数值；默认：5.0f
 说明：用于细调显示样式和间距。默认值 5.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- HUD Loading Period (ms)（HUD加载动画周期 (毫秒)）
 类型：数值；默认：1800L
 说明：用于控制检测/刷新/动画节奏。默认值 1800L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- HUD Loading Color 1（HUD加载动画颜色1）
 类型：枚举；默认："Aqua"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Loading Color 2（HUD加载动画颜色2）
 类型：枚举；默认："Sky Blue"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Fade In Duration (ms)（HUD淡入时长 (毫秒)）
 类型：数值；默认：2000L
 说明：用于控制检测/刷新/动画节奏。默认值 2000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- HUD Fade Out Duration (ms)（HUD淡出时长 (毫秒)）
 类型：数值；默认：1000L
 说明：用于控制检测/刷新/动画节奏。默认值 1000L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Compiler Process Blacklist Enabled（编译器进程黑名单是否启用）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Compiler Process Blacklist (Regex Sep With Semicolon)（编译器进程黑名单（用分号分隔的正则表达式））
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Compiler Process Whitelist (Regex Sep With Semicolon)（编译器进程扩展列表（用分号分隔的正则表达式））
 类型：文本；默认：""
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：300L
 说明：用于控制检测/刷新/动画节奏。默认值 300L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
历史更新
- 34. 【PRO】添加 CompileESP 模块：监控常见编译器进程（Java / C / C++，支持 MSVC/GCC/Clang），在编译开始和结束时发送通知。
- 35. 【PRO】为 CompileESP 添加可配置项：开始/结束通知模式、PID/命令行/耗时显示、编译器进程白名单/黑名单、检查间隔。以及各种HUD配置项。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [Anti360Ad (反数字广告)](./Anti360Ad.md)
- [Kill360AdProc (杀数字广告进程)](./Kill360AdProc.md)
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)

相关资料
无

