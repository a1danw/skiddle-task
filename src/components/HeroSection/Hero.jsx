import React from "react";
import { withStyles } from "@material-ui/core";

import SkiddleVideo from "../../assets/videos/skiddle.mp4";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import FindButton from "../FindButton/FindButton";

const style = {
  heroContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    position: "relative",
    zIndex: "1",
    background: "#0c0c0c",
    // backgroundColor: rgba(19,19,19,0.5);

    "&:before": {
      content: "",
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "0",
      left: "0",
      zIndex: "2",
    },
  },
  heroBg: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  videoBg: {
    height: "100%",
    objectFit: "contain",
    backgroundColor: "#232a34",
  },
  heroContent: {
    zIndex: "3",
    maxWidth: "1200px",
    position: "absolute",
    padding: "8px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: "40px",
  },
};

function Hero(props) {
  const { classes } = props;
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroBg}>
        <video
          style={{ width: "100vw" }}
          playsInline
          autoPlay
          loop
          muted
          src={SkiddleVideo}
          type="video/mp4"
        ></video>
      </div>
      <div className={classes.heroContent}>
        <Logo />
        <SearchBar />
        <FindButton />
      </div>
    </div>
  );
}

export default withStyles(style)(Hero);
