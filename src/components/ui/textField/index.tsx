import "./style.scss";
import {TextFieldProps} from "src/types/components/textField/textField.type";

const TextField = ({placeholder, icon, name}: TextFieldProps) => {
    return(
      <div className="textField">
          {icon && (
              <div>{icon}</div>
          )}
          <input name={name} placeholder={placeholder} />
      </div>
    );
}

export default TextField;