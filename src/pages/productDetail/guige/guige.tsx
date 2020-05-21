import Taro, { Component } from '@tarojs/taro'
import { Text,Image,View,Button } from '@tarojs/components'
import './guige.scss'
import pic1 from "@static/image/pic1.jpg";
import classNames from 'classnames';

export default class Guige extends Component<any,any> {
  constructor() {
    super(...arguments);
    this.state = {
      active: 0
    };
  }
  handlerClick(e){
    this.props.onGuige(e)
  }
  setActive(e){
    this.setState({
      active:e
    })
  }
  render () {
    const {active} =this.state;
    return (
      <View className='guige'>
        <View>
          <View className='top'>
            <Image src={pic1} mode='widthFix'></Image>
            <View className='right'>
                <View className='price'>￥248.63</View>
                <View className='num'>库存7804件</View>
            </View>
          </View>
          <View className='plr30'>
            <View className='title'>颜色分类</View>
            <View className='productType'>
              <Text onClick={this.setActive.bind(this,1)} className={classNames('text', active===1  && 'text-active')}>13框纯白款相框</Text>
              <Text onClick={this.setActive.bind(this,2)} className={classNames('text', active===2  && 'text-active')}>13框纯黑款相框</Text>
              <Text onClick={this.setActive.bind(this,3)} className={classNames('text', active===3  && 'text-active')}>16框纯白款含2个椭圆相框</Text>
            </View>
          </View>
          <View  className='plr30'>
            <Text>数量</Text>
          </View>
        </View>
        <Button onClick={this.handlerClick.bind(this,false)}>确定</Button>
      </View>
    )
  }
}