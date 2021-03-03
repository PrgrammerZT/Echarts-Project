# 工程实践上的坑

## 背景图片不随着 rem 的缩放而缩放

解决方案:background-size:100% 100%;

## animation 复习 使用简单的 from to

解决方案:逆时针旋转 从 0deg 旋转到 -360deg

## 隐藏浏览器上的滚动条

解决方案:
body,
html {
scrollbar-width: none; /_ firefox _/
-ms-overflow-style: none; /_ IE 10+ _/
overflow-x: hidden;
overflow-y: auto;

&::-webkit-scrollbar {
display: none;
}
