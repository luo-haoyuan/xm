import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://xmhua.wemsx.top",

  author: {
    name: "wemsx",
    url: "https://wemsx.top",
  },

  iconAssets: "iconfont",

  logo: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/logo/logot.svg",

  repo: "wemhy/xm",

  docsDir: "src",

  pageInfo: ["Date"],

  locales: {
    /**
     * Chinese locale config
     */
     "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      //footer: "默认页脚",

      displayFooter: false,
      
    },
    
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      //footer: "Default footer",

      displayFooter: false,

    },
  },

  encrypt: {
    config: {
      //"/demo/encrypt.html": ["1234"],
      //"/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://c.xmhua.wemsx.top",
      requiredMeta: ['nick'],
      emoji: false,
      imageUploader: false,
      copyright: false,
      reaction: false,
      search: false,
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/other/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/pwa/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
  },
});
