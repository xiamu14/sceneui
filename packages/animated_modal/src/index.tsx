import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useRef } from "react";
import { X } from "react-feather";
import "./index.scoped.scss";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface Props {
  visible: boolean;
  hide: () => void;
  show: () => void;
  zIndex?: number;
}

const $AnimatedModal = ({
  visible,
  hide,
  show,
  zIndex = 100,
  children,
}: React.PropsWithChildren<Props>) => {
  const bind = useCallback(
    (child: React.ReactNode) => {
      if (!React.isValidElement(child)) {
        return null;
      }

      const childProps = {
        ...child.props,
        ...{ visible, hide, show },
      };
      return React.cloneElement(child, childProps);
    },
    [hide, show, visible]
  );

  const beforeRef = useRef<{ x: number; y: number }>();
  const afterRef = useRef<{ x: number; y: number }>();

  return (
    <div className="animated-modal">
      <AnimatePresence initial={false} mode="wait">
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="backdrop"
            style={{ zIndex }}
            onMouseDown={(e) => {
              beforeRef.current = {
                x: e.clientX,
                y: e.clientY,
              };
            }}
            onMouseUp={(e) => {
              afterRef.current = {
                x: e.clientX,
                y: e.clientY,
              };
            }}
            onClick={(e) => {
              if ((e.target as HTMLElement).classList.contains("backdrop")) {
                if (
                  JSON.stringify(beforeRef.current) ===
                  JSON.stringify(afterRef.current)
                ) {
                  hide();
                }
              }
            }}
          >
            <motion.div
              className="modal"
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <>
                <div onClick={hide} className="btn-close-modal">
                  <X width={24} height={24} color="#acacac" />
                </div>
                {React.Children.map(children, bind)}
              </>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AnimatedModal = React.memo($AnimatedModal);

export default AnimatedModal;
