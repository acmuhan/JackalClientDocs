FileManager
文件管理器
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
FileManager 是 JackalClient 的 File 分类模块。启用后会围绕 文件管理器 这一能力工作，核心行为是：暂无描述

配置项
- Menu Icons：类型=布尔，默认=true
- Menu Background Color 1：类型=文本，默认="16;78;139;220"
- Toolbar Color：类型=枚举，默认="White"
- File Operation API：类型=枚举，默认="COM"
- Menu Animation Duration (ms)：类型=数值，默认=200L
- Menu Line Gap：类型=数值，默认=10
- Drive Show Serial Number：类型=布尔，默认=true
- Stop File Enum Item Size Threshold：类型=数值，默认=200
- Menu Shadow：类型=布尔，默认=true
- File Time Colorful Highlight (PRO)：类型=枚举，默认="Modified Time"
- Check Directory Is Empty：类型=布尔，默认=true
- Tab Switcher Shadow：类型=布尔，默认=true
- Menu Background Color 2：类型=文本，默认="69;139;0;220"
- Multiple File Open：类型=枚举，默认="Allow"
- Drive Enum Larger Cooldown (ms)：类型=数值，默认=3000L
- Menu Background Darkness (0~1)：类型=数值，默认=0.8f
- Menu Easing Speed (0~1)：类型=数值，默认=0.1f
- Drive Space Bar Width：类型=数值，默认=300
- Show File Time Difference (PRO)：类型=布尔，默认=true
- Tab Font Size：类型=数值，默认=30U
- Tab Switcher Shadow Thickness：类型=数值，默认=40.0f
- Show Attributes：类型=布尔，默认=true
- Drive Space Text Format：类型=枚举，默认="Free / Total"
- UAC Bypass Method：类型=枚举，默认="Computerdefaults Legit"
- Show File Size：类型=布尔，默认=true
- Go to Parent Folder Hotkey：类型=按键/复合，默认={{"Keybind", {VK_BACK}}}
- Tab Switcher Roundness：类型=数值，默认=0.3f
- Tab Switcher Shadow Opacity (0~1)：类型=数值，默认=0.5f
- Slow File Enum Item Size Threshold：类型=数值，默认=50
- Deletion Confirmation：类型=枚举，默认="Always"
- Tab Switcher Color：类型=枚举，默认="Black"
- File Attributes Update Cooldown (ms)：类型=数值，默认=1000L
- Wheel Sensitivity：类型=数值，默认=200.0f
- Apply Folder Attributes：类型=枚举，默认="Query"
- Show Hidden Files：类型=布尔，默认=true
- Drive Font Size：类型=数值，默认=30
- Apply Multifile Attributes：类型=枚举，默认="Unify"
- Icon Style：类型=枚举，默认="Character"
- Menu Font Size：类型=数值，默认=30
- Enable Night Module：类型=布尔，默认=true
- Selected Item Outline Color：类型=文本，默认="18;74;143;200"
- Menu Shadow Thickness：类型=数值，默认=30.0f
- Tab Switcher Shadow Color：类型=枚举，默认="Black"
- Drive Icon Size：类型=数值，默认=50
- Move Selection Cooldown (ms)：类型=数值，默认=100L
- Drive Show Volume Label：类型=布尔，默认=true
- Sort Order：类型=枚举，默认="Ascending"
- File Filter：类型=文本，默认="*.*"
- Menu Round Corners：类型=布尔，默认=true
- Tab Switcher Opacity (0~1)：类型=数值，默认=0.7f
- Cancel Selection Hotkey：类型=按键/复合，默认={{"Keybind", {VK_ESCAPE}}}
- File Enum Min Cooldown (ms)：类型=数值，默认=500L
- Hovered Item Outline Color：类型=文本，默认="151;4;148;200"
- Open Selected With Single Click：类型=布尔，默认=true
- Directory Status Update Cooldown (ms)：类型=数值，默认=3000L
- File Item Font Size：类型=数值，默认=35
- Tab Switcher Font Size：类型=数值，默认=30U
- Menu Shadow Color：类型=枚举，默认="Black"
- Drive Space Bar Absolute Coefficient (px/GB)：类型=数值，默认=1.1f
- Drive Show File System：类型=布尔，默认=true
- Sort By：类型=枚举，默认="Name"
- Drive Enum Cooldown (ms)：类型=数值，默认=1000L
- Calc Selected Total Size：类型=布尔，默认=true
- Menu Basic Alpha (0~1)：类型=数值，默认=0.8f
- Tab Height：类型=数值，默认=40U
- Selected Item Background Color：类型=文本，默认="66;90;123;200"
- Drive Space Bar Color Start：类型=文本，默认="86;156;214;220"
- Drive Space Bar Color End：类型=文本，默认="255;0;0;220"
- Drive Space Bar Style：类型=枚举，默认="Classic"
- Show System Files：类型=布尔，默认=true
- Menu Roundness：类型=数值，默认=0.1f
- File Item Line Gap：类型=数值，默认=5
- Menu Shadow Opacity (0~1)：类型=数值，默认=0.5f
- Menu Outline Color：类型=文本，默认="255;185;15;255"
- File Enum Max Cooldown (ms)：类型=数值，默认=10000L
- Calc Selected Folder Size：类型=枚举，默认="Off"
- Menu Mask Alpha (0~1)：类型=数值，默认=0.3f
- Async File Enum：类型=布尔，默认=true
- Show Modified Time：类型=布尔，默认=true
- Info Font Size：类型=数值，默认=30
- Drive Space Bar Height：类型=数值，默认=25
- Hovered Item Background Color：类型=文本，默认="239;200;244;90"
- Tab Switcher Round Corners：类型=布尔，默认=true
- Sort Files：类型=布尔，默认=true

历史更新
- 2. 为 File Manager 添加配置：
- 10. 修复 FileManager 在不显示隐藏文件和系统文件时留出多余位子的问题。
- 4. 加入模块：FileManager 文件管理器。添加新的顶部选项卡 "Apps"，文件管理器在这里查看。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Everything (Everything)](./Everything.md)
- [FileDelete (文件删除)](./FileDelete.md)
- [FileCreate (文件创建)](./FileCreate.md)
- [FileMonitor (文件监视)](./FileMonitor.md)
- [FolderClear (目录清空)](./FolderClear.md)
- [TempClear (临时清空)](./TempClear.md)
- [RecyclerClear (回收站清空)](./RecyclerClear.md)
- [DiskMissing (磁盘丢失)](./DiskMissing.md)

相关资料
无
