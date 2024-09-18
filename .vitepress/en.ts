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

        editLink: {
            pattern: 'https://github.com/SashaGoncharov19/dokploy-template-docs/edit/main/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'Created for Dokploy.',
            copyright: 'By SashaGoncharov19 💕'
        },

        outline: { label: 'On this page' },

        docFooter: {
            prev: 'Previous',
            next: 'Next'
        },

    },
})