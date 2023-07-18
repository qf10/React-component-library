import React, { useState, DragEvent } from "react";
import { DraggerProps } from "./type";
import classNames from "classnames";
const Dragger: React.FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [dragger, setDragger] = useState(false);
  const classes = classNames("viking-uploader-dragger", {
    "is-dragover": dragger,
  });

  const handleDrag = (e: DragEvent<HTMLElement>, drag: boolean) => {
    console.info("sss");
    e.preventDefault();
    setDragger(drag);
  };
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragger(false);
    onFile && onFile(e.dataTransfer.files);
  };
  return (
    <div
      className={classes}
      onDragOver={(e) => handleDrag(e, true)}
      onDragLeave={(e) => handleDrag(e, false)}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Dragger;
