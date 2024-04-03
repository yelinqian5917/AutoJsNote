# 使用手册

## 一. 获取控件方式

### className("名称")

主要是审核布局获取其中的 类名来获取控件

### id("名称")

主要是通过 id 获取控件

## 二. 得到控件元素

### find

在获取到控件，使用 find 获取具体元素。find 查找页面可视区域的相关元素，不会深度查找。
返回数组

### findOne

findOne 会深度查找,直到找到元素为止。会阻碍脚本运行，不建议。
返回元素

## 三. 点击事件

**_click()_**

1. 可以直接在元素后面直接执行

```js
id("iv_back").find()[0].click();
```

2. 也可以获取具体元素定位执行

```js
var bounds = element.bounds();
var centerX = bounds.centerX();
var centerY = bounds.centerY();
click(centerX, centerY); // 模拟点击该元素  这个就是坐标点击事件
```

## 四. 常规操作

### toast:

可以在 autojs 弹出气泡框

### console.log:

打印信息

### sleep：

休眠，会阻断程序运行

### back():

返回
