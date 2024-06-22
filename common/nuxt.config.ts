import i18n from './config/nuxt/i18n.config'

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
    ],

    routeRules: {
        '/': {
            redirect: { to: '/settings/account', statusCode: 302 }
        }
    },

    experimental: {
        typedPages: true,
        scanPageMeta: true,
    },

    i18n: i18n,
})
