import { Route , Routes } from "react-router-dom";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setcategoriesArray} from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
   const dispatch = useDispatch() ;

  useEffect(()=> {
    const getCategories = async () =>{
        const CategoryArray = await getCategoriesAndDocuments()
        
        dispatch(setcategoriesArray( CategoryArray))
    }
    getCategories() ;
}
, [])
 
  return (
 
    <Routes>
    <Route index element={<CategoriesPreview/>}/>
    <Route path=":category" element={<Category />} />
    </Routes>
    
  );
};

export default Shop;
