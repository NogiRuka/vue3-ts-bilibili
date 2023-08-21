import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// main.ts
import 'virtual:uno.css'

import "@/assets/styles/base.less"
import "@/assets/styles/iconfont.less"

import "@/mock/index"

import { Tab, Tabs, Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
// 注册vant组件
app.use(Tab)
    .use(Tabs)
    .use(Swipe)
    .use(SwipeItem);

app.use(router)
    .mount('#app')
