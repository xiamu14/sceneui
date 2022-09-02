import React, { useMemo } from "react";
import clsx from "clsx";
import "./badge.scoped.scss";

interface Props {
  dot?: boolean;
  color?: string;
  flat?: boolean;
}

const defaultColor = "#6a6cf6";
const flatColor = "#898bd7";

const Button = (props: React.PropsWithChildren<Props>) => {
  const { children, flat } = props;
  const style = useMemo(() => {
    const style = {};
    if (flat) {
      Object.assign(style, {
        backgroundColor: flatColor,
        color: defaultColor,
      });
    }

    return style;
  }, [flat]);
  return (
    <div className={clsx("sceneui-badge")} style={style}>
      {children}
    </div>
  );
};

export default Button;
