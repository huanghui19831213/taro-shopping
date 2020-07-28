import Taro, { Component } from '@tarojs/taro'
import { Button  } from '@tarojs/components'
import './index.scss'

class Index extends Component<any,any> {
  componentWillMount () {

  }
  componentDidMount () {
  }
  componentWillUnmount () { }
  config = {
    navigationBarTitleText: '授权页面'
  }
  componentDidShow () {
  }
  componentDidHide () { }

  tobegin(e){
    console.log(e)
    if(e.detail.errMsg==='getUserInfo:ok'){
      Taro.redirectTo({url:'/pages/index/index'})
    }
  }
  render () {
    return (
      <Button open-type='getUserInfo' onGetUserInfo={this.tobegin}>授权页面</Button>
    )
  }
}
export default Index