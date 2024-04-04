// eslint-disable-next-line no-undef
export default defineAppConfig({
  darkmode: true,
  themeLocation: 'theme.json',
  window: {
    navigationBarTitleText: '70fitness',
    navigationBarBackgroundColor: "@navBgColor",
    navigationBarTextStyle: "@navTxtStyle",
    backgroundColor: "@bgColor",
    backgroundTextStyle: "@bgTxtStyle",
    backgroundColorTop: "@bgColorTop",
    backgroundColorBottom: "@bgColorBottom"
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
    color: "@tabFontColor",
    selectedColor: "@tabSelectedColor",
    backgroundColor: "@tabBgColor",
    borderStyle: "@tabBorderStyle",
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: '@homeIconPath',
        selectedIconPath: '@homeIconActivePath',
      },
      {
        text: '课表',
        pagePath: 'pages/schedule/index',
        iconPath: '@scheduleIconPath',
        selectedIconPath: '@scheduleIconActivePath',
      },
      {
        text: '商城',
        pagePath: 'pages/store/index',
        iconPath: '@storeIconPath',
        selectedIconPath: '@storeIconActivePath',
      },
      {
        text: '我的',
        pagePath: 'pages/my/index',
        iconPath: '@myIconPath',
        selectedIconPath: '@myIconActivePath',
      }
    ]
  }
});
