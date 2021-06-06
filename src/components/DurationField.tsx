import React, { useEffect, useState } from "react";
import { WrappedFieldProps } from "redux-form";
import "../style/form.scss";
import ValidationMessage from "./ValidationMessage";
import TextField from "@material-ui/core/TextField";

type time = {
  h: string;
  m: string;
  s: string;
};

interface Props extends WrappedFieldProps {
  label: string;
}

export default function DurationField({
  input,
  label,
  meta: { error, touched, warning },
}: Props) {
  const { onChange } = input;
  const [time, setTime] = useState<time>({ h: "00", m: "00", s: "00" });

  useEffect(() => {
    onChange(`${time.h}:${time.m}:${time.s}`);
  }, [onChange, time]);

  const handleChange = (value: string, maxValue: number, unit: string) => {
    let formatedValue;

    if (value.charAt(0) === "0" && value.length > 2) {
      formatedValue = value.substring(1);
    } else if (value.charAt(2) === "0") {
      formatedValue = value.substring(0, 2);
    } else if (value.length === 1) {
      formatedValue = `0${value}`;
    } else {
      formatedValue = value;
    }

    if (maxValue < parseInt(formatedValue)) {
      formatedValue = maxValue.toString();
    }

    setTime({ ...time, [unit]: formatedValue });
  };

  return (
    <div className="field-box">
      <label className="duration-label">{label}</label>
      <div className="duration">
        <TextField
          label="hh"
          variant="outlined"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          value={time.h}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e.target.value, 99, "h");
          }}
        />
        <TextField
          label="mm"
          variant="outlined"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          value={time.m}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e.target.value, 59, "m");
          }}
        />
        <TextField
          label="ss"
          variant="outlined"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          value={time.s}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e.target.value, 59, "s");
          }}
        />
      </div>
      {touched &&
        ((error && <ValidationMessage text={error} />) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
}
