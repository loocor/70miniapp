// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subPackages: [
    {
      name: "my",
      root: "modules/my/",
      pages: [
        "index/index",
        "version/index",
      ]
    },
    {
      name: "schedule",
      root: "modules/schedule/",
      pages: [
        "index/index",
        "group/index",
        "personal/index",
      ]
    },
    {
      name: "store",
      root: "modules/store/",
      pages: [
        "index/index",
        "order/index",
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '70fitness',
    navigationBarTextStyle: 'black'
  },
});
