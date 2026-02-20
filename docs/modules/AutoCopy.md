AutoCopy
自动复制
分类：Control
描述：自动复制指定的文本。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoCopy 是 JackalClient 的 Control 分类模块。启用后会围绕 自动复制 这一能力工作，核心行为是：自动复制指定的文本。

配置项
- Fixed Text：类型=文本，默认="/hub"
- Ignore Empty Item：类型=布尔，默认=true
- Update Cooldown (ms)：类型=数值，默认=1000
- File Path：类型=文本，默认=""
- Change Cooldown (ms)：类型=数值，默认=10000
- Source Mode：类型=枚举，默认="Fixed"
- Only Update When Holding Ctrl：类型=布尔，默认=true
- Include Items With Keywords (Sep With Semicolon)：类型=文本，默认=""
- Exclude Items With Keywords (Sep With Semicolon)：类型=文本，默认="{player}"

历史更新
- 59. 添加自动复制模块：Auto Copy

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

相关资料
无
