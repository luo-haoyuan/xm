export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"script\",{\"src\":\"https://identity.netlify.com/v1/netlify-identity-widget.js\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/other/favicon.ico\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/chrome-mask-512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/chrome-mask-192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/chrome-512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/chrome-192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossorigin\":\"use-credentials\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#46bd87\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/apple-icon-152.png\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"meta\",{\"name\":\"msapplication-TileImage\",\"content\":\"https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/ms-icon-144.png\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#ffffff\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"你好，小末花\",\"description\":\"小末花的官方站点\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"Hello,XiaoMo\",\"description\":\"The official site of XiaoMo Flower\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
