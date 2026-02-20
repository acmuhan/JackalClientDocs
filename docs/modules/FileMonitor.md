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
FileMonitor（文件监视）用于监视一个目录下的文件变化。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Notify、Cooldown。

配置项
- Folder（文件夹）
 类型：文本；默认："D:\\"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
- Console Output（控制台输出）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Log (Client)（客户端日志）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Log (Seperate)（独立日志）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Notify（通知）
 类型：布尔；默认：false
 说明：用于选择结果反馈方式。默认值 false 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Monitor Create（监视创建）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Monitor Delete（监视删除）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Monitor Modify（监视修改）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Monitor Rename（监视重命名）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Exclude Client Files（排除客户端文件）
 类型：布尔；默认：true
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Exclude Recent（排除最近使用文件夹）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Exclude Prefetch（排除Prefetch）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Ext Blacklist（扩展名黑名单）
 类型：文本；默认：".log;.pf;.tmp;.db;.qqxlog;.db-wal;.lck"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Cooldown（冷却）
 类型：数值；默认：100U
 说明：用于控制检测/刷新/动画节奏。默认值 100U 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
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

