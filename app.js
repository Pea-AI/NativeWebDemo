document.addEventListener('DOMContentLoaded', function () {
  // 确保 SDK 已加载
  if (window.TonAISdk) {
    // 初始化 SDK
    window.TonAISdk.TonAdInit({ appId: '670a71909f518049a50c1264', debug: true })
    console.log('Ton AI SDK 已初始化')
    // 加载 TonAdBanner 组件
    const TonAdBanner = window.TonAISdk.TonAdBanner
    // // 渲染 BannerWrapper 到指定的容器中
    window.TonAISdk.RenderWeidget('ton-ad-banner-container', TonAdBanner, {
      blockId: '66ed98a77880d24349a42ccf',
    })

    // 添加按钮点击事件处理
    document.getElementById('show-ad-popup-btn').addEventListener('click', function () {
      // 这里假设 TonAdPopupShow 内部会使用 setInterval 和 setTimeout
      window.TonAISdk.TonAdPopupShow({
        blockId: '66ed98a77880d24349a42ccf',
        onAdError: (e) => {
          console.log('onAdError', e)
        },
      })
    })
  } else {
    console.error('Ton AI SDK 未加载')
  }
})
