export interface UploadProps {
  /** 文件上传地址 必传 */
  action: string;
  /** 文件上传列表 */
  defaultFileList?: UploadFile[];
  /** 上传时添加额外的请求头需信息 */
  headers?: { [key: string]: any };
  /** 自定义上传文件名字 */
  name?: string;
  /** 上传文件额外携带data参数 */
  data?: { [key: string]: any };
  /** 是否带上cookie */
  withCredentials?: boolean;
  /** 允许上传文件的类型 */
  accept?: string;
  /** 是否多选 */
  multiple?: boolean;
  /** 是否可拖拽 */
  drag?: boolean;
  /** 自定义上传文件模板 */
  children?: React.ReactNode;
  /** 上传进度回调： 注意:只有在大文件上传时执行 */
  onProgress?: (percentage: number, file: File) => void;
  /** 上传成功的回调 */
  onSuccess?: (data: any, file: File) => void;
  /** 上传失败回调 */
  onError?: (err: any, file: File) => void;
  /** 上传文件之前回调 */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /** 文件上传回调 无论成功或失败都会执行 */
  onChange?: (file: File) => void;
  /** 移除文件列表回调 */
  onRemove?: (file: UploadFile) => void;
}

export type StatusType = "ready" | "uploading" | "success" | "error";
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: StatusType;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export interface DraggerProps {
  onFile?: (file: FileList) => void;
  children?: React.ReactNode;
}
