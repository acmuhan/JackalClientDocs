KeySound
按键音效
分类：Control
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
KeySound 是 JackalClient 的 Control 分类模块。启用后会围绕 按键音效 这一能力工作，核心行为是：暂无描述

配置项
- Category Lock Sound：类型=文本，默认=""
- Alloc Mode：类型=枚举，默认="All"
- Category Back Sound：类型=文本，默认=""
- Category Esc Sound：类型=文本，默认=""
- Category Right Click Sound：类型=文本，默认=""
- Category Num Sound：类型=文本，默认=""
- Recursive Selection in Folder：类型=布尔，默认=true
- Custom Mode Config File：类型=文本，默认="config/keyCustomSounds.ini"
- All Mode Sound：类型=文本，默认=""
- Sound Selection：类型=枚举，默认="Single File"
- Category Other Mouse Sound：类型=文本，默认=""
- Debug Notification：类型=枚举，默认="Off"
- Category FN Sound：类型=文本，默认=""
- Mouse All Mode Sound：类型=文本，默认=""
- Category Control Sound：类型=文本，默认=""
- Category Arrow Sound：类型=文本，默认=""
- Category Space Sound：类型=文本，默认=""
- Category Punct Sound：类型=文本，默认=""
- Category Letter Sound：类型=文本，默认=""
- Keyboard All Mode Sound：类型=文本，默认=""
- Detect Mode：类型=枚举，默认="Raw Input"
- Category Other Keyboard Sound：类型=文本，默认=""
- Category Enter Sound：类型=文本，默认=""
- Category Left Click Sound：类型=文本，默认=""

历史更新
- 1. 添加了 KeySound 缺少的 Category Space Sound 配置。
- 16. 添加模块：KeySound，为任意的键或者快捷键自定义不同的按键声音。
- 31. 修复了 KeySound 打开后原来的滚轮输入检测失效的bug。

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
