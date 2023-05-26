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
        
            'Java基础学习plus.md'
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