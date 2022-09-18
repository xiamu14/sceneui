import React, { CSSProperties } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import "./index.scoped.scss";

export interface Props {
  round?: boolean;
  solid?: boolean;
  className?: string;
  disable?: boolean;
  style?: CSSProperties;
}

const Button = (props: React.PropsWithChildren<Props>) => {
  const { children, round, solid, disable, style, className = "" } = props;
  return (
    <motion.button
      className={clsx(`sceneui-button ${className}`, {
        "btn-round": round,
        "btn-solid": solid,
      })}
      disabled={disable}
      style={style}
    >
      <>{children}</>
    </motion.button>
  );
};

export default Button;
