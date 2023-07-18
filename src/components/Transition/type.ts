import { ReactNode } from "react";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
type AnimationName =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-right"
  | "zoom-in-bottom";
export type ITransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  warpper?: boolean;
  children?: ReactNode;
};
