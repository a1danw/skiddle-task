import React, { useState } from "react";
import { InputBase, makeStyles } from "@material-ui/core/";

import { fetchSearch } from "../../store/actions/eventsAction";
import { useDispatch } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    opacity: "0.6",
    padding: `8px ${theme.spacing(16)}px`,
    backgroundColor: "white",
    border: "2px solid #ff6262",
    borderRadius: "30px",

    "&:hover": {
      cursor: "pointer",
    },

    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  return (
    <form onSubmit={submitSearch}>
      <InputBase
        value={textInput}
        onChange={inputHandler}
        type="text"
        bgcolor="root.primary"
        className={classes.searchInput}
        placeholder="SEARCH EVENTS"
        startAdornment={<SearchIcon fontSize="medium" />}
      />
    </form>
  );
}
