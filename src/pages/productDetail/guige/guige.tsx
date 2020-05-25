import Taro, { Component } from '@tarojs/taro'
import { Text,Image,View,Button } from '@tarojs/components'
import { AtInputNumber,AtIcon } from 'taro-ui'
import './guige.scss'
import pic1 from "@static/image/pic1.jpg";
import classNames from 'classnames';

export default class Guige extends Component<any,any> {
  constructor() {
    super(...arguments);
    this.state = {
      active: 0,
      number:0
    };
  }
  handlerClick(e){
    
  }
  handleChange(value){
    this.setState({
      number:value
    })
  }
  setActive(e){
    this.setState({
      active:e
    })
  }
  handleCancelClick(e){
    this.props.onGuige(e)
  }
  render () {
    const {active} =this.state;
    return (
      <View className='guige'>
          <View className='top'>
            <Image src={pic1} mode='widthFix'></Image>
            <View className='right'>
                <View className='price'>￥248.63
                  <AtIcon className='deleteIcon' value='close-circle' color='#666' 
                  customStyle='float:right;margin-right:15px;' onClick={this.handleCancelClick.bind(this)}
                  ></AtIcon>
                </View>
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
          <View  className='plr30 flex'>
            <Text>数量</Text>
            <AtInputNumber
              type='number'
              min={0}
              max={10}
              step={1}
              value={this.state.number}
              onChange={this.handleChange.bind(this)}
            />
        </View>
        <View className='button-footer'>
          <Button onClick={this.handlerClick.bind(this)}>加入购物车</Button>
          <Button onClick={this.handlerClick.bind(this)}>立即购买</Button>
        </View>
        
      </View>
    )
  }
}
