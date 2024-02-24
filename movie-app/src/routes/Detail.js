import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from '../components/movieDetail';
import Loading from '../components/Loading';
// router의 param 값 사용, 변수명은 router path에서 :변수명으로 지정한 것..

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams(); // router의 param 값, :변수명
    const getMovies = async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    },[]);
    console.log(movie)
    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
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
            )}
        </div>
    );
}
export default Detail;