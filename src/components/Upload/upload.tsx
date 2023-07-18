import React, { ChangeEvent, useRef, useState } from "react";
import axios from "axios";
import { UploadProps, UploadFile } from "./type";
import Dragger from "./drag";
import UploadList from "./uploadList";
import classNames from "classnames";
export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    name,
    data,
    headers,
    withCredentials,
    accept,
    multiple,
    drag,
    children,
    beforeUpload,
    onChange,
    onProgress,
    onSuccess,
    onError,
    onRemove,
  } = props;

  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  // 选中文件回调
  const handelFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    uploadFiles(files);
    if (fileInput.current) fileInput.current.value = "";
  };

  // 更新上传状态以及进度
  const updateFilelist = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((preList) => {
      return preList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

  const uploadFiles = (files: FileList) => {
    const filelist = Array.from(files);
    filelist.forEach((file) => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processedFild) => {
            post(processedFild);
          });
        } else if (result) {
          post(file);
        }
      }
    });
  };

  // 上传文件
  const post = (file: File) => {
    const _file: UploadFile = {
      uid: Date.now() + "upload-file",
      status: "ready",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    // setFileList([_file, ...fileList]);
    setFileList((preList) => {
      return [_file, ...preList];
    });
    const formData = new FormData();
    formData.append(name || "file", file);
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
        withCredentials,
        onUploadProgress: (e) => {
          if (e.total) {
            const percentage = Math.round((e.loaded * 100) / e.total) || 0;
            if (percentage < 100) {
              updateFilelist(_file, {
                percent: percentage,
                status: "uploading",
              });
              onProgress && onProgress(percentage, file);
            }
          }
        },
      })
      .then((res) => {
        console.info(res);
        updateFilelist(_file, {
          response: res.data,
          status: "success",
        });
        onSuccess && onSuccess(res.data, file);
      })
      .catch((err) => {
        updateFilelist(_file, {
          error: err,
          status: "error",
        });
        onError && onError(err, file);
      })
      .finally(() => {
        onChange && onChange(file);
      });
  };

  // 移除上传文件
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid);
    });
    onRemove && onRemove(file);
  };
  const klass = classNames("", {
    "viking-uploader-dragger": !drag,
  });
  return (
    <div className="viking-upload-component">
      <div
        className={klass}
        style={{ display: "inline-block" }}
        onClick={handleClick}
      >
        {drag ? <Dragger>{children}</Dragger> : children}
        <input
          type="file"
          data-testid="fileinput"
          className="viking-file-input"
          ref={fileInput}
          accept={accept}
          multiple={multiple}
          style={{ display: "none" }}
          onChange={handelFileChange}
        />
      </div>

      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

Upload.defaultProps = {
  name: "file",
  multiple: false,
  drag: false,
};
export default Upload;
