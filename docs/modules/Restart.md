Restart
重新启动
分类：Misc
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Restart 是 JackalClient 的 Misc 分类模块。启用后会围绕 重新启动 这一能力工作，核心行为是：暂无描述

配置项
- bind：类型=按键/复合，默认={{"Keybind", {VK_RMENU, 'R'}}}
- Run As User：类型=布尔，默认=false
- Generate Arguments：类型=布尔，默认=true

历史更新
- 41. 修复 AntiCapture 和 Black Capture 在打开后重新启动后没有重新生效的问题。
- 41. 现在客户端有 --shell 参数时，不仅开启独占模式，还将不创建窗口。如果需要窗口了，你需要重新启动客户端且不指定该参数。该模式下会避免运行任何需要客户端窗口的代码。
- 23. 略修改 RestartExplorer: 重启时添加参数：/loadsavedwindows

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
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

相关资料
无
