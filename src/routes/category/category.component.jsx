import "./category.styles.scss"
import {  useState , useEffect } from "react";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../store/categories/categories.selectors";
import { useParams } from "react-router-dom";
import Productscard from "../../components/products-card/products-card.component";

const Category = () =>{

    const {category} = useParams() ;
    const [products , setProducts] = useState([])
    const  categoriesMap  = useSelector(categoriesSelector);

    useEffect(()=>{
        
        setProducts(categoriesMap[category])
    }
      
    ,[categoriesMap , category])

return (<>
    
    <h2 className="category-title">{category.toUpperCase()}</h2>
    <div className="category-container">
    {products && products.map(product => {
        return (
            <Productscard key ={product.id} products={product} />
        )
    })}
    </div>
    </>)


}

export default Category ;