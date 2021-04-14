module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:50000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        },
    },
}