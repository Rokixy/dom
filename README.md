## 概述

一个 JQuery 风格的 DOM 库，将`create`、`remove`、`on`、`off`等 24 个常用 API 封装在一个对象中，并挂载与 window 对象上。

## 使用方法

直接将 `dom.js` 文件加入项目，并将`<script src="./xxx/dom.js"></script>`加入 html 即可

## API

| 函数名       | 参数列表            |
| ------------ | ------------------- |
| create       | htmlStr             |
| after        | node, target        |
| before       | node, target        |
| append       | node, target        |
| wrap         | node, target        |
| remove       | node                |
| empty        | node                |
| attr         | node, name, value   |
| text         | node, text          |
| html         | node, html          |
| style        | node, name, value   |
| class.add    | node, className     |
| class.remove | node, className     |
| class.has    | node, className     |
| on           | node, eventName, fn |
| off          | node, eventName, fn |
| find         | selector, node      |
| parent       | node                |
| children     | node                |
| siblings     | node                |
| next         | node                |
| prev         | node                |
| each         | node, fn            |
| index        | node                |
