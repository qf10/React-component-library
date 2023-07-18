import React from "react";
import { ITransitionProps } from "./type";
import { CSSTransition } from "react-transition-group";
const Transition: React.FC<ITransitionProps> = (props) => {
  const { animation, children, classNames, warpper, ...restProps } = props;
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {warpper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};
export default Transition;
