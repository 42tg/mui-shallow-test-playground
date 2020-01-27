import React, { Provider } from "react";
import Button from "./components/Buttons";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import defaultTheme from "./defaultTheme";

import { createShallow, createMount } from "@material-ui/core/test-utils";

describe("<Button />", () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow({
      wrappingComponent: ({ children, theme }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
      wrappingComponentProps: {
        theme: createMuiTheme(defaultTheme)
      }
    });
  });
  it("Should render the button", () => {
    const wrapper = shallow(<Button>Hello World</Button>);
    expect(wrapper.container).toMatchSnapshot();
  });
});

describe("<Button />", () => {
  let mount;
  beforeAll(() => {
    mount = createMount({
      wrappingComponent: ({ children, theme }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      ),
      wrappingComponentProps: {
        theme: createMuiTheme(defaultTheme)
      }
    });
  });
  it("Should render the button", () => {
    const wrapper = mount(<Button>Hello World</Button>);
    expect(wrapper.container).toMatchSnapshot();
  });
});
