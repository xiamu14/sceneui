import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./index.scoped.scss";

const OFFSET = 16; // the offset between target and content
export enum Position {
  BottomLeft = "bottomLeft",
  BottomCenter = "bottomCenter",
  TopCenter = "topCenter",
}

interface Props {
  content: (params: { hide: () => void }) => JSX.Element;
  offset?: number;
  position?: Position;
}

export default function Popover(props: React.PropsWithChildren<Props>) {
  const {
    children,
    content,
    offset = OFFSET,
    position = Position.BottomLeft,
  } = props;
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentStyle, setContentStyle] = useState<React.CSSProperties>();
  useEffect(() => {
    if (containerRef.current) {
      const domRect = containerRef.current.getBoundingClientRect();
      console.log(
        "%c debug",
        "background: #69c0ff; color: white; padding: 4px",
        domRect
      );
      if (position === Position.BottomLeft) {
        setContentStyle({
          top: domRect.top + domRect.height + offset,
          left: domRect.left,
        });
      } else if (position === Position.BottomCenter) {
        setContentStyle({
          top: domRect.top + domRect.height + offset,
          left: domRect.left + domRect.width / 2,
          transform: "translate(-50%)",
        });
      } else if (position === Position.TopCenter) {
        setContentStyle({
          top: domRect.top - offset,
          left: domRect.left + domRect.width / 2,
          transform: "translate(-50%, -100%)",
        });
      }
    }
  }, []);

  const handleHide = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div
        className="wrapper"
        ref={containerRef}
        onClick={() => setOpen((prev) => !prev)}
      >
        {children}
      </div>
      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={clsx("content")} style={contentStyle}>
                {content({ hide: handleHide })}
                <div
                  className={clsx("arrow", {
                    bottom: position.includes("bottom"),
                    top: position.includes("top"),
                  })}
                ></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.querySelector("body") as Element
      )}
    </>
  );
}
