import {Button, View} from "@tarojs/components";
import './index.scss'

export function Footer() {
  return (
    <View style={{position: 'fixed', bottom: 0, width: '100%'}}>
      <Button open-type='contact' className='contact'>
        咨询客服
      </Button>
    </View>
  )
}
