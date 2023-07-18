import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "danger"
  | "light"
  | "dark"
  | "warn"
  | "error";
export interface IconPorps extends FontAwesomeIconProps {
  /** 主题样式 */
  theme?: ThemeProps;
  className?: string;
}
