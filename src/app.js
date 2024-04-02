import {useEffect} from 'react'
import {useDidHide, useDidShow} from '@tarojs/taro'
import './app.scss'

function App(props) {
  useEffect(() => {
  })

  // onShow
  useDidShow(() => {
  })

  // onHide
  useDidHide(() => {
  })

  return props.children
}

export default App
