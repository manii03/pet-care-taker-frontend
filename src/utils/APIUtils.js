import { LOCALHOST } from "../constants/common";

async function triggerAPI(api, request) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },

    body: JSON.stringify(request),
  };
  return await fetch(`${LOCALHOST}${api}`, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(response);
    })
    .then((response) => {
      console.log(`${api}`+" RESPONSE IS : ", response);
      return {
        message: "OK",
        response: response,
      };
    })
    .catch((nextResponse) => {
      console.error("Error is : ", nextResponse);
      window.alert("Something went wrong");
      throw new Error(nextResponse);
    });
}

export default triggerAPI;
