import ProductPreview from "../components/ProductPreview";
import { useParams } from "react-router-dom";

function SingleProduct({newProduct}) {
    const useParam = useParams()
    const {id} = useParam;

    const medicament = newProduct.find((medic) => medic.id === id);

    if (!medicament) {
        return <p>L&lsquo;medicament que vous avez demander n&lsquo;existe pas</p>;
    }


    return(
        <>
            <h1>SingleProduct</h1>
            <h2>{medicament.name}  {id}</h2>
            <img src={medicament.image} alt="photo-medicament" />
            <h4>{medicament.description}</h4>
            <ProductPreview />
        </>

    )
}
export default SingleProduct;