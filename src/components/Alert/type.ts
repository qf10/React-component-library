export enum ALertTypes {
  SUCCESS = "success",
  WARN = "warn",
  INFO = "info",
  ERROR = "error",
}

export type ALertType = "success" | "warn" | "info" | "error";

export interface AlertProps {
  className?: string;
  message?: string;
  type?: ALertType;
  showClose?: boolean;
  onClose?: () => void;
}
