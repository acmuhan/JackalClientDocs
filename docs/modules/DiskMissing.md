DiskMissing
磁盘丢失
分类：File
描述：制造磁盘丢失的假象。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
DiskMissing（磁盘丢失）用于制造磁盘丢失的假象。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Signal Cooldown (ms)。

配置项
- Keep（保持）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Signal Cooldown (ms)（发送信号冷却 (毫秒)）
 类型：数值；默认：80L
 说明：用于控制检测/刷新/动画节奏。默认值 80L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
- Missing Drives（丢失的磁盘）
 类型：枚举；默认："System Drive"
 说明：这是选项型配置。默认值 System Drive 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：System Drive（系统盘）；All（所有）；Custom（自定义）
- Custom Missing Drives（自定义丢失的磁盘）
 类型：文本；默认："D;E"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
历史更新
- 21. 添加模块：DiskMissing，可以制造磁盘消失的假象。

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

