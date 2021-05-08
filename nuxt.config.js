export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '手机端',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: '/js/flexible.js',
      type: 'text/javascript',
      charset: 'utf-8'
    }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css',
    'normalize.css',
  ],

  // Server config
  server: {
    port: 4000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '@/plugins/vant',
    ssr: true
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  styleResources: {
    scss: []
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      allChunks: true
    },
    // babel处理依赖包vant里面的代码
    transpile: [/vant.*?less/],
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            style: (name) => {
              return `${name}/style/less.js`
            }
          },
          'vant'
        ],
        ["@babel/plugin-proposal-private-methods", {
          "loose": true
        }]
      ]
    },
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          rootValue: 75,
          propList: ['*'],
          selectorBlackList: ['van-']
        }
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
