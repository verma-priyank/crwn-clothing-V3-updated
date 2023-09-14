import "./category.styles.scss"
import { useContext , useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import Productscard from "../../components/products-card/products-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
const Category = () =>{

    const {category} = useParams() ;
    const [products , setProducts] = useState([])
    const { categoriesMap } = useContext(CategoriesContext)

    useEffect(()=>{
        console.log(categoriesMap)
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