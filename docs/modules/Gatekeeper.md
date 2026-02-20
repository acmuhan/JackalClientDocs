Gatekeeper
看门人
分类：Combat
描述：通过注入动态链接库，拦截 Winlogon 事件（需要管理员和特权）

需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Gatekeeper 是 JackalClient 的 Combat 分类模块。启用后会围绕 看门人 这一能力工作，核心行为是：通过注入动态链接库，拦截 Winlogon 事件（需要管理员和特权）

配置项
- Disable When Quit：类型=布尔，默认=true
- Shutdown：类型=枚举，默认="Query"
- Use Loader to Inject (Suggested)：类型=布尔，默认=true
- Magnifier：类型=枚举，默认="Query"
- Comm File Check Cooldown (ms)：类型=数值，默认=200L
- Win + L：类型=枚举，默认="Query"
- Narrator：类型=枚举，默认="Query"
- Ctrl + Alt + Del：类型=枚举，默认="Query"
- Ctrl + Shift + Esc：类型=枚举，默认="Allow"
- Admin：类型=枚举，默认="Allow"
- Sticky Keys：类型=枚举，默认="Query"
- Reboot：类型=枚举，默认="Query"
- Accessibility：类型=枚举，默认="Query"
- Check Working Cooldown：类型=数值，默认=5000U
- Filter Keys：类型=枚举，默认="Query"
- Projection Menu：类型=枚举，默认="Query"
- Logoff：类型=枚举，默认="Query"

历史更新
- 7. 为 JDGatekeeper.dll 添加了新的注销（一个）、关机（两个）和重启（一个）筛选。
- 11. 现在 Gatekeeper 模块弹出的选择是否的对话框默认落在否上。
- 16. 为 JDGatekeeper.dll 添加了几个事件：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)

相关资料
无
