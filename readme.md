# Ton AI SDK Example Documentation

## Introduction

This example demonstrates how to use the Ton AI SDK via CDN in a native JavaScript and HTML project. The SDK allows you to easily integrate advertising functionality.

## Environment Setup

Before starting, ensure your project includes the following dependencies:

* axios: For handling HTTP requests
* React and ReactDOM: For building user interfaces
* ton-ai-sdk: For integrating advertising functionality

## Loading Required Packages

In your project, you need to import the necessary libraries and SDK. Here's an example of index.html:

```html
    <!-- Add axios CDN -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!-- Add React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <!-- Import ton-ai-sdk via CDN -->
    <script src="https://cdn.jsdelivr.net/npm/ton-ai-sdk/dist/index.umd.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ton-ai-sdk/dist/index.umd.css" />
```

## Initializing the SDK

You need to initialize the SDK and create a React component to render the ad banner. Here's an example of app.js:

```js
document.addEventListener('DOMContentLoaded', function () {
  // Make sure SDK is loaded
  if (window.TonAISdk) {
    // Initialize SDK
    window.TonAISdk.TonAdInit({ appKey: 'your appkey', debug:true })
    console.log('Ton AI SDK initialized')

    // Add button click event handler to show popup ad
    document.getElementById('show-ad-popup-btn').addEventListener('click', function () {
      window.TonAISdk.TonAdPopupShow({
        blockId: 'your block id',
        onAdError: (e) => {
          console.log('onAdError', e)
        },
      })
    })
  } else {
    console.error('Ton AI SDK not loaded')
  }
})
```

## Running the Example

1. Copy the above code into your project, ensuring the file structure is correct.

2. Open the index.html file, and you will see an ad banner and a button.

3. Click the button to display the ad popup.

## Conclusion

By following these steps, you can easily integrate the Ton AI SDK into your project. Please adjust the appKey and blockId according to your application needs.

If you have any questions, please refer to the official Ton AI SDK documentation or contact the support team.

---

Hope this documentation helps you better understand how to use the Ton AI SDK!
