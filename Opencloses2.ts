//EJERCICIO 2
//EJERCICIO DE VIDEO JUEGO
//PAMELA LIGIA TAPIA ARCE

class MovieStore{
    private movies: Movie[];

    constructor(movies: Movie[]){
        this.movies = this.movies;

    }

    getByDirector(director: string, items: Movie[]){
        return items.filter((item) => item.getDirector() === director);
    }

    getByDuration(duration:string, items: Movie[]){
        return items.filter((item) => item.getDuration() === duration);
    }

    getDirectorandDuration(director:string, duration:string, items: Movie[] ){
        return this.getDirectorandDuration(director,duration,items).filter((item) => item.getDuration === duration)
        .map((item) => (director + duration))

    }
}

class VideoGameStoreWithoutMovioes extends MovieStore{
    private videoGames: VideoGameOC[];

    constructor(videoGames: VideoGameOC[],movies: Movie[]){
        super(movies);
        this.videoGames = videoGames;
    }

    getGameByGenere(genre: string, items: VideoGameOC[]){
        return items.filter((item) => item.getGenre() === genre);
    }
}