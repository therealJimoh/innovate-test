import axios from "axios";

export const requestGettMetric = () => {
  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/therealJimoh/demo/db",
  });
};