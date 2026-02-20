ConsoleESP
控制台透视
分类：Window
描述：监控任意应用程序的控制台内容。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ConsoleESP（控制台透视）用于监控控制台窗口创建、销毁与内容变化，并按模式通知。建议先设定黑名单与目标模式，控制提示噪声。
配置项
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：500U
 说明：控制控制台窗口扫描间隔。窗口变动频繁时可适当降低。
- Monitor Console Created（监视 控制台 已新建）
 类型：布尔；默认：true
 说明：监控新建控制台窗口事件。
- Monitor Console Destroyed（监视 控制台 Destroyed）
 类型：布尔；默认：true
 说明：监控控制台窗口销毁事件。
- Monitor Console Content（监视 控制台 内容）
 类型：布尔；默认：true
 说明：用于控制结果反馈方式。调试阶段建议开启，日常使用可按需要关闭。
- Process Blacklist (Sep With Semicolon)（进程 黑名单 (Sep With Semicolon)）
 类型：文本；默认："cmd.exe;git.exe;tesseract.exe;MSBuild.exe;JackalClient.exe;AppProvisioningPlugin.exe;clash-core-service.exe;postgres.exe ...
 说明：不监听的进程列表，用于排除噪声控制台。
- Notify Mode (Created/Destroyed)（通知 模式 (已新建/Destroyed)）
 类型：枚举；默认："Console Output"
 说明：控制创建/销毁事件的提示渠道。
 可选：Off（关闭）；Console Output（控制台输出）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；Speak（讲述）
- Notify Mode (Content)（通知 模式 (内容)）
 类型：枚举；默认："Console Output"
 说明：控制抓取到内容后的提示渠道。
 可选：Off（关闭）；Console Output（控制台输出）；File Output（文件输出）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）；Speak（讲述）
- Actionbar Color (Created)（行为栏 颜色 (已新建)）
 类型：枚举；默认："Dark Green"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Actionbar Color (Destroyed)（行为栏 颜色 (Destroyed)）
 类型：枚举；默认："Red"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Actionbar Color (Content)（行为栏 颜色 (内容)）
 类型：枚举；默认："Colorful"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Chatter Color (Created)（弹幕 颜色 (已新建)）
 类型：枚举；默认："Dark Green"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Chatter Color (Destroyed)（弹幕 颜色 (Destroyed)）
 类型：枚举；默认："Red"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Chatter Color (Content)（弹幕 颜色 (内容)）
 类型：枚举；默认："Gray"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Title Color (Created)（标题 颜色 (已新建)）
 类型：枚举；默认："Dark Green"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Title Color (Destroyed)（标题 颜色 (Destroyed)）
 类型：枚举；默认："Red"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Title Color (Content)（标题 颜色 (内容)）
 类型：枚举；默认："Gray"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Target Mode (Content)（目标 模式 (内容)）
 类型：枚举；默认："Single"
 说明：内容抓取目标模式：全部或单进程。
 可选：Single（单个）；All（所有）
- Target Single Process (Content)（目标 单个 进程 (内容)）
 类型：枚举；默认：""
 说明：当内容模式为单进程时，指定目标进程名。
历史更新
- 20. 现在不允许 Console ESP 监视自己的控制台，防止客户端卡死。
- 5. 添加新模块：ConsoleESP（控制台透视）

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

