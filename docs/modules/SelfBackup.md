SelfBackup
自我备份
分类：File
描述：把所有资产备份到backup文件夹。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
SelfBackup 是 JackalClient 的 File 分类模块。启用后会围绕 自我备份 这一能力工作，核心行为是：把所有资产备份到backup文件夹。

配置项
- Async：类型=布尔，默认=true

历史更新
- 18. 修复了 Self Backup 错误更新备份列表的问题。
- 19. 为 Self Backup 和 Self Restore 添加配置项：Async （是否异步操作）.

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
