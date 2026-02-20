ProcessManager
进程管理器
分类：Process
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ProcessManager 是 JackalClient 的 Process 分类模块。启用后会围绕 进程管理器 这一能力工作，核心行为是：暂无描述

配置项
- Animation Duration (ms)：类型=数值，默认=260L
- Menu Roundness：类型=数值，默认=0.18f
- Sort By：类型=枚举，默认="PID"
- Lifecycle Highlight Duration (ms)：类型=数值，默认=3500L
- Filter Lifecycle Rows By Search：类型=布尔，默认=false
- Show GPU Usage (PRO)：类型=布尔，默认=true
- Menu Line Gap：类型=数值，默认=8
- Easing Speed (0~1)：类型=数值，默认=0.14f
- Menu Animation Duration (ms)：类型=数值，默认=200L
- Process Path Color Style：类型=枚举，默认="Static"
- Enable Night Module：类型=布尔，默认=true
- Roundness：类型=数值，默认=0.15f
- Sort Order：类型=枚举，默认="Ascending"
- Row Hover Alpha (0~1)：类型=数值，默认=0.48f
- Line Gap：类型=数值，默认=6
- Filter Critical PID <= 4：类型=布尔，默认=false
- Show CPU Usage (PRO)：类型=布尔，默认=true
- Show Memory Usage Private (PRO)：类型=布尔，默认=true
- Open File Location Select：类型=布尔，默认=true
- Show Architecture (PRO)：类型=枚举，默认="Label"
- Process Name Color：类型=枚举，默认="Dynamic"
- Header Alpha (0~1)：类型=数值，默认=0.78f
- Enum Cooldown (ms)：类型=数值，默认=1200L
- Show PPID：类型=布尔，默认=true
- Show Process Privilege Tag (PRO)：类型=布尔，默认=true
- Show Process Icon：类型=布尔，默认=false
- Use Tree Structure：类型=布尔，默认=false
- Show Command Line (PRO)：类型=布尔，默认=true
- Keyword Filter：类型=文本，默认=""
- Show Path：类型=布尔，默认=true
- Menu Easing Speed (0~1)：类型=数值，默认=0.18f
- Show Threads：类型=布尔，默认=true
- Show Description：类型=布尔，默认=true
- Dynamic Column Width (PRO)：类型=布尔，默认=true
- Show Profile Description：类型=布尔，默认=false
- Enum Max Item Count：类型=数值，默认=4096
- Show Owner：类型=布尔，默认=true
- Menu Alpha (0~1)：类型=数值，默认=0.88f
- Font Size：类型=数值，默认=30
- Simplify Command Line：类型=布尔，默认=true
- Header Font Size：类型=数值，默认=28
- Pin Lifecycle Rows On Top：类型=布尔，默认=false
- Background Alpha (0~1)：类型=数值，默认=0.68f
- Show PID：类型=布尔，默认=true
- Highlight Process Lifecycle (PRO)：类型=布尔，默认=true
- Row Height：类型=数值，默认=42
- Row Select Alpha (0~1)：类型=数值，默认=0.66f
- Async Enum：类型=布尔，默认=true
- Menu Font Size：类型=数值，默认=28
- Auto Refresh On Open：类型=布尔，默认=true
- Wheel Sensitivity：类型=数值，默认=160.0f
- Show Rank：类型=布尔，默认=true

历史更新
- 46. 添加模块：ProcessManager 进程管理器，成为第二个 App。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [Anti360Ad (反数字广告)](./Anti360Ad.md)
- [Kill360AdProc (杀数字广告进程)](./Kill360AdProc.md)
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)
- [ListServices (枚举服务)](./ListServices.md)

相关资料
无
