import { Meta, StoryObj } from "@storybook/react";
import Upload from "./upload";
import { UploadFile, UploadProps } from "../Upload/type";
import Icon from "../Icon/icon";
import "../../style/index.scss";
/**
 * 文件选择上传和拖拽上传控件。
 * # 何时使用
 * 上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。
 * - 当需要上传一个或一些文件时。
 * - 当需要展现上传的进度时。
 * - 当需要使用拖拽交互时。
 */
const meta = {
  title: "Component/Upload 文件上传",
  tags: ["autodocs"],
  component: Upload,
} satisfies Meta<typeof Upload>;
type Story = StoryObj<typeof meta>;
export default meta;

const defaultFileLists: UploadFile[] = [
  {
    uid: "123",
    size: 1234,
    name: "hello.md",
    status: "uploading",
    percent: 30,
  },
  { uid: "122", size: 1234, name: "xyz.md", status: "success", percent: 30 },
  { uid: "121", size: 1234, name: "eyiha.md", status: "error", percent: 30 },
];

/**
 * 默认上传文件
 */
export const DefalutUpload: Story = {
  args: {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  },
  render: ({
    action = "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    drag = true,
    multiple = true,
    ...restProps
  }: UploadProps) => (
    <Upload action={action} multiple={multiple} drag={drag} {...restProps}>
      <Icon icon="upload" size="5x" theme="secondary"></Icon>
      <br />
      <p>click to upload</p>
    </Upload>
  ),
};

/**
 * 支持拖拽上传文件
 */
export const DraggerUpload: Story = {
  args: {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  },
  render: ({
    action = "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    drag = true,
  }: UploadProps) => (
    <Upload action={action} drag={drag}>
      <Icon icon="upload" size="5x" theme="secondary"></Icon>
      <br />
      <p>Drag File over or click to upload</p>
    </Upload>
  ),
};

/**
 * 多选上传文件
 */
export const MultipleUpload: Story = {
  args: {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  },
  render: ({
    action = "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    multiple = true,
  }: UploadProps) => (
    <Upload action={action} multiple={multiple}>
      <Icon icon="upload" size="5x" theme="secondary"></Icon>
      <br />
      <p>Drag File over or click to upload</p>
    </Upload>
  ),
};
