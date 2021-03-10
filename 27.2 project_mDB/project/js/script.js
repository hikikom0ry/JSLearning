/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const advertisement = document.querySelectorAll(".promo__adv img");
advertisement.forEach(element => {
    element.remove(element);
});


let genreOfFilm = document.querySelectorAll(".promo__genre"); 
genreOfFilm[0].textContent = "ДРАМА";

let abc = document.querySelectorAll("div.promo__bg");
abc[0].style.backgroundImage = 'url("img/bg.jpg")';

