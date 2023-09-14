import { Link } from "react-router-dom";
import Productscard from "../products-card/products-card.component";
import "./category-preview.styles.scss"

const CategoryPreview = ({title , products}) =>{

return (
    <div className="category-preview-container">
     <h2> <Link to={title}><span className="title">{title.toUpperCase()}</span></Link></h2>
     <div className="preview">
     {products.filter((_ , idx) => idx < 4).map(product => {
        return (
            <Productscard title={product.id} products ={product}/>
        )
     })}
     </div>
    </div>
)

}

export default CategoryPreview ;