import { useEffect, useState } from "react";
import Movie from '../components/movie';
import Loading from '../components/Loading';
import styles from '../css/movie.module.css'

function Home () {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const getMovies = async() => {
        const json = await (
        await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=title&&page=${page}`
        )
        ).json();
        if (page === 1){
            setMovies(json.data.movies);
        } else {
            setMovies((current)=>[...current, ...json.data.movies]);
        }
        setLoading(false);
    };
    const getMoreMovie = () => {
        setLoading(true);
        setPage((prev) => prev + 1);
    }
    useEffect(() => {
        getMovies();
        console.log("more", page);
    },[page]);
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
                        id={movie.id}z
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
    