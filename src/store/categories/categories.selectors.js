import { createSelector } from "reselect";

const selectcategoryReducer = (state) =>{
    
    return state.categories
}

export const selectCategories = createSelector(
    [selectcategoryReducer] ,
    (categoriesSlice) => categoriesSlice.categoriesArray

)

export const categoriesSelector = createSelector(
    [selectCategories] ,
    (categories) => {
        
        return categories.reduce((acc , category) => {
        
        const {title , items} = category ;
        acc[title.toLowerCase()] = items ;
        return acc ;
    
    } , {})}
)

// export const categoriesSelector = (state) => state.categories.categoriesArray.reduce((acc , category) => {
      
//     const {title , items} = category ;
//     acc[title.toLowerCase()] = items ;
//     return acc ;

// } , {})