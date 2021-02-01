module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/stixgrix/'
    : '/',
    outputDir: 'docs',
    filenameHashing: false,
    productionSourceMap: false,
  transpileDependencies: [
    'vuetify'
  ]
}
