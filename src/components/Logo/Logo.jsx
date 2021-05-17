import React from "react";
import { withStyles } from "@material-ui/core";

import SkiddleImage from "../../assets/images/skiddle-logo-white-stacked.png";

const style = {
  logo: {
    width: "15rem",
  },
};

function Logo(props) {
  const { classes } = props;

  return <img src={SkiddleImage} className={classes.logo} alt="skiddle logo" />;
}

export default withStyles(style)(Logo);
