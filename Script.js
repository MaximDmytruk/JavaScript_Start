"use strict";

let numberOfFilms = +prompt("Скільки фільмів Ви подивились ?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log("Маловато як для кіномана...");
} else if (personalMovieDB.count < 10 && personalMovieDB.count > 30) {
    console.log("Ви класичний кіноман ");
} else if (personalMovieDB.count > 30) {
    console.log(" ВИ МЕГА КІНОМАН !!");
} else {
    console.log("Error")
}

for (let index = 0; index < 2; index++) { //цикл для 2 повторень.
    const a = prompt("Один з останніх фільмів які дивились ? ", ""),
        b = prompt("На скільки крутий був фільм? оцініть від 1 до 10", "");

    if (a != "" && a != null && a.length < 50 && b != "" && b != null && b.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        index--;
    } // else - індекс повертається на попередній хід.
}
console.log(personalMovieDB);