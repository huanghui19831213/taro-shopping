
import namedPng from '@static/image/pic1.jpg'
import namedPng2 from '@static/image/pic2.jpg'
import pic1 from '@static/image/1.jpg'
import pic2 from '@static/image/2.jpg'
import pic3 from '@static/image/3.jpg'
import pic4 from '@static/image/4.jpg'
import { AtButton } from 'taro-ui'
import Taro, { Component } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem,Image } from '@tarojs/components'
import {getGlobalData} from "../../static/js/utils"
import './index.scss'

class Index extends Component<any,any> {
  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  config = {
    navigationBarTitleText: '福利兑换'
  }

  componentDidShow () { 
    console.log(getGlobalData("loginType"),1)
    Taro.getSetting({
      success(res) {
        console.log(res.authSetting["scope.userInfo"])
        if (res.authSetting["scope.userInfo"]) {
        } else {
          Taro.redirectTo({ url: "/pages/index/auth" });
        }
      },
    });
  }

  componentDidHide () { }

  render () {
    return (
     <View className='index'>
       <View className='top'>
         <View className='overflow'>
          <View className='fl'>
            <View className='icon iconfont icon-xiangyou'></View>
            <Text>返回中智e家</Text>
          </View>
          <View className='fr'>
            <View></View>
            <Text>返回中智e家</Text>
          </View>
         </View>
         <Swiper className='imgSwiper' autoplay>
          <SwiperItem>
            <View className='demo-text-1'>
              <Image src={namedPng}  className='oImg'></Image>
            </View>
          </SwiperItem>
          <SwiperItem>
              <Image src={namedPng2}  className='oImg'></Image>
          </SwiperItem>
        </Swiper>
         <View className='activExplain'>
           <Text>活动说明</Text>
           <View className='icon iconfont icon-xiangyou'></View> 
         </View>
       </View>

       <View className='oul'>
         <View className='overflow title'>
            <View className='fl'>
              <View className='icon iconfont icon-xiangyou'></View>
              <Text>
                2020新年福利
                <Text className='xingyuan'>
                  心愿值500
                  <View></View>
                </Text>
              </Text>
            </View>
            <View className='fr'>
              <AtButton className='more'>更多<Text className='icon iconfont icon-xiangyou'></Text></AtButton>
            </View>
         </View>

         <View className='oli'>
           <View>
             <View className='imgDiv'>
               <Image src={pic1}  mode='heightFix' />
             </View>
             <View className='content'>
                <View>
                    <Text className='title'>商品商品商品</Text>
                    <Text className='desc'>介绍牛介绍牛介绍</Text>
                </View>
                <View className='fr'>
                   <AtButton className='see'>详情<Text className='icon iconfont icon-xiangyou'></Text></AtButton>
                </View>
             </View>
           </View>
         </View>

         <View className='oli'>
           <View>
             <View className='imgDiv'>
               <Image src={pic2}  mode='heightFix' />
             </View>
             <View className='content'>
                <View>
                    <Text className='title'>商品商品商品</Text>
                    <Text className='desc'>介绍牛介绍牛介绍</Text>
                </View>
                <View className='fr'>
                   <AtButton className='see'>详情<Text className='icon iconfont icon-xiangyou'></Text></AtButton>
                </View>
             </View>
           </View>
         </View>

         <View className='oli'>
           <View>
             <View className='imgDiv'>
               <Image src={pic3}  mode='heightFix' />
             </View>
             <View className='content'>
                <View>
                    <Text className='title'>商品商品商品</Text>
                    <Text className='desc'>介绍牛介绍牛介绍</Text>
                </View>
                <View className='fr'>
                   <AtButton className='see'>详情<Text className='icon iconfont icon-xiangyou'></Text></AtButton>
                </View>
             </View>
           </View>
         </View>

         <View className='oli'>
           <View>
             <View className='imgDiv'>
               <Image src={pic4}  mode='heightFix' />
             </View>
             <View className='content'>
                <View>
                    <Text className='title'>商品商品商品</Text>
                    <Text className='desc'>介绍牛介绍牛介绍</Text>
                </View>
                <View className='fr'>
                   <AtButton className='see'>详情<Text className='icon iconfont icon-xiangyou'></Text></AtButton>
                </View>
             </View>
           </View>
         </View>

       </View>

      </View>
    )
  }
}
export default Index