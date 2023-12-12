const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/search-service":{
        target : "http://10.20.3.177:8088",
        changeOrigin : true
      },
      "/quora": {
        target: "http://172.20.10.3:8765",
        changeOrigin: true,
        onProxyReq: (val) => {console.log('proxy req', val)},
        
      }
    }
  }
})