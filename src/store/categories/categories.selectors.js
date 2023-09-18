import { createSelector } from "reselect";

const selectcategoryReducer = (state) =>{
    console.log("reselect2")
    return state.categories
}

export const selectCategories = createSelector(
    [selectcategoryReducer] ,
    (categoriesSlice) => categoriesSlice.categoriesArray

)

export const categoriesSelector = createSelector(
    [selectCategories] ,
    (categories) => {
        console.log("reselect3")
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