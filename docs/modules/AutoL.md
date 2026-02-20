AutoL
自动嘲讽
[PRO]
分类：Control
描述：敌人死亡时自动发送嘲讽信息。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
AutoL 是 JackalClient 的 Control 分类模块。启用后会围绕 自动嘲讽 这一能力工作，核心行为是：敌人死亡时自动发送嘲讽信息。

配置项
- Length Limit：类型=数值，默认=60L
- Includes Burnt：类型=布尔，默认=true
- Name Transform：类型=枚举，默认="Lower Case 2"
- Event Dedup Cooldown (ms)：类型=数值，默认=2200L
- Includes Spear Penetration：类型=布尔，默认=true
- Detect Kills：类型=枚举，默认="Death"
- Player Blacklist (Sep With Semicolon)：类型=文本，默认=""
- Includes Void Falling：类型=布尔，默认=true
- Includes Team Elimination：类型=布尔，默认=false
- Length Limit Mode：类型=枚举，默认="Off"
- Source：类型=枚举，默认="Preset"
- AntiSpam Style：类型=枚举，默认="Off"
- Includes Nonfinal Kills：类型=布尔，默认=true
- Preset：类型=枚举，默认="Mesugaki (Chinese
- Add Target Name：类型=布尔，默认=true
- File Path：类型=文本，默认=""
- Includes Final Kills：类型=布尔，默认=true
- Player Blacklist Keywords (Sep With Semicolon)：类型=文本，默认="Owner;Admin"
- Includes Mace Smashing：类型=布尔，默认=true
- Detect Speak：类型=枚举，默认="Pattern"
- Format：类型=枚举，默认="Direct"
- Includes Lava：类型=布尔，默认=true
- Content List：类型=文本，默认="{player} ꮮ;{player} ꮮꮮ;{player} ꮮꮮⅬ"
- Includes Bed Destruction：类型=布尔，默认=false
- Fixed Content：类型=文本，默认="一破，卧龙出山！{player} 已被 Wurst 击毙"
- Includes Player Speak：类型=布尔，默认=false
- Trigger Cooldown (ms)：类型=数值，默认=800L
- Remove Decoration：类型=布尔，默认=false
- Includes Falling：类型=布尔，默认=true
- Off：类型=文本，默认="Normal", "Japanese"
- Mode：类型=枚举，默认="Smart Send"

历史更新
- 10. 【PRO】修改自动嘲讽和检测发言的调用顺序，可以规避一些特殊情况。
- 68. 【PRO】添加模块：Auto L，在 Minecraft 中自动嘲讽你的敌人。建议打开 ChatQueue 模块实时查看待发送消息队列。

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
