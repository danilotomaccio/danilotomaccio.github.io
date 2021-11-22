module.exports = {
    pwa: {
        manifestOptions: {
            name: 'Nigma',
            background_color: '#F9B232',
        },

        name: 'Nigma',
        themeColor: '#F9B232',
        msTileColor: '#F9B232',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            skipWaiting: true
        }
    }
}