import { Field } from "redux-form";
import { required } from "./Valitations";
import renderField from "./DishDetailComponent";

type Props = {
  type: string;
};

export default function DishDetails({ type }: Props) {
  return (
    <>
      {type === "pizza" && (
        <>
          <Field
            name="no_of_slices"
            label="Number of slices"
            component={renderField}
            validate={required}
          />
          <Field
            name="diameter"
            label="Diameter"
            component={renderField}
            validate={required}
            inputProps={{ min: 0, step: 0.1 }}
          />
        </>
      )}
      {type === "soup" && (
        <Field
          name="spiciness_scale"
          label="Spiciness scale"
          component={renderField}
          validate={required}
          inputProps={{ min: 1, max: 10 }}
        />
      )}
      {type === "sandwich" && (
        <Field
          name="slices_of_bread"
          label="Slices of bread"
          component={renderField}
          validate={required}
        />
      )}
    </>
  );
}
