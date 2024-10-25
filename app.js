document.addEventListener('DOMContentLoaded', function () {
  // 确保 SDK 已加载
  if (window.TonAISdk) {
    // 初始化 SDK
    window.TonAISdk.TonAdInit({ appKey: 'moJHPwHiGpSP7Lrz88xY1IAXXamF90', baseUrl: 'https://dev.ton.ai' })
    console.log('Ton AI SDK 已初始化')

    // 加载 TonAdBanner 组件
    const TonAdBanner = window.TonAISdk.TonAdBanner

    // 创建一个简单的 React 组件来包装 TonAdBanner
    const BannerWrapper = () => {
      return React.createElement(TonAdBanner, {
        blockId: '66e165314604eb00111f7cae',
      })
    }

    // 渲染 BannerWrapper 到指定的容器中
    ReactDOM.render(React.createElement(BannerWrapper), document.getElementById('ton-ad-banner-container'))

    // 添加按钮点击事件处理
    document.getElementById('show-ad-popup-btn').addEventListener('click', function () {
      // 这里假设 TonAdPopupShow 内部会使用 setInterval 和 setTimeout
      window.TonAISdk.TonAdPopupShow({
        blockId: '66e165314604eb00111f7cae',
        onAdError: (e) => {
          console.log('onAdError', e)
        },
      })
    })
  } else {
    console.error('Ton AI SDK 未加载')
  }
})
