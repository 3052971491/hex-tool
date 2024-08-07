import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/hex-tool/',
  title: "hex tool",
  description: "My hex tool site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开发指南', link: '/guide' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chouchouji/hex-tool' }
    ]
  }
})
