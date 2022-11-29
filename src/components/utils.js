export let api_key = "1c60d7b05efa5867f0454700abea2d49";
export let popular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
export let imagePath = "https://image.tmdb.org/t/p/w185";
export let videoPath = "https://api.themoviedb.org/3/movie/";
export let searchTitle =
  "https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false";
export let keywords =
  "https://api.themoviedb.org/3/movie/{movie_id}/keywords?api_key=${api_key}";
export let searchKeywords =
  "https://api.themoviedb.org/3/search/keyword?api_key=<<api_key>>&page=1";
