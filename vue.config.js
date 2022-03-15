  module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/en",

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false,
        enableLegacy: true,
        runtimeOnly: false,
        compositionOnly: true,
        fullInstall: true
      },
    },
  };