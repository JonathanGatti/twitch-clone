
interface Action {
  type: string
}

interface UserState {
  isSignedIn: boolean | undefined,
}

export const authReducers = (state: UserState = {isSignedIn: undefined} , action: Action) => {
  switch(action.type){
    case 'SIGN_IN':
      return {...state, isSignedIn: true}
    case 'SIGN_OUT':
      return {...state, isSignedIn: false}
    default: 
      return state;
  }
}