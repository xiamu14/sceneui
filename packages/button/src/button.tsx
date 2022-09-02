import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import "./button.scoped.scss";

interface Props {
  icon?: React.ReactNode;
  round?: boolean;
}

const Button = (props: React.PropsWithChildren<Props>) => {
  const { children, icon, round } = props;
  return (
    <motion.button className={clsx("sceneui-button", { round })}>
      <>
        {icon}
        {children}
      </>
    </motion.button>
  );
};

export default Button;
