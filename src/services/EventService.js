// its not good to load axios inside all components
// api code is all over the app
// it can easily break and hard to debug
// that's why we create this file
// to call axios only once

import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },

  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
