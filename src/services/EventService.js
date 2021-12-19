// its not good to load axios inside all components
// api code is all over the app
// it can easily break and hard to debug
// that's why we create this file
// to call axios only once

import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents(perPage, page) {
    return apiClient.get("/events?_limit=" + perPage + "&_page=" + page);
  },

  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
