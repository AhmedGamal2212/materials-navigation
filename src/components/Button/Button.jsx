import {BASE_URL} from "../../data.js";

const Button = ({text, gid}) => {

    const handleMouseOver = (e) => {
        e.target.className = "";
    }

    const handleMouseOut = (e) => {
        e.target.className = "outline";
    }

    return (
        <a href={`${BASE_URL + gid}`} target="_blank" rel="noreferrer" role={"button"} className={"outline"}
           onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {text}
        </a>
    )
}

export default Button;
