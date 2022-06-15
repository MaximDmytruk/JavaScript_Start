"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Скільки фільмів Ви подивились ?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Скільки фільмів Ви подивились ?", "")
    }
};

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

detectedLevelKino(); //виявляє та коментує рівень переглядів фільма
rememberOfFilms(); // запитує про отсанні фільми які дивились
showMyDB(); //якщо база даних не схована - вивиодить в консоль весь клас
whriteYourGenres(); //Улюблені жанри

function detectedLevelKino() {
    if (personalMovieDB.count < 10) {
        console.log("Маловато як для кіномана...");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Ви класичний кіноман ");
    } else if (personalMovieDB.count > 30) {
        console.log(" ВИ МЕГА КІНОМАН !!");
    } else {
        console.log("Error")
    }
}

function rememberOfFilms() {
    for (let index = 0; index < 2; index++) { //цикл для 2 повторень.
        const a = prompt("Один з останніх фільмів які дивились ? ", ""),
            b = prompt("На скільки крутий був фільм? оцініть від 1 до 10", "");

        if (a != "" && a != null && a.length < 50 && b != "" && b != null && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            index--;// індекс повертається на попередній хід.
        } 
    }
}

function showMyDB() {
    if (personalMovieDB.privat) {} else console.log(personalMovieDB);
}

function whriteYourGenres() {
    for (let index = 0; index < 3; index++) {
        personalMovieDB.genres[index] = prompt(`Ваш yлюблений жанр по номеру ${index+1}`);
    }
}
