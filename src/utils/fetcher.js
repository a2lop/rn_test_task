import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = "66ccdcd64fbec17be9d1f121b12ba0b5";
const BASE_URL = "https://gateway.marvel.com:443/v1/public/";

export const fetcher = ({ method = "GET", action, additionalParams = {} }) => {
  const ts = new Date().getTime();
  const hash = md5(
    `${ts}${"cab117a4cd16c6d522ec93b73694659086b03a75"}${PUBLIC_KEY}`
  );

  const params = { apikey: PUBLIC_KEY, ts, hash, ...additionalParams };

  const queryParams = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join("&");

  const url = `${BASE_URL}${action}`;

  return axios({ url, method, params })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log("error", err.message);
    });

  //
};
