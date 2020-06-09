import Taro from '@tarojs/taro'

import { View } from '@tarojs/components'
import { useSelector } from '@tarojs/redux'

const CounterComponent = () => {
  const counter = useSelector((state:any) => state.user)
  return <View>{counter.username}</View>
}
export default CounterComponent