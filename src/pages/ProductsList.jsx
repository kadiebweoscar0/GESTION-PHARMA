import { Link } from "react-router-dom";


function ProductsList({newProduct}) {
    return(
        <>
            <h1>Products List</h1>
            <lu>
                {
                    newProduct.map(product => (
                        <li key={product.id}><Link to={`/products/${product.id}`}>{product.name}</Link></li>
                    ))
                }
            </lu>
        </>
    )
}
export default ProductsList;