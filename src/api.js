//Base URL
const base_url = "https://www.skiddle.com/api/v1";
const api_key = `?api_key=${process.env.REACT_APP_SKIDDLE_API_KEY}`;

// Main Events - events to be shown on home page
export const mainEventsURL = `${base_url}/events/search/${api_key}`;

// Searched Event
export const searchEventURL = (event_name) =>
  `${base_url}/events/search/${api_key}&keyword=${event_name}`;

// Event Details
export const eventDetailsURL = (event_id) =>
  `${base_url}/events/${event_id}/${api_key}`;
