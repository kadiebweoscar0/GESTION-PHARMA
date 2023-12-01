import { useNavigate } from "react-router-dom";

function Button({ValueButton, LinkValue}) {

    const navigate = useNavigate();
    const handleclick = () =>{
        navigate(LinkValue)
    }

    return(
        <button onClick={handleclick}>{ValueButton}</button>
    )
}
export default Button;