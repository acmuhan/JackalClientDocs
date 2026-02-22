import { withMermaid } from 'vitepress-plugin-mermaid'
import { defineTeekConfig } from 'vitepress-theme-teek/config'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { RssPlugin, type RSSOptions } from 'vitepress-plugin-rss'

const rss: RSSOptions = {
  title: 'JackalClient Docs',
  description: 'Windows client toolbox documentation',
  baseUrl: 'https://doc.wormwake.com',
  copyright: 'Copyright (c) JackalClient',
  language: 'zh-CN'
}

const sidebarGroups = [
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
      { text: '完整命令手册', link: '/commands/' },
      { text: '命令目录页', link: '/commands-catalogue' },
      { text: '安全与使用边界', link: '/safety' },
      { text: '版本与演进', link: '/history-summary' }
    ]
  },
  {
    text: '命令手册',
    items: [
      { text: '章节总览', link: '/commands/' },
      { text: '系统命令', link: '/commands/系统命令' },
      { text: '文件命令', link: '/commands/文件命令' },
      { text: '网络命令', link: '/commands/网络命令' },
      { text: 'B站命令', link: '/commands/B站命令' },
      { text: '文本处理命令', link: '/commands/文本处理命令' }
    ]
  },
  {
    text: '专题文档',
    items: [
      { text: '常见问题', link: '/faq' },
      { text: 'BetterLyrics 说明', link: '/betterlyrics' }
    ]
  }
]

const teekConfig = defineTeekConfig({
  teekTheme: false,
  vitePlugins: {
    sidebar: true,
    sidebarOption: {
      ignoreList: ['modules', 'public', '.vitepress']
    },
    permalink: false,
    mdH1: false,
    docAnalysis: true,
    docAnalysisOption: {
      cn: 400,
      en: 200
    }
  },
  themeEnhance: {
    enabled: true,
    position: 'top',
    layoutSwitch: { disabled: true },
    spotlight: { disabled: true },
    themeColor: { defaultColorName: 'vp-default' }
  },
  nav: [
    { text: '首页', link: '/' },
    { text: '快速开始', link: '/quick-start' },
    { text: '完整命令手册', link: '/commands/' },
    { text: '命令目录页', link: '/commands-catalogue' },
    { text: '安全边界', link: '/safety' }
  ],
  sidebar: {
    '/': sidebarGroups
  },
  editLink: {
    pattern: 'https://github.com/acmuhan/JackalClientDocs/edit/main/docs/:path',
    text: '在 GitHub 上编辑此页'
  },
  lastUpdated: {
    text: '上次更新时间',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'short'
    }
  }
})

const originalMarkdownConfig = teekConfig.markdown?.config
teekConfig.markdown = {
  ...(teekConfig.markdown ?? {}),
  config(md) {
    md.use(groupIconMdPlugin)
    originalMarkdownConfig?.(md)
  }
}

teekConfig.vite = teekConfig.vite ?? {}
teekConfig.vite.plugins = [
  ...(teekConfig.vite.plugins ?? []),
  groupIconVitePlugin(),
  RssPlugin(rss)
]

export default withMermaid({
  ...teekConfig,
  title: 'JackalClient',
  description: 'Windows client toolbox documentation',
  lastUpdated: true
})
