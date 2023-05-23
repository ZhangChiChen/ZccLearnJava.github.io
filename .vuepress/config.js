import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import book from '../book.json';
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { resolve } from "path";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

export default defineUserConfig({
    lang: 'zh-CN',
    title: book.title,
    description: book.description,
    base: '/',
    head: [],
    theme: defaultTheme({
        docsBranch: 'main',
        navbar: [{
                text: '个人仓库',
                link: 'https://github.com/ZccLearnJava.github.io',
            },
            {
                text: 'Bilibili',
                link: 'https://space.bilibili.com/404477267',
            }
        ],
        repo: 'ZhangChiChen/ZccLearnJava.github.io',
        sidebar: [{
                'text': '前言',
                'link': '/',
            },
            'Java执行流程分析.md',
            '什么是JDK、JRE.md',
            '什么是运行.md',
            '如何快速学习技术或者知识点.md',
            'Java开发注意事项和细节说明.md',
            'Java转义字符.md',
            '初学者易犯的错误.md',
            '注释.md',
            'Java代码规范.md',
            'DOS了解.md'
        ],
    }),
    plugins: [
        googleAnalyticsPlugin({
            id: '',
        }),
        registerComponentsPlugin({
            components: {
                Adsense: resolve(__dirname, './components/adsense.vue'),
            },
        }),
    ],
});