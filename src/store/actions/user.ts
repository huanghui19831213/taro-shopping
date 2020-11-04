import USERINFO from '../actionType'

const setUserInfo = (data) => {
  return {
    type: USERINFO,
    data: data
  }
}
export default setUserInfo