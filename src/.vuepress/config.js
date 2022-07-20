const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress para Bantotal',

  dest: 'docs',
  base: '/vuepress-bantotal/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
   head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "https://bantotalcampus.dlya.com.uy/moodle/pluginfile.php/1/theme_adaptable/favicon/1652965632/Icon205x205pxB.jpg"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "https://bantotalcampus.dlya.com.uy/moodle/pluginfile.php/1/theme_adaptable/favicon/1652965632/Icon205x205pxB.jpg"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "https://bantotalcampus.dlya.com.uy/moodle/pluginfile.php/1/theme_adaptable/favicon/1652965632/Icon205x205pxB.jpg"}],
   
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'proyect1',
            'proyect2',
            'proyect3',
            'proyect4',
            // 'proyect5',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
