UACBypass
管理员绕过
分类：Combat
描述：绕过UAC弹窗获得管理员权限。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
UACBypass 是 JackalClient 的 Combat 分类模块。启用后会围绕 管理员绕过 这一能力工作，核心行为是：绕过UAC弹窗获得管理员权限。

配置项
- Exit After Run：类型=布尔，默认=true
- Legit Transparent Window：类型=布尔，默认=true
- Cmstp Window Search Timeout (ms)：类型=数值，默认=10000
- Close Menu：类型=布尔，默认=true
- bind：类型=按键/复合，默认={{"Keybind", {VK_RMENU, 'U'}}}
- Safe Check：类型=布尔，默认=true
- Method：类型=枚举，默认="Computerdefaults Legit"

历史更新
- 30. 改善了一下 UAC Bypass ，并添加了新手段，可以更好的绕过。
- 1. UAC Bypass: 修复 Legit Mode 的粘贴问题
- 30. 添加新的 UAC Bypass 方式：Sdclt Legit 和 Slui Legit.

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
