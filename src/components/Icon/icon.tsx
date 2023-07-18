import React from "react";
import { IconPorps } from "./type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
library.add(fas);
export const Icon: React.FC<IconPorps> = ({
  theme,
  className,
  ...restProps
}: IconPorps) => {
  const classes = classNames("viking-icon", className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classes} {...restProps}></FontAwesomeIcon>;
};

export default Icon;
