import React, { MouseEventHandler } from "react";
import { memo } from "react";

interface Props {
  solid?: boolean;
  round?: boolean;
  darner?: boolean;
  size?: "small" | "medium" | "bigger";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = memo((props: React.PropsWithChildren<Props>) => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
});

export default Button;
