AutoTranslate
自动翻译
分类：Window
描述：自动翻译并展示目标窗口的文本。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoTranslate（自动翻译）会读取目标窗口中的文本，经过识别后按配置展示原文与译文。推荐先把触发模式设为周期并保持默认冷却，确认识别质量后再提高线程数和刷新频率。
配置项
- Async（异步）
 类型：布尔；默认：true
 说明：翻译与识别任务会并行调度。开启后界面更流畅；若你在调试文本时需要稳定复现顺序，可临时关闭。
- Target（目标）
 类型：枚举；默认："Foreground"
 说明：决定抓取文本的来源窗口。先用 `Foreground` 验证准确性，再切到 `PointAt` 或 `Screen` 做大范围识别。
 可选：Screen（屏幕）；Foreground（前端）；PointAt（指向）
- Screen Mode Exclude Client（屏幕模式排除客户端）
 类型：布尔；默认：true
 说明：在屏幕模式下跳过客户端自身窗口，避免把菜单/HUD文字再次识别并造成“自我翻译”。通常建议保持开启。
- Action（行为）
 类型：枚举；默认："Translate"
 说明：决定流程是“只识别”还是“识别并翻译”。排查识别质量时先用 `Recognize`，确认文本框选正常后再切回 `Translate`。
 可选：Translate（未收录）；Recognize（未收录）
- Source Language（源语言）
 类型：枚举；默认："English"
 说明：告知识别/翻译引擎输入语言，直接影响结果质量。语言不匹配时常见症状是乱码、漏词或分词错误。
 可选：English（英语）；Chinese（中文）
- Text Color（文本颜色）
 类型：枚举；默认："Rainbow"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Text Color (Pointed At)（文本颜色 (指向)）
 类型：枚举；默认："Green"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Translation Result Color（翻译结果颜色）
 类型：枚举；默认："Yellow"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Text Background Color（文本背景颜色）
 类型：枚举；默认："Red"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Text Background Color (Pointed At)（文本背景颜色 (指向)）
 类型：枚举；默认："Dark Green"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Translation Result Background Color（翻译结果背景颜色）
 类型：枚举；默认："Black"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Translation Max Thread Count（翻译最大线程数）
 类型：数值；默认：20
 说明：限制并行翻译线程上限。值越大吞吐越高但占用也更大；默认值适合多数机器，卡顿时先下调。
- Texts Pointed At（未收录）
 类型：枚举；默认："Raw"
 说明：指定鼠标指向文本时显示原文、译文或隐藏，用于减少光标附近遮挡。
 可选：Hidden（隐藏）；Raw（原始）；Result（结果）
- Show Texts（显示文本）
 类型：布尔；默认：true
 说明：总开关：关闭后只保留后台识别/翻译，不渲染可视文本。
- Text Background（文本背景）
 类型：布尔；默认：true
 说明：为识别文本绘制底板以提高可读性。画面复杂时建议开启。
- Text Background Opacity (0~1)（文本背景不透明度 (0~1)）
 类型：数值；默认：0.5f
 说明：控制文本底板透明度。数值越高越清晰但遮挡更明显。
- Text Background Opacity (Mouse Pointed At) (0~1)（文本背景不透明度 (鼠标指向) (0~1)）
 类型：数值；默认：0.5f
 说明：控制文本底板透明度。数值越高越清晰但遮挡更明显。
- Text Min Size（文本最小字号）
 类型：数值；默认：20
 说明：识别文本最小字号下限，防止远处小字不可读。
- Text Max Size（文本最大字号）
 类型：数值；默认：80
 说明：识别文本最大字号上限，防止近处文本过大遮挡。
- Translation Result Min Size（翻译结果最小字号）
 类型：数值；默认：30
 说明：译文最小字号下限，建议不低于原文最小字号。
- Translation Result Max Size（翻译结果最大字号）
 类型：数值；默认：100
 说明：译文最大字号上限，用于控制近距离大字溢出。
- Text Opacity (0~1)（文本不透明度 (0~1)）
 类型：数值；默认：0.8f
 说明：控制识别文本本体透明度。建议与背景透明度配合调整，优先保证可读。
- Recognize Min Confidence (0~100)（识别最小置信度 (0~100)）
 类型：数值；默认：80.0f
 说明：低于该置信度的识别结果会被丢弃。提高阈值可减少误识别；若漏字明显，可先从默认值小幅下调。
- Trigger Mode（触发模式）
 类型：枚举；默认："Periodic"
 说明：控制何时触发新一轮识别：周期触发更稳定，窗口变化触发更省资源，手动触发便于精准控制。
 可选：Periodic（周期性）；On Window Change（开启 窗口 Change）；Manual（手动）
- Merge Texts Into Groups（合并文本为组）
 类型：布尔；默认：true
 说明：把相邻文本框合并成语义块，减少碎片化字幕。字幕行分裂严重时建议开启。
- Merge Texts Vertical Gap Threshold（Merge Texts 纵向 Gap Threshold）
 类型：数值；默认：0.5f
 说明：控制竖向文本合并阈值，值越大越容易把上下行合并。出现“跨行串句”时应下调。
- Merge Texts Horizontal Gap Threshold（合并文本横向空隙阈值）
 类型：数值；默认：3.0f
 说明：控制横向合并阈值，值越大越容易把同一行分段拼接。词间粘连时应下调。
- Recognize Cooldown (ms)（识别冷却（毫秒））
 类型：数值；默认：3000L
 说明：两次自动识别的最小间隔。调小可提升实时性但CPU占用会上升；调大更省资源。
- Toggle Texts Hotkey（切换文本快捷键）
 类型：按键/复合；默认：{{"Keybind", {0}}}
 说明：对应即时控制按键。建议与常用软件错开，避免误触导致显示状态反复切换。
- Trigger Hotkey（触发快捷键）
 类型：按键/复合；默认：{{"Keybind", {0}}}
 说明：对应即时控制按键。建议与常用软件错开，避免误触导致显示状态反复切换。
- Re-merge Texts Hotkey（重新合并文本快捷键）
 类型：按键/复合；默认：{{"Keybind", {0}}}
 说明：对应即时控制按键。建议与常用软件错开，避免误触导致显示状态反复切换。
- Clear Hotkey（清除快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_CAPITAL}}}
 说明：对应即时控制按键。建议与常用软件错开，避免误触导致显示状态反复切换。
历史更新
- 49. 添加模块：AutoTranslate，自动识别文本并翻译展示。

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

