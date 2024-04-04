import Taro from "@tarojs/taro";
import {View} from '@tarojs/components'
import {Button} from "@nutui/nutui-react-taro"
import './index.scss'

function Index() {
  // 返回 main 页面
  const goBack = () => {
    Taro.navigateBack()
  }

  return (
    <View className='container'>
      <View>
        <Button type='primary' onClick={goBack}>
          Go back
        </Button>
      </View>
    </View>
  )
}

export default Index
