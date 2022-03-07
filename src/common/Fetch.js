import axios from "axios";
import baseUrl from "../common/Urls";
import Auth from "./Auth";



// console.log({authToken});
// let authToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTY3NzA5ODJlMjIyMDVmOWYzM2Q5ODQwMzM5YWY0N2JjMmJiMGQ3MzY1ZDA2N2JlMzg1MDQ4ZWEzMjI4YzM4MWFjMGFmZjQzOTIwNzA4YTkiLCJpYXQiOjE2MzI1NjI0NTMuNjU4OTczLCJuYmYiOjE2MzI1NjI0NTMuNjU4OTksImV4cCI6MTY2NDA5ODQ1My41OTE4MzIsInN1YiI6IjE0Iiwic2NvcGVzIjpbXX0.cHf5OM_KO9pvYc1OxMy1Frg7zbnWXFHwHOUpmDj4IGUeV5AUguxQhfUBczAW5Gl8MznOSFaEu-wscdhzTyg8xbpBKDQEdDXhdHDU6ZiOYtupoatUBhTRf_vmAGSgsVvCzpDkHjDD7lKFHt9Tiwjd5xcsJBTkjlMxQWqp9KwtizJmusRUZ6YHZOgczca7qwlKDrG1O5PME34gf7_gmRhqgBqxA-jmBIM7FVw2gXgrUzJ1f0Nf1cr8TKrw1kNc5UIXjtUAgDPXpNoR-W_8RWD3WJ2nKx-gjTjlngjaL66ED5YZ9yF8ba2zu6VK772qyid3zButKm3-AjV1zliMVPVwwNoDuDm5gr4E1ZgY5TVv9P0ZRzpvnKl9FC2t1xTU83SjKSwhmMAkgZnisyfQmqo8ilDNydCx82mP6mr3HWVx6idRP-lnxVUEsNe6pcHOs7z9_713lPiBFzUyt6w3Fn5m-N7kimsb3XqswYEiqYAa7Zq74SmN_SsnNGIhEEf0OM_XzxaKIFzoA6a7vSFMuNUUlSqd8la91Mk8Do5CGKEgK9vcIP39CNC9M6rkwtT1UxDA0gYO1Hznxaexi0VlZf6nS5xPgNuKzECSq1cIpbfdSyg_D3_ICs6RAOZXeMRNtFpcAgiapQv0U2tUzmX9D0HNjpmAEcnRejZyUoS_TIVnuqI`;

export default async function Fetch(
  endPoint,
  extraParams,
  options,
  callBack,
  url
) {

  const commonParams = {};

  const authToken = localStorage.getItem("AUTH_TOKEN");

  const inFormData = options?.inFormData ?? false;
  const method = options?.method ?? "post";
  const sendToken = options?.sendToken ?? false;
  const sendHeader = options?.sendHeader ?? true;
  const headerParams = options?.headerParams ?? {};
  const token = options?.token ? options?.token : authToken;

  // console.log(token);

  const parameters = { ...commonParams, ...extraParams };

  function headers(isToken, token) {
    let headers = {
      Accept: "application/json",
    };
    if (isToken) {
      headers["Authorization"] = token;
    }
    if(headerParams){
      headers={...headers, ...headerParams}
    }

    // console.log({headers});
    return headers;
  }

  function convertToForm() {
    let data = new FormData();
    for (let name in parameters) {
      data.append(name, parameters[name]);
    }
    return data;
  }
  // console.log("params=", endPoint, parameters);

  return axios[method ? method : "post"](
    url ? url : baseUrl + endPoint,
    inFormData
      ? convertToForm()
      : method === "get" || method === "delete"
      ? { headers: headers(sendToken, token)}
      : parameters,
    { headers: headers(sendToken, token)}
  )
    .then((res) => {
      const apiUrl = url ? url : baseUrl + endPoint;
      console.log(apiUrl, res?.data);
      return res?.data;
    }).catch((err) => {
      if (err?.response?.status === 422) {
        return err?.response?.data;
      }

      if (err?.response?.status === 401) {
        return err?.response;
      }

      console.error(err);
      return Promise.reject(err);
    })
}
