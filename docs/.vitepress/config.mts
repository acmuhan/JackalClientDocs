import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'JackalClient',
  description: 'Windows client toolbox documentation',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quick-start' },
      { text: '命令总览', link: '/commands-overview' },
      { text: '安全边界', link: '/safety' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '文档概览', link: '/overview' },
          { text: '快速开始', link: '/quick-start' }
        ]
      },
      {
        text: '核心内容',
        items: [
          { text: '功能与模块地图', link: '/module-map' },
          { text: '命令系统总览', link: '/commands-overview' },
          { text: '安全与使用边界', link: '/safety' },
          { text: '版本与演进', link: '/history-summary' }
        ]
      },
      {
        text: '专题文档',
        items: [
          { text: '常见问题', link: '/faq' },
          { text: 'BetterLyrics 说明', link: '/betterlyrics' }
        ]
      },
      {
        text: '原始示例',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ]
  }
})
