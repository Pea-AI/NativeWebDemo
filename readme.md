**

# Ton AI SDK 示例文档

## 简介

本示例展示了如何在原生 JavaScript 和 HTML 项目中通过 CDN 使用 Ton AI SDK。该 SDK 允许您轻松集成广告功能。

## 环境准备

在开始之前，请确保您的项目中包含以下依赖项：

* axios：用于处理 HTTP 请求。
* React 和 ReactDOM：用于构建用户界面。
* ton-ai-sdk：用于集成广告功能。

## 加载对应的包

在项目中，您需要引入所需的库和 SDK。以下是 index.html 的示例代码：

```html
    <!-- 添加 axios CDN -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!-- 添加 React 和 ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <!-- 通过 CDN 引入 ton-ai-sdk -->
    <script src="https://cdn.jsdelivr.net/npm/ton-ai-sdk@2.1.15/dist/index.umd.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ton-ai-sdk/dist/index.umd.css" />
```

## 初始化 sdk

您需要初始化 SDK，并创建一个 React 组件来渲染广告横幅。以下是 app.js 的示例代码：

```js
document.addEventListener('DOMContentLoaded', function () {
  // 确保 SDK 已加载
  if (window.TonAISdk) {
    // 初始化 SDK
    window.TonAISdk.TonAdInit({ appKey: 'your appkey', debug:true })
    console.log('Ton AI SDK 已初始化')
   // 加载 TonAdBanner 组件
    const TonAdBanner = window.TonAISdk.TonAdBanner
    // // 渲染 BannerWrapper 到指定的容器中
    window.TonAISdk.RenderWeidget('ton-ad-banner-container', TonAdBanner, {
      blockId: 'your block id',
    })

    // 添加按钮点击事件处理
    document.getElementById('show-ad-popup-btn').addEventListener('click', function () {
      // 这里假设 TonAdPopupShow 内部会使用 setInterval 和 setTimeout
      window.TonAISdk.TonAdPopupShow({
        blockId: 'your block id',
        onAdError: (e) => {
          console.log('onAdError', e)
        },
      })
    })
  } else {
    console.error('Ton AI SDK 未加载')
  }
})
```

## 运行示例

* 将上述代码复制到您的项目中，确保文件结构正确。

2. 打开 index.html 文件，您将看到一个广告横幅和一个按钮。

* 点击按钮以显示广告弹窗。

## 结论

通过以上步骤，您可以轻松地在您的项目中集成 Ton AI SDK。请根据需要调整 appKey 和 blockId 以适应您的应用场景。

如有任何问题，请参考 Ton AI SDK 的官方文档或联系支持团队。

---

希望这份文档能帮助您更好地理解如何使用 Ton AI SDK！
