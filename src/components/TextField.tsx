import { Field, WrappedFieldProps } from "redux-form";
import ValidationMessage from "./ValidationMessage";
import { required } from "./Valitations";
import TextField from "@material-ui/core/TextField";

const renderField = (props: WrappedFieldProps) => {
  const {
    input,
    meta: { error, warning, touched },
  } = props;
  return (
    <>
      <TextField
        {...input}
        type="text"
        label="Name"
        variant="outlined"
        className="width"
      />
      {touched &&
        ((error && <ValidationMessage text={error} />) ||
          (warning && <span>{warning}</span>))}
    </>
  );
};

export default function Text() {
  return (
    <div className="field-box">
      <div>
        <Field name="name" component={renderField} validate={required} />
      </div>
    </div>
  );
}
