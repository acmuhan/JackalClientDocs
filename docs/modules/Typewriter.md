Typewriter
打字机
分类：Control
描述：自动帮你输入段落。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Typewriter 是 JackalClient 的 Control 分类模块。启用后会围绕 打字机 这一能力工作，核心行为是：自动帮你输入段落。

配置项
- Hide HUD When Menu On：类型=布尔，默认=true
- HUD：类型=布尔，默认=true
- Timer：类型=数值，默认=1.0f
- Auto Send Method：类型=枚举，默认="Simulation"
- Source AI Ask：类型=文本，默认="Please tell me Li Bai's famous poem in Chinese."
- Accelerate Space Typing：类型=布尔，默认=true
- Init/Stop Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LMENU, '1'}}}
- HUD Font Size：类型=数值，默认=45
- Timing Mode：类型=枚举，默认="Smart"
- Auto Send Key：类型=枚举，默认="Ctrl + Enter"
- Send Period (ms)：类型=数值，默认=1000U
- Display On Send：类型=枚举，默认="Off"
- Focus Window：类型=布尔，默认=true
- Source Fixed：类型=文本，默认="An apple a day keeps the doctor away."
- Fixed Delay：类型=数值，默认=100U
- Display Chatter Color：类型=枚举，默认="Rainbow"
- Pause/Resume Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LMENU, '2'}}}
- HUD Window Highlight：类型=布尔，默认=true
- Send Fixed Length：类型=数值，默认=10U
- Auto Send：类型=枚举，默认="Off"
- Keep Disabling IME：类型=布尔，默认=true
- Source：类型=枚举，默认="Clipboard"
- Key Internal Gap：类型=数值，默认=10U
- Source File Path：类型=文本，默认=""
- Display Chatter Type：类型=枚举，默认="Top"
- Clipboard Tweaks Module Text Processor：类型=布尔，默认=false
- HUD Progress Style：类型=枚举，默认="Bottom Bar"

历史更新
- 22. Typewriter 修复了无法打出 Tab 的问题。
- 9. 为 Typewriter 添加配置：HUD Font Size
- 9. 添加模块 Typewriter，用于自动帮你打字（甚至可以帮你发送）

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
