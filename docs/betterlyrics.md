# 更好的歌词 BetterLyrics 说明

> 来源：[https://www.yuque.com/wormwaker/tkpgqw/spwhbekbeycybdxw?singleDoc](https://www.yuque.com/wormwaker/tkpgqw/spwhbekbeycybdxw?singleDoc)

新版本（>=0.8c）加入了新的捕获模式：Hook Rendering，挂钩渲染，只对网易云音乐有效，100%准确，请优先使用这个！会用到注入。注入前要注意必须打开网易云的桌面歌词窗口，否则无法更新歌词！

如果注入失败，可以考虑用老方法：OCR

​

在群文件找到 tesseractocr 的安装程序，打开并安装。

打开GUI，按Ctrl+F或者在上面选择“搜索”选项卡，搜索tess找到一个叫TesseractOCR的模块，右键打开配置，找到可执行文件路径，点击，然后按 Ctrl+O 弹出一个选择框，找到你刚刚安装的路径里面的 tesseract.exe，确认。

![Snipaste_2025-11-08_21-37-46.png](public/Snipaste_2025-11-08_21-37-46.png)

群文件找到 chi_sim.traineddata，这个是简体中文的模型文件，塞到你安装路径的 tessdata 文件夹下，文件夹下应该也有其他的模型文件，例如 eng.traineddata 等。如果你想识别其他语言，就安装对应的模型文件，都可以在网上找来下载。

​

打开网易云音乐的桌面歌词窗口，并放在合适的位置，播放一首带歌词的音乐。

​

打开更好的歌词 BetterLyrics 模块，看看是否有效果。如果没有效果，尝试下列手段：

1. 重新打开桌面歌词窗口

2. 解锁并拖动桌面歌词窗口

3. 切换歌曲

4. 重新打开 BetterLyrics 模块

5. 将 BetterLyrics 配置中的 Y Offset 纵坐标偏移改成 0 或者 70

6. 行号改成0或1

​

常见问题：

Q: 报错找不到TesseractOCR可执行文件

A: 路径错误，请重新选择 tesseract.exe。如果你手动输入路径，注意反斜线因为转义缘故需要打两次。

​

Q: 报错 OCR Failed

A: OCR 结果文件没有出现，大概率是因为没有安装相应的语言模型。

​

Q: 语言怎么识别错误

A: 找到配置里面的 Language，由AI决定是根据歌词让AI决定语言类型，歌名推断是使用歌名的语言，其他就是选择指定语言。AI 识别也不是很准确

​

Q: 怎么改展示模式

A: 找到 Display Mode 展示模式项，你可以改成通知，弹幕，标题，花式文字，灵动岛，对话框等

​

Q: 不是网易云音乐能识别吗

A: 不能确保准确性。找到播放器样式，改成你的样式。如果没有就选自定义，然后修改桌面歌词窗口的类名和标题。类名和标题的获取可以用目标显示模块或者/here, /fore, /windows 等命令

​

该模块会定期（取决于你设的冷却时间）启动 tesseract.exe 来识别歌词，可能会影响性能,不必惊慌
