import { useEffect, useState } from "react";
import Movie from '../components/movie';
import Loading from '../components/Loading';
import styles from '../css/movie.module.css'

function Home ({menu}) {
    // menu : Top.js => App.js(부모) => Home.js경로로 Top.js에서 선택 된 장르 메뉴.
    console.log(menu,"menu")
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const getMovies = async() => {
        let movieApi = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=title&&page=${page}`;
        if(menu){
            movieApi += `&&genre=${menu}`;
            console.log(movieApi)
        }
        const json = await(await fetch(movieApi)).json();
        if (page === 1){
            setMovies(json.data.movies);
        } else {
            setMovies((current)=>[...current, ...json.data.movies]);
        }
        setLoading(false);
    };
    const getMoreMovie = () => {
        setPage((prev) => prev + 1);
    }
    useEffect(() => {
        setLoading(true);
        getMovies();
        console.log("more", page, menu);
    },[page, menu]);
    console.log(movies)
    return (
        <div>
            {loading && page === 1 ? (
                <Loading />
            ) : (
                <div className={styles.poster_view}>
                    {movies.map((movie)=>(
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        medium_cover_image={movie.medium_cover_image}
                        title={movie.title}
                        genres={movie.genres}
                    />
                    ))}
                    <div className={styles.base_view}>
                        {loading && page !== 1 ?  <Loading /> : null}
                        <button onClick={getMoreMovie} className={styles.btn_normal}>More</button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Home;
    