import React, { type ReactElement, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import type { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-bottom"
  | "zoom-in-right";

/**
 * 简化 Transition：不卸载节点，通过样式控制可见性。
 */
export interface TransitionProps extends Omit<CSSTransitionProps<HTMLDivElement>, 'classNames'> {
  /** 动画 class 前缀 */
  animation?: AnimationName;
  /** 子元素，仅支持单一 ReactElement */
  children: ReactElement;
}

const Transition: React.FC<TransitionProps> = ({
  children,
  animation,
  classNames,
  in: inProp = false,
  timeout = 300,
  appear = true,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition<HTMLDivElement>
      in={inProp}
      timeout={timeout}
      classNames={classNames ?? animation!}
      nodeRef={nodeRef}
      appear={appear}
      mountOnEnter={false}
      unmountOnExit={false}
    >
      <div
        ref={nodeRef}
        style={{ display: inProp ? undefined : 'none' }}
      >
        {children}
      </div>
    </CSSTransition>
  );
};

export default Transition;