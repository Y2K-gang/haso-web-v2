import "./style.scss";
import {ButtonProps} from "src/types/components/button/button.type"

const SmallButton = ({text, onClick, disabled}: ButtonProps) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};

export default SmallButton;
