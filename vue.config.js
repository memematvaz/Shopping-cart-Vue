const path = require("path");

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    outputDir: path.resolve(__dirname, "./docs"),
    assetsDir: "./public"
}
