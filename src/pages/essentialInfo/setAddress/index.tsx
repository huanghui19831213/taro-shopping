
import { View ,Text, Input} from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import TaroRegionPicker from '../../../components/address_picker'
import './index.scss'

export default class SetAddress extends Component<any,any>{
  config = {
    navigationBarTitleText: '我的地址'
  }
  onGetRegion(e){
    console.log(e)
  }
  render(){
    return(
      <View className='addressInfo'>
        <View className='oLi' >
          <Text>收货人</Text>
          <Input placeholder='请输入收货人姓名' />
        </View>
        <View className='oLi' >
          <Text>联系电话</Text>
          <Input  placeholder='请输入联系人电话' />
        </View>
        <View className='oLi quxian' >
          <Text>地址</Text>
           <TaroRegionPicker onGetRegion={this.onGetRegion.bind(this)} />
        </View>
        <View className='oLi' >
          <Text>详细地址</Text>
          <Input  placeholder='请输入详细地址' />
        </View>
        <View className='oLi' >
          <Text>邮编</Text>
          <Input  placeholder='请输入邮编' />
        </View>
      </View>
    )
  }
}