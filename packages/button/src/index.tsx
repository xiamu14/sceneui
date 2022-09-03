import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import "./index.scoped.scss";

interface Props {
  icon?: React.ReactNode;
  round?: boolean;
  className?: string;
}

const Button = (props: React.PropsWithChildren<Props>) => {
  const { children, icon, round, className = "" } = props;
  return (
    <motion.button className={clsx(`sceneui-button ${className}`, { round })}>
      <>
        {icon}
        {children}
      </>
    </motion.button>
  );
};

export default Button;
