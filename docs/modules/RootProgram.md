RootProgram
根目录程序
分类：File
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
RootProgram（根目录程序）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Policy、Monitor Reaction。

配置项
- Policy（策略）
 类型：枚举；默认："Monitor"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Monitor ，确认稳定后再逐项切换比较效果。
 可选：Monitor（监视）；Prevention（预防）；Settle（定居）
- Monitor Reaction（监视反应）
 类型：枚举；默认："Notify Delete"
 说明：这是该模块的核心行为开关，不同选项对应不同执行策略。建议先保持默认 Notify Delete ，确认稳定后再逐项切换比较效果。
 可选：Notify（通知）；Delete（删除）；Notify Delete（通知删除）
- Prevention Format（预防格式）
 类型：枚举；默认："Both"
 说明：这是选项型配置。默认值 Both 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：.exe（未收录）；.com（未收录）；Both（两者）
- Settle Program（定居程序）
 类型：枚举；默认："Cmd"
 说明：这是选项型配置。默认值 Cmd 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Cmd（未收录）；Client（客户端）；PowerShell（未收录）；Custom（自定义）
- Settle Format（定居格式）
 类型：枚举；默认：".exe"
 说明：这是选项型配置。默认值 .exe 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：.exe（未收录）；.com（未收录）
- Settle Custom Source Path（自定义定居源路径）
 类型：文本；默认：""
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
历史更新
- 30. 修复模块 RootProgram 通知里的一个字符串类型错误。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [FileManager (文件管理器)](./FileManager.md)
- [Everything (Everything)](./Everything.md)
- [FileDelete (文件删除)](./FileDelete.md)
- [FileCreate (文件创建)](./FileCreate.md)
- [FileMonitor (文件监视)](./FileMonitor.md)
- [FolderClear (目录清空)](./FolderClear.md)
- [TempClear (临时清空)](./TempClear.md)
- [RecyclerClear (回收站清空)](./RecyclerClear.md)

相关资料
无

