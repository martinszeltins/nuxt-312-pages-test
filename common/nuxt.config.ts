import i18n from './config/nuxt/i18n.config'

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
    ],

    experimental: {
        typedPages: true,
        scanPageMeta: true,
    },

    i18n: i18n,
})
