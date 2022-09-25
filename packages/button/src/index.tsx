import clsx from "clsx";
import { motion } from "framer-motion";
import React, { CSSProperties, MouseEventHandler } from "react";
import "./index.scoped.scss";

export interface Props {
  round?: boolean;
  solid?: boolean;
  className?: string;
  disable?: boolean;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: React.PropsWithChildren<Props>) => {
  const {
    children,
    onClick,
    round,
    solid,
    disable,
    style,
    className = "",
  } = props;
  return (
    <motion.button
      className={clsx(`sceneui-button ${className}`, {
        "btn-round": round,
        "btn-solid": solid,
      })}
      disabled={disable}
      style={style}
      onClick={onClick}
    >
      <>{children}</>
    </motion.button>
  );
};

export default Button;
