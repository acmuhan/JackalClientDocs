# 系统命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 322 组命令。

## `/help [command...]`

```text
/help [command...]
/helpraw [command...]
```

说明摘录：

```text
显示命令的帮助信息。如果不填参数则会输出命令行参数并打开本文件 COMMANDS.TXT。
如果填写参数，则会从该文件中显示所有匹配以该命令开头，以空行结尾的段落并输出。
而 /helpraw 在英文下不会翻译中文为英文。
示例：/help kill
```

## `/helper [list]`

```text
/helper [list]
```

说明摘录：

```text
显示所有的命令助手选项。命令助手选项，表示命令执行后可能会用到的相关命令，会自动加入这个列表。
```

## `/helper use <option_key>`

```text
/helper use <option_key>
```

说明摘录：

```text
使用键为 option_key 的命令助手选项。
```

## `/helper clear`

```text
/helper clear
```

说明摘录：

```text
清空命令助手选项。
```

## `/about`

```text
/about
```

说明摘录：

```text
关于。
```

## `/async <command...>`

```text
/async <command...>
```

说明摘录：

```text
异步执行一条命令。
```

## `/multiline <command...>`

```text
/multiline <command...>
/ml <command...>
```

说明摘录：

```text
执行一条命令，命令可以多行。但是会打开一个输入框，你在里面编辑后按OK即可立即执行。
```

## `/multijackal <commands...>`

```text
/multijackal <commands...>
/mj <commands...>
```

说明摘录：

```text
执行多条命令，用;;分隔，会依次执行，无论是否失败。
```

## `/multijackalinterrupt <commands...>`

```text
/multijackalinterrupt <commands...>
/mji <commands...>
```

说明摘录：

```text
执行多条命令，用;;分隔，遇到失败直接中止。
```

## `/jackaloutput <command...>`

```text
/jackaloutput <command...>
```

说明摘录：

```text
输出执行这条命令的输出。（测试命令）
```

## `/jackalspeak <command...>`

```text
/jackalspeak <command...>
```

说明摘录：

```text
讲述执行这条命令的输出。请避免执行输出过多的命令。
注意:
1. 只能获取到命令函数在返回前的输出，因为异步而在后面的输出并不能讲出来。
2. 无法获取命令函数调用的子进程的输出，例如执行一条CMD命令的输出（如果要读出一条CMD命令的输出，请使用/runspeak）
```

## `/ver`

```text
/ver
```

说明摘录：

```text
查看客户端和系统版本。
```

## `/exit`

```text
/exit
/quit
/ausgang
```

说明摘录：

```text
异步退出。
```

## `/exitsync`

```text
/exitsync
```

说明摘录：

```text
同步退出。
```

## `/notify [msg...]`

```text
/notify [msg...]
```

说明摘录：

```text
发出一条通知。
```

## `/notifydict [msg...]`

```text
/notifydict [msg...]
```

说明摘录：

```text
尝试在字典中找到对应的翻译词汇后，发出一条通知。
```

## `/chatbar add [msg...]`

```text
/chatbar add [msg...]
```

说明摘录：

```text
为聊天栏添加一条新消息。
```

## `/chatbar clear`

```text
/chatbar clear
```

说明摘录：

```text
清空聊天栏消息。
```

## `/islandtip [msg...]`

```text
/islandtip [msg...]
```

说明摘录：

```text
在灵动岛上显示一条临时文本。
```

## `/islandprogress <params...>`

```text
/islandprogress <params...>
/progress <params...>
```

说明摘录：

```text
设置灵动岛的进度条。详细参数请使用 /help progress
```

## `/progress test <time_ms> [text...]`

```text
/progress test <time_ms> [text...]
```

说明摘录：

```text
测试灵动岛进度条。时间为 time_ms 毫秒， 文本为 text ，默认文本为 Sleeping...
```

## `/progress settext <text...>`

```text
/progress settext <text...>
```

说明摘录：

```text
设置灵动岛进度条文本。
```

## `/progress setvalue <percentage>`

```text
/progress setvalue <percentage>
```

说明摘录：

```text
设置灵动岛进度条的进度（0~100）。
```

## `/progress addvalue <value>`

```text
/progress addvalue <value>
```

说明摘录：

```text
增加灵动岛进度条的进度。
```

## `/progress start`

```text
/progress start
```

说明摘录：

```text
开始灵动岛进度条。
```

## `/progress end`

```text
/progress end
```

说明摘录：

```text
结束灵动岛进度条。
```

## `/fancytext [content...]`

```text
/fancytext [content...]
```

说明摘录：

```text
发送一条花式文本。
```

## `/wintoast [msg...]`

```text
/wintoast [msg...]
/traytip [msg...]
/traywarn [msg...]
/trayerror [msg...]
```

说明摘录：

```text
使用托盘发送消息。/traywarn 发送警告，/trayerror 发送错误。
```

## `/msgboxtip [msg...]`

```text
/msgboxtip [msg...]
```

说明摘录：

```text
弹出一个对话框，显示一条消息。
```

## `/msgbox new/create [msg...]`

```text
/msgbox new/create [msg...]
```

说明摘录：

```text
创建一个可受 Dialog Physics 模块控制的对话框，显示msg消息。
```

## `/msgbox multicreate <cnt> [msg...]`

```text
/msgbox multicreate <cnt> [msg...]
```

说明摘录：

```text
创建 cnt 个可受 Dialog Physics 模块控制的对话框，显示msg消息。
```

## `/msgbox clear`

```text
/msgbox clear
```

说明摘录：

```text
清空登记过的对话框。
```

## `/msgbox list`

```text
/msgbox list
```

说明摘录：

```text
枚举登记过的对话框信息。
```

## `/msgbox2 test`

```text
/msgbox2 test
```

说明摘录：

```text
测试对话框。
```

## `/msgbox2 new/create [msg...]`

```text
/msgbox2 new/create [msg...]
```

说明摘录：

```text
创建一个对话框，显示msg消息。
```

## `/msgbox2 multicreate <cnt> [msg...]`

```text
/msgbox2 multicreate <cnt> [msg...]
```

说明摘录：

```text
创建 cnt 个对话框，显示msg消息。
```

## `/msgbox2 clear`

```text
/msgbox2 clear
```

说明摘录：

```text
清空对话框。
```

## `/variables`

```text
/variables
```

说明摘录：

```text
显示所有内置变量。如需列举环境变量，请使用 /set 命令。
```

## `/variables <enable>`

```text
/variables <enable>
```

说明摘录：

```text
启用或禁用命令行的内置变量。使用时请用百分号包裹变量。enable 填写布尔值。
```

## `/set [args...]`

```text
/set [args...]
```

说明摘录：

```text
和dos命令set用法相同：
设置环境变量 /set key=value
枚举环境变量 /set
枚举A开头的环境变量 /set A
```

## `/initassoc`

```text
/initassoc
```

说明摘录：

```text
初始化相关文件的文件关联。 (WIP)
```

## `/device help`

```text
/device help
```

说明摘录：

```text
显示/device命令帮助。
```

## `/device audio [get]`

```text
/device audio [get]
```

说明摘录：

```text
获取当前默认音频设备。
```

## `/devices`

```text
/devices
/device list/enum/show/display
```

说明摘录：

```text
显示系统设备列表。
```

## `/volume [args...]`

```text
/volume [args...]
/volume get [pid]
```

说明摘录：

```text
如果不指定pid，则获取系统音量。否则获取指定进程音量。
```

## `/volume enum/show/display/list`

```text
/volume enum/show/display/list
```

说明摘录：

```text
展示系统混音器。包括系统音量和各个进程音量。
```

## `/volume set <volume>`

```text
/volume set <volume>
```

说明摘录：

```text
设置系统音量 (0~100)
```

## `/volume set <pid> <volume>`

```text
/volume set <pid> <volume>
```

说明摘录：

```text
设置某进程音量 (0~100)
```

## `/music [path...]`

```text
/music [path...]
```

说明摘录：

```text
如果不指定参数，则切换 Music 模块。
如果指定参数，则同步播放指定的音乐。（只能是wav或mp3）
如果要异步播放，请使用 /async music [path...]
```

## `/isomusic [path...]`

```text
/isomusic [path...]
```

说明摘录：

```text
使用音频隔离模式同步播放指定的音乐。（只能是wav或mp3）
如果要异步播放，请使用 /async isomusic [path...]
```

## `/meme`

```text
/meme
```

说明摘录：

```text
枚举所有梗。
```

## `/meme <name>`

```text
/meme <name>
```

说明摘录：

```text
同步触发一个梗。
```

## `/break`

```text
/break
/exitshell
/quitshell
```

说明摘录：

```text
关闭命令行 (Shell 模块)。
```

## `/killshell`

```text
/killshell
/terminateshell
```

说明摘录：

```text
强制关闭命令行 (Shell 模块) ，会终止线程，可能会导致客户端不稳定，请注意。
```

## `/assert <condition_expr...>`

```text
/assert <condition_expr...>
```

说明摘录：

```text
断言。如果条件表达式 condition_expr 为假，则终止当前命令执行环境。
对于一个批处理文件，会终止其执行。对于命令行，则只是报错。
对于条件表达式：
it
检查 it 的有效性。如果是句柄则检查句柄有效性，否则就是强制转换成 bool 类型。
proc_exists <pid/procname...>
检查进程是否存在。
```

## `/exclusive [enable]`

```text
/exclusive [enable]
```

说明摘录：

```text
切换命令行沉浸模式。沉浸模式开启后，HUD将会隐藏。
enable 是布尔类型，不填则表示切换。
```

## `/chatter <content...>`

```text
/chatter <content...>
/tchatter <content...>
/bchatter <content...>
/rchatter <content...>
/hchatter <content...>
/vchatter <content...>
```

说明摘录：

```text
发送一条弹幕。/tchatter 发送置顶弹幕。 /bchatter 发送置底弹幕。 /rchatter 发送反向弹幕。/hchatter 发送普通或反向弹幕。/vchatter 发送置顶或置底弹幕。
```

## `/danmakubuffer`

```text
/danmakubuffer
```

说明摘录：

```text
显示弹幕池缓冲区。
```

## `/title <content...>`

```text
/title <content...>
```

说明摘录：

```text
显示一条标题信息。
```

## `/debugstr [msg...]`

```text
/debugstr [msg...]
/dbgstr [msg...]
```

说明摘录：

```text
使用 OutputDebugString 输出一条调试信息。
```

## `/save`

```text
/save
```

说明摘录：

```text
立即保存客户端配置。
```

## `/chinese`

```text
/chinese
/cn
```

说明摘录：

```text
打开汉化。
```

## `/english`

```text
/english
/en
```

说明摘录：

```text
关闭汉化。
```

## `/hide`

```text
/hide
/hidden
```

说明摘录：

```text
隐藏。（启用Hidden模块）
```

## `/admin`

```text
/admin
```

说明摘录：

```text
以管理员身份自启。
```

## `/uacbypass`

```text
/uacbypass
```

说明摘录：

```text
调用UACBypass模块，绕过UAC获取管理员权限。
```

## `/system`

```text
/system
```

说明摘录：

```text
以系统身份自启。
```

## `/ti`

```text
/ti
/trustedinstaller
```

说明摘录：

```text
以受信任安装者权限自启。
```

## `/uiaccess [cmdline...]`

```text
/uiaccess [cmdline...]
```

说明摘录：

```text
以 UIAccess 权限运行。如果不指定参数，则为自启。
```

## `/enable <ModuleName>`

```text
/enable <ModuleName>
/e <ModuleName>
/disable <ModuleName>
/d <ModuleName>
/toggle <ModuleName>
/t <ModuleName>
/<ModuleName>
```

说明摘录：

```text
改变模块开关状态。
```

## `/enables`

```text
/enables
/enabled
```

说明摘录：

```text
查看启用了哪些模块。
```

## `/timestamp [timestamp=now]`

```text
/timestamp [timestamp=now]
/time [params.../timestamp=now]
```

说明摘录：

```text
查看当前时间戳及其字符串形式。/time 还可以有很多子命令。
```

## `/time sync [method=web/memory]`

```text
/time sync [method=web/memory]
```

说明摘录：

```text
同步系统时间。需要管理员权限。web表示用网络时间同步，memory表示用内存时间同步。使用该命令不会修改 TimeManager 模块的开关状态。
```

## `/time restore [method=web/memory]`

```text
/time restore [method=web/memory]
```

说明摘录：

```text
关闭 TimeManager 模块后再执行 /time sync。需要管理员权限。
```

## `/time set <timestamp/string>`

```text
/time set <timestamp/string>
/time set <year> <month> <day> <hour> <minute> <second>
/time set <hour> <minute> <second>
/time set <hour> <minute>
/time setonce <timestamp/string>
/time setonce <year> <month> <day> <hour> <minute> <second>
/time setonce <hour> <minute> <second>
/time setonce <hour> <minute>
```

说明摘录：

```text
设置系统时间。需要管理员权限。set 会打开 TimeManager 模块且自动修改模块配置使得符合你的命令参数。而 setonce 为单次操作，不会打开 TimeManager 模块。注意 <string> 参数表示你可以用字符串形式修改时间，包括下面的格式：
YYYY/MM/DD
YYYY/MM/DD HH:mm:SS
YYYY/MM/DD HH:mm
MM/DD
MM/DD HH:mm:SS
MM/DD HH:mm
HH:mm:SS
HH:mm
```

## `/time memory`

```text
/time memory
```

说明摘录：

```text
显示当前 TimeManager 存储到内存中的修改数据。
```

## `/time speed [value]`

```text
/time speed [value]
/time accelspeed [value]
```

说明摘录：

```text
查看或设置 TimeManager 的加速倍率（Acceleration Speed）。不指定 value 时仅显示当前模式和加速倍率。
```

## `/time accelerate [speed]`

```text
/time accelerate [speed]
/time accel [speed]
```

说明摘录：

```text
切换 TimeManager 到 Accelerated 模式并启用模块。需要管理员权限。该模式只修改时间流速，不直接设置固定时间点和偏移量。
也可以不填 speed，这时使用 TimeManager 配置中的 Acceleration Speed。
如果当前模式属于 Offset 系列，则会切换到 Offset Accelerated；如果属于 Set 系列，则会切换到 Set Accelerated。
```

## `/time offset <expressions...>`

```text
/time offset <expressions...>
/time offsetonce <expressions...>
```

说明摘录：

```text
对系统时间进行偏移。需要管理员权限。offset 会打开 TimeManager 模块且自动修改模块配置使得符合你的命令参数。而 offsetonce 为单次操作，不会打开 TimeManager 模块。expressions 表达式需要符合下面的格式：
单位操作符数值
单位包括：year=yr=y, month=mon, day=d, hour=hr=h, minute=min=m, second=sec=s
操作符包括：+ - =  （其中如果使用=，则用算法将其转为+或-）
数值就是纯数字。示例：/time offset hr+1 m-10 sec=50   表示时间+1小时，-10分钟，秒设为50
```

## `/err`

```text
/err
/error
/lasterr
/lasterror
```

说明摘录：

```text
查看上一个 Win32 错误。
```

## `/sleep <duration>`

```text
/sleep <duration>
/sleepms <duration>
```

说明摘录：

```text
等待 duration 毫秒。
```

## `/sleeps <duration>`

```text
/sleeps <duration>
/sleepsec <duration>
```

说明摘录：

```text
等待 duration 秒。可以是小数。
```

## `/it`

```text
/it
```

说明摘录：

```text
具体查看代词 it 的情况，将会详细展开句柄的信息。
```

## `/quickrun <command...>`

```text
/quickrun <command...>
/quickrunex <command...>
```

说明摘录：

```text
快速执行。如果不认识这个程序，则会自动开始全盘扫描并记录。/quickrunex 始终让用户选择。如果想中止扫描，请手动关闭 QuickRun 模块。
```

## `/cmd [param...]`

```text
/cmd [param...]
/runcmd [param...]
/newcmd [param...]
/execcmd [param...]
```

说明摘录：

```text
运行命令提示符。
- /cmd, /runcmd: 同步
- /newcmd: 异步，新窗口
- /execcmd: 异步，同一个窗口
```

## `/cmds`

```text
/cmds
```

说明摘录：

```text
查看所有命令提示符的进程信息。
```

## `/killcmd`

```text
/killcmd
```

说明摘录：

```text
杀死所有命令提示符。
```

## `/killps`

```text
/killps
```

说明摘录：

```text
杀死所有 PowerShell。
```

## `/autostart`

```text
/autostart
```

说明摘录：

```text
切换该模块。
```

## `/autostart check`

```text
/autostart check
```

说明摘录：

```text
检查三个地方的开机自启是否开启：注册表、服务、计划任务。
```

## `/autostart enable [method]`

```text
/autostart enable [method]
/autostart add [method]
```

说明摘录：

```text
开启某种方法的开机自启。需要管理员权限。
```

## `/autostart disable [method]`

```text
/autostart disable [method]
/autostart remove [method]
```

说明摘录：

```text
关闭某种方法的开机自启。需要管理员权限。
```

## `/hexview [text...]`

```text
/hexview [text...]
```

说明摘录：

```text
十六进制查看字符串。如果不指定参数则读取剪贴板文本。
```

## `/wiki <term>`

```text
/wiki <term>
/wikipedia <term>
```

说明摘录：

```text
【PRO】在 Wikipedia 上搜索有关词汇的信息。
```

## `/word <word>`

```text
/word <word>
/dict <word>
/dictionary <word>
```

说明摘录：

```text
【PRO】在字典API查询一个英语单词的释义并输出。包括音标，释义，例句等。
```

## `/textures`

```text
/textures
```

说明摘录：

```text
查看已加载的部分贴图。
```

## `/texture <name...>`

```text
/texture <name...>
```

说明摘录：

```text
导出指定的贴图到 output 文件夹下。
```

## `/grep [options...] pattern [files...]`

```text
/grep [options...] pattern [files...]
```

说明摘录：

```text
查找文件里符合条件的字符串或正则表达式。
目前支持的开关有：
-i				忽略字母大小写
-v				反向查找，只打印不匹配的行。
-w				全字匹配。
-A <count>		除了显示符合范本样式的那一列之外，并显示该行之后的 count 行内容。
-B <count>		除了显示符合样式的那一行之外，并显示该行之前的 count 行内容。
-c				计算符合样式的列数。
-e <regex>		指定字符串做为查找文件内容的样式。
-E				将样式为延伸的正则表达式来使用。
-G				将样式视为普通的表示法来使用。
-H				在显示符合样式的那一行之前，表示该行所属的文件名称。
-l				列出文件内容符合指定的样式的文件名称。
-L				列出文件内容不符合指定的样式的文件名称。
-n				在显示符合样式的那一行之前，标示出该行的列数编号。
-o				只显示匹配 pattern 部分。
--help			打印帮助。
```

## `/record`

```text
/record
```

说明摘录：

```text
显示缓存内容。
```

## `/profile`

```text
/profile
```

说明摘录：

```text
查看当前档案名称。
```

## `/profile list`

```text
/profile list
```

说明摘录：

```text
枚举所有档案。
```

## `/profile save`

```text
/profile save
```

说明摘录：

```text
保存当前档案。注意，默认档案不能修改，将会新建一个档案。
```

## `/profile load <name...>`

```text
/profile load <name...>
```

说明摘录：

```text
加载指定档案。
```

## `/profile checkonline <name...>`

```text
/profile checkonline <name...>
```

说明摘录：

```text
检查指定在线档案是否存在。
```

## `/profile upload [name...]`

```text
/profile upload [name...]
```

说明摘录：

```text
上传当前的档案到在线文本数据库。如果不指定名称参数，则会使用随机名称。档案名称和内容都将会加密。
注意：在线文本数据库属于他人免费搭建，我不能保证其寿命，请不要过度依赖在线档案功能。
```

## `/profile download [name...]`

```text
/profile download [name...]
```

说明摘录：

```text
从在线文本数据库下载指定的在线档案到config文件夹。如果有重名文件将会添加后缀。
```

## `/profile useonline [name...]`

```text
/profile useonline [name...]
```

说明摘录：

```text
从在线文本数据库下载指定的在线档案到config文件夹并加载。如果有重名文件将会添加后缀。
```

## `/config <params...>`

```text
/config <params...>
```

说明摘录：

```text
配置项的相关操作命令。使用 /config ui 命令进入一个交互式界面。如果你要操作配置档案，请使用 /profile 命令。
```

## `/config list <moduleName>`

```text
/config list <moduleName>
```

说明摘录：

```text
枚举一个模块的所有配置选项。也可以填 config/gui/hud/sound
```

## `/config get <moduleName> <keyName...>`

```text
/config get <moduleName> <keyName...>
```

说明摘录：

```text
获取一个模块（或config/gui/hud/sound）的某一个选项。支持模糊匹配：
若相似度 >75% 且唯一，或第一名比第二名高 40% 以上，会自动选中并提示。
keyName 不区分大小写，可以去除空格。
```

## `/config search <moduleName> <keyName...>`

```text
/config search <moduleName> <keyName...>
```

说明摘录：

```text
模糊查找一个模块（或config/gui/hud/sound）的某一个或几个选项。keyName 不区分大小写，可以去除空格。只要某个选项的键包含该字符串即可。
```

## `/config set <moduleName> <keyName> <rawValue...>`

```text
/config set <moduleName> <keyName> <rawValue...>
```

说明摘录：

```text
设置一个模块（或config/gui/hud/sound）的某一个选项。支持 moduleName/keyName/value（ComboBox）模糊匹配，
自动匹配时会给出提示。rawValue 是原始值，字符串必须用双引号
且转义字符必须转义。数字不可以添加字面量后缀。
如果该选项值类型为 ComboBox ，则填写选中的选项，不需要双引号。
如果为 KeyBind，则填写键名，如果为组合快捷键，则用逗号或分号分隔。例如：Ctrl,Alt,5。如果取消绑定，则为 None, Null, Empty 或 Unbound 任意一个关键字。
```

## `/config reset <moduleName> [keyName...]`

```text
/config reset <moduleName> [keyName...]
```

说明摘录：

```text
重置一个模块（或config/gui/hud/sound），或者这个模块的某一个值。支持 moduleName/keyName 模糊匹配，
自动匹配时会给出提示。keyName 不区分大小写，可以去除空格。
例如重置 Time Display 模块： /config reset timedisplay
```

## `/config ui <moduleName>`

```text
/config ui <moduleName>
/config interactive <moduleName>
/config pick <moduleName>
```

说明摘录：

```text
进入交互式配置界面（彩色输出，_getch 操作）：
↑/↓ 选择键，Home/End 跳到首尾，PageUp/PageDown 快速翻页，
Enter/G 查看详情，S 设置当前键，R 重置当前键，Q/Esc 退出。
Ctrl+R 重置整个模块配置（会二次确认）。
类型显示与 /config list 一致（string/boolean/int/float/combo/keybind/...）。
编辑行为：
1) ComboBox：用 ↑/↓ 或 1~9 选择，Enter 确认，Q/Esc 取消。
2) Boolean：1=true, 0=false, T=切换，Q/Esc 取消。
3) 其他类型：输入原始值后回车；输入 cancel 或 /cancel 取消编辑。
```

## `/gui`

```text
/gui
/gui toggle
```

说明摘录：

```text
打开或关闭 GUI。
```

## `/gui style`

```text
/gui style
```

说明摘录：

```text
查询现在的GUI风格。
```

## `/gui style <style>`

```text
/gui style <style>
```

说明摘录：

```text
设置现在的GUI风格（default/neverlose/imgui）
```

## `/binds`

```text
/binds
```

说明摘录：

```text
查看所有模块的按键绑定（bind, bind (Enable), bind (Disable)）
```

## `/bind <moduleName> <keyBind>`

```text
/bind <moduleName> <keyBind>
/bindenable <moduleName> <keyBind>
/binddisable <moduleName> <keyBind>
```

说明摘录：

```text
绑定单个模块的按键。bind 表示开关按键， bind (Enable) 表示开按键， bind (Disable) 表示关按键。
```

## `/encrypt <method> [content...]`

```text
/encrypt <method> [content...]
/decrypt <method> [content...]
/encryptcopy <method> [content...]
/decryptcopy <method> [content...]
```

说明摘录：

```text
用指定方法加密或解密一行文本。
支持的方法，请输入字符串：
	base64
	md5
	crc32
	sha1
	beast
	abracadabra
	pipa
	pipaplus
	pipasimp: 简体
	pipatrad: 繁体
	pipasimpplus: 简体+
	pipatradplus: 繁体+
	pipasimpplus2: 简体+，带标点
	pipatradplus2: 繁体+，带标点
若 content 不指定，则会先查看剪贴板里的文本，如果为空且为命令行线程，则直接要求输入。
后两条带copy的会将结果复制到剪贴板。
```

## `/encryptor [content...]`

```text
/encryptor [content...]
/decryptor [content...]
```

说明摘录：

```text
没有参数时，切换加密器模块状态。否则，对 content 文本进行加密或解密。方式为加密器模块配置中选择的方法。
```

## `/abra [args...]`

```text
/abra [args...]
/abracadabra [args...]
/abracopy [args...]
/abracadabracopy [args...]
```

说明摘录：

```text
调用魔曰加密器进行指定的操作。由于魔曰原仓库开源协议的限制，Jackal客户端没有内置该功能，你需要单独下载一个开源的exe。路径需要在 Encryptor 加密器模块中设置。后两条带copy的命令会在成功后复制结果。args 填运行参数。填写/?查看帮助。提示：/abra -e/-d [-k <key>] -i <text...>
```

## `/arch [hprocess]`

```text
/arch [hprocess]
/bits [hprocess]
/isx86 [hprocess]
/isx64 [hprocess]
```

说明摘录：

```text
若没有参数，则查看系统架构。
若有参数，则查看指定进程架构。
```

## `/inject <hprocess> <dllpath...>`

```text
/inject <hprocess> <dllpath...>
/ntinject <hprocess> <dllpath...>
/apcinject <hprocess> <dllpath...>
/inject32 <hprocess> <dllpath...>
/ntinject32 <hprocess> <dllpath...>
/apcinject32 <hprocess> <dllpath...>
/inject64 <hprocess> <dllpath...>
/ntinject64 <hprocess> <dllpath...>
/apcinject64 <hprocess> <dllpath...>
```

说明摘录：

```text
向指定进程注入DLL。三种形式分别对应：CreateRemoteThread, NtCreateThreadEx, QueueUserAPC 注入方法。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。
```

## `/uninject <hprocess> <dllname>`

```text
/uninject <hprocess> <dllname>
/ntuninject <hprocess> <dllname>
/apcuninject <hprocess> <dllname>
/uninject32 <hprocess> <dllname>
/ntuninject32 <hprocess> <dllname>
/apcuninject32 <hprocess> <dllname>
/uninject64 <hprocess> <dllname>
/ntuninject64 <hprocess> <dllname>
/apcuninject64 <hprocess> <dllname>
```

说明摘录：

```text
向指定进程卸载DLL。三种形式分别对应：CreateRemoteThread, NtCreateThreadEx, QueueUserAPC 卸载方法。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。
```

## `/rinject <hprocess> <dllpath...>`

```text
/rinject <hprocess> <dllpath...>
/rinject2 <hprocess> <dllpath...>
```

说明摘录：

```text
简单的DLL反射式注入。后面写2时，将调用外部 loader.exe 进行注入。
```

## `/remoterun`

```text
/remoterun
```

说明摘录：

```text
切换 RemoteRun 模块。
```

## `/remoterun <hprocess> <command...>`

```text
/remoterun <hprocess> <command...>
/remoterun32 <hprocess> <command...>
/remoterun64 <hprocess> <command...>
```

说明摘录：

```text
注入指定进程使之运行指定的命令。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。
```

## `/injectex <prefab> <hprocess> [parameters...]`

```text
/injectex <prefab> <hprocess> [parameters...]
```

说明摘录：

```text
不借助DLL的其他注入操作。
参数 prefab 可以为以下之一：
	exit: 退出。
```

## `/injectex exit <hprocess>`

```text
/injectex exit <hprocess>
```

说明摘录：

```text
	terminate: 终止另外一个进程。
```

## `/injectex terminate <hprocess> <target_hprocess>`

```text
/injectex terminate <hprocess> <target_hprocess>
```

说明摘录：

```text
	msgbox: 弹窗。
```

## `/injectex msgbox <hprocess> <text> [title="Inject"] [style=64]`

```text
/injectex msgbox <hprocess> <text> [title="Inject"] [style=64]
```

说明摘录：

```text
（该命令在原始文档中未提供额外说明）
```

## `/locate [path...]`

```text
/locate [path...]
/showie [path...]
```

说明摘录：

```text
在资源管理器中定位一个文件路径。两者的区别是，/locate 是打开并选中，/showie 是打开所在目录。
```

## `/showir <params...>`

```text
/showir <params...>
/regedit [params...]
```

说明摘录：

```text
在注册表编辑器中定位一个值或项的路径。参数params必须是一个JSON：
{"root":"根","path":"路径","value":"值名称，可选","uacbypass":是否允许绕过UAC}
例如：/regedit {"root":"HKEY_LOCAL_MACHINE","path":"SOFTWARE\\Policies\\Microsoft\\TPM","value":"OSManagedAuthLevel","uacbypass":true}
```

## `/getsize <path...>`

```text
/getsize <path...>
```

说明摘录：

```text
获取文件或文件夹的大小。
```

## `/exe <command...>`

```text
/exe <command...>
/exec <command...>
/runasync <command...>
```

说明摘录：

```text
异步执行命令。
```

## `/run <command...>`

```text
/run <command...>
/execsync <command...>
```

说明摘录：

```text
同步执行命令。不推荐使用。
```

## `/runspeak <command...>`

```text
/runspeak <command...>
```

说明摘录：

```text
同步执行命令并讲述其输出。
```

## `/iarun <params...>`

```text
/iarun <params...>
```

说明摘录：

```text
交互式命令运行。params 为相关参数。
```

## `/iarun start <command...>`

```text
/iarun start <command...>
```

说明摘录：

```text
启动交互式命令运行。你可以用指令操纵对它的行为。
```

## `/iarun restart <command...>`

```text
/iarun restart <command...>
```

说明摘录：

```text
重新启动交互式命令运行。如果正在运行，会先关闭。
```

## `/iarun info`

```text
/iarun info
```

说明摘录：

```text
输出当前交互式命令运行的状态信息。
```

## `/iarun input/in <content...>`

```text
/iarun input/in <content...>
```

说明摘录：

```text
向交互式进程的 STDIN 发送内容。
```

## `/iarun output/out <content...>`

```text
/iarun output/out <content...>
/iarun outputpatient <content...>
```

说明摘录：

```text
从交互式进程的 STDOUT 读取内容并输出到控制台。output/out 会有一个5秒的超时时间，而使用 outputpatient 会永远等待，所以不推荐。
```

## `/iarun stop`

```text
/iarun stop
```

说明摘录：

```text
关闭当前交互式命令。非强制。
```

## `/iarun kill`

```text
/iarun kill
```

说明摘录：

```text
强制关闭当前交互式命令的进程。
```

## `/legitexec <command...>`

```text
/legitexec <command...>
```

说明摘录：

```text
模拟用户异步执行命令。旨在绕过某些杀软拦截。
```

## `/parentspoofexec <command...>`

```text
/parentspoofexec <command...>
```

说明摘录：

```text
父进程欺骗异步执行命令。父进程会在一些合适的进程里挑选。
```

## `/sudo <command...>`

```text
/sudo <command...>
/sudobypass <command...>
/sudobypassex <method> <command...>
```

说明摘录：

```text
确保以管理员身份同步执行命令。如果使用 /sudobypass，则会调用用户账户控制绕过手段。 /sudobypassex 允许你指定绕过方法。
```

## `/runps <path...>`

```text
/runps <path...>
/runpsfile <path...>
/execps <path...>
/execpsfile <path...>
```

说明摘录：

```text
绕过执行策略运行一个后缀名为 .ps1 的 PowerShell 脚本。前者同步，后者异步。
```

## `/runpsbase64 <base64>`

```text
/runpsbase64 <base64>
/execpsbase64 <base64>
```

说明摘录：

```text
执行 Base64 加密过的 PowerShell 命令。前者同步，后者异步。
```

## `/exebegin`

```text
/exebegin
```

说明摘录：

```text
输入该命令后，用户将进入命令拼接模式，以后输入的内容将会持续拼接到缓冲区。
```

## `/execommit`

```text
/execommit
/exedone
```

说明摘录：

```text
结束命令拼接模式并异步执行拼接好的命令。
```

## `/execlear`

```text
/execlear
/exereset
```

说明摘录：

```text
清空拼接的命令并退出命令拼接模式。
```

## `/exeaddspace`

```text
/exeaddspace
```

说明摘录：

```text
在拼接的命令末尾添加一个空格。
```

## `/speak [content...=clipboard]`

```text
/speak [content...=clipboard]
```

说明摘录：

```text
使用讲述人说话。
```

## `/speakqueue`

```text
/speakqueue
```

说明摘录：

```text
查看讲述人缓冲队列。
```

## `/speakqueue clear`

```text
/speakqueue clear
```

说明摘录：

```text
清空讲述人缓冲队列。
```

## `/speakvoice`

```text
/speakvoice
/speakvoice list
```

说明摘录：

```text
查看所有讲述人音色。
```

## `/shutdown [args...]`

```text
/shutdown [args...]
```

说明摘录：

```text
关机。如果不写参数则为立即关机。如果写参数，则参数和 cmd 命令相同。
```

## `/logoff`

```text
/logoff
/logout
```

说明摘录：

```text
立即注销 Windows。
```

## `/reboot`

```text
/reboot
```

说明摘录：

```text
立即重启 Windows。
```

## `/chat [content...=clipboard]`

```text
/chat [content...=clipboard]
/chatstream [content...=clipboard]
/chat0 [content=...=clipboard]
/chatstream0 [content...=clipboard]
```

说明摘录：

```text
与 AI 对话。你需要在 AI Settings 模块中配置好 APIKEY 等参数。
```

## `/chatstream 命令强制以流式输出。`

```text
/chatstream 命令强制以流式输出。
```

说明摘录：

```text
其中 /chat0 和 /chatstream0 为单次对话，没有上下文，无法持续对话。
其余默认会话为default，支持上下文，但是有上限。你可以使用/chathistory switch命令切换会话。
```

## `/chathistory`

```text
/chathistory
/chathistory get [session=cur_chat_session]
```

说明摘录：

```text
输出会话聊天记录。默认为当前选中的会话。
```

## `/chathistory list`

```text
/chathistory list
/chathistory enum
```

说明摘录：

```text
枚举所有聊天会话及其大小。
```

## `/chathistory switch [session=default]`

```text
/chathistory switch [session=default]
```

说明摘录：

```text
切换聊天会话。不同的会话会记录不同的聊天记录。
```

## `/chathistory pop [session=cur_chat_session]`

```text
/chathistory pop [session=cur_chat_session]
```

说明摘录：

```text
删除指定聊天会话的最后一问答。这样AI就不知道你上一句发的是什么了，但是仍能知道之前的上下文。
```

## `/chathistory clear [session=cur_chat_session]`

```text
/chathistory clear [session=cur_chat_session]
```

说明摘录：

```text
清除指定聊天会话记录（上下文）。
```

## `/forget`

```text
/forget
```

说明摘录：

```text
等价于 /chathistory clear livestream
```

## `/aitool <tool> [args...]`

```text
/aitool <tool> [args...]
/ait <tool> [args...]
```

说明摘录：

```text
使用一个人工智能工具。tool为工具名，args为工具的参数。
```

## `/aitool translate <content...=clipboard>`

```text
/aitool translate <content...=clipboard>
```

说明摘录：

```text
使用人工智能翻译。
```

## `/aisettings`

```text
/aisettings
/ai
```

说明摘录：

```text
查看 AI 配置。
```

## `/aisettings model/models`

```text
/aisettings model/models
```

说明摘录：

```text
查看当前选中的 AI 模型名称。
```

## `/aisettings model <name>`

```text
/aisettings model <name>
```

说明摘录：

```text
设置当前选中的 AI 模型名称。
```

## `/aisettings local`

```text
/aisettings local
```

说明摘录：

```text
设置当前 AI 类型为本地大模型。
```

## `/aisettings localmodels`

```text
/aisettings localmodels
```

说明摘录：

```text
查看本地 Ollama 模型列表。
```

## `/aisettings custom`

```text
/aisettings custom
```

说明摘录：

```text
设置当前 AI 类型为自定义在线大模型API。
```

## `/agent list/tasks`

```text
/agent list/tasks
```

说明摘录：

```text
枚举所有可用的人工智能代理任务预设。每一个任务规定了工具的使用范围，可以让AI更专注地调用这方面的工具。
```

## `/agent task <task>`

```text
/agent task <task>
```

说明摘录：

```text
查询一个任务可以用的工具列表。
```

## `/agent set <preparation> <value>`

```text
/agent set <preparation> <value>
```

说明摘录：

```text
有一些工具需要准备。你可以用这条命令设置某项准备的值。
```

## `/agent tools`

```text
/agent tools
```

说明摘录：

```text
枚举所有工具。
```

## `/agent tool <tool>`

```text
/agent tool <tool>
```

说明摘录：

```text
查询一个工具的使用方法。
```

## `/agent usetool <tool> <params_json>`

```text
/agent usetool <tool> <params_json>
```

说明摘录：

```text
调用一个工具。参数必须用JSON表示
```

## `/agent <task> <description...>`

```text
/agent <task> <description...>
```

说明摘录：

```text
人工智能代理，完成特定任务。注意人工智能是可以调用命令操作你的计算机的。你需要自己承担风险。task 为任务分类，description 为任务具体需求，也就是你的输入。如果你想使用所有工具，可以使用名为 general 的任务。
```

## `/window [hwnd]`

```text
/window [hwnd]
/wnd [hwnd]
/hwnd [hwnd]
```

说明摘录：

```text
获取一个窗口句柄存储到代词 it 中。首参可以 jc_hwnd 表示客户端主窗口， jc_hwnd_console 表示客户端控制台窗口。
如果没有参数，则获取控制台窗口句柄（等效于 /window jc_hwnd_console）。
```

## `/windows`

```text
/windows
```

说明摘录：

```text
枚举所有顶级窗口并输出相关信息。
```

## `/findwindow <hwnd/title/class/procname/pid>`

```text
/findwindow <hwnd/title/class/procname/pid>
/findwnd <hwnd/title/class/procname/pid>
```

说明摘录：

```text
按窗口句柄值、窗口标题关键字、窗口类名关键字、进程名关键字或 PID 查找窗口，输出彩色表格。
句柄支持十进制和十六进制；十六进制前缀 0x 可加可不加。PID 仅支持精确匹配，不支持模糊匹配。
```

## `/selectwindow <hwnd/title/class/procname/pid>`

```text
/selectwindow <hwnd/title/class/procname/pid>
/selectwnd <hwnd/title/class/procname/pid>
```

说明摘录：

```text
先按 /findwindow 的规则查找，再输入编号选择一条结果，将该窗口句柄存入 it（hwnd 窗口句柄类型）。
```

## `/privatewindows`

```text
/privatewindows
/privatewindow list
```

说明摘录：

```text
输出所有记录中的隐私窗口。
```

## `/privatewindow sync`

```text
/privatewindow sync
```

说明摘录：

```text
将隐私窗口记录列表与系统真实情况进行同步。
```

## `/privatewindow clear`

```text
/privatewindow clear
```

说明摘录：

```text
取消所有记录中的隐私窗口。
```

## `/privatewindow reset <hwnd>`

```text
/privatewindow reset <hwnd>
```

说明摘录：

```text
取消指定的隐私窗口。必须在记录中。
```

## `/privatewindow set <hwnd> [affinity=none]`

```text
/privatewindow set <hwnd> [affinity=none]
```

说明摘录：

```text
设置置顶窗口的隐私状态。affinity 必须是 none, black, invisible 三者之一。如果目标窗口不属于客户端，则会注入。
```

## `/privatewindow check <hwnd>`

```text
/privatewindow check <hwnd>
```

说明摘录：

```text
检查指定窗口的隐私状态、是否在记录列表中、是否会被 PrivateWindow 跳过（并显示原因）。
```

## `/privatewindow why <hwnd>`

```text
/privatewindow why <hwnd>
/privatewindow reason <hwnd>
```

说明摘录：

```text
只检查指定窗口是否会被 PrivateWindow 跳过，并显示命中原因。
```

## `/privatewindow diagnose <hwnd>`

```text
/privatewindow diagnose <hwnd>
/privatewindow diag <hwnd>
```

说明摘录：

```text
诊断指定窗口的关键信息（root/visible/cloaked/style/exstyle/尺寸等），并给出是否会被 PrivateWindow 跳过及原因。
```

## `/privatewindow layer list`

```text
/privatewindow layer list
```

说明摘录：

```text
枚举覆盖层模式的所有隐私窗口。
```

## `/privatewindow layer check <hwnd>`

```text
/privatewindow layer check <hwnd>
```

说明摘录：

```text
检查指定窗口是否存在覆盖层窗口。
```

## `/privatewindow layer enable/disable <hwnd>`

```text
/privatewindow layer enable/disable <hwnd>
```

说明摘录：

```text
启用/禁用窗口的覆盖层隐私模式。
```

## `/bands`

```text
/bands
```

说明摘录：

```text
了解所有Z序段的信息。
```

## `/getband [hwnd]`

```text
/getband [hwnd]
```

说明摘录：

```text
获取窗口的Z序段。hwnd不填，则为客户端主窗口，如果主窗口不存在则为控制台窗口
```

## `/setband [hwnd] [zorderband]`

```text
/setband [hwnd] [zorderband]
```

说明摘录：

```text
【PRO】动态设置窗口的Z序段。hwnd不填，则为客户端主窗口，如果主窗口不存在则为控制台窗口，zorderband不填则为ZBID_UIACCESS（值为2）
```

## `/hproc`

```text
/hproc
/proc
/hproc [hprocess/pid/name]
/proc [hprocess/pid/name]
```

说明摘录：

```text
获取一个进程句柄存储到代词 it 中。如果没有参数，则获取客户端进程句柄。
```

## `/exist <hprocess/pid/name>`

```text
/exist <hprocess/pid/name>
/exists <hprocess/pid/name>
/existproc <hprocess/pid/name>
/existsproc <hprocess/pid/name>
```

说明摘录：

```text
检查是否存在特定进程。仅做检查。
```

## `/procs [preciseProcName...]`

```text
/procs [preciseProcName...]
/findproc <procNameKeywords...>
```

说明摘录：

```text
寻找符合进程名称的进程。前者精确查找，后者模糊查找。
```

## `/selectproc [procNameKeywords...]`

```text
/selectproc [procNameKeywords...]
```

说明摘录：

```text
选择符合进程名称的进程。模糊查找。将会提示输入一个编号，然后将选中指定的进程以句柄形式存入 it 中。如果不填参数，则从所有进程中选择。
```

## `/scanstr <hprocess> [regex...]`

```text
/scanstr <hprocess> [regex...]
/scanstrings <hprocess> [regex...]
```

说明摘录：

```text
扫描进程中的字符串。如果regex不为空，则只显示包含指定正则表达式的字符串。
```

## `/kill <hprocess/pid/name>`

```text
/kill <hprocess/pid/name>
```

说明摘录：

```text
杀进程。如果指定进程名，必须写完整；而且将会击杀所有相同进程名的进程。
使用链式方法。如果写成下面的命令，则会指定单模式击杀。
```

## `/rawkill`

```text
/rawkill
```

说明摘录：

```text
原始方法杀进程
```

## `/threadskill`

```text
/threadskill
```

说明摘录：

```text
击杀各个线程杀进程
```

## `/winstakill`

```text
/winstakill
```

说明摘录：

```text
Winsta 方法杀进程
```

## `/wmikill`

```text
/wmikill
```

说明摘录：

```text
WMI 方法杀进程
```

## `/jobkill`

```text
/jobkill
```

说明摘录：

```text
Job 方法杀进程
```

## `/dbgkill`

```text
/dbgkill
/debuggerkill
```

说明摘录：

```text
Debugger 方法杀进程
```

## `/zwkill`

```text
/zwkill
/zwterminate
```

说明摘录：

```text
内核方法杀进程
```

## `/freeze <hprocess/pid/name>`

```text
/freeze <hprocess/pid/name>
/unfreeze <hprocess/pid/name>
```

说明摘录：

```text
冻结/解冻 进程所有线程。如果指定进程名，必须写完整；而且将会 冻结/解冻 所有相同进程名的进程。
```

## `/untrust <hprocess/pid/name>`

```text
/untrust <hprocess/pid/name>
```

说明摘录：

```text
设置进程令牌为不信任。有可能需要管理员权限。
```

## `/aim`

```text
/aim
```

说明摘录：

```text
打开窗口锁定器，按下 Esc 取消，按下 Ctrl 锁定前端窗口，按下 Alt 锁定鼠标指向的窗口。
倒计时 30 秒，超时后自动取消。
```

## `/foreground`

```text
/foreground
/fore
```

说明摘录：

```text
五秒后自动锁定前端窗口并赋值给 it.
```

## `/pointat`

```text
/pointat
/here
/there
```

说明摘录：

```text
五秒后自动锁定鼠标指向的窗口并赋值给 it.
```

## `/foregroundproc`

```text
/foregroundproc
/foreproc
```

说明摘录：

```text
五秒后自动锁定前端窗口所属的进程并赋值给 it.
```

## `/pointatproc`

```text
/pointatproc
/hereproc
/thereproc
```

说明摘录：

```text
五秒后自动锁定鼠标指向的窗口所属的进程并赋值给 it.
```

## `/focus [hwnd]`

```text
/focus [hwnd]
/focus2 [hwnd]
```

说明摘录：

```text
聚焦窗口。后者不会使用 SW_RESTORE 还原窗口。如果不填参数，则为客户端主窗口。
```

## `/close [hwnd]`

```text
/close [hwnd]
```

说明摘录：

```text
向窗口发送关闭消息。超时时间为1秒。若不填参数则启用 Hidden 模块。
```

## `/destroy <hwnd>`

```text
/destroy <hwnd>
```

说明摘录：

```text
向窗口发送销毁消息。超时时间为1秒。	
```

## `/max [hwnd]`

```text
/max [hwnd]
```

说明摘录：

```text
最大化窗口。
```

## `/min [hwnd]`

```text
/min [hwnd]
```

说明摘录：

```text
最小化窗口。
```

## `/show [hwnd]`

```text
/show [hwnd]
```

说明摘录：

```text
显示窗口。
```

## `/shownormal [hwnd]`

```text
/shownormal [hwnd]
```

说明摘录：

```text
正常显示窗口。
```

## `/hide [hwnd]`

```text
/hide [hwnd]
```

说明摘录：

```text
隐藏窗口。
```

## `/invisible [hwnd]`

```text
/invisible [hwnd]
```

说明摘录：

```text
将窗口不透明度改为1（完全不透明是255）
```

## `/screenshot [hwnd]`

```text
/screenshot [hwnd]
```

说明摘录：

```text
只给指定窗口截图。如果不指定参数，则切换 Screenshot 模块。 
```

## `/ocr file <path...>`

```text
/ocr file <path...>
```

说明摘录：

```text
对指定路径的图片进行文字识别。
```

## `/ocr window <hwnd>`

```text
/ocr window <hwnd>
```

说明摘录：

```text
对指定的窗口内容进行文字识别。
```

## `/ocr windowex <hwnd>`

```text
/ocr windowex <hwnd>
```

说明摘录：

```text
对指定的窗口内容进行文字识别。将会输出更详细的信息，包括坐标等。
```

## `/qqbot update`

```text
/qqbot update
```

说明摘录：

```text
更新一次机器人。
```

## `/qqbot stat`

```text
/qqbot stat
```

说明摘录：

```text
查看统计数据。
```

## `/qqbot raw`

```text
/qqbot raw
```

说明摘录：

```text
查看OCR原始结果。
```

## `/qqbot aim [hwnd]`

```text
/qqbot aim [hwnd]
```

说明摘录：

```text
锁定指定的聊天窗口为目标窗口。
```

## `/clientreg list`

```text
/clientreg list
```

说明摘录：

```text
枚举所有客户端注册表项的键值。
```

## `/clientreg init`

```text
/clientreg init
```

说明摘录：

```text
初始化客户端注册表项键值，具体为：
ExecutablePath: 客户端程序绝对路径。
Version: 版本号（例如v0.7c，程序里以宏 CURRENT_VERSION 定义）
```

## `/clientreg set <key> <value>`

```text
/clientreg set <key> <value>
```

说明摘录：

```text
设置客户端注册表键值。注意，如果value是纯数字，将会作为 REG_DWORD 存储，否则为 REG_SZ
```

## `/clientreg get <key>`

```text
/clientreg get <key>
```

说明摘录：

```text
获取客户端注册表键值。只能是 REG_DWORD 或 REG_SZ
```

## `/clientreg delete <key>`

```text
/clientreg delete <key>
```

说明摘录：

```text
删除指定的客户端注册表键值。
```

## `/clientreg clear`

```text
/clientreg clear
```

说明摘录：

```text
清空客户端注册表键值并去除JackalClient这一项。
```

## `/setmousepos <x> <y>`

```text
/setmousepos <x> <y>
/mousetp <x> <y>
```

说明摘录：

```text
立即设置鼠标坐标。
```

## `/getmousepos`

```text
/getmousepos
```

说明摘录：

```text
输出一次鼠标坐标。
```

## `/wheel <down/up>`

```text
/wheel <down/up>
```

说明摘录：

```text
向下或向上滚轮一次。
```

## `/key <down/press> <keycode/keyname...>`

```text
/key <down/press> <keycode/keyname...>
/key <up/release> <keycode/keyname...>
/key <once> <keycode/keyname...>f
/key <async> <keycode/keyname...>
```

说明摘录：

```text
模拟按键操作。上述四种分别对应按下、松开、同步按下松开、异步按下松开。后两种内部间隔 100 毫秒。
```

## `/keys <Keys...>`

```text
/keys <Keys...>
```

说明摘录：

```text
模拟多个按键操作。注意，多个按键需要用空格分隔而不是逗号或分号。
```

## `/input [string...=clipboard]`

```text
/input [string...=clipboard]
```

说明摘录：

```text
模拟输入字符串。
```

## `/click [interval_ms=50]`

```text
/click [interval_ms=50]
/lclick [interval_ms=50]
/leftclick [interval_ms=50]
```

说明摘录：

```text
模拟左键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。
```

## `/rclick [interval_ms=50]`

```text
/rclick [interval_ms=50]
/rightclick [interval_ms=50]
```

说明摘录：

```text
模拟右键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。
```

## `/mclick [interval_ms=50]`

```text
/mclick [interval_ms=50]
/midclick [interval_ms=50]
/middleclick [interval_ms=50]
```

说明摘录：

```text
模拟中键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。
```

## `/kbstatus`

```text
/kbstatus
```

说明摘录：

```text
列出正在被按下的按键。包括鼠标。
```

## `/clearkb`

```text
/clearkb
```

说明摘录：

```text
释放所有正在被按下的按键。包括鼠标。
```

## `/cleartogglekeys`

```text
/cleartogglekeys
```

说明摘录：

```text
清空正在被按下的切换键。
```

## `/clipboard <args...>`

```text
/clipboard <args...>
```

说明摘录：

```text
剪贴板相关命令。
```

## `/clipboard show`

```text
/clipboard show
```

说明摘录：

```text
读取并显示剪贴板。
```

## `/clipboard get`

```text
/clipboard get
```

说明摘录：

```text
获取并存储剪贴板内容到变量 it。
```

## `/clipboard store text <text...>`

```text
/clipboard store text <text...>
/clipboard store file <path...>
/clipboard store movefile <path...>
```

说明摘录：

```text
写入剪贴板。
```

## `/clipboard clear`

```text
/clipboard clear
```

说明摘录：

```text
清空剪贴板。
```

## `/getaccess <dirpath...>`

```text
/getaccess <dirpath...>
/getdiraccess <dirpath...>
```

说明摘录：

```text
* 需要管理员权限。
授予目录所有权限。此操作可能会有风险。
```

## `/hud`

```text
/hud
```

说明摘录：

```text
切换HUD显示状态。
```

## `/customhud`

```text
/customhud
```

说明摘录：

```text
切换自定义HUD显示状态。
```

## `/customhud add <json...>`

```text
/customhud add <json...>
/customhud add text [text...]
```

说明摘录：

```text
添加自定义HUD元素。
JSON 格式支持的键值有：
!表示必填项，其中 Color 和 ColorPrefab 两者选一个
!string	Type: 类型，可以是 text
!int		X
!int		Y
!string	Text: 文本内容。
string	Format: 可自定义格式。默认为 %s
!string	Color: 具体某种颜色。
!string	ColorPrefab: 颜色预设，支持动态
int		Size: 字号。
bool	Shadow: 是否绘制阴影。 默认开启。
bool	Stroke: 是否描边。默认关闭。
float 	Opacity: 不透明度，默认为 1.0
float 	OpacityMin: 不透明度最小值
float 	OpacityMax：不透明度最大值
int		OpacityDuration: 不透明度正弦变化的周期时间 (毫秒)
bool	WaveColor: 是否波动颜色。 
int		UpdateCooldown: 文本更新周期时间 (毫秒)；默认 2000ms
string	TextCache: 文本目前的内容。
int		LastUpdate: 文本上一次更新的时间。
```

## `/customhud list`

```text
/customhud list
```

说明摘录：

```text
枚举所有自定义HUD元素。
```

## `/customhud move <id> <x> <y>`

```text
/customhud move <id> <x> <y>
```

说明摘录：

```text
移动指定的自定义HUD元素。
```

## `/customhud mover`

```text
/customhud mover
```

说明摘录：

```text
交互式移动界面。
```

## `/customhud refresh`

```text
/customhud refresh
```

说明摘录：

```text
刷新缓存。
```

## `/customhud all`

```text
/customhud all
```

说明摘录：

```text
输出所有元素的JSON。
```

## `/customhud set <id> <json...>`

```text
/customhud set <id> <json...>
```

说明摘录：

```text
设置某项自定义HUD元素。
```

## `/customhud modify <id> <key> <value...>`

```text
/customhud modify <id> <key> <value...>
```

说明摘录：

```text
设置某项自定义HUD元素的一对键值。
```

## `/customhud remove <id>`

```text
/customhud remove <id>
```

说明摘录：

```text
移除指定自定义HUD元素。
```

## `/customhud clear`

```text
/customhud clear
```

说明摘录：

```text
清空自定义HUD元素。
```

## `/lanzou <params...>`

```text
/lanzou <params...>
```

说明摘录：

```text
蓝奏云相关命令。
```

## `/lanzou getdesc <url> [pwd]`

```text
/lanzou getdesc <url> [pwd]
```

说明摘录：

```text
获取蓝奏云文件夹的描述。可选参数pwd为密码
```

## `/webjson <url...>`

```text
/webjson <url...>
```

说明摘录：

```text
获取网页JSON（必须返回JSON格式）然后用彩色格式化输出。
```

## `/formatjson [content...=clipboard]`

```text
/formatjson [content...=clipboard]
```

说明摘录：

```text
格式化彩色输出 JSON。如果无法解析，将会报错。
```

## `/formathtml [content...=clipboard]`

```text
/formathtml [content...=clipboard]
/formatwebpage [content...=clipboard]
```

说明摘录：

```text
格式化彩色输出网页。将会自动解析各成分。BUG 比较多，容易解析错误。
```

## `/formatc [content...=clipboard]`

```text
/formatc [content...=clipboard]
/formatcpp [content...=clipboard]
/formatpython [content...=clipboard]
/formatpy [content...=clipboard]
```

说明摘录：

```text
格式化彩色输出各种编程语言。将会自动解析各成分。
```

## `/formatcomment [content...=clipboard]`

```text
/formatcomment [content...=clipboard]
```

说明摘录：

```text
格式化彩色输出评论。会对@、[表情]和#话题进行解析。
```

## `/formatmarkdown [content...=clipboard]`

```text
/formatmarkdown [content...=clipboard]
/formatmd [content...=clipboard]
```

说明摘录：

```text
格式化彩色输出 Markdown 格式。/formatmd 输出时将会移除相关元素标记。
```

## `/aphorism`

```text
/aphorism
```

说明摘录：

```text
获取一句随机名言。
```

## `/mclog list`

```text
/mclog list
```

说明摘录：

```text
枚举当前的 Minecraft 实例以及对应的日志的情况。
```

## `/mclog clear`

```text
/mclog clear
```

说明摘录：

```text
清空 Minecraft 实例记录。
```

## `/mclog test [commandline...=clipboard]`

```text
/mclog test [commandline...=clipboard]
```

说明摘录：

```text
用于测试日志解析器对于给定的 commandline 命令行，能否正常提取需要的信息。会输出相关结果。如果commandline 参数不填，则从剪贴板中取文本。
```

## `/mccolor <presetSingleColor> <color1> <text...>`

```text
/mccolor <presetSingleColor> <color1> <text...>
/mccolor <presetDoubleColor> <color1> <color2> <text...>
/mccolorcopy <presetSingleColor> <color1> <text...>
/mccolorcopy <presetDoubleColor> <color1> <color2> <text...>
```

说明摘录：

```text
【PRO】构建Minecraft彩色文字。presetSingleColor 为单色预设，包括：single（单色）, fade（慢慢变黑）, brighten（慢慢变白）；presetDoubleColor 为双色预设，包括：gradient（渐变）, random（随机渐变程度）, sine（余弦波）, binary（轮流取色）, pulse（轮流，中间加一个过渡色）。会同时输出&为前缀和§为前缀的版本。颜色color1/color2支持使用：&hex或R;G;B或颜色英文名。/mccolorcopy 命令会同时复制&为前缀的版本的文本。例：/mccolorcopy gradient &2 255;127;0 Colorful text generated by Jackal!
```

## `/mcprofile <name>`

```text
/mcprofile <name>
/mcprofile <name1,name2,name3,...>
/mcprofile <uuid>
/mcprofile <uuid1,uuid2,uuid3,...>
```

说明摘录：

```text
获取 Minecraft 玩家档案信息。提供正版名称或UUID参数。
```

## `/generate <keyword>`

```text
/generate <keyword>
```

说明摘录：

```text
生成指定的内容。下面是你可以使用的关键词：
randint			随机整数
random			随机小写字母数字组合
user_agent		随机 User-Agent
aphorism		随机名言
poison			随机毒鸡汤
account			随机账号
code			随机密文
password		随机常见密码
card_type		随机卡类型
card_number		随机卡号
constellation	随机星座
sex				随机性别
birthday		随机生日
english_birthday	随机生日，英文格式
lunar_birthday	随机农历生日
chinese_name	随机中文名
english_allname		随机英文全名
english_firstname	随机英文名
english_middlename	随机英文中间名
english_lastname	随机英文姓氏
english_callname	随机英文称谓
english_name		随机英文名简称
address			随机地址（地理上）
english_address	随机英文地址
english_mobile	随机英文手机号
english_state	随机美国州
english_city	随机美国城市
english_position	随机英文职位
english_company		随机英文公司名
road/street		随机道路
email			随机假邮箱
job				随机职业
country			随机国家（包括英文名）
pcgame			电脑游戏
pegame			手机游戏
food			食物名
fruit			水果名
vegetable		蔬菜名
breakfast		早餐名
seafood			海鲜名
fish			鱼类名
animal			动物名
chinese_font	中文字体名
interest		随机兴趣
kfc				肯德基疯狂星期四文案
caihongpi		随机彩虹屁
dialog/dialogue	随机奇葩对话
duanzi			随机段子
tiangou			随机舔狗日记
xiaohua			随机笑话
qinghua			随机情话
saohua			随机骚话
zhanan			随机渣男语录
```

## `/privacydatabase <args...>`

```text
/privacydatabase <args...>
/privacydb <args...>
/pdb <args...>
```

说明摘录：

```text
隐私数据库命令。请使用 /help pdb 命令查看详细帮助。
```

## `/pdb init`

```text
/pdb init
```

说明摘录：

```text
初始化数据库。请在 Privacy Database 模块中设定目录路径。 
```

## `/pdb add [人名]`

```text
/pdb add [人名]
```

说明摘录：

```text
添加人员信息。输入命令后开启一个控制台的交互式菜单，如果指定人名参数，则菜单中人名就被填写；然后你可以选择菜单多种的某几个数据项进行填写。选择“保存”则录入退出。
```

## `/pdb delete/remove <人名>`

```text
/pdb delete/remove <人名>
```

说明摘录：

```text
移除人员信息。
```

## `/pdb list/enum/show/ls`

```text
/pdb list/enum/show/ls
```

说明摘录：

```text
输出所有人员信息。
```

## `/pdb list2d/table`

```text
/pdb list2d/table
```

说明摘录：

```text
以二维表形式输出所有人员信息。
```

## `/pdb query <人名>`

```text
/pdb query <人名>
```

说明摘录：

```text
查询人员的所有信息。每行都是键：值的格式。
```

## `/pdb search`

```text
/pdb search
```

说明摘录：

```text
根据指定信息查询人员信息。开启一个控制台交互式菜单，选择填写什么数据项筛选器，然后选择“开始筛选”筛选，然后输出结果。
```

## `/pdb set <name> <key> [value]`

```text
/pdb set <name> <key> [value]
```

说明摘录：

```text
设置指定人员信息。value 为空时清空该项 key。
```

## `/pdb upsert <name> <key> [value]`

```text
/pdb upsert <name> <key> [value]
```

说明摘录：

```text
设置指定人员信息。value 为空时清空该项 key。如果 name 不存在，则自动创建新纪录。
```

## `/pdb paste <format>`

```text
/pdb paste <format>
```

说明摘录：

```text
从剪贴板以指定格式导入数据。例如一百行学号空格姓名，输入/pdb paste student_id name即可批量录入。
```

## `/pdb exec <command>`

```text
/pdb exec <command>
```

说明摘录：

```text
执行数据库命令。
```

## `/pdb uninstall`

```text
/pdb uninstall
```

说明摘录：

```text
移除数据库。
```

## `/livestreaminfo`

```text
/livestreaminfo
```

说明摘录：

```text
输出当前直播间模块缓存信息。（JSON）
```

## `/list`

```text
/list
/modules
/module list
```

说明摘录：

```text
列出所有模块及相关信息。
```

## `/module <params...>`

```text
/module <params...>
```

说明摘录：

```text
模块相关命令。
```

## `/module hide <moduleName/id>`

```text
/module hide <moduleName/id>
```

说明摘录：

```text
从 ClickGUI (Dropdown/Neverlose/Imgui) 隐藏模块。支持模块名称和ID的模糊查找。
```

## `/module show <moduleName/id>`

```text
/module show <moduleName/id>
```

说明摘录：

```text
从 ClickGUI (Dropdown/Neverlose/Imgui) 显示模块。支持模块名称和ID的模糊查找。
```

## `/module showall`

```text
/module showall
```

说明摘录：

```text
将 ClickGUI 中所有已隐藏模块恢复为显示。
```

## `/module hidden`

```text
/module hidden
```

说明摘录：

```text
枚举当前在 ClickGUI 中被隐藏的所有模块。
```

## `/module query <moduleName/id>`

```text
/module query <moduleName/id>
```

说明摘录：

```text
模糊查找匹配的模块及其描述。如果想要查询模块配置，请使用 /config search 命令。
```

## `/arraylist [params...]`

```text
/arraylist [params...]
```

说明摘录：

```text
模块列表相关命令。不带参数时，切换 Arraylist 模块开关状态。
```

## `/arraylist hide <moduleName/id>`

```text
/arraylist hide <moduleName/id>
```

说明摘录：

```text
将指定模块在 Arraylist 中隐藏（修改模块配置项 hidden）。支持模糊匹配和模块ID。
```

## `/arraylist show <moduleName/id>`

```text
/arraylist show <moduleName/id>
```

说明摘录：

```text
将指定模块在 Arraylist 中显示（修改模块配置项 hidden）。支持模糊匹配和模块ID。
```

## `/arraylist showall`

```text
/arraylist showall
```

说明摘录：

```text
将所有在 Arraylist 中被隐藏的模块恢复为显示（即 hidden=false）。
```

## `/arraylist hidden`

```text
/arraylist hidden
```

说明摘录：

```text
枚举当前在 Arraylist 中被隐藏的所有模块。
```

## `/listmods [hproc/name/pid]`

```text
/listmods [hproc/name/pid]
/listmodules [hproc/name/pid]
```

说明摘录：

```text
启用枚举模块（指DLL等）功能。如果参数不填，则是模块配置中的进程。
```

## `/msbanners`

```text
/msbanners
```

说明摘录：

```text
预览所有 Metasploit 字符画。
```

## `/toggledownfall`

```text
/toggledownfall
```

说明摘录：

```text
切换晴雨状态。
```

## `/weather <clear/rain/thunder>`

```text
/weather <clear/rain/thunder>
```

说明摘录：

```text
切换天气状态。
```

## `/test [args...]`

```text
/test [args...]
```

说明摘录：

```text
测试命令。
```
