import "./style.scss";
import {TextFieldProps} from "src/types/components/textField/textField.type";

const TextField = ({name, value, placeholder, type, icon, onChange}: TextFieldProps) => {
    return (
        <div className="textField">
            {icon && (
                <div>{icon}</div>
            )}
            <input name={name} value={value} placeholder={placeholder} type={type} onChange={onChange}/>
        </div>
    );
}

export default TextField;