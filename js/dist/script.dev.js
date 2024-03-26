"use strict";

var global = {
  currentPage: window.location.pathname,
  api: {
    apiKey: "f0d9f4a3e0d9a50998786c2912e0ad6e",
    apiUrl: "https://api.themoviedb.org/3/"
  },
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1
  }
}; // 3fd2be6f0c70a2a598f084ddfb75487c
// f0d9f4a3e0d9a50998786c2912e0ad6e

function displaySlider() {
  var _ref, results;

  return regeneratorRuntime.async(function displaySlider$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetchAPIData("movie/now_playing"));

        case 2:
          _ref = _context.sent;
          results = _ref.results;
          results.forEach(function (movie) {
            var div = document.createElement("div");
            div.classList.add("swiper-slide");
            div.innerHTML = "<a href=\"movie-details.html?id=".concat(movie.id, "\">").concat(movie.poster_path ? "<img src=\"https://image.tmdb.org/t/p/w500".concat(movie.poster_path, "\" alt=\"").concat(movie.title, "\">") : "<img src=\"../images/no-image.jpg\" alt=\"".concat(movie.title, "\">"), "</a> \n    <h4 style=\"padding: 20px 0 10px;\">").concat(movie.title, "</h4>\n    <p style=\"padding-bottom: 20px;\">Average vote: ").concat(movie.vote_average, "</p>");
            document.querySelector(".swiper-wrapper").appendChild(div);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function displayPopularMovies() {
  var _ref2, results;

  return regeneratorRuntime.async(function displayPopularMovies$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchAPIData("movie/popular"));

        case 2:
          _ref2 = _context2.sent;
          results = _ref2.results;
          results.forEach(function (movie) {
            var div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = "<a href=\"movie-details.html?id=".concat(movie.id, "\">").concat(movie.poster_path ? "<img src=\"https://image.tmdb.org/t/p/w500".concat(movie.poster_path, "\" alt=\"").concat(movie.title, "\">") : "<img src=\"../images/no-image.jpg\" alt=\"".concat(movie.title, "\">"), "</a> \n    <div class=\"card-body\">\n        <h5>").concat(movie.title, "</h5>\n        <p><small>Release: ").concat(movie.release_date, "</small></p>\n    </div>");
            document.querySelector("#popular-movies").appendChild(div);
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

;

function displayMovieDetails() {
  var movieId, movie, div, heading, tagline, button;
  return regeneratorRuntime.async(function displayMovieDetails$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(window.location.search);
          movieId = window.location.search.split('=')[1];
          console.log(movieId);
          _context3.next = 5;
          return regeneratorRuntime.awrap(fetchAPIData("movie/".concat(movieId)));

        case 5:
          movie = _context3.sent;
          displayBackgroundImage(movie);
          div = document.createElement('div');
          div.innerHTML = "<img style=\"width: 600px; background-repeat:no-repeat; background-size: contain; border: 10px solid #fff;\" src=\"https://image.tmdb.org/t/p/original".concat(movie.backdrop_path, "\">\n  <article style=\"display:flex; flex-direction: column; gap: 10px;\">\n      <p><strong>Release date:</strong> <span style=\"color:#f1c40f;\">").concat(movie.release_date, "</span></p>\n      <p><strong>Average vote:</strong> <span style=\"color:#f1c40f;\">").concat(movie.vote_average, "</span></p>\n      <p style=\"margin-bottom: 50px;\"><strong>Movie budget:</strong> <span style=\"color:#f1c40f;\">").concat(movie.budget, "$</span></p>\n      <p><strong>Overview: </strong>").concat(movie.overview, "</p>\n  </article>");
          div.style.display = 'flex';
          div.style.gap = '100px'; // div.style.justifyContent = 'center'

          div.style.marginTop = '150px';
          div.style.paddingBottom = '200px';
          div.style.position = 'relative';
          heading = document.createElement('h1');
          heading.style.textAlign = 'center';
          heading.style.marginTop = '50px';
          heading.textContent = "".concat(movie.title);
          tagline = document.createElement('i');
          tagline.style.textAlign = 'center';
          tagline.style.marginTop = '10px';
          tagline.style.opacity = '0.7';
          tagline.style.display = 'block';
          tagline.textContent = "".concat(movie.tagline);
          button = document.createElement('a');
          button.style.minWidth = '200px';
          button.style.height = '50px';
          button.style.display = 'block';
          button.style.textAlign = 'center';
          button.style.background = '#f1c40f';
          button.style.position = 'absolute';
          button.style.left = '50%';
          button.style.transform = 'translateX(-50%)';
          button.style.top = '-100px';
          button.style.paddingTop = '12px';
          button.innerHTML = "watch the movie!";
          button.href = "".concat(movie.homepage);
          button.target = "_blank";
          document.querySelector('#movie-details').appendChild(heading);
          document.querySelector('#movie-details').appendChild(tagline);
          document.querySelector('#movie-details').appendChild(div);
          div.appendChild(button);

        case 42:
        case "end":
          return _context3.stop();
      }
    }
  });
}

;

function displayPopularShows() {
  var _ref3, results;

  return regeneratorRuntime.async(function displayPopularShows$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(fetchAPIData("tv/popular"));

        case 2:
          _ref3 = _context4.sent;
          results = _ref3.results;
          results.forEach(function (show) {
            var div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = "<a href=\"tv-details.html?id=".concat(show.id, "\">").concat(show.poster_path ? "<img src=\"https://image.tmdb.org/t/p/w500".concat(show.poster_path, "\" alt=\"").concat(show.name, "\">") : "<img src=\"../images/no-image.jpg\" alt=\"".concat(show.name, "\">"), "</a> \n    <div class=\"card-body\">\n        <h5>").concat(show.name, "</h5>\n        <p><small>First episode date: ").concat(show.first_air_date, "</small></p>\n    </div>");
            document.querySelector("#popular-shows").appendChild(div);
          });

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function displayShowDetails() {
  var showId, show, div, heading, tagline, info, button;
  return regeneratorRuntime.async(function displayShowDetails$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          showId = window.location.search.split('=')[1];
          console.log(showId);
          _context5.next = 4;
          return regeneratorRuntime.awrap(fetchAPIData("tv/".concat(showId)));

        case 4:
          show = _context5.sent;
          displayBackgroundImage(show);
          div = document.createElement('div');
          div.innerHTML = "<img style=\"width: 600px; background-repeat:no-repeat; background-size: contain; border: 10px solid #fff;\" src=\"https://image.tmdb.org/t/p/original".concat(show.backdrop_path, "\">\n  <article style=\"display:flex; flex-direction: column; gap: 10px;\">\n      <p><strong>First episode date:</strong> <span style=\"color:#f1c40f;\">").concat(show.first_air_date, "</span></p>\n      <p style=\"margin-bottom: 20px;\"><strong>Last episode date:</strong> <span style=\"color:#f1c40f;\">").concat(show.last_air_date, "</span></p>\n      <p><strong>Average vote:</strong> <span style=\"color:#f1c40f;\">").concat(show.vote_average, "</span></p>\n      <p style=\"margin-top: 20px;\"><strong>Overview: </strong>").concat(show.overview, "</p>\n  </article>"); // 

          div.style.display = 'flex';
          div.style.gap = '100px'; // div.style.justifyContent = 'center'

          div.style.marginTop = '50px';
          div.style.paddingBottom = '200px';
          div.style.position = 'relative';
          heading = document.createElement('h1');
          heading.style.textAlign = 'center';
          heading.style.marginTop = '50px';
          heading.textContent = "".concat(show.name);
          tagline = document.createElement('i');
          tagline.style.textAlign = 'center';
          tagline.style.marginTop = '10px';
          tagline.style.opacity = '0.7';
          tagline.style.display = 'block';
          tagline.textContent = "".concat(show.tagline);
          info = document.createElement('article');
          info.style.display = 'flex';
          info.style.justifyContent = 'center';
          info.style.alignItems = 'center';
          info.style.gap = '20px';
          info.style.marginTop = '20px';
          info.innerHTML = "\n  <span style=\"font-weight: bold; font-size: 20px; color: #f1c40f;\">\n    ".concat(show.number_of_episodes, " <span style=\"font-size: 16px; font-weight: normal; color: #fff;\">episodes</span>\n  </span>\n  <span style=\"font-weight: bold; font-size: 20px; color: #f1c40f;\">\n    ").concat(show.number_of_seasons, " <span style=\"font-size: 16px; font-weight: normal; color: #fff;\">seasons</span>\n  </span>\n  <span style=\"font-weight: bold; font-size: 20px; color: #f1c40f;\">\n    ").concat(show.episode_run_time, " <span style=\"font-size: 16px; font-weight: normal; color: #fff;\">minutes in each episode</span>\n  </span>\n  ");
          button = document.createElement('a');
          button.style.minWidth = '200px';
          button.style.height = '50px';
          button.style.display = 'block';
          button.style.textAlign = 'center';
          button.style.background = '#f1c40f';
          button.style.position = 'absolute';
          button.style.left = '50%';
          button.style.transform = 'translateX(-50%)';
          button.style.bottom = '100px';
          button.style.paddingTop = '12px';
          button.innerHTML = "watch the show!";
          button.href = "".concat(show.homepage);
          button.target = "_blank";
          document.querySelector('#show-details').appendChild(heading);
          document.querySelector('#show-details').appendChild(tagline);
          document.querySelector('#show-details').appendChild(info);
          document.querySelector('#show-details').appendChild(div);
          div.appendChild(button);

        case 49:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function displayBackgroundImage(showInfo) {
  var main;
  return regeneratorRuntime.async(function displayBackgroundImage$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          main = document.querySelector('main');
          main.style.background = "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(https://image.tmdb.org/t/p/original".concat(showInfo.backdrop_path, ")");
          main.style.backgroundSize = 'cover';

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
}

function fetchAPIData(endPoint) {
  var API_KEY, API_URL, responce, data;
  return regeneratorRuntime.async(function fetchAPIData$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          API_KEY = global.api.apiKey;
          API_URL = global.api.apiUrl;
          showSpinner();
          _context7.next = 5;
          return regeneratorRuntime.awrap(fetch("".concat(API_URL).concat(endPoint, "?api_key=").concat(API_KEY, "&language=en-US")));

        case 5:
          responce = _context7.sent;
          _context7.next = 8;
          return regeneratorRuntime.awrap(responce.json());

        case 8:
          data = _context7.sent;
          hideSpinner();
          return _context7.abrupt("return", data);

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function searchAPIData(endPoint) {
  var API_KEY, API_URL, responce, data;
  return regeneratorRuntime.async(function searchAPIData$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          API_KEY = global.api.apiKey;
          API_URL = global.api.apiUrl;
          showSpinner();
          _context8.next = 5;
          return regeneratorRuntime.awrap(fetch("".concat(API_URL, "search/").concat(endPoint, "?api_key=").concat(API_KEY, "&language=en-US")));

        case 5:
          responce = _context8.sent;
          _context8.next = 8;
          return regeneratorRuntime.awrap(responce.json());

        case 8:
          data = _context8.sent;
          hideSpinner();
          return _context8.abrupt("return", data);

        case 11:
        case "end":
          return _context8.stop();
      }
    }
  });
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displaySlider();
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
      // search();
      break;
  }
}

document.addEventListener("DOMContentLoaded", init);