# JackalClient 常见问题

> 来源：[https://www.yuque.com/wormwaker/tkpgqw/yc5y1ty9pg215me1?singleDoc](https://www.yuque.com/wormwaker/tkpgqw/yc5y1ty9pg215me1?singleDoc)

JackalClient 是一个用 C++ 编写的公益 Windows 客户端/工具箱，你只需要关注UP主就可以下载使用。JackalClient 也有一个专业版，你可以在这里永久购买，2025年可以享受半价，节假日也会有优惠：[https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377](https://afdian.com/item/1eda4ca6ca2511f0a7ae52540025c377)

[UP主/作者：@Wormwaker](https://space.bilibili.com/3494361276877525)

## 快速导航

**新手必看**：[如何下载并运行 JackalClient 说明书](https://www.yuque.com/wormwaker/tkpgqw/ppfnlcaqdkcsfmkd?singleDoc#%20《如何下载并运行%20JackalClient%20说明书%20-%20How%20To%20Download%20and%20Run%20JackalClient%20Instructions》)

## 常见问题解答

### 安装与启动问题

**Q: 解压密码是什么？**

**A:** Wormwake

**Q: 怎么杀毒软件报毒了？**

**A:** 这是正常现象（例如 Hetile.e, Exploit/CVE-XXXX, Exploit/Vuldriver, BypassUAC, Hacktool, Injector.bkc 等字样）。

**操作步骤：**
1. 从杀毒软件的恢复区恢复文件到原目录
2. 将整个 JackalClient 目录添加到杀毒软件的信任列表
3. 重新启动程序

**说明：** 客户端没有后门，报毒是因为某些功能触发了杀毒软件的敏感操作检测。

**Q: 解压失败是什么鬼（错误 0x80004005）？**

**A:** 不要使用 Windows 自带的 zip 解压工具，因为它无法正确识别密码。

**操作步骤：**
1. 使用其他解压软件（如 WinRAR、7-Zip）
2. 解压整个文件夹，不要只解压启动器
3. 输入正确的解压密码：Wormwake

**Q: 启动器在线下载客户端文件时候怎么自己就退出了？**

**A:** 客户端本体被杀软杀掉了。

**操作步骤：**
1. 在杀毒软件中添加信任
2. 恢复文件到原位置
3. 直接运行 Release 文件夹下的 JackalClient.exe

**Q: 弹窗缺少 VCRUNTIME140.DLL 等？**

**A:** 缺少VC++环境。

**操作步骤：**
1. 在群文件中搜索 "vc"
2. 找到两个 vc_redist 的 exe 文件
3. 都安装一下然后重试

### 界面与操作问题

**Q: 怎么打开本体后什么反应也没有，或者是任务栏图标出现几秒后闪退？**

**A:** 可能是创建窗口失败，通常与显卡有关。

**操作步骤：**
1. 打开 Release 文件夹下的 CLIENT.LOG
2. 检查日志末尾是否有 InitWindow 后就退出的现象
3. 如果是显卡问题，尝试更新显卡驱动

**Q: 打开后显示托盘提示，怎么开GUI？**

**A:** 
- 默认热键：右Shift 或 右Ctrl
- 也可以点击托盘图标左键打开GUI
- 右键托盘图标会弹出小菜单

**提示：** 热键可以在GUI选项里修改（Menu Toggle Key 1/2）

**Q: 怎么黑屏了？**

**A:** 某些N卡硬件的bug，和OpenGL有关。

**操作步骤：**
1. 打开 NVIDIA 设置
2. 找到 "管理3D设置" -> "程序设置"
3. 选择 JackalClient.exe
4. 将 "垂直同步" 设置为 "关"
5. 应用设置后重启程序

**Q: 怎么调中文？**

**操作步骤：**
1. 点击顶部的 "GUI 选项" 卡
2. 向下滚动找到 "Language/语言"
3. 选择 "中文"

### 功能与配置问题

**Q: 怎么编辑客户端模块配置里面的每个配置项？**

**操作步骤：**
- **开关项**：直接点击开关按钮
- **数字项**：点击后编辑，按回车确认，或用滚轮微调
- **字符串项**：
  - 新版本（>=0.9b）：直接点击编辑
  - 旧版本：按 Ctrl+T 弹出编辑框，在里面编辑
- **文件路径**：按 Ctrl+O 选择文件
- **文件夹路径**：按 Ctrl+Shift+O 选择文件夹
- **清空项**：按 Shift+Delete
- **按键绑定**：按 Esc 取消绑定，按其他键完成绑定

**Q: 按键显示无法捕获星铁等游戏的按键？**

**A:** Windows 机制：低权限进程无法捕获高权限进程的输入。

**操作步骤：**
1. 右键 JackalClient.exe
2. 选择 "以管理员身份运行"

**Q: 怎么输入命令？**

**操作步骤：**
1. 找到 "命令行" 模块 (Shell)，打开
2. 在弹出的控制台中输入命令
3. 输入 "break" 关闭命令行模块

**提示：** 按 Tab 键可以使用命令补全功能

**Q: 怎么保存配置/档案？**

**操作步骤：**
- 自动保存：客户端退出时会自动保存，定时也会保存
- 手动保存：打开GUI后按下 Ctrl+S
- 另存为档案：
  1. 点击顶部的 "档案(Profile)" 选项卡
  2. 按 Ctrl+Shift+S 另存为
  3. 输入档案名称
  4. 保存的档案在 config 文件夹下（json文件）

**Q: 我的连点器怎么不工作？**

**操作步骤：**
1. 右键 AutoClicker 模块
2. 找到 "Only Window Center" 选项
3. 关闭它（这个选项会限制只有鼠标在窗口中心时才能触发）
4. 检查其他选项，确保设置正确

### 高级功能问题

**Q: 如何启用 HUD 模糊，那种视频中的液体玻璃效果？**

**操作步骤：**
1. 在 "其他" 一栏中找到 "屏幕捕获" 模块
2. 将 "排除客户端 Exclude Client" 改为 "保持 Keep"
3. 启用 "HUD Blur" 模块
4. 将风格调为 "Liquid Glass 液体玻璃"

**说明：** 此时客户端会持续后台截图，会消耗一些性能，窗口会开启反捕获，只能通过游戏捕获模式捕获。

**Q: 怎么像视频中那样有发光的效果？**

**操作步骤：**
1. 打开着色器模块 (Shader)
2. 右键打开配置
3. 选择 bloom(泛光) 着色器

**提示：** 启用发光效果可能会导致帧率下降

**Q: 我的看门人怎么启动不了？**

**操作步骤：**
1. 确保已启用 "管理员(Admin)" 模块
2. 确保已启用 "特权(Privileges)" 模块
3. 检查杀毒软件是否拦截了对系统进程的操作
4. 确认系统是 64 位（32位系统不支持）

**Q: 怎么绕过UAC获得管理员权限？**

**操作步骤：**
1. 启用 "管理员绕过(UACBypass)" 模块
2. 如果失败，右键该模块更换方法
3. 在 Config 选项卡中找到 "Elevate and Retry Admin Modules"
4. 将其改为 "UACBypass"，这样打开管理员模块时会自动提权

## 故障排查

**遇到问题时的检查步骤：**
1. 检查程序是否以管理员身份运行
2. 检查杀毒软件是否拦截
3. 检查配置是否正确
4. 查看日志文件中的错误信息

**重点关注日志：**
- `Release/CLIENT.LOG`
- `crashlog` 目录下的崩溃日志
- `config` 目录下的配置文件

---

如果以上解答没有解决你的问题，可以查看 [GitHub Issues](https://github.com/noexcept2005/JackalClient/issues) 或联系作者获取更多帮助。

记住，遇到问题不要慌张，按照步骤逐步排查，大部分问题都能得到解决。祝你使用愉快！
