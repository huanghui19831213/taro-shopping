import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text,Image  } from '@tarojs/components'
import './index.scss'
import namedPng from '@static/image/pic1.jpg'
import namedPng2 from '@static/image/pic2.jpg'

export default class Index extends Component {
  componentDidMount () {
    
  }
  componentWillMount () { }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getProductDetail(){
    Taro.navigateTo({
      url: '/pages/productDetail/index',
    })
  }
  render () {
    return (
      <View className='index'>
        <View className='oUl'>
          <View className='oLi'>
            <View className='oDiv' onClick={()=>this.getProductDetail()}>
              <Image src={namedPng}  className='oImg'></Image>
                <Text>实木玄关桌门厅隔断装饰老榆木条案供台简约现代家具新中式玄关柜</Text>
                <View>
                  <View className='price'>￥6500</View>
                  <View className='Num'>9人已购买</View>
              </View>
            </View>
          </View>
          <View className='oLi'>
            <View className='oDiv'>
                <Image src={namedPng2} className='oImg'></Image>
                  <Text>实木玄关桌门厅隔断装饰老榆木条案供台简约现代家具新中式玄关柜</Text>
                  <View>
                    <View className='price'>￥6500</View>
                    <View className='Num'>9人已购买</View>
                </View>
              </View>
          </View>
          
          <View className='oLi'>
            <View className='oDiv'>
                <Image src={namedPng2}  className='oImg'></Image>
                  <Text>实木玄关桌门厅隔断装饰老榆木条案供台简约现代家具新中式玄关柜</Text>
                  <View>
                    <View className='price'>￥6500</View>
                    <View className='Num'>9人已购买</View>
                </View>
              </View>
          </View>
          
          <View className='oLi'>
            <View className='oDiv'>
                <Image src={namedPng2}  className='oImg'></Image>
                  <Text>实木玄关桌门厅隔断装饰老榆木条案供台简约现代家具新中式玄关柜</Text>
                  <View>
                    <View className='price'>￥6500</View>
                    <View className='Num'>9人已购买</View>
                </View>
              </View>
          </View>
          
          <View className='oLi'>
            <View className='oDiv'>
                <Image src={namedPng2}  className='oImg'></Image>
                  <Text>实木玄关桌门厅隔断装饰老榆木条案供台简约现代家具新中式玄关柜</Text>
                  <View>
                    <View className='price'>￥6500</View>
                    <View className='Num'>9人已购买</View>
                </View>
              </View>
          </View>
          
          <View className='oLi'>
            <View className='oDiv'>
                <Image src={namedPng2}  className='oImg'></Image>
                  <Text>实木玄关桌门厅隔断装饰老榆木条案供台简约现代家具新中式玄关柜</Text>
                  <View>
                    <View className='price'>￥6500</View>
                    <View className='Num'>9人已购买</View>
                </View>
              </View>
          </View>
          
          <View className='oLi'>
            <View className='oDiv'>
                <Image src={namedPng2}  className='oImg'></Image>
                  <Text>实木玄关桌门厅隔断装饰老榆木条案供台简约现代家具新中式玄关柜</Text>
                  <View>
                    <View className='price'>￥6500</View>
                    <View className='Num'>9人已购买</View>
                </View>
              </View>
          </View>
        </View>
      </View>
    )
  }
}
