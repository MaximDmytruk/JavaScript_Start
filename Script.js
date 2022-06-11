"use strict";


let numberOfFilms =prompt("Скільки фільмів Ви подивились ?","" );
let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
const a = prompt("Один з останніх фільмів які дивились ? ",""),
      b = prompt("На скільки крутий був фільм? оцініть від 1 до 10",""),
      c = prompt("Один з останніх фільмів які дивились ? ",""),
      d = prompt("На скільки крутий був фільм? оцініть від 1 до 10","");

personalMovieDB.movies[a]=b;

console.log(personalMovieDB);



