import { fetchBreeds, fetchCatByBreed } from './cat-api';

const container = document.querySelector('.cat-info');
const select = document.querySelector('.breed-select');
fetchBreeds();

function createMarkup(arr) {
  return arr
    .map(
      ({ name, description, image, temperament }) =>
        `<li>
        <img src="
"https://cdn2.thecatapi.com/images/$" alt="${name}" />
        <h2>${name}</h2>
        <p>${description}</p>
        <p>${temperament}</p>
      </li>`
    )
    .join('');
}
//     return arr
//     .map(
//       ({
//         date,
//         day: {
//           avgtemp_c,
//           condition: { icon, text },
//         },
//       }) =>
//         `<li>
//         <img src="${icon}" alt="${text}" />
//         <p>${text}</p>
//         <h2>${date}</h2>
//         <h3>${avgtemp_c}</h3>
//       </li>`
//     )
//     .join('');
// }
// // return arr
//   .map(
//     ({
//       date,
//       day: {
//         avgtemp_c,
//         condition: { icon, text },
//       },
//     }) =>
//       `<li>
//         <img src="${icon}" alt="${text}" />
//         <p>${text}</p>
//         <h2>${date}</h2>
//         <h3>${avgtemp_c}</h3>
//       </li>`
//   )
//   .join('');
