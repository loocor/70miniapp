import {View} from '@tarojs/components'
import {Cell, Switch} from "@nutui/nutui-react-taro";
import {AddRectangle, Clock, Edit, NoReceive, Received, RemoveRectangle, ShieldWarning} from "@nutui/icons-react-taro";
import './index.scss'

function Index() {
  return (
    <View className='config'>
      <Cell.Group title='支付安全'>
        <Cell
          title={
            <View className='title'>
              <ShieldWarning className='icon' />
              <View className='text'>支付前发送验证短信</View>
            </View>
          }
          extra={
            <Switch
              defaultChecked
            />
          }
        />
      </Cell.Group>
      <Cell.Group title='微信通知'>
        <Cell
          title={
            <View className='title'>
              <Received className='icon' />
              <View className='text'>预约成功</View>
            </View>
          }
          extra={
            <Switch
              defaultChecked
            />
          }
        />
        <Cell
          title={
            <View className='title'>
              <NoReceive className='icon' />
              <View className='text'>预约取消</View>
            </View>
          }
          extra={
            <Switch
              defaultChecked
            />
          }
        />
        <Cell
          title={
            <View className='title'>
              <Edit className='icon' />
              <View className='text'>课前签到</View>
            </View>
          }
          extra={
            <Switch
              defaultChecked
            />
          }
        />
        <Cell
          title={
            <View className='title'>
              <Clock className='icon' />
              <View className='text'>课包到期</View>
            </View>
          }
          extra={
            <Switch
              defaultChecked
            />
          }
        />
        <Cell
          title={
            <View className='title'>
              <AddRectangle className='icon' />
              <View className='text'>储值卡充值</View>
            </View>
          }
          extra={
            <Switch
              defaultChecked
            />
          }
        />
        <Cell
          title={
            <View className='title'>
              <RemoveRectangle className='icon' />
              <View className='text'>储值卡扣费</View>
            </View>
          }
          extra={
            <Switch
              defaultChecked
            />
          }
        />
      </Cell.Group>
    </View>
  )
}

export default Index
