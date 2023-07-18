import React from "react";
import AutoComplete from "./autoComplete";
import { AutoCompleteProps } from "./type";
import { config } from "react-transition-group";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

config.disabled = true;

const testArray = [
  { value: "ab", number: 11 },
  { value: "abc", number: 1 },
  { value: "b", number: 4 },
  { value: "c", number: 15 },
];

const testProps: AutoCompleteProps = {
  fetchSuggestions: (query) => {
    return testArray.filter((item) => item.value.includes(query));
  },
  onSelect: jest.fn(),
  placeholder: "auto-complete",
};

let inputNode: HTMLInputElement;

describe("test auto-complete", () => {
  it("test basic AutoComplete behavior", async () => {
    render(<AutoComplete {...testProps} />);

    inputNode = screen.getByPlaceholderText(
      "auto-complete"
    ) as HTMLInputElement;
    expect(inputNode).toBeInTheDocument();
    fireEvent.change(inputNode, { target: { value: "a" } });
    await waitFor(() => {
      expect(screen.getByText("ab")).toBeInTheDocument();
    });

    expect(
      // eslint-disable-next-line testing-library/no-node-access
      document.getElementsByClassName("suggestion-item").length
    ).toEqual(2);

    fireEvent.click(screen.getByText("ab"));
    expect(testProps.onSelect).toHaveBeenCalledWith({
      value: "ab",
      number: 11,
    });
    expect(inputNode.value).toBe("ab");
    expect(screen.queryByText("ab")).not.toBeInTheDocument();
  });

  it("should provide keyboard support", () => {});

  it("click outside should hide the dropdown", () => {});

  it("concustomRender should gennerate the right template", () => {});

  it("async fetchSuggestions should works fine", () => {});
});
