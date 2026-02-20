WindowMaster
窗口大师
分类：Window
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
WindowMaster（窗口大师）是窗口控制中枢，集成了隐私、冻结、置顶、结束任务等快捷操作，并提供状态HUD。建议先配置常用快捷键，再根据屏幕空间调整 HUD 分页与行距。
配置项
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：true
 说明：打开菜单时隐藏HUD，避免菜单与状态层重叠。
- HUD Font Size（HUD 字号）
 类型：数值；默认：20
 说明：状态面板字号。过大容易遮挡，过小阅读困难。
- HUD Line Gap（HUD 行距）
 类型：数值；默认：5
 说明：状态面板行距，影响信息密度。
- HUD Background（HUD背景）
 类型：枚举；默认："Fancy"
 说明：面板背景样式，`Fancy` 视觉更强，`Simple` 更轻量。
 可选：Off（关闭）；Simple（简易）；Fancy（优美）
- Easing（缓动）
 类型：布尔；默认：true
 说明：开启后HUD与目标切换更平滑。
- Easing Speed (0~1)（缓动速率 (0~1)）
 类型：数值；默认：0.1
 说明：HUD跟随速度，越大越灵敏。
- HUD Color（HUD 颜色）
 类型：枚举；默认："Rainbow"
 说明：用于控制该元素颜色。建议优先保证与背景有足够对比度，再考虑风格化配色。
 可选：见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Target（目标）
 类型：枚举；默认："Foreground"
 说明：指定快捷操作作用对象。建议先用 `Foreground`，确认行为后再切到 `PointAt`。
 可选：Foreground（前端）；PointAt（指向）
- Privacy Mode（隐私模式）
 类型：枚举；默认："Invisible (>= Win10)"
 说明：隐私处理方式：优先使用 Win10+ 的不可捕获模式；不兼容时再尝试覆盖层方案。
- HUD（是否显示HUD。）
 类型：枚举；默认："Follow"
 说明：控制窗口大师状态面板显示位置。排障时建议开启 `Follow` 观察当前目标。
 可选：Off（关闭）；Follow（追随）；BottomRight（未收录）；BottomLeft（未收录）
- HUD Paging（HUD 分页）
 类型：枚举；默认："Off"
 说明：当条目过多时分页显示，避免HUD过长超出屏幕。
 可选：Off（关闭）；Multiple Pages（多页）；Only Show Page 1（只显示第一页）
- HUD Item Count Per Page（HUD 每页显示的项数量）
 类型：数值；默认：11U
 说明：每页项目数。分辨率低时适当减小可避免遮挡。
- HUD Next Page（HUD 下一页）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_RIGHT}}}
 说明：切换到下一页的快捷键。
- HUD Prev Page（HUD 上一页）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_LEFT}}}
 说明：切换到上一页的快捷键。
- Phantom Window Opacity (0~1)（Phantom 窗口 Opacity (0~1)）
 类型：数值；默认：0.1f
 说明：幻影窗口透明度。过低难以感知状态，过高会影响可视区域。
- Privacy/U Keybind（设为/取消隐私窗口快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_F1}}}
 说明：一键切换隐私状态，适合临时防录屏场景。
- Privacy Overlay/U Keybind（设为/取消隐私窗口(覆盖模式)快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_F2}}}
 说明：切换覆盖层隐私模式，适用于普通模式失效的窗口。
- Toggle Phantom Window Keybind（切换幻影窗口按键绑定）
 类型：按键/复合；默认：{{"Keybind", {0}} }
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
- Kill Process Keybind（结束进程快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_F3}} }
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
- EndTask Keybind（暴力结束任务快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_F9}}}
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
- Freeze/U Keybind（冻结/解冻窗口快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_F6}}}
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
- Process Freeze/U Keybind（冻结/解冻进程快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_F7}}}
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
- Topmost/U Keybind（置顶/取消置顶快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_F8}}}
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
- Hide/Show Keybind（隐藏/显示快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_F5}}}
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
- Destroy Keybind（发送销毁消息快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_F11}}}
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
- Update Keybind（更新窗口快捷键）
 类型：按键/复合；默认：{{"Keybind", {0}}}
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
- Lock Update Keybind（锁定更新快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_F10}}}
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
- EndSession Keybind（发送结束会话消息快捷键）
 类型：按键/复合；默认：{{"Keybind", {VK_LMENU, VK_F12}}}
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
- Sink Keybind（沉没窗口快捷键）
 类型：按键/复合；默认：{{"Keybind", {0}}}
 说明：窗口操作快捷键（结束、冻结、置顶、隐藏等）。建议与现有热键体系统一，避免误触危险动作。
历史更新
- 9. WindowMaster 模块的HUD不再会超出左侧和顶部屏幕边缘。
- 9. 为 WindowMaster 也添加了注入式调节窗口隐私性的功能。只需要按下 Alt+F1 即可切换。同时也提供了模式：
- 21. Window Master: 添加配置项 Target，用于指定对哪个窗口的锁定：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

