import React from "react";
import clsx from "clsx";
import "./badge.scoped.scss";

interface Props {
  dot?: boolean;
  color?: string;
}

const Button = (props: React.PropsWithChildren<Props>) => {
  const { children } = props;
  return <div className={clsx("sceneui-badge")}>{children}</div>;
};

export default Button;
