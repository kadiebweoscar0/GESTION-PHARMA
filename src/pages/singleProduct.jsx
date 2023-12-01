import ProductPreview from "../components/ProductPreview";
import { useParams } from "react-router-dom";

function SingleProduct() {
    const useParam = useParams()
    const {id} = useParam;
    return(
        <>
            <h1>SingleProduct</h1>
            {id}
            <ProductPreview />
        </>

    )
}
export default SingleProduct;