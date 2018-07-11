import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const app = new Vue(App)
app.$mount()

export default {
    config: {
        "pages": ['^pages/books/main', 'pages/comments/main', 'pages/me/main'],
        "window": {
            "backgroundTextStyle": "light",
            "navigationBarBackgroundColor": "#ea5149",
            "navigationBarTitleText": "提高知识水平",
            "navigationBarTextStyle": "light"
        }
    }
}