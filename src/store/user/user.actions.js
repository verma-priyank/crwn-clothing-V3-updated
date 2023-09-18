import { USER_ACTION_TYPE } from "./user.types"

const createAction = (type , payload) => {
    return ({type , payload})
}

export const setCurrentUser = (user) =>{
    return createAction(USER_ACTION_TYPE.SET_CURRENT_USER , user)
}