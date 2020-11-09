import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const apiKey = '18519763-b48cd53b8f87881ea60fa71d1';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios(
    `/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => response.data.hits);
};

export default { fetchImagesWithQuery };