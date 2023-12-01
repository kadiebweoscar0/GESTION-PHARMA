import { Link } from "react-router-dom";

function Button({ValueButton, LinkValue}) {
    return(
        <button><Link to={LinkValue}>{ValueButton}</Link></button>
    )
}
export default Button;