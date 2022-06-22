"use strict";

let personalMovieDB = {
    count: 6,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Скільки фільмів Ви подивились ?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Скільки фільмів Ви подивились ?", "")
        }
    },
    detectedLevelKino: function () { //виявляє та коментує рівень переглядів фільма
        if (personalMovieDB.count < 10) {
            console.log("Маловато як для кіномана...");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Ви класичний кіноман ");
        } else if (personalMovieDB.count > 30) {
            console.log(" ВИ МЕГА КІНОМАН !!");
        } else {
            console.log("Error")
        }
    },
    rememberOfFilms: function () { // запитує про отсанні фільми які дивились
        for (let index = 0; index < 2; index++) { //цикл для 2 повторень.
            const a = prompt("Один з останніх фільмів які дивились ? ", ""),
                b = prompt("На скільки крутий був фільм? оцініть від 1 до 10", "");

            if (a != "" && a != null && a.length < 50 && b != "" && b != null && b.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                index--; // індекс повертається на попередній хід.
            }
        }
    },
    showMyDB: function (hidden) { //якщо база даних не схована - виводить в консоль весь клас
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    whriteYourGenres: function () { //Улюблені жанри
        for (let index = 0; index < 3; index++) {
            personalMovieDB.genres[index] = prompt(`Ваш yлюблений жанр по номеру ${index+1}`);
            if (personalMovieDB.genres[index] == '' || personalMovieDB.genres[index] == null ) {
                console.log('Ви ввели невірні дані !');
                index--;
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Улюблений жанр${index+1} - це ${item}`);

        });
    },


    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) personalMovieDB.privat = false;
        if (personalMovieDB.privat == false) personalMovieDB.privat = true;
    }

};