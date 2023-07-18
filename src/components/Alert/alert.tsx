import React, { useState } from "react";
import { AlertProps, ALertType } from "./type";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export const Alert: React.FC<AlertProps> = ({
  className,
  type,
  message,
  showClose,
  onClose,
}: AlertProps) => {
  const [isShowClose, setClose] = useState(showClose);
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
  });

  const handleClose = () => {
    showClose && onClose && onClose();
    setClose(false);
  };
  const IconType = {
    success: "circle-check",
    info: "circle-info",
    warn: "warning",
    error: "circle-exclamation",
  };
  const iconStr = IconType[type as ALertType];
  return showClose ? (
    <Transition in={isShowClose} timeout={300} animation="zoom-in-top">
      <div className={classes} data-testid="test">
        <div>
          <Icon
            theme={type as ALertType}
            className="alert-icon"
            icon={iconStr as IconProp}
          />
          <span>{message}</span>
        </div>

        {isShowClose ? (
          <Icon
            data-testid="test-span"
            className="alert-close"
            onClick={handleClose}
            icon="xmark"
          />
        ) : null}
      </div>
    </Transition>
  ) : (
    <div className={classes} data-testid="test">
      <span>{message}</span>
    </div>
  );
};

Alert.defaultProps = {
  showClose: true,
  message: "请输入提示语",
  type: "info",
};

export default Alert;
