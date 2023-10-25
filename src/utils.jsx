const basicURL = "https://back-end-news.onrender.com/api";

const fetchData = (url) => {
  return fetch(basicURL + url).then((response) => response.json());
};

const patchData = (url, body) => {
  return fetch(basicURL + url, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  });
};

const postData = (url, body) => {
  return fetch(basicURL + url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  });
};

export { fetchData, patchData, postData };
