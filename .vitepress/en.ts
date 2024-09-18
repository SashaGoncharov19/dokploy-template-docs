import { defineConfig } from "vitepress";

export const en = defineConfig({
    lang: 'en-US',

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Templates', link: '/mail-server' }
        ],

        sidebar: [
            {
                text: 'Templates',
                items: [
                    { text: 'Mail Server', link: '/mail-server' },
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Dokploy/dokploy' }
        ],

        outline: { label: 'On this page' },

        docFooter: {
            prev: 'Previous',
            next: 'Next'
        },

    },
})