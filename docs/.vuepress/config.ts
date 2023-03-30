import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '消防栓帮助',
            description: '',
        }
    },
    theme: defaultTheme({
        locales: {
            '/': {
                navbar: [
                    { text: '主页', link: '/' },
                    {
                        text: '功能列表', children: [
                            "/gongneng/bangding.md",
                            "/gongneng/osu.md",
                            "/gongneng/tupian.md",
                            "/gongneng/shiyong.md",
                            "/gongneng/yule.md",
                        ]
                    },
                    { text: '分身', link: '/fenshen/' },
                ],
                sidebar: {
                    "/gongneng/": [
                        "/gongneng/bangding.md",
                        "/gongneng/osu.md",
                        "/gongneng/tupian.md",
                        "/gongneng/shiyong.md",
                        "/gongneng/yule.md",
                    ],
                },
                editLink: true,
                editLinkText: '在 GitHub 上编辑此页',
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
        },
        repo: 'b11p/OsuQqBotForNewbieGroup',
        lastUpdated: false,
        contributors: false,
        docsRepo: 'b11p/xiaofangshuan-docs',
        docsBranch: 'main',
        docsDir: 'docs',
    }),
    plugins: [
    ],
})
