
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Taro, { Component } from '@tarojs/taro'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import Ajax from '../../static/js/Ajax/http.js'
import setUserInfo from '../../store/actions/user'
import './index.scss'

type PageStateProps = {
  user: {
    username: string,
    password:string
  }
}
type PageDispatchProps = {
  onSetUserInfo: (e:any) => void
}

type IProps = PageStateProps & PageDispatchProps
interface Login {
  props: IProps;
}
@connect(({ user }) => ({
  user
}), (dispatch) => ({
  onSetUserInfo (e) {
    dispatch(setUserInfo(e))
  }
}))
 class Login extends Component<any,any>{
  constructor () {
    super(...arguments)
    this.state = {
      username:'',
      password:''
    }
  }
  config = {
    navigationBarTitleText: '用户登录'
  }
  onSubmit(){
    this.props.onSetUserInfo({username:this.state.username,password:this.state.password})
    Ajax.post('/api/weapp/GetCode2Session',{})
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  handleChange(key: any,value: any){
    this.setState({
      [key]:value
    })

  }
  render(){
    const {username,password} =this.state
    return(
      <AtForm className='loginPage'
        onSubmit={this.onSubmit.bind(this)}
      >
        <AtInput 
          name='value' 
          title='用户名' 
          type='text' 
          placeholder='请输入用户名' 
          value={username} 
          onChange={this.handleChange.bind(this, 'username')} 
        />
        <AtInput 
          name='value' 
          title='密码' 
          type='password' 
          placeholder='请输入密码' 
          value={password} 
          onChange={this.handleChange.bind(this, 'password')} 
        />
        <View>
          <AtButton type='primary' formType='submit' className='loginBtn' >登录</AtButton>
        </View>
      </AtForm>
    )
  }
}
export default Login 