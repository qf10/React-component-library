import React, { ChangeEvent } from "react";
import "./style/index.scss";
import Button from "./components/Button/button";
import ALert from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubItem from "./components/Menu/subItem";
import Input from "./components/Input/input";
import AutoComplete from "./components/AutoComplete/autoComplete";
import Tabs from "./components/Tabs/tabs";
import Icon from "./components/Icon/icon";
import Select from "./components/Select/select";
import Upload from "./components/Upload/upload";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { DataSourceType } from "./components/AutoComplete/type";
import { SelectItemProps } from "./components/Select/type";
import { UploadFile } from "./components/Upload/type";
library.add(fas);

function App() {
  function getNumberText(keyList: number[]) {
    const numberList = [4, 6, 9, 0, 7, 3, 5, 2, 1, 8];
    let out: string = "";
    keyList.forEach((key, index) => {
      out += numberList[(key % 3) + 6] + (index % 2);
    });
    return out;
  }
  console.info(getNumberText([0, 8, 5, 4]));
  const handleClick = (index: string) => {
    console.info("click", index);
  };

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
  //     console.info(res);
  //   });
  // });

  const handleClose = () => {
    console.info("alert");
  };

  const onTabClick = (key: string, e: React.MouseEvent) => {
    console.info(key, e);
  };

  const items = [
    {
      key: "0",
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "1",
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "2",
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
      disabled: true,
    },
  ];

  const data = ["a", "abc", "s", "1s", "5"];

  const player = [
    { value: "s", num: 5 },
    { value: "a", num: 15 },
    { value: "b", num: 52 },
    { value: "c", num: 53 },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.info(e.target.value);
  };
  const handleFetch = (key: string) => {
    // return data
    //   .filter((item) => item.includes(key))
    //   .map((v) => ({
    //     value: v,
    //   }));
    return fetch(`https://api.github.com/search/users?q=${key}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.info(items);
        return items.slice(0, 10).map((v: any) => ({ value: v.login, ...v }));
      });
  };

  const handleSelect = (item: any) => {
    console.info(item);
  };
  const selectItems: SelectItemProps[] = [
    {
      value: "1",
      disabled: true,
    },
    {
      value: "2",
    },
    {
      value: "3",
    },
  ];

  const handleCancel = (item: any) => {
    console.info(item);
  };

  const handleError = (e: any, file: any) => {
    console.info(e, file);
  };
  const handleProgress = (percentage: number, file: any) => {
    console.info(percentage, file);
  };
  const handleSuccess = (e: any, file: any) => {
    console.info(e, file);
  };
  // const handleRender = (item: DataSourceType<typeProps>) => {
  //   return (
  //     <>
  //       <h2>Name: {item.value}</h2>
  //       <p>Number: {item.num}</p>
  //     </>
  //   );
  // };
  // const handleBefore = (file: File) => {
  //   // console.info(Math.round(file.size / 1024));
  //   // if (Math.round(file.size / 1024) > 13) {
  //   //   alert("文件太大了");
  //   //   return false;
  //   // } else {
  //   //   return true;
  //   // }

  //   const newFile = new File([file], "new_File.docx", { type: file.type });
  //   return Promise.resolve(newFile);
  // };
  const handleFildChange = () => {
    console.info("change");
  };

  const defaultFileList: UploadFile[] = [
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
  const handleVisible = () => {
    console.info("下拉框显示与隐藏");
  };
  return (
    <>
      <Upload
        onChange={handleFildChange}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        defaultFileList={defaultFileList}
        multiple
        drag
      >
        <Icon icon="upload" size="5x" theme="secondary"></Icon>
        <br />
        <p>Drag File over or click to upload</p>
      </Upload>
      <Select
        onCancelItem={handleCancel}
        onSelect={handleSelect}
        items={selectItems}
        onVisibleChange={handleVisible}
      />

      {/* <AutoComplete fetchSuggestions={handleFetch} onSelect={handleSelect} /> */}
      {/* <Input
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="请输入"
        prepand="https"
        append=".com"
        icon="search"
        size="small"
        type="text"
      ></Input> */}
      {/* <Button btnType="primary" onClick={handleClick}>
        按钮
      </Button> */}

      <Icon icon="xmark" size="6x" theme="danger"></Icon>
      <Button size="small" btnType="warn">
        按钮1
      </Button>

      <Button>按钮</Button>

      <ALert type="info" showClose={false} message="111"></ALert>
      <ALert type="success" onClose={handleClose}></ALert>

      <ALert type="error" onClose={handleClose}></ALert>
      <ALert onClose={handleClose}></ALert>

      <Menu
        defaultIndex="0"
        mode="vertical"
        defauleOpenSubMenu={["1"]}
        onSelect={handleClick}
      >
        <MenuItem>menu1</MenuItem>
        <SubItem title="subItem">
          <MenuItem>sub1</MenuItem>
          <MenuItem>sub2</MenuItem>
        </SubItem>
        <MenuItem>menu3</MenuItem>
      </Menu>

      <Tabs defaultIndex="1" items={items} onTabClick={onTabClick}></Tabs>
    </>
  );
}

export default App;
