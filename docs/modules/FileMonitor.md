FileMonitor
文件监视
分类：File
描述：监视一个目录下的文件变化。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
FileMonitor 是 JackalClient 的 File 分类模块。启用后会围绕 文件监视 这一能力工作，核心行为是：监视一个目录下的文件变化。

配置项
- Ext Blacklist：类型=文本，默认=".log;.pf;.tmp;.db;.qqxlog;.db-wal;.lck"
- Notify：类型=布尔，默认=false
- Exclude Recent：类型=布尔，默认=true
- Cooldown：类型=数值，默认=100U
- Exclude Prefetch：类型=布尔，默认=true
- Exclude Client Files：类型=布尔，默认=true
- Log (Seperate)：类型=布尔，默认=false
- Monitor Delete：类型=布尔，默认=true
- Monitor Modify：类型=布尔，默认=true
- Monitor Rename：类型=布尔，默认=true
- Log (Client)：类型=布尔，默认=false
- Folder：类型=文本，默认="D:\\"
- Console Output：类型=布尔，默认=true
- Monitor Create：类型=布尔，默认=true

历史更新
- 39. 修复 File Monitor 输出非ASCII时乱码的问题。
- 11. 修复 File Monitor 扩展名过滤无效的bug.
- 4. 添加 FileMonitor 模块，可用于监视一个目录的文件变化。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [FileManager (文件管理器)](./FileManager.md)
- [Everything (Everything)](./Everything.md)
- [FileDelete (文件删除)](./FileDelete.md)
- [FileCreate (文件创建)](./FileCreate.md)
- [FolderClear (目录清空)](./FolderClear.md)
- [TempClear (临时清空)](./TempClear.md)
- [RecyclerClear (回收站清空)](./RecyclerClear.md)
- [DiskMissing (磁盘丢失)](./DiskMissing.md)

相关资料
无
