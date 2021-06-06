import { Button } from "@material-ui/core";
import { MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler;
  text: string;
};

export default function ButtonInput({ text, onClick }: Props) {
  return (
    <div className="button-container">
      <Button variant="outlined" color="primary" onClick={onClick}>
        {text}
      </Button>
    </div>
  );
}
