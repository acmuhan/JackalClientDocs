# AutoClicker（连点器）

分类：Control
描述：自动帮助你飞快地点击鼠标。

## 需求

- **安全级别**：常规模块
- **权限需求**：无
- **驱动依赖**：否
- **联网需求**：否
- **开发状态**：稳定/常规
- **版本属性**：普通可用

## 介绍

AutoClicker（连点器）用于自动帮助你飞快地点击鼠标。适合键鼠行为控制、输入增强和自动化操作场景。

**初次使用建议**：优先调整 Left Blatant Mode、Right Blatant Mode、Extra Key Blatant Mode 这三个核心配置。

## 核心操作

### 启用模块

**操作步骤**：
1. 在左侧菜单栏中找到 "Control" 分类
2. 点击展开分类列表
3. 找到 "AutoClicker" 模块
4. 点击模块名称左侧的开关按钮，使其变亮

### 调整配置

**操作步骤**：
1. 右键点击 "AutoClicker" 模块名称
2. 在弹出的配置窗口中调整所需选项
3. 调整完成后点击 "保存" 按钮

### 开始使用

**操作步骤**：
1. 启用模块后，将鼠标移动到需要点击的区域
2. 按下鼠标侧键（默认为 XButton2 用于左键连点，XButton1 用于右键连点）
3. 观察连点效果，根据需要调整 CPS 值
4. 再次按下相同的侧键停止连点

## 配置项

### 核心配置

- **Left CPS Min / Max**（左键 CPS 最小值/最大值）
  类型：数值；默认：7U / 14U
  说明：调整左键点击速度范围，建议根据实际需求小步调整
  **操作指南**：在配置窗口中找到这两个选项，输入合适的数值，点击保存

- **Right CPS Min / Max**（右键 CPS 最小值/最大值）
  类型：数值；默认：6U / 11U
  说明：调整右键点击速度范围，建议根据实际需求小步调整
  **操作指南**：在配置窗口中找到这两个选项，输入合适的数值，点击保存

- **Left / Right Trigger Mode**（左键/右键触发模式）
  类型：枚举；默认："Assist (PRO)"
  说明：选择触发连点的方式
  可选：Hotkey Toggle（快捷键切换）；Hotkey Hold（快捷键按住）；TargetKey Toggle（目标键切换）；TargetKey Hold（目标键按住）；Assist (PRO)（辅助（专业版））

### 高级配置

- **CPS Transition Speed**（CPS 过渡速度）
  类型：数值；默认：0.2f
  说明：调整 CPS 变化的平滑程度

- **Click Method**（点击方式）
  类型：枚举；默认："WMessage"
  说明：选择点击的实现方式
  可选：Simulation（模拟）；WMessage（窗口消息）；SendInput（未收录）

- **Click Point Setting**（点击位置设定）
  类型：枚举；默认："Manual"
  说明：选择点击位置的控制方式
  可选：Manual（手动）；Locked（锁定）；Shake（抖动）；Shake Locked（锁定并抖动）

### 快捷键配置

- **Left Hotkey**（左键快捷键）
  类型：按键/复合；默认：鼠标侧键 XButton2
  **操作指南**：在配置窗口中找到该选项，点击后按下想要设置的按键

- **Right Hotkey**（右键快捷键）
  类型：按键/复合；默认：鼠标侧键 XButton1
  **操作指南**：在配置窗口中找到该选项，点击后按下想要设置的按键

- **Interrupt Keys**（中断键）
  类型：按键/复合
  说明：按下这些键可以立即停止连点
  默认：E、T、ESC、/ 键

## 运行与测试

**测试步骤**：
1. 启用 AutoClicker 模块
2. 调整合适的 CPS 值
3. 选择合适的触发模式
4. 在测试区域（如记事本）测试连点效果
5. 观察点击速度和稳定性
6. 根据测试结果微调配置

**常见问题排查**：
- 如果连点不生效，检查是否启用了对应的鼠标按钮
- 如果点击速度不符合预期，调整 CPS Min/Max 值
- 如果触发方式不符合预期，更换 Trigger Mode

## 历史更新

- 大幅度升级 AutoClicker 连点器模块，将左键、右键和额外键分开来，独立设置CPS（范围）、触发方式
- 为 Auto Clicker 连点器增加多项配置选项
- 初始版本：实现基本连点器功能

## 备注

该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

## 相关模块

- [AntiAFK (反挂机)](./AntiAFK.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)
- [Crosshair (准星线)](./Crosshair.md)

---

现在，你已经掌握了 AutoClicker 连点器模块的使用方法。通过调整不同的配置项，你可以实现各种场景下的自动点击需求。快去尝试构建你的专属连点方案吧！

记住，合理使用连点器可以提高工作效率，但请在合规的场景下使用，避免用于任何不正当用途。

