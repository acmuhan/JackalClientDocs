MachineLock
锁机
分类：Combat
描述：锁定这台计算机（谨慎使用）。

需求
- 安全级别：恶意模块（高风险）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MachineLock 是 JackalClient 的 Combat 分类模块。启用后会围绕 锁机 这一能力工作，核心行为是：锁定这台计算机（谨慎使用）。

配置项
- Disable Client Other HUD：类型=布尔，默认=true
- Wait Duration (min)：类型=数值，默认=30U
- Exit Condition：类型=枚举，默认="Password"
- AUTO ENABLE WHEN CLIENT LAUNCHED：类型=布尔，默认=false
- Password (Must Alpha or Num)：类型=文本，默认="0721"
- Pause Keystrokes2：类型=布尔，默认=true
- Subtitle Color：类型=文本，默认="aqua"
- Title Color：类型=文本，默认="yellow"
- Background Color：类型=文本，默认="40;0;0;250"
- Mute：类型=布尔，默认=true
- Title Display：类型=布尔，默认=true
- Subtitle Display：类型=布尔，默认=true
- Title：类型=文本，默认="计算机已锁定"
- Subtitle：类型=文本，默认="你需要输入密码"
- Disable KeyLogger：类型=布尔，默认=true
- Force Topmost：类型=布尔，默认=true
- Hide Taskbar：类型=布尔，默认=true
- Subtitle Font Size：类型=数值，默认=100
- Disable IME：类型=布尔，默认=true
- Password Font Size：类型=数值，默认=220
- Keyboard Lock (Ctrl, Win, Alt)：类型=布尔，默认=true
- Disable Logoff：类型=布尔，默认=true
- Keep Active：类型=布尔，默认=true
- Custom Escape Hotkey：类型=按键/复合，默认={{"Keybind", {VK_OEM_3}}}
- Password Color：类型=文本，默认="green"
- Emergency Escape Method：类型=枚举，默认="Custom Hotkey (Notice Keyboard Lock
- Disable Client Other Control：类型=布尔，默认=true
- Title Font Size：类型=数值，默认=180
- Mouse Lock：类型=枚举，默认="Allow Move"

历史更新
- 17. 为 MachineLock 锁机模块添加配置：
- 20. 为 MachineLock 锁机添加配置：
- 28. 添加模块：MachineLock，用于锁机。请谨慎使用。

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
