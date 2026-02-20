QuickCommand
快速命令
分类：Misc
描述：按快捷键打开输入框，输入后快速执行一些命令。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
QuickCommand 是 JackalClient 的 Misc 分类模块。启用后会围绕 快速命令 这一能力工作，核心行为是：按快捷键打开输入框，输入后快速执行一些命令。

配置项
- Trigger Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_OEM_3}}}
- Single Instance：类型=布尔，默认=true
- Input Method：类型=枚举，默认="Input Box"
- Async：类型=布尔，默认=true

历史更新
- 38. 修复 QuickCommand 单例模式下 Chat Box 创建一次后无法再次创建的问题；单例模式关闭时无限创建的问题。
- 27. 添加模块：Quick Command，快速命令。允许你按一个快捷键打开输入框输入命令后立即执行。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)
- [Encryptor (加密器)](./Encryptor.md)

相关资料
无
