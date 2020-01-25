import React, { Provider } from "react";
import Button from "./components/Buttons";
import { render } from "@testing-library/react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import defaultTheme from "./defaultTheme";

import snapshotDiff from "snapshot-diff";
import { exportAllDeclaration } from "@babel/types";

const MyProvider = ({ children }) => {
  return (
    <ThemeProvider theme={createMuiTheme(defaultTheme)}>
      {children}
    </ThemeProvider>
  );
};
describe("<Button />", () => {
  it("should work", () => {
    const wrapper = render(<Button>Hello World</Button>, {
      wrapper: MyProvider
    });
    expect(wrapper.container).toMatchSnapshot();
  });
});
