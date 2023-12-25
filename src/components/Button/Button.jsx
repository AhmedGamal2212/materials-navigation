import {BASE_URL} from "../../data.js";
const Button = ({text, gid}) => {
    return (
        <a href={`${BASE_URL + gid}`} target="_blank" rel="noreferrer" role={"button"}>
                {text}
        </a>
    )
}

export default Button;
