document.addEventListener('DOMContentLoaded', function () {
  // Make sure SDK is loaded
  if (window.TonAISdk) {
    // Initialize SDK
    window.TonAISdk.TonAdInit({ appId: '670a71909f518049a50c1264', debug: true })
    console.log('Ton AI SDK initialized')
    window.TonAISdk.SetUserOpenId('1234567890')

    // Add button click event handler to show popup ad
    document.getElementById('show-ad-popup-btn').addEventListener('click', function () {
      window.TonAISdk.TonAdPopupShow({
        blockId: '66ed98a77880d24349a42ccf',
        onAdClick: () => {
          console.log('onAdClick')
        },
        onAdVerifyed: (success, ad, message) => {
          console.log('onAdVerifyed', success, ad, message)
          if (success) {
            // After clicking the ad, you can perform some operations, such as recording click events, sending rewards
            console.log('ad verified')
            // sendReward()
          } else {
            console.log('ad not verified')
          }
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
