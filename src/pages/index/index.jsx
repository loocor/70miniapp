import {useState} from "react";
import {Textarea, View} from '@tarojs/components'
import {Button} from "@nutui/nutui-react-taro"
import {getFmsToken} from "@/utils/token";
import './index.scss'

function Index() {
  // 定义 token 状态
  const [token = '', setToken] = useState()

  // 获取 token 字串
  const getTokens = async () => {
    try {
      const resp = await getFmsToken('dc')
      setToken(resp)
    } catch (err) {
      console.error('Failed to get token:', err)
    }
  }

  // 渲染页面
  return (
    <View className='container'>
      <Textarea
        className='token-string'
        autoHeight
        value={token}
      />
      <View>
        <Button type='primary' onClick={getTokens}>
          Fetch Token
        </Button>
      </View>
    </View>
  )
}

export default Index
