import {useState} from "react";
import Taro from "@tarojs/taro";
import {Textarea, View} from '@tarojs/components'
import {Button} from "@nutui/nutui-react-taro"
import './index.scss'

function Index() {
  // 定义页面 url
  const [pageUrl, setPageUrl] = useState('');

  // 跳转页面
  const goToPage = () => {
    Taro.navigateTo({
      url: pageUrl
    })
  }

  // 渲染页面
  return (
    <View className='container'>
      <Textarea
        autoHeight
        className='textarea'
        placeholder='Enter your page url here'
        onInput={(e) => setPageUrl(e.detail.value)}
      />
      <View>
        <Button type='primary' onClick={goToPage}>
          Go to Page
        </Button>
      </View>
    </View>
  )
}

export default Index
