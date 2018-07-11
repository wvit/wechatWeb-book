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
        },
        "tabBar": {
            "color": "#515151",
            "selectedColor": "#D81E06",
            "borderStyle":"white",
            "list": [{
              "selectedIconPath": "static/img/index.png",
              "iconPath": "static/img/index1.png",
              "pagePath": "pages/books/main",
              "text": "图书主页"
            }, {
              "selectedIconPath": "static/img/comment.png",
              "iconPath": "static/img/comment1.png",
              "pagePath": "pages/comments/main",
              "text": "我的评论"
            }, {
              "selectedIconPath": "static/img/user.png",
              "iconPath": "static/img/user1.png",
              "pagePath": "pages/me/main",
              "text": "个人中心"
            }]
          },
    }
}