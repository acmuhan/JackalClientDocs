Everything
Everything
分类：File
描述：软件“Everything”的一些功能。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Everything 是 JackalClient 的 File 分类模块。启用后会围绕 Everything 这一能力工作，核心行为是：软件“Everything”的一些功能。

配置项
无（该模块在 default_settings.h 中未定义独立配置项）

历史更新
- 36. 为 Quick Run 添加配置项：Unknown Command Auto Resolve，可以给 命令行的未知命令用 Everything 自动检查一遍，如果有搜索结果则采用结果中的文件进行运行。如果有多个结果，则会让用户进行选择并存入记忆。
- 2. 修改 CloudMusic 查找网易云路径的逻辑，先考虑 Custom Directory 配置项再进行搜索。并接入 Everything。
- 9. 添加模块： Everything ，对接软件 Everything。使用 /everything 命令查看更多。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [FileManager (文件管理器)](./FileManager.md)
- [FileDelete (文件删除)](./FileDelete.md)
- [FileCreate (文件创建)](./FileCreate.md)
- [FileMonitor (文件监视)](./FileMonitor.md)
- [FolderClear (目录清空)](./FolderClear.md)
- [TempClear (临时清空)](./TempClear.md)
- [RecyclerClear (回收站清空)](./RecyclerClear.md)
- [DiskMissing (磁盘丢失)](./DiskMissing.md)

相关资料
无
