import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import MovieDetail from '../components/movieDetail';
import Movie from '../components/movie';
import Loading from '../components/Loading';
import styles from '../css/movie.module.css'
// router의 param 값 사용, 변수명은 router path에서 :변수명으로 지정한 것..

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const {id} = useParams(); // router의 param 값, :변수명
    const getMovies = async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        getSuggestionsMovies();
    }
    const getSuggestionsMovies = async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
        ).json();
        setSuggestions(json.data.movies);
        setLoading(false);
    }
    // console.log("suggestions",suggestions);
    useEffect(() => {
        getMovies();
    },[id]);
    // console.log(movie)
    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <MovieDetail 
                        key={movie.id}
                        id={movie.id}
                        medium_cover_image={movie.medium_cover_image}
                        background_image={movie.background_image}
                        title={movie.title}
                        year={movie.year}
                        yt_trailer_code={movie.yt_trailer_code}
                        summary={movie.summary}
                        description_full = {movie.description_full}
                        genres={movie.genres}
                        rating={movie.rating}
                        runtime={movie.runtime}
                    />
                    <div className={styles.base_view}>
                        <h4>□ movie suggestions</h4>
                        <hr />
                        <div className={styles.poster_view}>
                            {suggestions.map((movie)=>(
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    medium_cover_image={movie.medium_cover_image}
                                    title={movie.title}
                                    genres={movie.genres}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.base_view}>
                <Link to = {`${process.env.PUBLIC_URL}/`} className={styles.btn_normal}>List</Link>
            </div>
        </div>
    );
}
export default Detail;