# 三秋茶业 · SANQIU TEA

手机优先、桌面同步适配的三秋品牌与选茶网站。初尝、日饮与见山围绕同一款红茶，分别对应试喝、自饮和礼赠。

## 开发

需要 Node.js 20 或以上，无第三方运行依赖。

```sh
npm run dev
npm test
npm run build
```

本地打开 http://localhost:4173 。构建产物为 `dist/`，使用相对资源地址与哈希路由，支持 GitHub Pages 仓库子路径。

## 部署

GitHub Pages 发布源为 `Deploy from a branch` → `main` → `/(root)`。根目录的网页文件由以下命令生成并提交；后续推送到 main 时，GitHub Pages 自动发布。

```sh
npm test
npm run export:pages
```

日常编辑 `public/` 中的源文件，执行导出后一起提交根目录生成文件。`dist/` 是本地构建中间目录，不提交。

## 内容维护

- `public/catalog.js`：商品场景、文案、规格与客服配置。
- `public/app.js`：六个页面、商品详情、选茶问答与咨询单。
- `public/store.js`：本地茶单、收藏与导出逻辑。
- `public/styles.css`：手机和桌面响应式样式。

## 当前版本

支持搜索、场景筛选、收藏、三步选茶、本机茶单、数量调整、礼赠留言、咨询单复制与下载、冲泡指南与品牌故事。

这是网页体验版本。商品价格、规格、批次和客服入口确认后补齐；包装图片为设计概念。尚未接入微信原生小程序、后端订单或在线支付。咨询单不会自动发送，也不会创建真实订单。

茶单、收藏和偏好保存在当前浏览器，留言只保留在当前页面会话。
