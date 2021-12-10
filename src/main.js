import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios' //可以使axios在全局调用

import env from './env'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

//根据环境变量获取不同的请求地址
//axios.defaults.baseURL = env.baseURL;

// axios.interceptors.request.use((config)=>{
//     console.log(config);


//     return config
// })



//对返回的内容是先拦截，在返回到接口 
axios.interceptors.response.use(function (response) {
    //response.data才是接口的内容,不在这里处理就要到请求那里处理 
    let res = response.data 
    if (res.status == 0) {
        return res.data
    } else if (res.status == 10) {
        window.location.href = "/#/login"
    } else {
        alert(res.msg)
    }
})

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')