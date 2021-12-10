module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: { //拦截带api的请求
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': '' //发送的时候将api去掉 
                }
            }
        }
    }
}