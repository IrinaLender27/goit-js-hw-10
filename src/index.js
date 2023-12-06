import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import Notiflix, { Notify } from 'notiflix';
import 'slim-select/dist/slimselect.css';
// змінні
const container = document.querySelector('.cat-info');
const selectcat = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

fetchBreeds()
  .then(data => {
    loader.classList.replace('loader', 'is-hidden');

    let createMarckSelect = data.map(({ name, id }) => {
      return `<option value ='${id}'> ${name} </option>`;
    });
    selectcat.insertAdjacentHTML('beforeend', createMarckSelect);
    new SlimSelect({
      select: selectcat,
    });
  })
  .catch(onError);

// додавання прослуховувача на подію
selectcat.addEventListener('change', onChangeBreed);

function onChangeBreed(event) {
  loader.classList.replace('is-hidden', 'loader');
  selectcat.classList.add('is-hidden');
  container.classList.add('is-hidden');
  let breedId = event.currentTarget.value;
  console.log(breedId);
  fetchCatByBreed(breedId)
    .then(data => {
      loader.classList.replace('loader', 'is-hidden');
      selectcat.classList.remove('is-hidden');
      const { url, breeds } = data[0];
      container.innerHTML = `<img src="${url}" alt="${breeds[0].name}" width="400"/>
        <div class="cat-info">
        <h2>${breeds[0].name}</h2>
        <p>${breeds[0].description}</p>
        <p>${breeds[0].temperament}</p>
        </div>`;
      container.classList.remove('is-hidden');
    })
    .catch(onError);
}

function onError() {
  selectcat.classList.remove('is-hidden');
  loader.classList.replace('loader', 'is-hidden');
  Notify.failure('Oops! Something went wrong! Try reloading the page!');
}
