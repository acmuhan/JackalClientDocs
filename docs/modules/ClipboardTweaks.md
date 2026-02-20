ClipboardTweaks
剪贴板功能
分类：Control
描述：一些剪贴板的实用功能。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ClipboardTweaks 是 JackalClient 的 Control 分类模块。启用后会围绕 剪贴板功能 这一能力工作，核心行为是：一些剪贴板的实用功能。

配置项
- Taboo Super Filter：类型=布尔，默认=false
- Cut Line Fixed Length：类型=数值，默认=12
- Remove Markdown：类型=布尔，默认=false
- Cut Line Random Length Max：类型=数值，默认=16
- Remove URL Arguments：类型=布尔，默认=true
- Remove URL：类型=布尔，默认=false
- Cut Line Extra Tail：类型=文本，默认="喵"
- Add Spaces Mode：类型=枚举，默认="Off"
- Character Obfuscation：类型=枚举，默认="Off"
- Remove Numbers：类型=布尔，默认=false
- Cut Line Random Length Min：类型=数值，默认=5
- Chinese Traditionalization：类型=布尔，默认=false
- AI Transformation：类型=布尔，默认=false
- Cut Line Mode：类型=枚举，默认="Off"
- Encryptor：类型=布尔，默认=false
- Punctuation Changes：类型=枚举，默认="Off"
- Letter Changes：类型=枚举，默认="Off"
- Notify：类型=布尔，默认=true
- AI Transformation Prompt：类型=文本，默认="请将下面的文本每个字符间加一个点后原样输出，不要添加任何的前缀后缀以及说明文字："
- Update Cooldown (ms)：类型=数值，默认=500L

历史更新
- 3. 为 ClipboardTweaks 添加新的配置：
- 2. 为 Clipboard Tweaks 模块添加 Taboo Super Filter 选项，用于屏蔽违禁词。（仍在测试）
- 8. 添加模块 Clipboard Tweaks，用于对剪贴板文本进行操作。

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
