import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import "@/assets/styles/base.less"
import "@/assets/styles/iconfont.less"

import { Tab, Tabs } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
// 注册vant组件
app.use(Tab)
    .use(Tabs);

app.use(router)
    .mount('#app')
