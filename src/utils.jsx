const fetchData = (url) => {
  return fetch(url).then((response) => response.json());
};

const patchData = (url, body) => {
  return fetch(url, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  });
};

export { fetchData, patchData };
