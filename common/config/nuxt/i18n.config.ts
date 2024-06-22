export default {
    locales: ['en', 'de-LI'].map(locale => {
        return {
            code: locale,
            file: `${locale}.json`,
        }
    }),
    lazy: false,
    langDir: 'lang',
    defaultLocale: process.env.NUXT_PUBLIC_DEFAULT_LOCALE || 'en',
    detectBrowserLanguage: false
}
