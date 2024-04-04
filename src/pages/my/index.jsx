import Taro from "@tarojs/taro";
import {View} from '@tarojs/components'
import {Button} from "@nutui/nutui-react-taro"
import './index.scss'

function Index() {
  // 前往 About 页面
  const goAbout = () => {
    Taro.navigateTo({
      url: '/modules/my/version/index'
    })
  }

  return (
    <View className='container'>
      <View>
        <Button type='primary' onClick={goAbout}>
          Version
        </Button>
      </View>
    </View>
  )
}

export default Index
