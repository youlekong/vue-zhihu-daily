# vue-zhihu-daily

> 使用[Vue.js](https://github.com/vuejs/vue)实现的知乎日报移动版本,主要适配微信

## 运行方法
```bash
# 安装依赖
npm install

# 启动服务
npm run dev
```

## 使用到的知乎日报API
#### 1.启动界面图像获取

URL: http://news-at.zhihu.com/api/4/start-image/1080*1776

响应实例：
```json
{
    "text": "© 许英龙",
    "img": "https://pic3.zhimg.com/2d16f25c61e0323babf2f8ff5eb94d9f.jpg"
}
```

####  2.最新消息

URL: http://news-at.zhihu.com/api/4/news/latest

响应实例：
```json
{
    "date": "20160409",
    "stories": [],
    "top_stories": []
}
```

####  3.消息获取
URL: http://news-at.zhihu.com/api/4/news/ + id

使用在`最新消息`中获得的id，例如 http://news-at.zhihu.com/api/4/news/8133568

响应实例(省略部分)：
```
// 省略部分
{
    "body": "<div class=\"main-wrap content-wrap\">...</div>",
    "title": "咖啡因：缺觉的解药还是毒药？",
    "image": "http://pic3.zhimg.com/abaab08f5d80ee7d2763aa993c128db6.jpg",
    "share_url": "http://daily.zhihu.com/story/8133568",
    "js": [],
    "ga_prefix": "041011",
    "id": 8133568,
    "css": []
}
```
#### 4.主题日报列表
URL: http://news-at.zhihu.com/api/4/themes

用于主题的切换

响应实例
```JSON
{
    "limit": 1000,
        "subscribed": [ ],
        "others": [
            {
                "color": 15007,
                "thumbnail": "http://pic3.zhimg.com/0e71e90fd6be47630399d63c58beebfc.jpg",
                "description": "了解自己和别人，了解彼此的欲望和局限。",
                "id": 13,
                "name": "日常心理学"
            }
        ]
}
```

## 主要贡献者
[@Terry Towne](https://github.com/terrytowne)
[@gzdaijie](https://github.com/gzdaijie)
[@youlekong](https://github.com/youlekong)
