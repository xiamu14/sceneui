import clsx from "clsx";
import { PropsWithChildren } from "react";
import "./index.scoped.scss";

const Center = ({ children }: PropsWithChildren<{}>) => {
  return <div className={clsx("sceneui-center")}>{children}</div>;
};

export default Center;
