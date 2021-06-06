import { useState } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import DishDetails from "./DishDetailsFields";
import DurationField from "./DurationField";
import TextField from "./TextField";
import SelectField from "./SelectField";
import { duration } from "./Valitations";
import Button from "./Button";
import { FormControl } from "@material-ui/core";
import { postDish } from "../POST";

const onSubmit = (values: any) => {
  let data = values;

  if (data.no_of_slices) {
    data = { ...data, no_of_slices: parseInt(data.no_of_slices) };
  }
  if (data.diameter) {
    data = { ...data, diameter: parseFloat(data.diameter) };
  }
  if (data.spiciness_scale) {
    data = { ...data, spiciness_scale: parseInt(data.spiciness_scale) };
  }
  if (data.slices_of_bread) {
    data = { ...data, slices_of_bread: parseInt(data.slices_of_bread) };
  }

  const URL = "https://frosty-wood-6558.getsandbox.com:443/dishes";
  postDish(URL, data);
};

function Form(props: InjectedFormProps) {
  const { handleSubmit } = props;

  const [type, setType] = useState("type");

  return (
    <FormControl onSubmit={handleSubmit}>
      <TextField />
      <Field
        name="preparation_time"
        label="Preparation time"
        component={DurationField}
        validate={duration}
      />
      <SelectField onChange={(e) => setType(e.target.value)} />
      <DishDetails type={type} />
      <Button text="Submit" onClick={handleSubmit} />
    </FormControl>
  );
}

export default reduxForm({
  form: "simple",
  onSubmit,
})(Form);
