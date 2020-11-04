import  USERINFO  from '../actionType'

const INITIAL_STATE = {
  username: '',
  password: ''
}

export default function adduser (state = INITIAL_STATE, action) {
  
<<<<<<< HEAD
  console.log(action,223)
=======
>>>>>>> abec130b2f75c3b395755f39af26f2371e8f7f9b
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