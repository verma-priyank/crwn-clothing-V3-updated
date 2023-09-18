import { CATEGORIES_ACTION_TYPES } from "./categories.types"

export const createAction =(type , payload) =>{
    return ({type , payload})
}

export const setcategoriesArray = (category) => {
    
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES , category)
}