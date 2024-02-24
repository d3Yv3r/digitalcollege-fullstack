export function request(method, url, callback) {
  return fetch(url, { method: method })
    .then((response) => response.json())
    .then(callback);
}

export function requestGET(url, callback) {
  return request("GET", url, callback);
}

export function requestDELETE(url, callback) {
  return request("DELETE", url, callback);
}
