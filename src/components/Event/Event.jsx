import React from "react";
import { Link } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../../store/actions/eventDetailAction";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import RoomIcon from "@material-ui/icons/Room";
import EventNoteIcon from "@material-ui/icons/EventNote";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    position: "relative",
    alignItems: "center",
    maxWidth: 345,
    height: 530,
    margin: 20,
  },
  media: {
    height: 180,
  },
  btn: {
    backgroundColor: "#dca700e3;",
    color: "white",
    margin: "auto",
    textTransform: "lowercase",
    padding: "5px 20px",
    fontSize: "1rem",
    position: "absolute",
    bottom: "10px",
    left: "15px",
    "&:hover": {
      backgroundColor: "#dca700e3;",
    },
  },
  flx: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  },
  heading: {
    textTransform: "capitalize",
  },
  "& .MuiSvgIcon-root": {
    marginRight: "30px",
  },
});

export default function MediaCard({
  name,
  image,
  description,
  town,
  date,
  id,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <Card
      className={classes.root}
      onClick={loadDetailHandler}
      component={Link}
      to={`/event/${id}`}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography
            className={classes.heading}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography
            className={classes.flx}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <RoomIcon size="medium" />
            {town}
          </Typography>
          <Typography
            className={classes.flx}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <EventNoteIcon size="medium" />
            {date.slice(0, 10)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          component={Link}
          to={`/event/${id}`}
          size="small"
          className={classes.btn}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
