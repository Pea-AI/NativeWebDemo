document.addEventListener('DOMContentLoaded', function () {
  // Make sure SDK is loaded
  if (window.TonAISdk) {
    // Initialize SDK
    window.TonAISdk.TonAdInit({ appId: '670a71909f518049a50c1264', debug: true })
    console.log('Ton AI SDK initialized')

    // TonAdBanner component: no longer supported
    // const TonAdBanner = window.TonAISdk.TonAdBanner
    // Render BannerWrapper to specified container
    // window.TonAISdk.RenderWeidget('ton-ad-banner-container', TonAdBanner, {
    //   blockId: '66ed98a77880d24349a42ccf',
    // })

    // Add button click event handler to show popup ad
    document.getElementById('show-ad-popup-btn').addEventListener('click', function () {
      window.TonAISdk.TonAdPopupShow({
        blockId: '66ed98a77880d24349a42ccf',
        onAdClick: () => {
          console.log('onAdClick')
          // After clicking the ad, you can perform some operations, such as recording click events, sending rewards
        },
        onAdError: (e) => {
          console.log('onAdError', e)
        },
        onAdClose: () => {
          console.log('onAdClose')
        },
        onAdShow: () => {
          console.log('onAdShow')
        },
      })
    })
  } else {
    console.error('Ton AI SDK not loaded')
  }
})
