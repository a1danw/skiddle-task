import React from "react";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core";

const style = {
  btn: {
    marginTop: "30px",
    padding: "8px 35px",
    color: "white",
  },
};

function FindButton(props) {
  const { classes } = props;

  return (
    <Button className={classes.btn} variant="contained" color="secondary">
      FIND ARTISTS
    </Button>
  );
}

export default withStyles(style)(FindButton);
