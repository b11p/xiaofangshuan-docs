import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: '消防栓帮助',
    description: '',

    themeConfig: {
        navbar: [
            { text: '主页', link: '/' },
            {
                text: '功能列表', children: [{
                    text: 'osu! 相关功能',
                    link: 'https://github.com/b11p/OsuQqBotForNewbieGroup/wiki/osu!-%E7%9B%B8%E5%85%B3%E5%8A%9F%E8%83%BD'
                }, {
                    text: '图片类功能',
                    link: 'https://github.com/b11p/OsuQqBotForNewbieGroup/wiki/%E5%9B%BE%E7%89%87%E5%8A%9F%E8%83%BD'
                    }, {
                    text: '实用功能',
                    link:'https://github.com/b11p/OsuQqBotForNewbieGroup/wiki/%E5%AE%9E%E7%94%A8%E5%8A%9F%E8%83%BD'
                }]
            },
            { text: '分身', link: '/fenshen/' },
        ],
        repo: 'b11p/OsuQqBotForNewbieGroup',
        editLink: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: false,
        contributors: false,
        docsRepo: 'b11p/xiaofangshuan-docs',
        docsBranch: 'main',
        docsDir: 'docs',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
            '这里什么都没有。',
            '我们怎么到这儿来了？',
            '这是一个四〇四页面。',
            '我们好像进入了错误的链接。',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
    },
})
