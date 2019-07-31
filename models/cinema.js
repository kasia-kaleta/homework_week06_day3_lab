const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.titles = function (films) {
  let result = this.films.filter((film) => {
    return film.title;
  })
  return result;
};

Cinema.prototype.findByTitle = function (title) {
  let result = this.films.find((film) => {
    return film.title === title;
  })
  return result;
};

Cinema.prototype.findByGenre = function (genre) {
  let result = this.films.filter((film) => {
    return film.genre === genre;
  })
  return result;
};


module.exports = Cinema;
