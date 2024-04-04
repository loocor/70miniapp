import Taro from "@tarojs/taro";
import {View} from '@tarojs/components'
import {Button} from "@nutui/nutui-react-taro"
import './index.scss'

function Index() {
  // 跳转页面
  const gotoSubpage = (id) => {
    let page = ''
    switch (id) {
      case 1:
        page = '/modules/store/cart/index'
        break
      case 2:
        page = '/modules/store/order/index'
        break
    }

    Taro.navigateTo({
      url: page
    })
  }

  // 渲染页面
  return (
    <View className='container'>
      <View>
        <Button type='primary' onClick={() => gotoSubpage(1)}>
          Cart
        </Button>
      </View>
      <View>
        <Button type='primary' onClick={() => gotoSubpage(2)}>
          Order List
        </Button>
      </View>
    </View>
  )
}

export default Index
