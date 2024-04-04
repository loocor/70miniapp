import {useState} from "react";
import Taro from "@tarojs/taro";
import {View} from '@tarojs/components'
import {Animate, Avatar, Cell, Col, Divider, Row, SafeArea} from "@nutui/nutui-react-taro"
import {ArrowRight, BookMark, Calendar, FilterV, Invoice, Reward, Tips, User} from '@nutui/icons-react-taro'
import './index.scss'

function Index() {
  // TODO: 用户信息
  const [userName] = useState('陈诚')
  const [avatar] = useState('https://m.70fitness.com/static/images/profile.gif')
  const [desc] = useState('尊贵的铂金会员')

  // 顶部面板
  const Header = (
    <View className='header'>
      <Animate type='breath' loop>
        <Row type='flex' justify='space-around'>
          <Col
            style={{
              '--nutui-col-default-margin-bottom': '0',
            }}
          >
            <Avatar size='large' src={avatar} />
          </Col>
        </Row>
      </Animate>
      <Divider
        style={{
          '--nutui-divider-text-color': '#ffffff',
          '--nutui-divider-border-color': '#ffffff88',
          '--nutui-divider-text-font-size': '16px',
        }}
      >
        {userName}
      </Divider>
      <View className='desc'>
        {desc}
      </View>
    </View>
  )

  // 菜单列表
  const MenuCell = (
    <>
      <Cell.Group>
        <Cell
          title={
            <View className='title'>
              <User className='icon' />
              <View className='text'>我的信息</View>
            </View>
          }
          extra={<ArrowRight />}
        />
        <Cell
          title={
            <View className='title'>
              <BookMark className='icon' />
              <View className='text'>我的会籍</View>
            </View>
          }
          extra={<ArrowRight />}
        />
        <Cell
          title={
            <View className='title'>
              <Invoice className='icon' />
              <View className='text'>我的订单</View>
            </View>
          }
          extra={<ArrowRight />}
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <View className='title'>
              <Calendar className='icon' />
              <View className='text'>我的预约</View>
            </View>
          }
          extra={<ArrowRight />}
        />
        <Cell
          title={
            <View className='title'>
              <Reward className='icon' />
              <View className='text'>出勤统计</View>
            </View>
          }
          extra={<ArrowRight />}
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <View className='title'>
              <FilterV className='icon' />
              <View className='text'>个性设置</View>
            </View>
          }
          extra={<ArrowRight />}
          onClick={() => {
            Taro.navigateTo({
              url: '/modules/my/config/index',
            })
          }}
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <View className='title'>
              <Tips className='icon' />
              <View className='text'>用户协议</View>
            </View>
          }
          extra={<ArrowRight />}
          onClick={() => {
            Taro.navigateTo({
              url: '/modules/my/eula/index',
            })
          }}
        />
      </Cell.Group>
    </>
  )

  // 渲染页面
  return (
    <>
      {Header}

      <View className='menus'>
        {MenuCell}
        <SafeArea position='bottom' />
      </View>
    </>
  )
}

export default Index
