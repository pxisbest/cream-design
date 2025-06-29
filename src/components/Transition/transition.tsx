import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import type { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-bottom"
  | "zoom-in-right";

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
  children: React.ReactElement; // 限制为单个节点
};

const Transition: React.FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    unmountOnExit = true,
    appear = true,
    ...restProps
  } = props;

  const nodeRef = useRef<HTMLDivElement>(null); // ✅ 直接内部自己建 ref

  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      nodeRef={nodeRef}
      unmountOnExit={unmountOnExit}
      appear={appear}
      {...restProps}
    >
      {wrapper ? <div ref={nodeRef}>{children}</div> : children}
    </CSSTransition>
  );
};

export default Transition;
