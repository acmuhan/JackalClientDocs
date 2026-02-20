SecurityESP
安全透视
分类：Process
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
SecurityESP（安全透视）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：HUD Font Size、HUD Line Gap。

配置项
- Hide When Menu On（菜单打开时不显示）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Give Way to Mouse（给鼠标让道）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Show Description When Mouse Hovering（在鼠标悬停时显示描述）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Background（背景）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Round Corners（背景圆角）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Roundness（背景圆滑程度）
 类型：数值；默认：0.2f
 说明：用于细调显示样式和间距。默认值 0.2f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Background Opacity (0~1)（背景不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：用于控制透明度。默认值 0.5f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Background Shadow（背景阴影）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Background Shadow Thickness（背景阴影厚度）
 类型：数值；默认：26.0f
 说明：用于细调显示样式和间距。默认值 26.0f 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- Background Shadow Opacity (0~1)（背景阴影不透明度 (0~1)）
 类型：数值；默认：0.45f
 说明：用于控制透明度。默认值 0.45f 兼顾可见性和遮挡；如果你觉得挡视线可小幅下调，若看不清可小幅上调。
- Background Color（背景颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：Flow（流动）；Transparent（透明）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Background Shadow Color（背景阴影颜色）
 类型：枚举；默认："Black"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Title Color（标题颜色）
 类型：枚举；默认："Red"
 说明：用于选择结果反馈方式。默认值 Red 适合大多数场景；若你不想打扰可改为更安静的输出方式。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Malware Text Color（恶意软件文本颜色）
 类型：枚举；默认："Red"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Antivirus Text Color（杀毒软件文本颜色）
 类型：枚举；默认："Gold"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Description Text Color（描述文本颜色）
 类型：枚举；默认："Aqua"
 说明：用于控制视觉配色。建议先选对比度高的配色保证可读性；若是动态颜色，注意在复杂背景下的辨识度。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- HUD Font Size（HUD 字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- HUD Line Gap（HUD 行距）
 类型：数值；默认：5
 说明：用于细调显示样式和间距。默认值 5 通常是平衡视觉效果与紧凑度的设置，建议小步调整并实时观察。
- X Rate（横坐标比例）
 类型：数值；默认：0.8
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.8 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
- Mid Y Rate（中心纵坐标比例）
 类型：数值；默认：0.5
 说明：用于控制界面元素在屏幕中的相对位置。默认值 0.5 一般是作者调过的稳定布局；建议每次只改一个轴，避免元素跑出可视区域。
历史更新
- 40. 为 ClipboardESP / SecurityESP 添加众多配置项，整改视觉，可以高度定制。支持 HudEditor 拖曳。添加为鼠标让位。
- 23. 为 Download HUD, Chat Bar, Clipboard ESP, Security ESP, Letter Graph 添加 HUD Editor 拖曳。
- 12. 为 Clipboard ESP, Security ESP 添加自定义位置。

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

