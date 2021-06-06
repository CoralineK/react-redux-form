import { Field, WrappedFieldProps } from "redux-form";
import { required } from "./Valitations";
import ValidationMessage from "./ValidationMessage";
import React, { ReactElement } from "react";
import { MenuItem, TextField } from "@material-ui/core";

interface RenderFieldProps extends WrappedFieldProps {
  label: string;
  children: ReactElement | Array<ReactElement>;
}

const renderField = (props: RenderFieldProps) => {
  const {
    input,
    meta: { error, warning, touched },
    children,
  } = props;
  return (
    <>
      <TextField
        {...input}
        select
        variant="outlined"
        label="Type"
        className="width"
      >
        {children}
      </TextField>
      {touched &&
        ((error && <ValidationMessage text={error} />) ||
          (warning && <span>{warning}</span>))}
    </>
  );
};

type Props = {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function SelectField({ onChange }: Props) {
  return (
    <div className="field-box">
      <Field
        name="type"
        component={renderField}
        onChange={onChange}
        validate={required}
      >
        <MenuItem />
        <MenuItem value="pizza">pizza</MenuItem>
        <MenuItem value="soup">soup</MenuItem>
        <MenuItem value="sandwich">sandwich</MenuItem>
      </Field>
    </div>
  );
}
