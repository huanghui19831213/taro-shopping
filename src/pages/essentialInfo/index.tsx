
import { View,Text } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class EssentialInfo extends Component<any,any>{
  config = {
    navigationBarTitleText: '我的收货地址'
  }
  editor(){
    Taro.navigateTo({
      'url':'/pages/essentialInfo/setAddress/index'
    })
  }
  render(){
    return(
      <View className='essentialInfo'>
        <View className='oUl'>
            <View className='oLi'>
              <View className='left'>黄</View>
              <View className='content'>
                <View className='top'>
                  <Text className='username'>黄辉</Text>
                  <Text>15921576682</Text>
                </View>
                <View className='warpper'>
                  <Text className='f26'>默认</Text>
                  <Text className='f26'>上海上海市闵行区金平路丽都城113号203</Text>
                </View>
              </View>
              <Text className='right' onClick={this.editor.bind(this)}>
                | 编辑
              </Text>
            </View>
            
            <View className='oLi'>
              <View className='left'>黄</View>
              <View className='content'>
                <View className='top'>
                  <Text className='username'>黄辉</Text>
                  <Text className='f26'>15921576682</Text>
                </View>
                <View className='warpper'>
                  <Text className='f26'>上海上海市闵行区金平路丽都城113号203</Text>
                </View>
              </View>
              <Text className='right'>
                | 编辑
              </Text>
            </View>

            <View className='oLi'>
              <View className='left'>黄</View>
              <View className='content'>
                <View className='top'>
                  <Text className='username'>黄辉</Text>
                  <Text>15921576682</Text>
                </View>
                <View className='warpper'>
                  <Text className='f26'>上海上海市闵行区金平路丽都城113号203</Text>
                </View>
              </View>
              <Text className='right'>
                | 编辑
              </Text>
            </View>
        </View>
        <AtButton type='primary'>添加新地址</AtButton>
      </View>
    )
  }
}