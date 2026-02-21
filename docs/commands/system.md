# 系统命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 322 组命令。

## 准备阶段

第一步：打开左侧菜单栏的「命令面板」
随后，在搜索框中输入命令前缀快速定位。

## 核心操作

### `/help [command...]`

```text
可用别名：
/help [command...]
/helpraw [command...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
显示命令的帮助信息。如果不填参数则会输出命令行参数并打开本文件 COMMANDS.TXT。
如果填写参数，则会从该文件中显示所有匹配以该命令开头，以空行结尾的段落并输出。
而 /helpraw 在英文下不会翻译中文为英文。
示例：/help kill
```

应用场景：

- 当你需要命令的帮助信息时，使用此命令

### `/helper [list]`

```text
可用别名：
/helper [list]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
显示所有的命令助手选项。命令助手选项，表示命令执行后可能会用到的相关命令，会自动加入这个列表。
```

应用场景：

- 当你需要所有的命令助手选项时，使用此命令

### `/helper use <option_key>`

```text
可用别名：
/helper use <option_key>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
使用键为 option_key 的命令助手选项。
```

应用场景：

- 当你需要使用键为 option_key 的命令助手选项时，使用此命令

### `/helper clear`

```text
可用别名：
/helper clear
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清空命令助手选项。
```

应用场景：

- 当你需要清空命令助手选项时，使用此命令

### `/about`

```text
可用别名：
/about
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
关于。
```

应用场景：

- 当你需要关于时，使用此命令

### `/async <command...>`

```text
可用别名：
/async <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
异步执行一条命令。
```

应用场景：

- 当你需要异步执行一条命令时，使用此命令

### `/multiline <command...>`

```text
可用别名：
/multiline <command...>
/ml <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
执行一条命令，命令可以多行。但是会打开一个输入框，你在里面编辑后按OK即可立即执行。
```

应用场景：

- 当你需要一条命令，命令可以多行时，使用此命令

### `/multijackal <commands...>`

```text
可用别名：
/multijackal <commands...>
/mj <commands...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
执行多条命令，用;;分隔，会依次执行，无论是否失败。
```

应用场景：

- 当你需要多条命令，用;;分隔，会依次执行，无论是否失败时，使用此命令

### `/multijackalinterrupt <commands...>`

```text
可用别名：
/multijackalinterrupt <commands...>
/mji <commands...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
执行多条命令，用;;分隔，遇到失败直接中止。
```

应用场景：

- 当你需要多条命令，用;;分隔，遇到失败直接中止时，使用此命令

### `/jackaloutput <command...>`

```text
可用别名：
/jackaloutput <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
输出执行这条命令的输出。（测试命令）
```

应用场景：

- 当你需要输出执行这条命令的输出时，使用此命令

### `/jackalspeak <command...>`

```text
可用别名：
/jackalspeak <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
讲述执行这条命令的输出。请避免执行输出过多的命令。
注意:
1. 只能获取到命令函数在返回前的输出，因为异步而在后面的输出并不能讲出来。
2. 无法获取命令函数调用的子进程的输出，例如执行一条CMD命令的输出（如果要读出一条CMD命令的输出，请使用/runspeak）
```

应用场景：

- 当你需要讲述执行这条命令的输出时，使用此命令

### `/ver`

```text
可用别名：
/ver
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看客户端和系统版本。
```

应用场景：

- 当你需要查看客户端和系统版本时，使用此命令

### `/exit`

```text
可用别名：
/exit
/quit
/ausgang
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
异步退出。
```

应用场景：

- 当你需要异步退出时，使用此命令

### `/exitsync`

```text
可用别名：
/exitsync
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
同步退出。
```

应用场景：

- 当你需要同步退出时，使用此命令

### `/notify [msg...]`

```text
可用别名：
/notify [msg...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
发出一条通知。
```

应用场景：

- 当你需要发出一条通知时，使用此命令

### `/notifydict [msg...]`

```text
可用别名：
/notifydict [msg...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
尝试在字典中找到对应的翻译词汇后，发出一条通知。
```

应用场景：

- 当你需要尝试在字典中找到对应的翻译词汇后，发出一条通知时，使用此命令

### `/chatbar add [msg...]`

```text
可用别名：
/chatbar add [msg...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
为聊天栏添加一条新消息。
```

应用场景：

- 当你需要为聊天栏添加一条新消息时，使用此命令

### `/chatbar clear`

```text
可用别名：
/chatbar clear
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清空聊天栏消息。
```

应用场景：

- 当你需要清空聊天栏消息时，使用此命令

### `/islandtip [msg...]`

```text
可用别名：
/islandtip [msg...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
在灵动岛上显示一条临时文本。
```

应用场景：

- 当你需要在灵动岛上显示一条临时文本时，使用此命令

### `/islandprogress <params...>`

```text
可用别名：
/islandprogress <params...>
/progress <params...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置灵动岛的进度条。详细参数请使用 /help progress
```

应用场景：

- 当你需要灵动岛的进度条时，使用此命令

### `/progress test <time_ms> [text...]`

```text
可用别名：
/progress test <time_ms> [text...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
测试灵动岛进度条。时间为 time_ms 毫秒， 文本为 text ，默认文本为 Sleeping...
```

应用场景：

- 当你需要测试灵动岛进度条时，使用此命令

### `/progress settext <text...>`

```text
可用别名：
/progress settext <text...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置灵动岛进度条文本。
```

应用场景：

- 当你需要灵动岛进度条文本时，使用此命令

### `/progress setvalue <percentage>`

```text
可用别名：
/progress setvalue <percentage>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置灵动岛进度条的进度（0~100）。
```

应用场景：

- 当你需要灵动岛进度条的进度（0~100）时，使用此命令

### `/progress addvalue <value>`

```text
可用别名：
/progress addvalue <value>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
增加灵动岛进度条的进度。
```

应用场景：

- 当你需要增加灵动岛进度条的进度时，使用此命令

### `/progress start`

```text
可用别名：
/progress start
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
开始灵动岛进度条。
```

应用场景：

- 当你需要开始灵动岛进度条时，使用此命令

### `/progress end`

```text
可用别名：
/progress end
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
结束灵动岛进度条。
```

应用场景：

- 当你需要结束灵动岛进度条时，使用此命令

### `/fancytext [content...]`

```text
可用别名：
/fancytext [content...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
发送一条花式文本。
```

应用场景：

- 当你需要发送一条花式文本时，使用此命令

### `/wintoast [msg...]`

```text
可用别名：
/wintoast [msg...]
/traytip [msg...]
/traywarn [msg...]
/trayerror [msg...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
使用托盘发送消息。/traywarn 发送警告，/trayerror 发送错误。
```

应用场景：

- 当你需要使用托盘发送消息时，使用此命令

### `/msgboxtip [msg...]`

```text
可用别名：
/msgboxtip [msg...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
弹出一个对话框，显示一条消息。
```

应用场景：

- 当你需要弹出一个对话框，显示一条消息时，使用此命令

### `/msgbox new/create [msg...]`

```text
可用别名：
/msgbox new/create [msg...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
创建一个可受 Dialog Physics 模块控制的对话框，显示msg消息。
```

应用场景：

- 当你需要创建一个可受 Dialog Physics 模块控制的对话框，显示msg消息时，使用此命令

### `/msgbox multicreate <cnt> [msg...]`

```text
可用别名：
/msgbox multicreate <cnt> [msg...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
创建 cnt 个可受 Dialog Physics 模块控制的对话框，显示msg消息。
```

应用场景：

- 当你需要创建 cnt 个可受 Dialog Physics 模块控制的对话框，显示msg消息时，使用此命令

### `/msgbox clear`

```text
可用别名：
/msgbox clear
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清空登记过的对话框。
```

应用场景：

- 当你需要清空登记过的对话框时，使用此命令

### `/msgbox list`

```text
可用别名：
/msgbox list
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举登记过的对话框信息。
```

应用场景：

- 当你需要枚举登记过的对话框信息时，使用此命令

### `/msgbox2 test`

```text
可用别名：
/msgbox2 test
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
测试对话框。
```

应用场景：

- 当你需要测试对话框时，使用此命令

### `/msgbox2 new/create [msg...]`

```text
可用别名：
/msgbox2 new/create [msg...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
创建一个对话框，显示msg消息。
```

应用场景：

- 当你需要创建一个对话框，显示msg消息时，使用此命令

### `/msgbox2 multicreate <cnt> [msg...]`

```text
可用别名：
/msgbox2 multicreate <cnt> [msg...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
创建 cnt 个对话框，显示msg消息。
```

应用场景：

- 当你需要创建 cnt 个对话框，显示msg消息时，使用此命令

### `/msgbox2 clear`

```text
可用别名：
/msgbox2 clear
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清空对话框。
```

应用场景：

- 当你需要清空对话框时，使用此命令

### `/variables`

```text
可用别名：
/variables
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
显示所有内置变量。如需列举环境变量，请使用 /set 命令。
```

应用场景：

- 当你需要所有内置变量时，使用此命令

### `/variables <enable>`

```text
可用别名：
/variables <enable>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
启用或禁用命令行的内置变量。使用时请用百分号包裹变量。enable 填写布尔值。
```

应用场景：

- 当你需要启用或禁用命令行的内置变量时，使用此命令

### `/set [args...]`

```text
可用别名：
/set [args...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
和dos命令set用法相同：
设置环境变量 /set key=value
枚举环境变量 /set
枚举A开头的环境变量 /set A
```

应用场景：

- 当你需要和dos命令set用法相同：时，使用此命令

### `/initassoc`

```text
可用别名：
/initassoc
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
初始化相关文件的文件关联。 (WIP)
```

应用场景：

- 当你需要初始化相关文件的文件关联时，使用此命令

### `/device help`

```text
可用别名：
/device help
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
显示/device命令帮助。
```

应用场景：

- 当你需要/device命令帮助时，使用此命令

### `/device audio [get]`

```text
可用别名：
/device audio [get]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取当前默认音频设备。
```

应用场景：

- 当你需要当前默认音频设备时，使用此命令

### `/devices`

```text
可用别名：
/devices
/device list/enum/show/display
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
显示系统设备列表。
```

应用场景：

- 当你需要系统设备列表时，使用此命令

### `/volume [args...]`

```text
可用别名：
/volume [args...]
/volume get [pid]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
如果不指定pid，则获取系统音量。否则获取指定进程音量。
```

应用场景：

- 当你需要如果不指定pid，则获取系统音量时，使用此命令

### `/volume enum/show/display/list`

```text
可用别名：
/volume enum/show/display/list
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
展示系统混音器。包括系统音量和各个进程音量。
```

应用场景：

- 当你需要展示系统混音器时，使用此命令

### `/volume set <volume>`

```text
可用别名：
/volume set <volume>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置系统音量 (0~100)
```

应用场景：

- 当你需要系统音量 (0~100)时，使用此命令

### `/volume set <pid> <volume>`

```text
可用别名：
/volume set <pid> <volume>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置某进程音量 (0~100)
```

应用场景：

- 当你需要某进程音量 (0~100)时，使用此命令

### `/music [path...]`

```text
可用别名：
/music [path...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
如果不指定参数，则切换 Music 模块。
如果指定参数，则同步播放指定的音乐。（只能是wav或mp3）
如果要异步播放，请使用 /async music [path...]
```

应用场景：

- 当你需要如果不指定参数，则切换 Music 模块时，使用此命令

### `/isomusic [path...]`

```text
可用别名：
/isomusic [path...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
使用音频隔离模式同步播放指定的音乐。（只能是wav或mp3）
如果要异步播放，请使用 /async isomusic [path...]
```

应用场景：

- 当你需要使用音频隔离模式同步播放指定的音乐时，使用此命令

### `/meme`

```text
可用别名：
/meme
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举所有梗。
```

应用场景：

- 当你需要枚举所有梗时，使用此命令

### `/meme <name>`

```text
可用别名：
/meme <name>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
同步触发一个梗。
```

应用场景：

- 当你需要同步触发一个梗时，使用此命令

### `/break`

```text
可用别名：
/break
/exitshell
/quitshell
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
关闭命令行 (Shell 模块)。
```

应用场景：

- 当你需要关闭命令行 (Shell 模块)时，使用此命令

### `/killshell`

```text
可用别名：
/killshell
/terminateshell
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
强制关闭命令行 (Shell 模块) ，会终止线程，可能会导致客户端不稳定，请注意。
```

应用场景：

- 当你需要强制关闭命令行 (Shell 模块) ，会终止线程，可能会导致客户端不稳定，请注意时，使用此命令

### `/assert <condition_expr...>`

```text
可用别名：
/assert <condition_expr...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
断言。如果条件表达式 condition_expr 为假，则终止当前命令执行环境。
对于一个批处理文件，会终止其执行。对于命令行，则只是报错。
对于条件表达式：
it
检查 it 的有效性。如果是句柄则检查句柄有效性，否则就是强制转换成 bool 类型。
proc_exists <pid/procname...>
检查进程是否存在。
```

应用场景：

- 当你需要断言时，使用此命令

### `/exclusive [enable]`

```text
可用别名：
/exclusive [enable]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
切换命令行沉浸模式。沉浸模式开启后，HUD将会隐藏。
enable 是布尔类型，不填则表示切换。
```

应用场景：

- 当你需要切换命令行沉浸模式时，使用此命令

### `/chatter <content...>`

```text
可用别名：
/chatter <content...>
/tchatter <content...>
/bchatter <content...>
/rchatter <content...>
/hchatter <content...>
/vchatter <content...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
发送一条弹幕。/tchatter 发送置顶弹幕。 /bchatter 发送置底弹幕。 /rchatter 发送反向弹幕。/hchatter 发送普通或反向弹幕。/vchatter 发送置顶或置底弹幕。
```

应用场景：

- 当你需要发送一条弹幕时，使用此命令

### `/danmakubuffer`

```text
可用别名：
/danmakubuffer
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
显示弹幕池缓冲区。
```

应用场景：

- 当你需要弹幕池缓冲区时，使用此命令

### `/title <content...>`

```text
可用别名：
/title <content...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
显示一条标题信息。
```

应用场景：

- 当你需要一条标题信息时，使用此命令

### `/debugstr [msg...]`

```text
可用别名：
/debugstr [msg...]
/dbgstr [msg...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
使用 OutputDebugString 输出一条调试信息。
```

应用场景：

- 当你需要使用 OutputDebugString 输出一条调试信息时，使用此命令

### `/save`

```text
可用别名：
/save
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
立即保存客户端配置。
```

应用场景：

- 当你需要立即保存客户端配置时，使用此命令

### `/chinese`

```text
可用别名：
/chinese
/cn
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
打开汉化。
```

应用场景：

- 当你需要打开汉化时，使用此命令

### `/english`

```text
可用别名：
/english
/en
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
关闭汉化。
```

应用场景：

- 当你需要关闭汉化时，使用此命令

### `/hide`

```text
可用别名：
/hide
/hidden
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
隐藏。（启用Hidden模块）
```

应用场景：

- 当你需要隐藏时，使用此命令

### `/admin`

```text
可用别名：
/admin
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
以管理员身份自启。
```

应用场景：

- 当你需要以管理员身份自启时，使用此命令

### `/uacbypass`

```text
可用别名：
/uacbypass
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
调用UACBypass模块，绕过UAC获取管理员权限。
```

应用场景：

- 当你需要调用UACBypass模块，绕过UAC获取管理员权限时，使用此命令

### `/system`

```text
可用别名：
/system
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
以系统身份自启。
```

应用场景：

- 当你需要以系统身份自启时，使用此命令

### `/ti`

```text
可用别名：
/ti
/trustedinstaller
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
以受信任安装者权限自启。
```

应用场景：

- 当你需要以受信任安装者权限自启时，使用此命令

### `/uiaccess [cmdline...]`

```text
可用别名：
/uiaccess [cmdline...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
以 UIAccess 权限运行。如果不指定参数，则为自启。
```

应用场景：

- 当你需要以 UIAccess 权限运行时，使用此命令

### `/enable <ModuleName>`

```text
可用别名：
/enable <ModuleName>
/e <ModuleName>
/disable <ModuleName>
/d <ModuleName>
/toggle <ModuleName>
/t <ModuleName>
/<ModuleName>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
改变模块开关状态。
```

应用场景：

- 当你需要改变模块开关状态时，使用此命令

### `/enables`

```text
可用别名：
/enables
/enabled
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看启用了哪些模块。
```

应用场景：

- 当你需要查看启用了哪些模块时，使用此命令

### `/timestamp [timestamp=now]`

```text
可用别名：
/timestamp [timestamp=now]
/time [params.../timestamp=now]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看当前时间戳及其字符串形式。/time 还可以有很多子命令。
```

应用场景：

- 当你需要查看当前时间戳及其字符串形式时，使用此命令

### `/time sync [method=web/memory]`

```text
可用别名：
/time sync [method=web/memory]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
同步系统时间。需要管理员权限。web表示用网络时间同步，memory表示用内存时间同步。使用该命令不会修改 TimeManager 模块的开关状态。
```

应用场景：

- 当你需要同步系统时间时，使用此命令

### `/time restore [method=web/memory]`

```text
可用别名：
/time restore [method=web/memory]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
关闭 TimeManager 模块后再执行 /time sync。需要管理员权限。
```

应用场景：

- 当你需要关闭 TimeManager 模块后再执行 /time sync时，使用此命令

### `/time set <timestamp/string>`

```text
可用别名：
/time set <timestamp/string>
/time set <year> <month> <day> <hour> <minute> <second>
/time set <hour> <minute> <second>
/time set <hour> <minute>
/time setonce <timestamp/string>
/time setonce <year> <month> <day> <hour> <minute> <second>
/time setonce <hour> <minute> <second>
/time setonce <hour> <minute>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

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

应用场景：

- 当你需要系统时间时，使用此命令

### `/time memory`

```text
可用别名：
/time memory
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
显示当前 TimeManager 存储到内存中的修改数据。
```

应用场景：

- 当你需要当前 TimeManager 存储到内存中的修改数据时，使用此命令

### `/time speed [value]`

```text
可用别名：
/time speed [value]
/time accelspeed [value]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看或设置 TimeManager 的加速倍率（Acceleration Speed）。不指定 value 时仅显示当前模式和加速倍率。
```

应用场景：

- 当你需要查看或设置 TimeManager 的加速倍率（Acceleration Speed）时，使用此命令

### `/time accelerate [speed]`

```text
可用别名：
/time accelerate [speed]
/time accel [speed]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
切换 TimeManager 到 Accelerated 模式并启用模块。需要管理员权限。该模式只修改时间流速，不直接设置固定时间点和偏移量。
也可以不填 speed，这时使用 TimeManager 配置中的 Acceleration Speed。
如果当前模式属于 Offset 系列，则会切换到 Offset Accelerated；如果属于 Set 系列，则会切换到 Set Accelerated。
```

应用场景：

- 当你需要切换 TimeManager 到 Accelerated 模式并启用模块时，使用此命令

### `/time offset <expressions...>`

```text
可用别名：
/time offset <expressions...>
/time offsetonce <expressions...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
对系统时间进行偏移。需要管理员权限。offset 会打开 TimeManager 模块且自动修改模块配置使得符合你的命令参数。而 offsetonce 为单次操作，不会打开 TimeManager 模块。expressions 表达式需要符合下面的格式：
单位操作符数值
单位包括：year=yr=y, month=mon, day=d, hour=hr=h, minute=min=m, second=sec=s
操作符包括：+ - =  （其中如果使用=，则用算法将其转为+或-）
数值就是纯数字。示例：/time offset hr+1 m-10 sec=50   表示时间+1小时，-10分钟，秒设为50
```

应用场景：

- 当你需要对系统时间进行偏移时，使用此命令

### `/err`

```text
可用别名：
/err
/error
/lasterr
/lasterror
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看上一个 Win32 错误。
```

应用场景：

- 当你需要查看上一个 Win32 错误时，使用此命令

### `/sleep <duration>`

```text
可用别名：
/sleep <duration>
/sleepms <duration>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
等待 duration 毫秒。
```

应用场景：

- 当你需要等待 duration 毫秒时，使用此命令

### `/sleeps <duration>`

```text
可用别名：
/sleeps <duration>
/sleepsec <duration>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
等待 duration 秒。可以是小数。
```

应用场景：

- 当你需要等待 duration 秒时，使用此命令

### `/it`

```text
可用别名：
/it
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
具体查看代词 it 的情况，将会详细展开句柄的信息。
```

应用场景：

- 当你需要具体查看代词 it 的情况，将会详细展开句柄的信息时，使用此命令

### `/quickrun <command...>`

```text
可用别名：
/quickrun <command...>
/quickrunex <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
快速执行。如果不认识这个程序，则会自动开始全盘扫描并记录。/quickrunex 始终让用户选择。如果想中止扫描，请手动关闭 QuickRun 模块。
```

应用场景：

- 当你需要快速执行时，使用此命令

### `/cmd [param...]`

```text
可用别名：
/cmd [param...]
/runcmd [param...]
/newcmd [param...]
/execcmd [param...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
运行命令提示符。
- /cmd, /runcmd: 同步
- /newcmd: 异步，新窗口
- /execcmd: 异步，同一个窗口
```

应用场景：

- 当你需要运行命令提示符时，使用此命令

### `/cmds`

```text
可用别名：
/cmds
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看所有命令提示符的进程信息。
```

应用场景：

- 当你需要查看所有命令提示符的进程信息时，使用此命令

### `/killcmd`

```text
可用别名：
/killcmd
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
杀死所有命令提示符。
```

应用场景：

- 当你需要杀死所有命令提示符时，使用此命令

### `/killps`

```text
可用别名：
/killps
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
杀死所有 PowerShell。
```

应用场景：

- 当你需要杀死所有 PowerShell时，使用此命令

### `/autostart`

```text
可用别名：
/autostart
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
切换该模块。
```

应用场景：

- 当你需要切换该模块时，使用此命令

### `/autostart check`

```text
可用别名：
/autostart check
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
检查三个地方的开机自启是否开启：注册表、服务、计划任务。
```

应用场景：

- 当你需要检查三个地方的开机自启是否开启：注册表、服务、计划任务时，使用此命令

### `/autostart enable [method]`

```text
可用别名：
/autostart enable [method]
/autostart add [method]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
开启某种方法的开机自启。需要管理员权限。
```

应用场景：

- 当你需要开启某种方法的开机自启时，使用此命令

### `/autostart disable [method]`

```text
可用别名：
/autostart disable [method]
/autostart remove [method]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
关闭某种方法的开机自启。需要管理员权限。
```

应用场景：

- 当你需要关闭某种方法的开机自启时，使用此命令

### `/hexview [text...]`

```text
可用别名：
/hexview [text...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
十六进制查看字符串。如果不指定参数则读取剪贴板文本。
```

应用场景：

- 当你需要十六进制查看字符串时，使用此命令

### `/wiki <term>`

```text
可用别名：
/wiki <term>
/wikipedia <term>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
【PRO】在 Wikipedia 上搜索有关词汇的信息。
```

应用场景：

- 当你需要【PRO】在 Wikipedia 上搜索有关词汇的信息时，使用此命令

### `/word <word>`

```text
可用别名：
/word <word>
/dict <word>
/dictionary <word>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
【PRO】在字典API查询一个英语单词的释义并输出。包括音标，释义，例句等。
```

应用场景：

- 当你需要【PRO】在字典API查询一个英语单词的释义并输出时，使用此命令

### `/textures`

```text
可用别名：
/textures
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看已加载的部分贴图。
```

应用场景：

- 当你需要查看已加载的部分贴图时，使用此命令

### `/texture <name...>`

```text
可用别名：
/texture <name...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
导出指定的贴图到 output 文件夹下。
```

应用场景：

- 当你需要导出指定的贴图到 output 文件夹下时，使用此命令

### `/grep [options...] pattern [files...]`

```text
可用别名：
/grep [options...] pattern [files...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

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

应用场景：

- 当你需要查找文件里符合条件的字符串或正则表达式时，使用此命令

### `/record`

```text
可用别名：
/record
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
显示缓存内容。
```

应用场景：

- 当你需要缓存内容时，使用此命令

### `/profile`

```text
可用别名：
/profile
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看当前档案名称。
```

应用场景：

- 当你需要查看当前档案名称时，使用此命令

### `/profile list`

```text
可用别名：
/profile list
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举所有档案。
```

应用场景：

- 当你需要枚举所有档案时，使用此命令

### `/profile save`

```text
可用别名：
/profile save
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
保存当前档案。注意，默认档案不能修改，将会新建一个档案。
```

应用场景：

- 当你需要保存当前档案时，使用此命令

### `/profile load <name...>`

```text
可用别名：
/profile load <name...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
加载指定档案。
```

应用场景：

- 当你需要加载指定档案时，使用此命令

### `/profile checkonline <name...>`

```text
可用别名：
/profile checkonline <name...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
检查指定在线档案是否存在。
```

应用场景：

- 当你需要检查指定在线档案是否存在时，使用此命令

### `/profile upload [name...]`

```text
可用别名：
/profile upload [name...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
上传当前的档案到在线文本数据库。如果不指定名称参数，则会使用随机名称。档案名称和内容都将会加密。
注意：在线文本数据库属于他人免费搭建，我不能保证其寿命，请不要过度依赖在线档案功能。
```

应用场景：

- 当你需要上传当前的档案到在线文本数据库时，使用此命令

### `/profile download [name...]`

```text
可用别名：
/profile download [name...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
从在线文本数据库下载指定的在线档案到config文件夹。如果有重名文件将会添加后缀。
```

应用场景：

- 当你需要从在线文本数据库下载指定的在线档案到config文件夹时，使用此命令

### `/profile useonline [name...]`

```text
可用别名：
/profile useonline [name...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
从在线文本数据库下载指定的在线档案到config文件夹并加载。如果有重名文件将会添加后缀。
```

应用场景：

- 当你需要从在线文本数据库下载指定的在线档案到config文件夹并加载时，使用此命令

### `/config <params...>`

```text
可用别名：
/config <params...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
配置项的相关操作命令。使用 /config ui 命令进入一个交互式界面。如果你要操作配置档案，请使用 /profile 命令。
```

应用场景：

- 当你需要配置项的相关操作命令时，使用此命令

### `/config list <moduleName>`

```text
可用别名：
/config list <moduleName>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举一个模块的所有配置选项。也可以填 config/gui/hud/sound
```

应用场景：

- 当你需要枚举一个模块的所有配置选项时，使用此命令

### `/config get <moduleName> <keyName...>`

```text
可用别名：
/config get <moduleName> <keyName...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取一个模块（或config/gui/hud/sound）的某一个选项。支持模糊匹配：
若相似度 >75% 且唯一，或第一名比第二名高 40% 以上，会自动选中并提示。
keyName 不区分大小写，可以去除空格。
```

应用场景：

- 当你需要一个模块（或config/gui/hud/sound）的某一个选项时，使用此命令

### `/config search <moduleName> <keyName...>`

```text
可用别名：
/config search <moduleName> <keyName...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
模糊查找一个模块（或config/gui/hud/sound）的某一个或几个选项。keyName 不区分大小写，可以去除空格。只要某个选项的键包含该字符串即可。
```

应用场景：

- 当你需要模糊查找一个模块（或config/gui/hud/sound）的某一个或几个选项时，使用此命令

### `/config set <moduleName> <keyName> <rawValue...>`

```text
可用别名：
/config set <moduleName> <keyName> <rawValue...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置一个模块（或config/gui/hud/sound）的某一个选项。支持 moduleName/keyName/value（ComboBox）模糊匹配，
自动匹配时会给出提示。rawValue 是原始值，字符串必须用双引号
且转义字符必须转义。数字不可以添加字面量后缀。
如果该选项值类型为 ComboBox ，则填写选中的选项，不需要双引号。
如果为 KeyBind，则填写键名，如果为组合快捷键，则用逗号或分号分隔。例如：Ctrl,Alt,5。如果取消绑定，则为 None, Null, Empty 或 Unbound 任意一个关键字。
```

应用场景：

- 当你需要一个模块（或config/gui/hud/sound）的某一个选项时，使用此命令

### `/config reset <moduleName> [keyName...]`

```text
可用别名：
/config reset <moduleName> [keyName...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
重置一个模块（或config/gui/hud/sound），或者这个模块的某一个值。支持 moduleName/keyName 模糊匹配，
自动匹配时会给出提示。keyName 不区分大小写，可以去除空格。
例如重置 Time Display 模块： /config reset timedisplay
```

应用场景：

- 当你需要重置一个模块（或config/gui/hud/sound），或者这个模块的某一个值时，使用此命令

### `/config ui <moduleName>`

```text
可用别名：
/config ui <moduleName>
/config interactive <moduleName>
/config pick <moduleName>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

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

应用场景：

- 当你需要进入交互式配置界面（彩色输出，_getch 操作）：时，使用此命令

### `/gui`

```text
可用别名：
/gui
/gui toggle
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
打开或关闭 GUI。
```

应用场景：

- 当你需要打开或关闭 GUI时，使用此命令

### `/gui style`

```text
可用别名：
/gui style
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查询现在的GUI风格。
```

应用场景：

- 当你需要查询现在的GUI风格时，使用此命令

### `/gui style <style>`

```text
可用别名：
/gui style <style>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置现在的GUI风格（default/neverlose/imgui）
```

应用场景：

- 当你需要现在的GUI风格（default/neverlose/imgui）时，使用此命令

### `/binds`

```text
可用别名：
/binds
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看所有模块的按键绑定（bind, bind (Enable), bind (Disable)）
```

应用场景：

- 当你需要查看所有模块的按键绑定（bind, bind (Enable), bind (Disable)）时，使用此命令

### `/bind <moduleName> <keyBind>`

```text
可用别名：
/bind <moduleName> <keyBind>
/bindenable <moduleName> <keyBind>
/binddisable <moduleName> <keyBind>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
绑定单个模块的按键。bind 表示开关按键， bind (Enable) 表示开按键， bind (Disable) 表示关按键。
```

应用场景：

- 当你需要绑定单个模块的按键时，使用此命令

### `/encrypt <method> [content...]`

```text
可用别名：
/encrypt <method> [content...]
/decrypt <method> [content...]
/encryptcopy <method> [content...]
/decryptcopy <method> [content...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

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

应用场景：

- 当你需要用指定方法加密或解密一行文本时，使用此命令

### `/encryptor [content...]`

```text
可用别名：
/encryptor [content...]
/decryptor [content...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
没有参数时，切换加密器模块状态。否则，对 content 文本进行加密或解密。方式为加密器模块配置中选择的方法。
```

应用场景：

- 当你需要没有参数时，切换加密器模块状态时，使用此命令

### `/abra [args...]`

```text
可用别名：
/abra [args...]
/abracadabra [args...]
/abracopy [args...]
/abracadabracopy [args...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
调用魔曰加密器进行指定的操作。由于魔曰原仓库开源协议的限制，Jackal客户端没有内置该功能，你需要单独下载一个开源的exe。路径需要在 Encryptor 加密器模块中设置。后两条带copy的命令会在成功后复制结果。args 填运行参数。填写/?查看帮助。提示：/abra -e/-d [-k <key>] -i <text...>
```

应用场景：

- 当你需要调用魔曰加密器进行指定的操作时，使用此命令

### `/arch [hprocess]`

```text
可用别名：
/arch [hprocess]
/bits [hprocess]
/isx86 [hprocess]
/isx64 [hprocess]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
若没有参数，则查看系统架构。
若有参数，则查看指定进程架构。
```

应用场景：

- 当你需要若没有参数，则查看系统架构时，使用此命令

### `/inject <hprocess> <dllpath...>`

```text
可用别名：
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

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
向指定进程注入DLL。三种形式分别对应：CreateRemoteThread, NtCreateThreadEx, QueueUserAPC 注入方法。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。
```

应用场景：

- 当你需要向指定进程注入DLL时，使用此命令

### `/uninject <hprocess> <dllname>`

```text
可用别名：
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

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
向指定进程卸载DLL。三种形式分别对应：CreateRemoteThread, NtCreateThreadEx, QueueUserAPC 卸载方法。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。
```

应用场景：

- 当你需要向指定进程卸载DLL时，使用此命令

### `/rinject <hprocess> <dllpath...>`

```text
可用别名：
/rinject <hprocess> <dllpath...>
/rinject2 <hprocess> <dllpath...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
简单的DLL反射式注入。后面写2时，将调用外部 loader.exe 进行注入。
```

应用场景：

- 当你需要简单的DLL反射式注入时，使用此命令

### `/remoterun`

```text
可用别名：
/remoterun
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
切换 RemoteRun 模块。
```

应用场景：

- 当你需要切换 RemoteRun 模块时，使用此命令

### `/remoterun <hprocess> <command...>`

```text
可用别名：
/remoterun <hprocess> <command...>
/remoterun32 <hprocess> <command...>
/remoterun64 <hprocess> <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
注入指定进程使之运行指定的命令。
如果后面写 32 或 64，将不自动判断进程架构，而是根据指定架构进行操作。
```

应用场景：

- 当你需要注入指定进程使之运行指定的命令时，使用此命令

### `/injectex <prefab> <hprocess> [parameters...]`

```text
可用别名：
/injectex <prefab> <hprocess> [parameters...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
不借助DLL的其他注入操作。
参数 prefab 可以为以下之一：
	exit: 退出。
```

应用场景：

- 当你需要不借助DLL的其他注入操作时，使用此命令

### `/injectex exit <hprocess>`

```text
可用别名：
/injectex exit <hprocess>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
	terminate: 终止另外一个进程。
```

应用场景：

- 当你需要	terminate: 终止另外一个进程时，使用此命令

### `/injectex terminate <hprocess> <target_hprocess>`

```text
可用别名：
/injectex terminate <hprocess> <target_hprocess>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
	msgbox: 弹窗。
```

应用场景：

- 当你需要	msgbox: 弹窗时，使用此命令

### `/injectex msgbox <hprocess> <text> [title="Inject"] [style=64]`

```text
可用别名：
/injectex msgbox <hprocess> <text> [title="Inject"] [style=64]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
（该命令在原始文档中未提供额外说明）
```

应用场景：

- 当你需要（该命令在原始文档中未提供额外说明）时，使用此命令

### `/locate [path...]`

```text
可用别名：
/locate [path...]
/showie [path...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
在资源管理器中定位一个文件路径。两者的区别是，/locate 是打开并选中，/showie 是打开所在目录。
```

应用场景：

- 当你需要在资源管理器中定位一个文件路径时，使用此命令

### `/showir <params...>`

```text
可用别名：
/showir <params...>
/regedit [params...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
在注册表编辑器中定位一个值或项的路径。参数params必须是一个JSON：
{"root":"根","path":"路径","value":"值名称，可选","uacbypass":是否允许绕过UAC}
例如：/regedit {"root":"HKEY_LOCAL_MACHINE","path":"SOFTWARE\\Policies\\Microsoft\\TPM","value":"OSManagedAuthLevel","uacbypass":true}
```

应用场景：

- 当你需要在注册表编辑器中定位一个值或项的路径时，使用此命令

### `/getsize <path...>`

```text
可用别名：
/getsize <path...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取文件或文件夹的大小。
```

应用场景：

- 当你需要文件或文件夹的大小时，使用此命令

### `/exe <command...>`

```text
可用别名：
/exe <command...>
/exec <command...>
/runasync <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
异步执行命令。
```

应用场景：

- 当你需要异步执行命令时，使用此命令

### `/run <command...>`

```text
可用别名：
/run <command...>
/execsync <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
同步执行命令。不推荐使用。
```

应用场景：

- 当你需要同步执行命令时，使用此命令

### `/runspeak <command...>`

```text
可用别名：
/runspeak <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
同步执行命令并讲述其输出。
```

应用场景：

- 当你需要同步执行命令并讲述其输出时，使用此命令

### `/iarun <params...>`

```text
可用别名：
/iarun <params...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
交互式命令运行。params 为相关参数。
```

应用场景：

- 当你需要交互式命令运行时，使用此命令

### `/iarun start <command...>`

```text
可用别名：
/iarun start <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
启动交互式命令运行。你可以用指令操纵对它的行为。
```

应用场景：

- 当你需要启动交互式命令运行时，使用此命令

### `/iarun restart <command...>`

```text
可用别名：
/iarun restart <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
重新启动交互式命令运行。如果正在运行，会先关闭。
```

应用场景：

- 当你需要重新启动交互式命令运行时，使用此命令

### `/iarun info`

```text
可用别名：
/iarun info
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
输出当前交互式命令运行的状态信息。
```

应用场景：

- 当你需要输出当前交互式命令运行的状态信息时，使用此命令

### `/iarun input/in <content...>`

```text
可用别名：
/iarun input/in <content...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
向交互式进程的 STDIN 发送内容。
```

应用场景：

- 当你需要向交互式进程的 STDIN 发送内容时，使用此命令

### `/iarun output/out <content...>`

```text
可用别名：
/iarun output/out <content...>
/iarun outputpatient <content...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
从交互式进程的 STDOUT 读取内容并输出到控制台。output/out 会有一个5秒的超时时间，而使用 outputpatient 会永远等待，所以不推荐。
```

应用场景：

- 当你需要从交互式进程的 STDOUT 读取内容并输出到控制台时，使用此命令

### `/iarun stop`

```text
可用别名：
/iarun stop
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
关闭当前交互式命令。非强制。
```

应用场景：

- 当你需要关闭当前交互式命令时，使用此命令

### `/iarun kill`

```text
可用别名：
/iarun kill
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
强制关闭当前交互式命令的进程。
```

应用场景：

- 当你需要强制关闭当前交互式命令的进程时，使用此命令

### `/legitexec <command...>`

```text
可用别名：
/legitexec <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
模拟用户异步执行命令。旨在绕过某些杀软拦截。
```

应用场景：

- 当你需要模拟用户异步执行命令时，使用此命令

### `/parentspoofexec <command...>`

```text
可用别名：
/parentspoofexec <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
父进程欺骗异步执行命令。父进程会在一些合适的进程里挑选。
```

应用场景：

- 当你需要父进程欺骗异步执行命令时，使用此命令

### `/sudo <command...>`

```text
可用别名：
/sudo <command...>
/sudobypass <command...>
/sudobypassex <method> <command...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
确保以管理员身份同步执行命令。如果使用 /sudobypass，则会调用用户账户控制绕过手段。 /sudobypassex 允许你指定绕过方法。
```

应用场景：

- 当你需要确保以管理员身份同步执行命令时，使用此命令

### `/runps <path...>`

```text
可用别名：
/runps <path...>
/runpsfile <path...>
/execps <path...>
/execpsfile <path...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
绕过执行策略运行一个后缀名为 .ps1 的 PowerShell 脚本。前者同步，后者异步。
```

应用场景：

- 当你需要绕过执行策略运行一个后缀名为 .ps1 的 PowerShell 脚本时，使用此命令

### `/runpsbase64 <base64>`

```text
可用别名：
/runpsbase64 <base64>
/execpsbase64 <base64>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
执行 Base64 加密过的 PowerShell 命令。前者同步，后者异步。
```

应用场景：

- 当你需要 Base64 加密过的 PowerShell 命令时，使用此命令

### `/exebegin`

```text
可用别名：
/exebegin
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
输入该命令后，用户将进入命令拼接模式，以后输入的内容将会持续拼接到缓冲区。
```

应用场景：

- 当你需要输入该命令后，用户将进入命令拼接模式，以后输入的内容将会持续拼接到缓冲区时，使用此命令

### `/execommit`

```text
可用别名：
/execommit
/exedone
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
结束命令拼接模式并异步执行拼接好的命令。
```

应用场景：

- 当你需要结束命令拼接模式并异步执行拼接好的命令时，使用此命令

### `/execlear`

```text
可用别名：
/execlear
/exereset
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清空拼接的命令并退出命令拼接模式。
```

应用场景：

- 当你需要清空拼接的命令并退出命令拼接模式时，使用此命令

### `/exeaddspace`

```text
可用别名：
/exeaddspace
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
在拼接的命令末尾添加一个空格。
```

应用场景：

- 当你需要在拼接的命令末尾添加一个空格时，使用此命令

### `/speak [content...=clipboard]`

```text
可用别名：
/speak [content...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
使用讲述人说话。
```

应用场景：

- 当你需要使用讲述人说话时，使用此命令

### `/speakqueue`

```text
可用别名：
/speakqueue
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看讲述人缓冲队列。
```

应用场景：

- 当你需要查看讲述人缓冲队列时，使用此命令

### `/speakqueue clear`

```text
可用别名：
/speakqueue clear
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清空讲述人缓冲队列。
```

应用场景：

- 当你需要清空讲述人缓冲队列时，使用此命令

### `/speakvoice`

```text
可用别名：
/speakvoice
/speakvoice list
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看所有讲述人音色。
```

应用场景：

- 当你需要查看所有讲述人音色时，使用此命令

### `/shutdown [args...]`

```text
可用别名：
/shutdown [args...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
关机。如果不写参数则为立即关机。如果写参数，则参数和 cmd 命令相同。
```

应用场景：

- 当你需要关机时，使用此命令

### `/logoff`

```text
可用别名：
/logoff
/logout
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
立即注销 Windows。
```

应用场景：

- 当你需要立即注销 Windows时，使用此命令

### `/reboot`

```text
可用别名：
/reboot
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
立即重启 Windows。
```

应用场景：

- 当你需要立即重启 Windows时，使用此命令

### `/chat [content...=clipboard]`

```text
可用别名：
/chat [content...=clipboard]
/chatstream [content...=clipboard]
/chat0 [content=...=clipboard]
/chatstream0 [content...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
与 AI 对话。你需要在 AI Settings 模块中配置好 APIKEY 等参数。
```

应用场景：

- 当你需要与 AI 对话时，使用此命令

### `/chatstream 命令强制以流式输出。`

```text
可用别名：
/chatstream 命令强制以流式输出。
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
其中 /chat0 和 /chatstream0 为单次对话，没有上下文，无法持续对话。
其余默认会话为default，支持上下文，但是有上限。你可以使用/chathistory switch命令切换会话。
```

应用场景：

- 当你需要其中 /chat0 和 /chatstream0 为单次对话，没有上下文，无法持续对话时，使用此命令

### `/chathistory`

```text
可用别名：
/chathistory
/chathistory get [session=cur_chat_session]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
输出会话聊天记录。默认为当前选中的会话。
```

应用场景：

- 当你需要输出会话聊天记录时，使用此命令

### `/chathistory list`

```text
可用别名：
/chathistory list
/chathistory enum
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举所有聊天会话及其大小。
```

应用场景：

- 当你需要枚举所有聊天会话及其大小时，使用此命令

### `/chathistory switch [session=default]`

```text
可用别名：
/chathistory switch [session=default]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
切换聊天会话。不同的会话会记录不同的聊天记录。
```

应用场景：

- 当你需要切换聊天会话时，使用此命令

### `/chathistory pop [session=cur_chat_session]`

```text
可用别名：
/chathistory pop [session=cur_chat_session]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
删除指定聊天会话的最后一问答。这样AI就不知道你上一句发的是什么了，但是仍能知道之前的上下文。
```

应用场景：

- 当你需要删除指定聊天会话的最后一问答时，使用此命令

### `/chathistory clear [session=cur_chat_session]`

```text
可用别名：
/chathistory clear [session=cur_chat_session]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清除指定聊天会话记录（上下文）。
```

应用场景：

- 当你需要清除指定聊天会话记录（上下文）时，使用此命令

### `/forget`

```text
可用别名：
/forget
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
等价于 /chathistory clear livestream
```

应用场景：

- 当你需要等价于 /chathistory clear livestream时，使用此命令

### `/aitool <tool> [args...]`

```text
可用别名：
/aitool <tool> [args...]
/ait <tool> [args...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
使用一个人工智能工具。tool为工具名，args为工具的参数。
```

应用场景：

- 当你需要使用一个人工智能工具时，使用此命令

### `/aitool translate <content...=clipboard>`

```text
可用别名：
/aitool translate <content...=clipboard>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
使用人工智能翻译。
```

应用场景：

- 当你需要使用人工智能翻译时，使用此命令

### `/aisettings`

```text
可用别名：
/aisettings
/ai
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看 AI 配置。
```

应用场景：

- 当你需要查看 AI 配置时，使用此命令

### `/aisettings model/models`

```text
可用别名：
/aisettings model/models
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看当前选中的 AI 模型名称。
```

应用场景：

- 当你需要查看当前选中的 AI 模型名称时，使用此命令

### `/aisettings model <name>`

```text
可用别名：
/aisettings model <name>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置当前选中的 AI 模型名称。
```

应用场景：

- 当你需要当前选中的 AI 模型名称时，使用此命令

### `/aisettings local`

```text
可用别名：
/aisettings local
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置当前 AI 类型为本地大模型。
```

应用场景：

- 当你需要当前 AI 类型为本地大模型时，使用此命令

### `/aisettings localmodels`

```text
可用别名：
/aisettings localmodels
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看本地 Ollama 模型列表。
```

应用场景：

- 当你需要查看本地 Ollama 模型列表时，使用此命令

### `/aisettings custom`

```text
可用别名：
/aisettings custom
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置当前 AI 类型为自定义在线大模型API。
```

应用场景：

- 当你需要当前 AI 类型为自定义在线大模型API时，使用此命令

### `/agent list/tasks`

```text
可用别名：
/agent list/tasks
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举所有可用的人工智能代理任务预设。每一个任务规定了工具的使用范围，可以让AI更专注地调用这方面的工具。
```

应用场景：

- 当你需要枚举所有可用的人工智能代理任务预设时，使用此命令

### `/agent task <task>`

```text
可用别名：
/agent task <task>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查询一个任务可以用的工具列表。
```

应用场景：

- 当你需要查询一个任务可以用的工具列表时，使用此命令

### `/agent set <preparation> <value>`

```text
可用别名：
/agent set <preparation> <value>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
有一些工具需要准备。你可以用这条命令设置某项准备的值。
```

应用场景：

- 当你需要有一些工具需要准备时，使用此命令

### `/agent tools`

```text
可用别名：
/agent tools
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举所有工具。
```

应用场景：

- 当你需要枚举所有工具时，使用此命令

### `/agent tool <tool>`

```text
可用别名：
/agent tool <tool>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查询一个工具的使用方法。
```

应用场景：

- 当你需要查询一个工具的使用方法时，使用此命令

### `/agent usetool <tool> <params_json>`

```text
可用别名：
/agent usetool <tool> <params_json>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
调用一个工具。参数必须用JSON表示
```

应用场景：

- 当你需要调用一个工具时，使用此命令

### `/agent <task> <description...>`

```text
可用别名：
/agent <task> <description...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
人工智能代理，完成特定任务。注意人工智能是可以调用命令操作你的计算机的。你需要自己承担风险。task 为任务分类，description 为任务具体需求，也就是你的输入。如果你想使用所有工具，可以使用名为 general 的任务。
```

应用场景：

- 当你需要人工智能代理，完成特定任务时，使用此命令

### `/window [hwnd]`

```text
可用别名：
/window [hwnd]
/wnd [hwnd]
/hwnd [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取一个窗口句柄存储到代词 it 中。首参可以 jc_hwnd 表示客户端主窗口， jc_hwnd_console 表示客户端控制台窗口。
如果没有参数，则获取控制台窗口句柄（等效于 /window jc_hwnd_console）。
```

应用场景：

- 当你需要一个窗口句柄存储到代词 it 中时，使用此命令

### `/windows`

```text
可用别名：
/windows
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举所有顶级窗口并输出相关信息。
```

应用场景：

- 当你需要枚举所有顶级窗口并输出相关信息时，使用此命令

### `/findwindow <hwnd/title/class/procname/pid>`

```text
可用别名：
/findwindow <hwnd/title/class/procname/pid>
/findwnd <hwnd/title/class/procname/pid>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
按窗口句柄值、窗口标题关键字、窗口类名关键字、进程名关键字或 PID 查找窗口，输出彩色表格。
句柄支持十进制和十六进制；十六进制前缀 0x 可加可不加。PID 仅支持精确匹配，不支持模糊匹配。
```

应用场景：

- 当你需要按窗口句柄值、窗口标题关键字、窗口类名关键字、进程名关键字或 PID 查找窗口，输出彩色表格时，使用此命令

### `/selectwindow <hwnd/title/class/procname/pid>`

```text
可用别名：
/selectwindow <hwnd/title/class/procname/pid>
/selectwnd <hwnd/title/class/procname/pid>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
先按 /findwindow 的规则查找，再输入编号选择一条结果，将该窗口句柄存入 it（hwnd 窗口句柄类型）。
```

应用场景：

- 当你需要先按 /findwindow 的规则查找，再输入编号选择一条结果，将该窗口句柄存入 it（hwnd 窗口句柄类型）时，使用此命令

### `/privatewindows`

```text
可用别名：
/privatewindows
/privatewindow list
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
输出所有记录中的隐私窗口。
```

应用场景：

- 当你需要输出所有记录中的隐私窗口时，使用此命令

### `/privatewindow sync`

```text
可用别名：
/privatewindow sync
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
将隐私窗口记录列表与系统真实情况进行同步。
```

应用场景：

- 当你需要将隐私窗口记录列表与系统真实情况进行同步时，使用此命令

### `/privatewindow clear`

```text
可用别名：
/privatewindow clear
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
取消所有记录中的隐私窗口。
```

应用场景：

- 当你需要取消所有记录中的隐私窗口时，使用此命令

### `/privatewindow reset <hwnd>`

```text
可用别名：
/privatewindow reset <hwnd>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
取消指定的隐私窗口。必须在记录中。
```

应用场景：

- 当你需要取消指定的隐私窗口时，使用此命令

### `/privatewindow set <hwnd> [affinity=none]`

```text
可用别名：
/privatewindow set <hwnd> [affinity=none]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置置顶窗口的隐私状态。affinity 必须是 none, black, invisible 三者之一。如果目标窗口不属于客户端，则会注入。
```

应用场景：

- 当你需要置顶窗口的隐私状态时，使用此命令

### `/privatewindow check <hwnd>`

```text
可用别名：
/privatewindow check <hwnd>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
检查指定窗口的隐私状态、是否在记录列表中、是否会被 PrivateWindow 跳过（并显示原因）。
```

应用场景：

- 当你需要检查指定窗口的隐私状态、是否在记录列表中、是否会被 PrivateWindow 跳过（并显示原因）时，使用此命令

### `/privatewindow why <hwnd>`

```text
可用别名：
/privatewindow why <hwnd>
/privatewindow reason <hwnd>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
只检查指定窗口是否会被 PrivateWindow 跳过，并显示命中原因。
```

应用场景：

- 当你需要只检查指定窗口是否会被 PrivateWindow 跳过，并显示命中原因时，使用此命令

### `/privatewindow diagnose <hwnd>`

```text
可用别名：
/privatewindow diagnose <hwnd>
/privatewindow diag <hwnd>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
诊断指定窗口的关键信息（root/visible/cloaked/style/exstyle/尺寸等），并给出是否会被 PrivateWindow 跳过及原因。
```

应用场景：

- 当你需要诊断指定窗口的关键信息（root/visible/cloaked/style/exstyle/尺寸等），并给出是否会被 PrivateWindow 跳过及原因时，使用此命令

### `/privatewindow layer list`

```text
可用别名：
/privatewindow layer list
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举覆盖层模式的所有隐私窗口。
```

应用场景：

- 当你需要枚举覆盖层模式的所有隐私窗口时，使用此命令

### `/privatewindow layer check <hwnd>`

```text
可用别名：
/privatewindow layer check <hwnd>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
检查指定窗口是否存在覆盖层窗口。
```

应用场景：

- 当你需要检查指定窗口是否存在覆盖层窗口时，使用此命令

### `/privatewindow layer enable/disable <hwnd>`

```text
可用别名：
/privatewindow layer enable/disable <hwnd>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
启用/禁用窗口的覆盖层隐私模式。
```

应用场景：

- 当你需要启用/禁用窗口的覆盖层隐私模式时，使用此命令

### `/bands`

```text
可用别名：
/bands
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
了解所有Z序段的信息。
```

应用场景：

- 当你需要了解所有Z序段的信息时，使用此命令

### `/getband [hwnd]`

```text
可用别名：
/getband [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取窗口的Z序段。hwnd不填，则为客户端主窗口，如果主窗口不存在则为控制台窗口
```

应用场景：

- 当你需要窗口的Z序段时，使用此命令

### `/setband [hwnd] [zorderband]`

```text
可用别名：
/setband [hwnd] [zorderband]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
【PRO】动态设置窗口的Z序段。hwnd不填，则为客户端主窗口，如果主窗口不存在则为控制台窗口，zorderband不填则为ZBID_UIACCESS（值为2）
```

应用场景：

- 当你需要【PRO】动态设置窗口的Z序段时，使用此命令

### `/hproc`

```text
可用别名：
/hproc
/proc
/hproc [hprocess/pid/name]
/proc [hprocess/pid/name]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取一个进程句柄存储到代词 it 中。如果没有参数，则获取客户端进程句柄。
```

应用场景：

- 当你需要一个进程句柄存储到代词 it 中时，使用此命令

### `/exist <hprocess/pid/name>`

```text
可用别名：
/exist <hprocess/pid/name>
/exists <hprocess/pid/name>
/existproc <hprocess/pid/name>
/existsproc <hprocess/pid/name>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
检查是否存在特定进程。仅做检查。
```

应用场景：

- 当你需要检查是否存在特定进程时，使用此命令

### `/procs [preciseProcName...]`

```text
可用别名：
/procs [preciseProcName...]
/findproc <procNameKeywords...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
寻找符合进程名称的进程。前者精确查找，后者模糊查找。
```

应用场景：

- 当你需要寻找符合进程名称的进程时，使用此命令

### `/selectproc [procNameKeywords...]`

```text
可用别名：
/selectproc [procNameKeywords...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
选择符合进程名称的进程。模糊查找。将会提示输入一个编号，然后将选中指定的进程以句柄形式存入 it 中。如果不填参数，则从所有进程中选择。
```

应用场景：

- 当你需要选择符合进程名称的进程时，使用此命令

### `/scanstr <hprocess> [regex...]`

```text
可用别名：
/scanstr <hprocess> [regex...]
/scanstrings <hprocess> [regex...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
扫描进程中的字符串。如果regex不为空，则只显示包含指定正则表达式的字符串。
```

应用场景：

- 当你需要扫描进程中的字符串时，使用此命令

### `/kill <hprocess/pid/name>`

```text
可用别名：
/kill <hprocess/pid/name>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
杀进程。如果指定进程名，必须写完整；而且将会击杀所有相同进程名的进程。
使用链式方法。如果写成下面的命令，则会指定单模式击杀。
```

应用场景：

- 当你需要杀进程时，使用此命令

### `/rawkill`

```text
可用别名：
/rawkill
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
原始方法杀进程
```

应用场景：

- 当你需要原始方法杀进程时，使用此命令

### `/threadskill`

```text
可用别名：
/threadskill
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
击杀各个线程杀进程
```

应用场景：

- 当你需要击杀各个线程杀进程时，使用此命令

### `/winstakill`

```text
可用别名：
/winstakill
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
Winsta 方法杀进程
```

应用场景：

- 当你需要Winsta 方法杀进程时，使用此命令

### `/wmikill`

```text
可用别名：
/wmikill
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
WMI 方法杀进程
```

应用场景：

- 当你需要WMI 方法杀进程时，使用此命令

### `/jobkill`

```text
可用别名：
/jobkill
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
Job 方法杀进程
```

应用场景：

- 当你需要Job 方法杀进程时，使用此命令

### `/dbgkill`

```text
可用别名：
/dbgkill
/debuggerkill
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
Debugger 方法杀进程
```

应用场景：

- 当你需要Debugger 方法杀进程时，使用此命令

### `/zwkill`

```text
可用别名：
/zwkill
/zwterminate
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
内核方法杀进程
```

应用场景：

- 当你需要内核方法杀进程时，使用此命令

### `/freeze <hprocess/pid/name>`

```text
可用别名：
/freeze <hprocess/pid/name>
/unfreeze <hprocess/pid/name>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
冻结/解冻 进程所有线程。如果指定进程名，必须写完整；而且将会 冻结/解冻 所有相同进程名的进程。
```

应用场景：

- 当你需要冻结/解冻 进程所有线程时，使用此命令

### `/untrust <hprocess/pid/name>`

```text
可用别名：
/untrust <hprocess/pid/name>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置进程令牌为不信任。有可能需要管理员权限。
```

应用场景：

- 当你需要进程令牌为不信任时，使用此命令

### `/aim`

```text
可用别名：
/aim
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
打开窗口锁定器，按下 Esc 取消，按下 Ctrl 锁定前端窗口，按下 Alt 锁定鼠标指向的窗口。
倒计时 30 秒，超时后自动取消。
```

应用场景：

- 当你需要打开窗口锁定器，按下 Esc 取消，按下 Ctrl 锁定前端窗口，按下 Alt 锁定鼠标指向的窗口时，使用此命令

### `/foreground`

```text
可用别名：
/foreground
/fore
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
五秒后自动锁定前端窗口并赋值给 it.
```

应用场景：

- 当你需要五秒后自动锁定前端窗口并赋值给 it.时，使用此命令

### `/pointat`

```text
可用别名：
/pointat
/here
/there
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
五秒后自动锁定鼠标指向的窗口并赋值给 it.
```

应用场景：

- 当你需要五秒后自动锁定鼠标指向的窗口并赋值给 it.时，使用此命令

### `/foregroundproc`

```text
可用别名：
/foregroundproc
/foreproc
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
五秒后自动锁定前端窗口所属的进程并赋值给 it.
```

应用场景：

- 当你需要五秒后自动锁定前端窗口所属的进程并赋值给 it.时，使用此命令

### `/pointatproc`

```text
可用别名：
/pointatproc
/hereproc
/thereproc
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
五秒后自动锁定鼠标指向的窗口所属的进程并赋值给 it.
```

应用场景：

- 当你需要五秒后自动锁定鼠标指向的窗口所属的进程并赋值给 it.时，使用此命令

### `/focus [hwnd]`

```text
可用别名：
/focus [hwnd]
/focus2 [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
聚焦窗口。后者不会使用 SW_RESTORE 还原窗口。如果不填参数，则为客户端主窗口。
```

应用场景：

- 当你需要聚焦窗口时，使用此命令

### `/close [hwnd]`

```text
可用别名：
/close [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
向窗口发送关闭消息。超时时间为1秒。若不填参数则启用 Hidden 模块。
```

应用场景：

- 当你需要向窗口发送关闭消息时，使用此命令

### `/destroy <hwnd>`

```text
可用别名：
/destroy <hwnd>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
向窗口发送销毁消息。超时时间为1秒。	
```

应用场景：

- 当你需要向窗口发送销毁消息时，使用此命令

### `/max [hwnd]`

```text
可用别名：
/max [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
最大化窗口。
```

应用场景：

- 当你需要最大化窗口时，使用此命令

### `/min [hwnd]`

```text
可用别名：
/min [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
最小化窗口。
```

应用场景：

- 当你需要最小化窗口时，使用此命令

### `/show [hwnd]`

```text
可用别名：
/show [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
显示窗口。
```

应用场景：

- 当你需要窗口时，使用此命令

### `/shownormal [hwnd]`

```text
可用别名：
/shownormal [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
正常显示窗口。
```

应用场景：

- 当你需要正常显示窗口时，使用此命令

### `/hide [hwnd]`

```text
可用别名：
/hide [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
隐藏窗口。
```

应用场景：

- 当你需要隐藏窗口时，使用此命令

### `/invisible [hwnd]`

```text
可用别名：
/invisible [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
将窗口不透明度改为1（完全不透明是255）
```

应用场景：

- 当你需要将窗口不透明度改为1（完全不透明是255）时，使用此命令

### `/screenshot [hwnd]`

```text
可用别名：
/screenshot [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
只给指定窗口截图。如果不指定参数，则切换 Screenshot 模块。 
```

应用场景：

- 当你需要只给指定窗口截图时，使用此命令

### `/ocr file <path...>`

```text
可用别名：
/ocr file <path...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
对指定路径的图片进行文字识别。
```

应用场景：

- 当你需要对指定路径的图片进行文字识别时，使用此命令

### `/ocr window <hwnd>`

```text
可用别名：
/ocr window <hwnd>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
对指定的窗口内容进行文字识别。
```

应用场景：

- 当你需要对指定的窗口内容进行文字识别时，使用此命令

### `/ocr windowex <hwnd>`

```text
可用别名：
/ocr windowex <hwnd>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
对指定的窗口内容进行文字识别。将会输出更详细的信息，包括坐标等。
```

应用场景：

- 当你需要对指定的窗口内容进行文字识别时，使用此命令

### `/qqbot update`

```text
可用别名：
/qqbot update
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
更新一次机器人。
```

应用场景：

- 当你需要更新一次机器人时，使用此命令

### `/qqbot stat`

```text
可用别名：
/qqbot stat
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看统计数据。
```

应用场景：

- 当你需要查看统计数据时，使用此命令

### `/qqbot raw`

```text
可用别名：
/qqbot raw
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查看OCR原始结果。
```

应用场景：

- 当你需要查看OCR原始结果时，使用此命令

### `/qqbot aim [hwnd]`

```text
可用别名：
/qqbot aim [hwnd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
锁定指定的聊天窗口为目标窗口。
```

应用场景：

- 当你需要锁定指定的聊天窗口为目标窗口时，使用此命令

### `/clientreg list`

```text
可用别名：
/clientreg list
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举所有客户端注册表项的键值。
```

应用场景：

- 当你需要枚举所有客户端注册表项的键值时，使用此命令

### `/clientreg init`

```text
可用别名：
/clientreg init
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
初始化客户端注册表项键值，具体为：
ExecutablePath: 客户端程序绝对路径。
Version: 版本号（例如v0.7c，程序里以宏 CURRENT_VERSION 定义）
```

应用场景：

- 当你需要初始化客户端注册表项键值，具体为：时，使用此命令

### `/clientreg set <key> <value>`

```text
可用别名：
/clientreg set <key> <value>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置客户端注册表键值。注意，如果value是纯数字，将会作为 REG_DWORD 存储，否则为 REG_SZ
```

应用场景：

- 当你需要客户端注册表键值时，使用此命令

### `/clientreg get <key>`

```text
可用别名：
/clientreg get <key>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取客户端注册表键值。只能是 REG_DWORD 或 REG_SZ
```

应用场景：

- 当你需要客户端注册表键值时，使用此命令

### `/clientreg delete <key>`

```text
可用别名：
/clientreg delete <key>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
删除指定的客户端注册表键值。
```

应用场景：

- 当你需要删除指定的客户端注册表键值时，使用此命令

### `/clientreg clear`

```text
可用别名：
/clientreg clear
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清空客户端注册表键值并去除JackalClient这一项。
```

应用场景：

- 当你需要清空客户端注册表键值并去除JackalClient这一项时，使用此命令

### `/setmousepos <x> <y>`

```text
可用别名：
/setmousepos <x> <y>
/mousetp <x> <y>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
立即设置鼠标坐标。
```

应用场景：

- 当你需要立即设置鼠标坐标时，使用此命令

### `/getmousepos`

```text
可用别名：
/getmousepos
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
输出一次鼠标坐标。
```

应用场景：

- 当你需要输出一次鼠标坐标时，使用此命令

### `/wheel <down/up>`

```text
可用别名：
/wheel <down/up>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
向下或向上滚轮一次。
```

应用场景：

- 当你需要向下或向上滚轮一次时，使用此命令

### `/key <down/press> <keycode/keyname...>`

```text
可用别名：
/key <down/press> <keycode/keyname...>
/key <up/release> <keycode/keyname...>
/key <once> <keycode/keyname...>f
/key <async> <keycode/keyname...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
模拟按键操作。上述四种分别对应按下、松开、同步按下松开、异步按下松开。后两种内部间隔 100 毫秒。
```

应用场景：

- 当你需要模拟按键操作时，使用此命令

### `/keys <Keys...>`

```text
可用别名：
/keys <Keys...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
模拟多个按键操作。注意，多个按键需要用空格分隔而不是逗号或分号。
```

应用场景：

- 当你需要模拟多个按键操作时，使用此命令

### `/input [string...=clipboard]`

```text
可用别名：
/input [string...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
模拟输入字符串。
```

应用场景：

- 当你需要模拟输入字符串时，使用此命令

### `/click [interval_ms=50]`

```text
可用别名：
/click [interval_ms=50]
/lclick [interval_ms=50]
/leftclick [interval_ms=50]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
模拟左键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。
```

应用场景：

- 当你需要模拟左键鼠标点击时，使用此命令

### `/rclick [interval_ms=50]`

```text
可用别名：
/rclick [interval_ms=50]
/rightclick [interval_ms=50]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
模拟右键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。
```

应用场景：

- 当你需要模拟右键鼠标点击时，使用此命令

### `/mclick [interval_ms=50]`

```text
可用别名：
/mclick [interval_ms=50]
/midclick [interval_ms=50]
/middleclick [interval_ms=50]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
模拟中键鼠标点击。interval_ms为按下松开之间的间隙时间（毫秒）。
```

应用场景：

- 当你需要模拟中键鼠标点击时，使用此命令

### `/kbstatus`

```text
可用别名：
/kbstatus
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
列出正在被按下的按键。包括鼠标。
```

应用场景：

- 当你需要列出正在被按下的按键时，使用此命令

### `/clearkb`

```text
可用别名：
/clearkb
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
释放所有正在被按下的按键。包括鼠标。
```

应用场景：

- 当你需要释放所有正在被按下的按键时，使用此命令

### `/cleartogglekeys`

```text
可用别名：
/cleartogglekeys
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清空正在被按下的切换键。
```

应用场景：

- 当你需要清空正在被按下的切换键时，使用此命令

### `/clipboard <args...>`

```text
可用别名：
/clipboard <args...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
剪贴板相关命令。
```

应用场景：

- 当你需要剪贴板相关命令时，使用此命令

### `/clipboard show`

```text
可用别名：
/clipboard show
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
读取并显示剪贴板。
```

应用场景：

- 当你需要读取并显示剪贴板时，使用此命令

### `/clipboard get`

```text
可用别名：
/clipboard get
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取并存储剪贴板内容到变量 it。
```

应用场景：

- 当你需要并存储剪贴板内容到变量 it时，使用此命令

### `/clipboard store text <text...>`

```text
可用别名：
/clipboard store text <text...>
/clipboard store file <path...>
/clipboard store movefile <path...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
写入剪贴板。
```

应用场景：

- 当你需要写入剪贴板时，使用此命令

### `/clipboard clear`

```text
可用别名：
/clipboard clear
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清空剪贴板。
```

应用场景：

- 当你需要清空剪贴板时，使用此命令

### `/getaccess <dirpath...>`

```text
可用别名：
/getaccess <dirpath...>
/getdiraccess <dirpath...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
* 需要管理员权限。
授予目录所有权限。此操作可能会有风险。
```

应用场景：

- 当你需要* 需要管理员权限时，使用此命令

### `/hud`

```text
可用别名：
/hud
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
切换HUD显示状态。
```

应用场景：

- 当你需要切换HUD显示状态时，使用此命令

### `/customhud`

```text
可用别名：
/customhud
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
切换自定义HUD显示状态。
```

应用场景：

- 当你需要切换自定义HUD显示状态时，使用此命令

### `/customhud add <json...>`

```text
可用别名：
/customhud add <json...>
/customhud add text [text...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

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

应用场景：

- 当你需要添加自定义HUD元素时，使用此命令

### `/customhud list`

```text
可用别名：
/customhud list
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举所有自定义HUD元素。
```

应用场景：

- 当你需要枚举所有自定义HUD元素时，使用此命令

### `/customhud move <id> <x> <y>`

```text
可用别名：
/customhud move <id> <x> <y>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
移动指定的自定义HUD元素。
```

应用场景：

- 当你需要移动指定的自定义HUD元素时，使用此命令

### `/customhud mover`

```text
可用别名：
/customhud mover
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
交互式移动界面。
```

应用场景：

- 当你需要交互式移动界面时，使用此命令

### `/customhud refresh`

```text
可用别名：
/customhud refresh
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
刷新缓存。
```

应用场景：

- 当你需要刷新缓存时，使用此命令

### `/customhud all`

```text
可用别名：
/customhud all
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
输出所有元素的JSON。
```

应用场景：

- 当你需要输出所有元素的JSON时，使用此命令

### `/customhud set <id> <json...>`

```text
可用别名：
/customhud set <id> <json...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置某项自定义HUD元素。
```

应用场景：

- 当你需要某项自定义HUD元素时，使用此命令

### `/customhud modify <id> <key> <value...>`

```text
可用别名：
/customhud modify <id> <key> <value...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置某项自定义HUD元素的一对键值。
```

应用场景：

- 当你需要某项自定义HUD元素的一对键值时，使用此命令

### `/customhud remove <id>`

```text
可用别名：
/customhud remove <id>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
移除指定自定义HUD元素。
```

应用场景：

- 当你需要移除指定自定义HUD元素时，使用此命令

### `/customhud clear`

```text
可用别名：
/customhud clear
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清空自定义HUD元素。
```

应用场景：

- 当你需要清空自定义HUD元素时，使用此命令

### `/lanzou <params...>`

```text
可用别名：
/lanzou <params...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
蓝奏云相关命令。
```

应用场景：

- 当你需要蓝奏云相关命令时，使用此命令

### `/lanzou getdesc <url> [pwd]`

```text
可用别名：
/lanzou getdesc <url> [pwd]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取蓝奏云文件夹的描述。可选参数pwd为密码
```

应用场景：

- 当你需要蓝奏云文件夹的描述时，使用此命令

### `/webjson <url...>`

```text
可用别名：
/webjson <url...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取网页JSON（必须返回JSON格式）然后用彩色格式化输出。
```

应用场景：

- 当你需要网页JSON（必须返回JSON格式）然后用彩色格式化输出时，使用此命令

### `/formatjson [content...=clipboard]`

```text
可用别名：
/formatjson [content...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
格式化彩色输出 JSON。如果无法解析，将会报错。
```

应用场景：

- 当你需要格式化彩色输出 JSON时，使用此命令

### `/formathtml [content...=clipboard]`

```text
可用别名：
/formathtml [content...=clipboard]
/formatwebpage [content...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
格式化彩色输出网页。将会自动解析各成分。BUG 比较多，容易解析错误。
```

应用场景：

- 当你需要格式化彩色输出网页时，使用此命令

### `/formatc [content...=clipboard]`

```text
可用别名：
/formatc [content...=clipboard]
/formatcpp [content...=clipboard]
/formatpython [content...=clipboard]
/formatpy [content...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
格式化彩色输出各种编程语言。将会自动解析各成分。
```

应用场景：

- 当你需要格式化彩色输出各种编程语言时，使用此命令

### `/formatcomment [content...=clipboard]`

```text
可用别名：
/formatcomment [content...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
格式化彩色输出评论。会对@、[表情]和#话题进行解析。
```

应用场景：

- 当你需要格式化彩色输出评论时，使用此命令

### `/formatmarkdown [content...=clipboard]`

```text
可用别名：
/formatmarkdown [content...=clipboard]
/formatmd [content...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
格式化彩色输出 Markdown 格式。/formatmd 输出时将会移除相关元素标记。
```

应用场景：

- 当你需要格式化彩色输出 Markdown 格式时，使用此命令

### `/aphorism`

```text
可用别名：
/aphorism
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取一句随机名言。
```

应用场景：

- 当你需要一句随机名言时，使用此命令

### `/mclog list`

```text
可用别名：
/mclog list
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举当前的 Minecraft 实例以及对应的日志的情况。
```

应用场景：

- 当你需要枚举当前的 Minecraft 实例以及对应的日志的情况时，使用此命令

### `/mclog clear`

```text
可用别名：
/mclog clear
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
清空 Minecraft 实例记录。
```

应用场景：

- 当你需要清空 Minecraft 实例记录时，使用此命令

### `/mclog test [commandline...=clipboard]`

```text
可用别名：
/mclog test [commandline...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
用于测试日志解析器对于给定的 commandline 命令行，能否正常提取需要的信息。会输出相关结果。如果commandline 参数不填，则从剪贴板中取文本。
```

应用场景：

- 当你需要用于测试日志解析器对于给定的 commandline 命令行，能否正常提取需要的信息时，使用此命令

### `/mccolor <presetSingleColor> <color1> <text...>`

```text
可用别名：
/mccolor <presetSingleColor> <color1> <text...>
/mccolor <presetDoubleColor> <color1> <color2> <text...>
/mccolorcopy <presetSingleColor> <color1> <text...>
/mccolorcopy <presetDoubleColor> <color1> <color2> <text...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
【PRO】构建Minecraft彩色文字。presetSingleColor 为单色预设，包括：single（单色）, fade（慢慢变黑）, brighten（慢慢变白）；presetDoubleColor 为双色预设，包括：gradient（渐变）, random（随机渐变程度）, sine（余弦波）, binary（轮流取色）, pulse（轮流，中间加一个过渡色）。会同时输出&为前缀和§为前缀的版本。颜色color1/color2支持使用：&hex或R;G;B或颜色英文名。/mccolorcopy 命令会同时复制&为前缀的版本的文本。例：/mccolorcopy gradient &2 255;127;0 Colorful text generated by Jackal!
```

应用场景：

- 当你需要【PRO】构建Minecraft彩色文字时，使用此命令

### `/mcprofile <name>`

```text
可用别名：
/mcprofile <name>
/mcprofile <name1,name2,name3,...>
/mcprofile <uuid>
/mcprofile <uuid1,uuid2,uuid3,...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取 Minecraft 玩家档案信息。提供正版名称或UUID参数。
```

应用场景：

- 当你需要 Minecraft 玩家档案信息时，使用此命令

### `/generate <keyword>`

```text
可用别名：
/generate <keyword>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

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

应用场景：

- 当你需要生成指定的内容时，使用此命令

### `/privacydatabase <args...>`

```text
可用别名：
/privacydatabase <args...>
/privacydb <args...>
/pdb <args...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
隐私数据库命令。请使用 /help pdb 命令查看详细帮助。
```

应用场景：

- 当你需要隐私数据库命令时，使用此命令

### `/pdb init`

```text
可用别名：
/pdb init
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
初始化数据库。请在 Privacy Database 模块中设定目录路径。 
```

应用场景：

- 当你需要初始化数据库时，使用此命令

### `/pdb add [人名]`

```text
可用别名：
/pdb add [人名]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
添加人员信息。输入命令后开启一个控制台的交互式菜单，如果指定人名参数，则菜单中人名就被填写；然后你可以选择菜单多种的某几个数据项进行填写。选择“保存”则录入退出。
```

应用场景：

- 当你需要添加人员信息时，使用此命令

### `/pdb delete/remove <人名>`

```text
可用别名：
/pdb delete/remove <人名>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
移除人员信息。
```

应用场景：

- 当你需要移除人员信息时，使用此命令

### `/pdb list/enum/show/ls`

```text
可用别名：
/pdb list/enum/show/ls
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
输出所有人员信息。
```

应用场景：

- 当你需要输出所有人员信息时，使用此命令

### `/pdb list2d/table`

```text
可用别名：
/pdb list2d/table
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
以二维表形式输出所有人员信息。
```

应用场景：

- 当你需要以二维表形式输出所有人员信息时，使用此命令

### `/pdb query <人名>`

```text
可用别名：
/pdb query <人名>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
查询人员的所有信息。每行都是键：值的格式。
```

应用场景：

- 当你需要查询人员的所有信息时，使用此命令

### `/pdb search`

```text
可用别名：
/pdb search
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
根据指定信息查询人员信息。开启一个控制台交互式菜单，选择填写什么数据项筛选器，然后选择“开始筛选”筛选，然后输出结果。
```

应用场景：

- 当你需要根据指定信息查询人员信息时，使用此命令

### `/pdb set <name> <key> [value]`

```text
可用别名：
/pdb set <name> <key> [value]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置指定人员信息。value 为空时清空该项 key。
```

应用场景：

- 当你需要指定人员信息时，使用此命令

### `/pdb upsert <name> <key> [value]`

```text
可用别名：
/pdb upsert <name> <key> [value]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
设置指定人员信息。value 为空时清空该项 key。如果 name 不存在，则自动创建新纪录。
```

应用场景：

- 当你需要指定人员信息时，使用此命令

### `/pdb paste <format>`

```text
可用别名：
/pdb paste <format>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
从剪贴板以指定格式导入数据。例如一百行学号空格姓名，输入/pdb paste student_id name即可批量录入。
```

应用场景：

- 当你需要从剪贴板以指定格式导入数据时，使用此命令

### `/pdb exec <command>`

```text
可用别名：
/pdb exec <command>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
执行数据库命令。
```

应用场景：

- 当你需要数据库命令时，使用此命令

### `/pdb uninstall`

```text
可用别名：
/pdb uninstall
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
移除数据库。
```

应用场景：

- 当你需要移除数据库时，使用此命令

### `/livestreaminfo`

```text
可用别名：
/livestreaminfo
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
输出当前直播间模块缓存信息。（JSON）
```

应用场景：

- 当你需要输出当前直播间模块缓存信息时，使用此命令

### `/list`

```text
可用别名：
/list
/modules
/module list
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
列出所有模块及相关信息。
```

应用场景：

- 当你需要列出所有模块及相关信息时，使用此命令

### `/module <params...>`

```text
可用别名：
/module <params...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
模块相关命令。
```

应用场景：

- 当你需要模块相关命令时，使用此命令

### `/module hide <moduleName/id>`

```text
可用别名：
/module hide <moduleName/id>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
从 ClickGUI (Dropdown/Neverlose/Imgui) 隐藏模块。支持模块名称和ID的模糊查找。
```

应用场景：

- 当你需要从 ClickGUI (Dropdown/Neverlose/Imgui) 隐藏模块时，使用此命令

### `/module show <moduleName/id>`

```text
可用别名：
/module show <moduleName/id>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
从 ClickGUI (Dropdown/Neverlose/Imgui) 显示模块。支持模块名称和ID的模糊查找。
```

应用场景：

- 当你需要从 ClickGUI (Dropdown/Neverlose/Imgui) 显示模块时，使用此命令

### `/module showall`

```text
可用别名：
/module showall
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
将 ClickGUI 中所有已隐藏模块恢复为显示。
```

应用场景：

- 当你需要将 ClickGUI 中所有已隐藏模块恢复为显示时，使用此命令

### `/module hidden`

```text
可用别名：
/module hidden
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举当前在 ClickGUI 中被隐藏的所有模块。
```

应用场景：

- 当你需要枚举当前在 ClickGUI 中被隐藏的所有模块时，使用此命令

### `/module query <moduleName/id>`

```text
可用别名：
/module query <moduleName/id>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
模糊查找匹配的模块及其描述。如果想要查询模块配置，请使用 /config search 命令。
```

应用场景：

- 当你需要模糊查找匹配的模块及其描述时，使用此命令

### `/arraylist [params...]`

```text
可用别名：
/arraylist [params...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
模块列表相关命令。不带参数时，切换 Arraylist 模块开关状态。
```

应用场景：

- 当你需要模块列表相关命令时，使用此命令

### `/arraylist hide <moduleName/id>`

```text
可用别名：
/arraylist hide <moduleName/id>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
将指定模块在 Arraylist 中隐藏（修改模块配置项 hidden）。支持模糊匹配和模块ID。
```

应用场景：

- 当你需要将指定模块在 Arraylist 中隐藏（修改模块配置项 hidden）时，使用此命令

### `/arraylist show <moduleName/id>`

```text
可用别名：
/arraylist show <moduleName/id>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
将指定模块在 Arraylist 中显示（修改模块配置项 hidden）。支持模糊匹配和模块ID。
```

应用场景：

- 当你需要将指定模块在 Arraylist 中显示（修改模块配置项 hidden）时，使用此命令

### `/arraylist showall`

```text
可用别名：
/arraylist showall
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
将所有在 Arraylist 中被隐藏的模块恢复为显示（即 hidden=false）。
```

应用场景：

- 当你需要将所有在 Arraylist 中被隐藏的模块恢复为显示（即 hidden=false）时，使用此命令

### `/arraylist hidden`

```text
可用别名：
/arraylist hidden
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
枚举当前在 Arraylist 中被隐藏的所有模块。
```

应用场景：

- 当你需要枚举当前在 Arraylist 中被隐藏的所有模块时，使用此命令

### `/listmods [hproc/name/pid]`

```text
可用别名：
/listmods [hproc/name/pid]
/listmodules [hproc/name/pid]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
启用枚举模块（指DLL等）功能。如果参数不填，则是模块配置中的进程。
```

应用场景：

- 当你需要启用枚举模块（指DLL等）功能时，使用此命令

### `/msbanners`

```text
可用别名：
/msbanners
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
预览所有 Metasploit 字符画。
```

应用场景：

- 当你需要预览所有 Metasploit 字符画时，使用此命令

### `/toggledownfall`

```text
可用别名：
/toggledownfall
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
切换晴雨状态。
```

应用场景：

- 当你需要切换晴雨状态时，使用此命令

### `/weather <clear/rain/thunder>`

```text
可用别名：
/weather <clear/rain/thunder>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
切换天气状态。
```

应用场景：

- 当你需要切换天气状态时，使用此命令

### `/test [args...]`

```text
可用别名：
/test [args...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
测试命令。
```

应用场景：

- 当你需要测试命令时，使用此命令

## 运行与测试

1. 执行命令后，观察底部状态栏的反馈信息
2. 若命令未生效，检查输入格式是否正确

## 进阶建议

尝试组合多个命令，实现更复杂的操作流程。

恭喜你掌握了本节所有命令，现在去构建你的专属工作流吧！
