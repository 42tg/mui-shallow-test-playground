import React from "react";
import { Button as MuiButton, withStyles } from "@material-ui/core";

const styles = muiTheme => {
  return {
    root: {
      fontSize: muiTheme.dimensions.font
    }
  };
};

const Button = props => {
  return (
    <MuiButton
      className={props.classes.root}
      variant="contained"
      color="primary"
    >
      {props.children}
    </MuiButton>
  );
};

export default withStyles(styles, { name: "MyButton" })(Button);
