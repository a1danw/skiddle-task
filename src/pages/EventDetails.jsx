import React from "react";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core";

import Loader from "../components/Loader/Loader";
import RoomIcon from "@material-ui/icons/Room";
import EventNoteIcon from "@material-ui/icons/EventNote";

const style = {
  root: {
    position: "relative",
    marginTop: "10%",
  },
  header: {
    color: "black",
    margin: "0",
  },
  logo: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    height: "200px",
    borderRadius: "50%",
    marginTop: "20px",
  },
  spinner: {
    marginTop: "5%",
  },
  desc: {
    margin: "5px auto",
    fontSize: "20px",
    width: "500px",
    textAlign: "center",
  },
  flx: {
    display: "flex",
    alignItems: "center",
    margin: "5px 0",
    justifyContent: "center",
  },
};

function Logo(props) {
  const { classes } = props;
  const { event, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading ? (
        <div className={classes.root}>
          <h1 className={classes.header}>{event.eventname}</h1>
          <img
            className={classes.logo}
            src={event.imageurl}
            alt={event.eventname}
          />
          <p className={classes.desc}>{event.description}</p>
          <div className={classes.flx}>
            <EventNoteIcon size="medium" />
            <p>{event.date}</p>
          </div>
          <div className={classes.flx}>
            <RoomIcon size="medium" />
            <p>{event.venue.name}</p>
          </div>
        </div>
      ) : (
        <div className={classes.spinner}>
          <Loader />
        </div>
      )}
    </>
  );
}

export default withStyles(style)(Logo);
