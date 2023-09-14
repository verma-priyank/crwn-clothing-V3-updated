
import SHOP_DATA from "../shop-data.js"
import { createContext ,  useEffect,  useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
   categoriesMap  : {}
})

 export const CategoriesProvider = ({children}) => {
   
    useEffect(()=> {
        const getCategories = async () =>{
            const CategoryMap = await getCategoriesAndDocuments()
            
            setcategoriesMap(CategoryMap)
        }
        getCategories() ;
    }
    , [])

     const [categoriesMap , setcategoriesMap] = useState ({})
    const  value = {categoriesMap}

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}