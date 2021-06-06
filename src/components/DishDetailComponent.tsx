import { WrappedFieldProps } from "redux-form";
import ValidationMessage from "./ValidationMessage";
import { TextField } from "@material-ui/core";

interface RenderFieldProps extends WrappedFieldProps {
  label: string;
  inputProps: { min?: number; max?: number; step?: number };
}

export default function RenderField(props: RenderFieldProps) {
  const {
    input,
    label,
    inputProps,
    meta: { error, warning, touched },
  } = props;

  return (
    <>
      <div className="field-box">
        <div>
          <TextField
            {...input}
            type="number"
            className="width"
            variant="outlined"
            label={label}
            InputProps={{ inputProps: { min: 0, ...inputProps } }}
          />
        </div>
      </div>
      {touched &&
        ((error && <ValidationMessage text={error} />) ||
          (warning && <span>{warning}</span>))}
    </>
  );
}
