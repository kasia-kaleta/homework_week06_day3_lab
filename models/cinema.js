const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.titles = function (films) {
  let result = this.films.filter((film) => {
    return film.title;
  })
  return result;
};




module.exports = Cinema;
