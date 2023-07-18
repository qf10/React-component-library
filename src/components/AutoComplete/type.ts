import { ReactElement } from "react";
import { InputProps } from "../Input/type";

interface DataSourceObject {
  value: string;
}

export enum KeyBoardType {
  ENTER = "Enter",
  ARROWUP = "ArrowUp",
  ARROWDOWN = "ArrowDown",
  ESC = "Escape",
}
export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  /** 筛选的数据 可异步 */
  fetchSuggestions: (
    key: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;

  /** 选中选项触发 */
  onSelect?: (item: DataSourceType) => void;

  /** 自定义下拉选项模板 */
  concustomRender?: (item: DataSourceType) => ReactElement;
}
