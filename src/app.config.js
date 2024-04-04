// eslint-disable-next-line no-undef
export default defineAppConfig({
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '70fitness',
    navigationBarTextStyle: 'black'
  },
  pages: [
    'pages/index/index',
    'pages/schedule/index',
    'pages/store/index',
    'pages/my/index',
  ],
  subPackages: [
    {
      name: 'my',
      root: 'modules/my/',
      pages: [
        'version/index',
      ]
    },
    {
      name: 'schedule',
      root: 'modules/schedule/',
      pages: [
        'group/index',
        'personal/index',
        'booked/index',
      ]
    },
    {
      name: 'store',
      root: 'modules/store/',
      pages: [
        'cart/index',
        'order/index',
      ]
    }
  ],
  tabBar: {
    color: '#888',
    selectedColor: '#000',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home-active.png',
      },
      {
        text: '课表',
        pagePath: 'pages/schedule/index',
        iconPath: 'assets/tabbar/schedule.png',
        selectedIconPath: 'assets/tabbar/schedule-active.png',
      },
      {
        text: '商城',
        pagePath: 'pages/store/index',
        iconPath: 'assets/tabbar/store.png',
        selectedIconPath: 'assets/tabbar/store-active.png',
      },
      {
        text: '我的',
        pagePath: 'pages/my/index',
        iconPath: 'assets/tabbar/my.png',
        selectedIconPath: 'assets/tabbar/my-active.png',
      }
    ]
  }
});
