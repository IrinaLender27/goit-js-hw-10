import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_sEoXhcprZPWF3QzRRAvgruirV2KHf8BodSPHTtAZceU4P4aOJqSaaPvYyevbLcnw';

function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      console.log(response);
      return response.data;
    })

    .catch(error => {
      throw new Error(error);
    });
}
function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
}

export { fetchBreeds, fetchCatByBreed };
