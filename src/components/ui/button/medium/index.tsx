import "./style.scss";
import {ButtonProps} from "src/types/components/button/button.type"

const MediumButton = ({text, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};

export default MediumButton;
