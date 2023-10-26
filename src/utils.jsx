import axios from "axios";

const basicURL = "https://back-end-news.onrender.com/api";

const fetchData = async (url) => {
  const { data } = await axios.get(basicURL + url);
  return data;
};

const patchData = async (url, body) => {
  const { data } = await axios.patch(basicURL + url, body);
  return data;
};

const postData = async (url, body) => {
  const { data } = await axios.post(basicURL + url, body);
  return data;
};

export { fetchData, patchData, postData };
