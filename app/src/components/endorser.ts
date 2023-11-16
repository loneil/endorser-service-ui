import axios from "axios";
import config from "config";

/**
 * @function login
 * Use the configured Endorser Admin secret to get the token
 * @returns {string} The inkeeper token
 */
export const login = async () => {
  const loginUrl =
    "https://bcovrin-endorser-service-test.apps.silver.devops.gov.bc.ca/endorser/token";
  const payload = {
    grant_type: "",
    client_id: "",
    client_secret: "",
    username: "",
    password: "",
    scope: "",
  };
  const res = await axios.post(loginUrl, payload, {
    headers: {
      "Content-Type": "x-www-form-urlencoded",
    },
  });

  return res.data;
};
