# 文档美化组件建议（VitePress）

<TkVpContainer type="tip" title="目标" text="在不破坏现有结构的前提下，用更清晰的视觉层级降低阅读成本。" />

## 已可直接使用（当前仓库已安装/启用）

- `vitepress-plugin-mermaid`：流程图、架构图（适合命令分流图）。
- `vitepress-plugin-group-icons`：分组图标与标识。
- `vitepress-theme-teek`：主题增强、导航与阅读体验。
- VitePress 内置组件：`Badge`、`details`、`tip/warning/danger` 容器、表格、代码组。

## 建议优先落地的组件化样式

1. **任务分流图（Mermaid）**：把“先看哪个章节”可视化。
2. **分级徽章（Badge）**：统一标记 `普通可用 / PRO / 高风险`。
3. **折叠块（details）**：收起维护说明与扩展解释，减少页面长度。
4. **卡片入口（自定义 HTML + 主题样式）**：让首页/命令入口更像产品导航。

## 后续可评估的方向

- 把命令页的“使用场景”做成更强的卡片网格组件。
- 在模块页增加“风险级别 + 前置条件”统一区块组件。
- 为 FAQ 增加分组折叠与关键词锚点。

## 对应页面示例

- 命令入口：[/commands/](/commands/)
- 按用途选命令：[/commands/usage-guide](/commands/usage-guide)
- 模块地图：[/module-map](/module-map)
