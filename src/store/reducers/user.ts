import  USERINFO  from '../actionType'

const INITIAL_STATE = {
  username: '',
  password: ''
}

export default function adduser (state = INITIAL_STATE, action) {
  
  console.log(action,223)
  switch (action.type) {
    case USERINFO:
      return {
        ...state,
        username: action.data.username,
        password: action.data.password
      }
    default:
      return state
  }
}