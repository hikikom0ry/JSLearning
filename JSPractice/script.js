let personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,

    start: function(){
        do{
            this.count = +prompt('Сколько фильмов вы уже просмотрели', '');
        } while(this.count == '' || this.count == null || isNaN(this.count));
    },

    rememberMyFilms: function(){
        let film, raiting;
        for (let i = 0; i < 2; i++){
        do{
            film = prompt('Один из последних просмотренных фильмов', '');
        } while (film === '' || film === null || film.length > 50);
        
        do{
            raiting = prompt('На сколько оцените его?','');
        } while (raiting === '' || raiting === null);    
        this.movies[film] = raiting;
        }
    },

    detectPersonalLevel: function(){
        if (this.count < 10){
            alert('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && personalMovieDB.count <= 30){
            alert('Вы классический зритель');
        } else if(this.count > 30) {
            alert('Вы киноман');
        } else {
            alert ('Произошла ошибка');
        }
    },

    showMyDB: function(){
        if (this.privat == false){
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function(){
        for (let i = 1; i <= 3; i++){
            this.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, ``);
            if (this.genres[i-1]==='' || this.genres[i-1]===null){
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            }
        }
        this.genres.forEach((genre, i) => {
            console.log(`Любимый жанр # ${i+1} - это ${genre}`);
        });
    },

    toggleVisibleMyDB: function(){
            this.privat = !this.privat;   
    }
};
personalMovieDB.toggleVisibleMyDB();

personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
