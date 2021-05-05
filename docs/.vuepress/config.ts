import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: '消防栓帮助',
    description: '',

    themeConfig: {
        navbar: [
            { text: '主页', link: '/' },
            { text: '分身', link: '/fenshen/' },
        ],
        lastUpdated: false,
    },
})
