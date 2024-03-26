const global = {
  currentPage: window.location.pathname,
  api: {
    apiKey: "f0d9f4a3e0d9a50998786c2912e0ad6e",
    apiUrl: "https://api.themoviedb.org/3/",
  },
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
    totalResults: 0,
  }
};
// async function displayMovieDetails() {
//   console.log(window.location.search);
//   const movieId = window.location.search.split('=')[1]
//   console.log(movieId);

//   const movie = await fetchAPIData(`movie/${movieId}`)

//   displayBackgroundImage(movie)

//   const div = document.createElement('div');
//   div.innerHTML = `<img style="width: 600px; background-repeat:no-repeat; background-size: contain; border: 10px solid #fff;" src="https://image.tmdb.org/t/p/original${movie.backdrop_path}">
//   <article style="display:flex; flex-direction: column; gap: 10px;">
//       <p><strong>Release date:</strong> <span style="color:#f1c40f;">${movie.release_date}</span></p>
//       <p><strong>Average vote:</strong> <span style="color:#f1c40f;">${movie.vote_average}</span></p>
//       <p style="margin-bottom: 50px;"><strong>Movie budget:</strong> <span style="color:#f1c40f;">${movie.budget}$</span></p>
//       <p><strong>Overview: </strong>${movie.overview}</p>
//   </article>`;

//   div.style.display = 'flex';
//   div.style.gap = '100px'
//   // div.style.justifyContent = 'center'
//   div.style.marginTop = '150px'
//   div.style.paddingBottom = '200px'

//   div.style.position = 'relative'


//   const heading = document.createElement('h1');
//   heading.style.textAlign = 'center'
//   heading.style.marginTop = '50px'

//   heading.textContent = `${movie.title}`

//   const tagline = document.createElement('i');
//   tagline.style.textAlign = 'center'
//   tagline.style.marginTop = '10px'
//   tagline.style.opacity = '0.7'
//   tagline.style.display = 'block'

//   tagline.textContent = `${movie.tagline}`

//   const button = document.createElement('a');

//   button.style.minWidth = '200px'
//   button.style.height = '50px'
//   button.style.display = 'block'
//   button.style.textAlign = 'center'
//   button.style.background = '#f1c40f'
//   button.style.position = 'absolute'
//   button.style.left = '50%'
//   button.style.transform = 'translateX(-50%)'
//   button.style.top = '-100px'
//   button.style.paddingTop = '12px'

//   button.innerHTML = `watch the movie!`
//   button.href = `${movie.homepage}`
//   button.target = `_blank`

//   document.querySelector('#movie-details').appendChild(heading);
//   document.querySelector('#movie-details').appendChild(tagline);
//   document.querySelector('#movie-details').appendChild(div);
//   div.appendChild(button);
// };



// async function displayShowDetails() {
//   const showId = window.location.search.split('=')[1]
//   console.log(showId);
  
//   const show = await fetchAPIData(`tv/${showId}`);

//   displayBackgroundImage(show)

//   const div = document.createElement('div');
//   div.innerHTML = `<img style="width: 600px; background-repeat:no-repeat; background-size: contain; border: 10px solid #fff;" src="https://image.tmdb.org/t/p/original${show.backdrop_path}">
//   <article style="display:flex; flex-direction: column; gap: 10px;">
//       <p><strong>First episode date:</strong> <span style="color:#f1c40f;">${show.first_air_date}</span></p>
//       <p style="margin-bottom: 20px;"><strong>Last episode date:</strong> <span style="color:#f1c40f;">${show.last_air_date}</span></p>
//       <p><strong>Average vote:</strong> <span style="color:#f1c40f;">${show.vote_average}</span></p>
//       <p style="margin-top: 20px;"><strong>Overview: </strong>${show.overview}</p>
//   </article>`;
//   // 
//   div.style.display = 'flex';
//   div.style.gap = '100px'

//   div.style.marginTop = '50px'
//   div.style.paddingBottom = '200px'
//   div.style.position = 'relative'


//   const heading = document.createElement('h1');
//   heading.style.textAlign = 'center'
//   heading.style.marginTop = '50px'

//   heading.textContent = `${show.name}`

//   const tagline = document.createElement('i');
//   tagline.style.textAlign = 'center'
//   tagline.style.marginTop = '10px'
//   tagline.style.opacity = '0.7'
//   tagline.style.display = 'block'

//   tagline.textContent = `${show.tagline}`

//   const info = document.createElement('article')

//   info.style.display = 'flex'
//   info.style.justifyContent = 'center'
//   info.style.alignItems = 'center'
//   info.style.gap = '20px'
//   info.style.marginTop = '20px'

//   info.innerHTML = `
//   <span style="font-weight: bold; font-size: 20px; color: #f1c40f;">
//     ${show.number_of_episodes} <span style="font-size: 16px; font-weight: normal; color: #fff;">episodes</span>
//   </span>
//   <span style="font-weight: bold; font-size: 20px; color: #f1c40f;">
//     ${show.number_of_seasons} <span style="font-size: 16px; font-weight: normal; color: #fff;">seasons</span>
//   </span>
//   <span style="font-weight: bold; font-size: 20px; color: #f1c40f;">
//     ${show.episode_run_time} <span style="font-size: 16px; font-weight: normal; color: #fff;">minutes in each episode</span>
//   </span>
//   `

//   const button = document.createElement('a');

//   button.style.minWidth = '200px'
//   button.style.height = '50px'
//   button.style.display = 'block'
//   button.style.textAlign = 'center'
//   button.style.background = '#f1c40f'
//   button.style.position = 'absolute'
//   button.style.left = '50%'
//   button.style.transform = 'translateX(-50%)'
//   button.style.bottom = '100px'
//   button.style.paddingTop = '12px'

//   button.innerHTML = `watch the show!`
//   button.href = `${show.homepage}`
//   button.target = `_blank`

//   document.querySelector('#show-details').appendChild(heading);
//   document.querySelector('#show-details').appendChild(tagline);
//   document.querySelector('#show-details').appendChild(info);
//   document.querySelector('#show-details').appendChild(div);
//   div.appendChild(button);
// }

// async function displayBackgroundImage(showInfo) {
//   const main = document.querySelector('main');
//   main.style.background = `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(https://image.tmdb.org/t/p/original${showInfo.backdrop_path})`
//   main.style.backgroundSize = 'cover'
// }

function addCommasToNumber(element) {
  return element.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

async function displayBackgroundImage(showInfo) {
  const main = document.querySelector('main');
  main.style.background = `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(https://image.tmdb.org/t/p/original${showInfo.backdrop_path})`
  main.style.backgroundSize = 'cover'
}

async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular");

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<a href="movie-details.html?id=${movie.id}">${
      movie.poster_path
        ?  `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">`
        : `<img src="../images/no-image.jpg" alt="${movie.title}">`
    }</a> 
    <div class="card-body">
        <h5>${movie.title}</h5>
        <p><small>Release: ${movie.release_date}</small></p>
    </div>`;

    document.querySelector("#popular-movies").appendChild(div);
  });
};

async function displayPopularShows() {
  const { results } = await fetchAPIData("tv/popular");

  results.forEach((show) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<a href="tv-details.html?id=${show.id}">${
      show.poster_path
        ?  `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}">`
        : `<img src="../images/no-image.jpg" alt="${show.name}">`
    }</a> 
    <div class="card-body">
        <h5>${show.name}</h5>
        <p><small>First episode date: ${show.first_air_date}</small></p>
    </div>`;

    document.querySelector("#popular-shows").appendChild(div);
  });
}

async function displayMovieDetails() {
  console.log(window.location.search);
  const movieId = window.location.search.split('=')[1]
  console.log(movieId);

  
  const movie = await fetchAPIData(`movie/${movieId}`)
  
  displayBackgroundImage(movie)

  const div = document.createElement('div');
  div.innerHTML = `
  <div class="details-top">
  <div>
  ${
    movie.poster_path
      ? `<img
    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
    class="card-img-top"
    alt="${movie.title}"
  />`
      : `<img
  src="../images/no-image.jpg"
  class="card-img-top"
  alt="${movie.title}"
/>`
  }
  </div>
  <div>
    <h1>${movie.title}</h1>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${movie.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Release Date: ${movie.release_date}</p>
    <p>
      ${movie.overview}
    </p>
    <h4>Genres</h4>
    <ul class="list-group">
      ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
    </ul>
    <a href="${
      movie.homepage
    }" target="_blank" class="btn">Visit Movie Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Movie Info</h2>
  <ul>
    <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(
      movie.budget
    )}</li>
    <li><span class="text-secondary">Revenue:</span> $${addCommasToNumber(
      movie.revenue
    )}</li>
    <li><span class="text-secondary">Runtime:</span> ${
      movie.runtime
    } minutes</li>
    <li><span class="text-secondary">Status:</span> ${movie.status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">
    ${movie.production_companies
      .map((company) => `<span>${company.name}</span>`)
      .join(', ')}
  </div>
</div>
  `;

  document.querySelector('#movie-details').appendChild(div);
};

async function displayShowDetails() {
  const showId = window.location.search.split('=')[1]
  console.log(showId);
  
  const show = await fetchAPIData(`tv/${showId}`);

  displayBackgroundImage(show)

  const div = document.createElement('div');

  div.innerHTML = `
  <div class="details-top">
  <div>
  ${
    show.poster_path
      ? `<img
    src="https://image.tmdb.org/t/p/w500${show.poster_path}"
    class="card-img-top"
    alt="${show.name}"
  />`
      : `<img
  src="../images/no-image.jpg"
  class="card-img-top"
  alt="${show.name}"
/>`
  }
  </div>
  <div>
    <h1>${show.name}</h1>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${show.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
    <p>
      ${show.overview}
    </p>
    <h4>Genres</h4>
    <ul class="list-group">
      ${show.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
    </ul>
    <a href="${
      show.homepage
    }" target="_blank" class="btn">Visit show Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Show Info</h2>
  <ul>
    <li><span class="text-secondary">Number of Episodes:</span> ${
      show.number_of_episodes
    }</li>
    <li><span class="text-secondary">Last Episode To Air:</span> ${
      show.last_episode_to_air.name
    }</li>
    <li><span class="text-secondary">Status:</span> ${show.status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">
    ${show.production_companies
      .map((company) => `<span>${company.name}</span>`)
      .join(', ')}
  </div>
</div>
  `;
  document.querySelector('#show-details').appendChild(div)
}

async function fetchAPIData(endPoint) {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  showSpinner();

  const responce = await fetch(
    `${API_URL}${endPoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await responce.json();

  hideSpinner();

  return data;
}

async function searchAPIData() {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  showSpinner();

  const responce = await fetch(
    `${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}`
  );
  const data = await responce.json();

  hideSpinner();

  return data;
}

async function search() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString)
  console.log(urlParams);

  global.search.type = urlParams.get('type');
  global.search.term = urlParams.get('search-term');

  // console.log(  global.search.type, global.search.term );

  if(global.search.term !== '') {
    const { results, total_pages, page, total_results } = await searchAPIData()
    // console.log(results, total_pages, page, total_results);

    global.search.page = page;
    global.search.totalPages = total_pages;
    global.search.totalResults = total_results;

    if (results.length === 0) {
      showAlert('No results found');
      return;
    }
    displaySearchResults(results);

    document.querySelector('#search-term').value = ''
  } else {
    showAlert('Enter search term');
  }
}

function displaySearchResults(results) {
  document.querySelector(`#search-results`).innerHTML = ''
  document.querySelector(`#search-results-heading`).innerHTML = ''
  document.querySelector(`#pagination`).innerHTML = ''

  results.forEach((result) => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `<a href="${global.search.type}-details.html?id=${result.id}">
      ${
        result.poster_path
          ? `<img
        src="https://image.tmdb.org/t/p/w500${result.poster_path}"
        class="card-img-top"
        alt="${
          global.search.type === 'movie' ? result.title : result.name
        }"
      />`
          : `<img
      src="../images/no-image.jpg"
      class="card-img-top"
       alt="${
         global.search.type === 'movie' ? result.title : result.name
       }"
    />`
      }
    </a>
    <div class="card-body">
      <h5 class="card-title">${
        global.search.type === 'movie' ? result.title : result.name
      }</h5>
      <p class="card-text">
        <small class="text-muted">Release: ${
          global.search.type === 'movie'
            ? result.release_date
            : result.first_air_date
        }</small>
      </p>
    </div>
    `;

    document.querySelector('#search-results-heading').innerHTML = `<h2>${results.length} of ${global.search.totalResults} Results for ${global.search.term}</h2>`
    document.querySelector('#search-results').appendChild(div)

  })


  displayPagination()

}

// async function search() {
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   console.log(urlParams);

//   global.search.type = urlParams.get('type');
//   global.search.term = urlParams.get('search-term');
//   // console.log(global.search.type, global.search.term);

//   if (global.search.term !== '') {
//     const { results, total_pages, page, total_results } = await searchAPIData();
//     // console.log(results, total_pages, page, total_results);
//     global.search.page = page;
//     global.search.totalPages = total_pages;
//     global.search.totalResults = total_results;

//     if (results.length === 0) {
//       showAlert('No results found');
//       return;
//     }
//     displaySearchResults(results);

//     document.querySelector('#search-term').value = ''
//   } else {
//     showAlert('Enter search term');
//   }
// }

// function displaySearchResults(results) {
//   document.querySelector(`#search-results`).innerHTML = ''
//   document.querySelector(`#search-results-heading`).innerHTML = ''
//   document.querySelector(`#pagination`).innerHTML = ''
  
//     results.forEach((result)=>{
//       const div = document.createElement('div');
//       div.classList.add('card');
  
//       div.innerHTML = `
//       <a href="${global.search.type}-details.html?id=${result.id}">
//         ${
//           result.poster_path
//             ? `<img
//           src="https://image.tmdb.org/t/p/w500${result.poster_path}"
//           class="card-img-top"
//           alt="${
//             global.search.type === 'movie' ? result.title : result.name
//           }"
//         />`
//             : `<img
//         src="../images/no-image.jpg"
//         class="card-img-top"
//          alt="${
//            global.search.type === 'movie' ? result.title : result.name
//          }"
//       />`
//         }
//       </a>
//       <div class="card-body">
//         <h5 class="card-title">${
//           global.search.type === 'movie' ? result.title : result.name
//         }</h5>
//         <p class="card-text">
//           <small class="text-muted">Release: ${
//             global.search.type === 'movie'
//               ? result.release_date
//               : result.first_air_date
//           }</small>
//         </p>
//       </div>
//     `;
  
//   document.querySelector('#search-results-heading').innerHTML = `
//           <h2>${results.length} of ${global.search.totalResults} Results for ${global.search.term}</h2>
//   `;
  
//   document.querySelector('#search-results').appendChild(div);
//     })
//     displayPagination()
//   }

// function displayPagination() {
//   const div = document.createElement('div');
//   div.classList.add('pagination');
//   div.innerHTML = `
//   <button class="btn btn-primary" id="prev">Prev</button>
//   <button class="btn btn-primary" id="next">Next</button>
//   <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>
//   `;
//   document.querySelector('#pagination').appendChild(div);

// if(global.search.page === 1) {
//   document.querySelector('#prev').disabled = true;
// }
// if(global.search.page === global.search.totalPages) {
//   document.querySelector('#next').disabled = true;
// }
// document.querySelector('#next').addEventListener('click', async ()=>{
//   global.search.page++;
//   const { results, total_pages } = await searchAPIData()
//   displaySearchResults(results)
// })


// document.querySelector('#prev').addEventListener('click', async ()=>{
//   global.search.page--;
//   const { results, total_pages } = await searchAPIData()
//   displaySearchResults(results)
// })


// }

function displayPagination() {
  const div = document.createElement('div');
  div.classList.add('pagination');
  div.innerHTML = `
  <button class="btn btn-primary" id="prev">Prev</button>
  <button class="btn btn-primary" id="next">Next</button>
  <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>
  `;
  document.querySelector('#pagination').appendChild(div);

if(global.search.page === 1) {
  document.querySelector('#prev').disabled = true;
}
if(global.search.page === global.search.totalPages) {
  document.querySelector('#next').disabled = true;
}
document.querySelector('#next').addEventListener('click', async ()=>{
  global.search.page++;
  const { results, total_pages } = await searchAPIData()
  displaySearchResults(results)
})


document.querySelector('#prev').addEventListener('click', async ()=>{
  global.search.page--;
  const { results, total_pages } = await searchAPIData()
  displaySearchResults(results)
})


}


function showAlert(message, className = 'error') {
  const alertElement = document.createElement('article')
  alertElement.classList.add(className, 'alert')
  alertElement.appendChild(document.createTextNode(message))

  document.querySelector('#alert').appendChild(alertElement)

  setTimeout(() => alertElement.remove(), 3000)
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link')

  links.forEach((link) => {
    if(link.getAttribute('href') === global.currentPage) {
      link.classList.add('active')
    } 
  })
}

function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      // displaySlider();
      displayPopularMovies();

      break;
    case "/shows.html":
      displayPopularShows();

      break;
    case "/movie-details.html":
      displayMovieDetails();

      break;
    case "/tv-details.html":
      displayShowDetails();

      break;
    case "/search.html":
      search();
      break;
  }

  highlightActiveLink()
}

document.addEventListener("DOMContentLoaded", init);
