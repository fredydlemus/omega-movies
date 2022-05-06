window.addEventListener("hashchange", navigator, false);
window.addEventListener("load", navigator, false);

function navigator() {
  console.log({ location });

  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    moviePage();
  } else if (location.hash.startsWith("#category=")) {
    categoriesPage();
  } else {
    homePage();
  }
}

function homePage() {
  console.log("home");
  getTrendingMoviesPreview();
  getCategoriesPreview();
}
function moviePage() {
  console.log("movie");
}
function searchPage() {
  console.log("search");
}
function trendsPage() {
  console.log("trends");
}
function categoriesPage() {
  console.log("categories");
}
