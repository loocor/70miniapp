import {useRef, useState} from "react";
import {View} from "@tarojs/components";
import {Avatar, Cell, SearchBar, Swiper, Tabs, Tag} from "@nutui/nutui-react-taro"
import {ArrowRight} from "@nutui/icons-react-taro";
import {group} from "./data";
import './index.scss'

function Index() {
  // 状态变量
  const [typeIndex, setTypeIndex] = useState(0)
  const [dayIndex, setDayIndex] = useState(0)
  const courseSwiperRef = useRef(0)

  // 搜索框
  const search = (
    <SearchBar
      shape='round'
      placeholder='可按教练、课程、时间搜索'
      style={{
        '--nutui-searchbar-input-text-align': 'center',
      }}
    />
  )

  // 类别标签
  const typeBar = (
    <Tabs
      onChange={(type) => {
        setTypeIndex(type)
      }}
      style={{
        '--nutui-tabs-titles-font-size': '16px',
        '--nutui-tabs-titles-item-color': '#444',
      }}
      activeType='line'
      value={typeIndex}
    >
      <Tabs.TabPane title='团课' />
      <Tabs.TabPane title='私教' />
      <Tabs.TabPane title='已约' />
    </Tabs>
  )

  // 日期标签
  const daysSwitcher = (
    <Tabs
      onChange={(day) => {
        courseSwiperRef.current?.to(day)
        setDayIndex(day)
      }}
      activeType='card'
      value={dayIndex}
      style={{
        '--nutui-tabs-titles-font-size': '13px',
        '--nutui-tabs-titles-item-color': '#888',
        '--nutui-tabs-titles-item-active-color': '#444',
        '--nutui-tabs-titles-item-active-font-weight': 'bold',
      }}
    >
      {group.map((item) => (
        <Tabs.TabPane
          key={item.dateFull}
          title={
            <View className='title'>
              <View className='date'>{item.date}</View>
              <View className='week'>{item.week}</View>
            </View>
          }
        />
      ))}
    </Tabs>
  )

  // 课程状态
  const status = (s) => {
    switch (s) {
      case 0:
        return <Tag round type='info'>可预约</Tag>
      case 1:
        return <Tag round type='primary'>已预约</Tag>
      case 2:
        return <Tag round type='warning'>已约满</Tag>
      case 3:
        return <Tag round type='danger'>已停约</Tag>
      default:
        return <Tag round type='default'>-</Tag>
    }
  }

  // 课程列表
  const courseSwiper = (
    <Swiper
      loop
      ref={courseSwiperRef}
      className='course-swiper'
      height='calc(100vh - 140px)'
      onChange={(e) => {
        setDayIndex(e.detail?.current)
      }}
    >
      {group.map((item, day) => (
        <Swiper.Item key={item.dateFull}>
          <Cell.Group className='course-day'>
            {item.course.map((course, row) => (
              <Cell
                key={course.time}
                className='course-item'
                title={
                  <View className='title'>
                    <Avatar className='image' size='large' src={course.image + `?random=` + day + row} />
                    <View>
                      <View className='name'>{course.name}</View>
                      <View className='time'>{course.time}</View>
                      <View className='coach'>{course.coach}</View>
                    </View>
                  </View>
                }
                extra={
                  <View className='extra'>
                    {status(course.status)}
                    <ArrowRight />
                  </View>
                }
              />
            ))}
          </Cell.Group>
        </Swiper.Item>
      ))}
    </Swiper>
  )

  // 渲染页面
  return (
    <>
      {search}
      {typeBar}
      <View className='course'>
        {daysSwitcher}
        {courseSwiper}
      </View>
    </>
  )
}

export default Index
