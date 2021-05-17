import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadEvents } from "../../store/actions/eventsAction";
import Loader from "../Loader/Loader";
import { Grid } from "@material-ui/core/";

import Event from "../Event/Event";

function Events() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEvents());
  }, [dispatch]);

  const { mainEvents, isLoading, searched } = useSelector(
    (state) => state.events
  );

  return (
    <>
      {!!searched.length && (
        <>
          <h1>Searched Events</h1>
          <Grid container style={{ marginTop: "40px" }}>
            {searched.map((event) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Event
                  id={event.id}
                  name={event.eventname}
                  image={event.imageurl}
                  description={event.description}
                  town={event.venue.town}
                  date={event.startdate}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {!isLoading ? (
        <>
          <h1>Main Events</h1>
          <Grid container style={{ marginTop: "40px" }}>
            {mainEvents.map((event) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Event
                  id={event.id}
                  name={event.eventname}
                  image={event.imageurl}
                  description={event.description}
                  town={event.venue.town}
                  date={event.startdate}
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Events;
