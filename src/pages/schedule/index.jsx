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
        page = '/modules/schedule/group/index'
        break
      case 2:
        page = '/modules/schedule/personal/index'
        break
      case 3:
        page = '/modules/schedule/booked/index'
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
          Group Training
        </Button>
      </View>
      <View>
        <Button type='primary' onClick={() => gotoSubpage(2)}>
          Personal Training
        </Button>
      </View>
      <View>
        <Button type='primary' onClick={() => gotoSubpage(3)}>
          Booked Training
        </Button>
      </View>
    </View>
  )
}

export default Index
