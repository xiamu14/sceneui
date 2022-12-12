import clsx from "clsx";
import { useMemo } from "react";
interface Props {
  x?: string | number;
  y?: string | number;
  flex?: boolean;
}

const Space = (props: Props) => {
  const { x = 0, y = 0, flex } = props;
  const style = useMemo(() => {
    if (flex) {
      return { flex: "1 0 0" };
    } else {
      return {
        width: typeof x == "string" ? x : `${x}px`,
        height: typeof y == "string" ? y : `${y}px`,
      };
    }
  }, []);
  return <div className={clsx("sceneui-space")} style={style}></div>;
};

export default Space;
