import {BASE_URL} from "../../data.js";
const Button = ({text, gid}) => {
    return (
        <a href={`${BASE_URL + gid}`} target="_blank" rel="noreferrer">
            <button className="btn btn-primary">
                {text}
            </button>
        </a>
    )
}

export default Button;
