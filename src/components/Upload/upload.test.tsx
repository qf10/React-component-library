import React from "react";
import axios from "axios";
import Upload from "./upload";
import { UploadProps } from "./type";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("axios");

jest.mock("../../../node_modules/axios");
jest.mock("../Icon/icon", () => {
  return ({ icon }: any) => {
    return <span>{icon}</span>;
  };
});

const testProps: UploadProps = {
  action: "fakeurl.com",
  onSuccess: jest.fn(),
  onChange: jest.fn(),
};
const mockAxios = axios as jest.Mocked<typeof axios>;
const testFile = new File(["xyz"], "test.png", { type: "image/png" });
describe("test upload component", () => {
  it("upload process should works fine", async () => {
    render(<Upload {...testProps}>Click to Upload</Upload>);
    const uploadArea = screen.getByText("Click to Upload");
    const fileInput = screen.getByTestId("fileinput");
    mockAxios.post.mockImplementation(() => {
      return Promise.resolve({ data: "cool" });
    });
    expect(uploadArea).toBeInTheDocument();
    expect(fileInput).not.toBeVisible();

    fireEvent.change(fileInput, { target: { file: [testFile] } });
  });
});
