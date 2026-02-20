Bright
亮度修改
分类：未分类
描述：调节屏幕亮度。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：WIP / 维护中
- 版本属性：普通可用

介绍
Bright 是 JackalClient 的 未分类 分类模块。启用后会围绕 亮度修改 这一能力工作，核心行为是：调节屏幕亮度。

配置项
- HUD：类型=枚举，默认="Bottom"
- Mode：类型=枚举，默认="Lazy"
- Hotkey Brightness+：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_OEM_PERIOD}}}
- Hotkey Brightness-：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_OEM_COMMA}}}
- Percentage (0~100)：类型=数值，默认=20
- Keeping Cooldown (ms)：类型=数值，默认=1000L
- Hotkey Step (%%)：类型=数值，默认=5
- HUD Giant 2 Bar Color：类型=文本，默认="gold"
- HUD Duration (ms)：类型=数值，默认=3000L

历史更新
无（HISTORY 中暂无明确记录）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
无

相关资料
无
