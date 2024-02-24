import propTypes from 'prop-types'
import styles from '../css/movie.module.css'
function MovieDetail({id, medium_cover_image, background_image, title, year,  yt_trailer_code, summary, description_full, genres, rating, runtime}){
    return (
        <div>
            <div 
                className={styles.wide_image}
                style={{ backgroundImage:`url(${background_image})`  }}
            >
                <img src={medium_cover_image} alt={title} />
                <div className={styles.movie_info}>
                    <h1>{title} ({year})</h1>
                    <h4>{`Rating: (${rating? rating : null} /10)`}</h4>
                    <h4>Runtime: {runtime ? runtime : null} minutes</h4>
                    {genres ? (
                        <div className={styles.keywords}>
                            {genres.map((g)=><span key={g}>{g}</span>)}
                        </div>
                    ) : null}
                    <div className={styles.movie_summary}>
                        {summary ? summary : (description_full ? description_full : null)}
                    </div>
                </div>
            </div>
                
            {yt_trailer_code ? (
                <div className={styles.base_view}>
                    <h4>□ movie trailer</h4>
                    <hr />
                    <iframe
                        width="560" height="315"
                        src={`https://www.youtube.com/embed/${yt_trailer_code}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </div>
            ) : null}
        </div>
    )
}
MovieDetail.propTypes = {
    id : propTypes.number.isRequired,
    medium_cover_image : propTypes.string.isRequired,
    background_image : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    year : propTypes.number.isRequired,
    yt_trailer_code : propTypes.string,
    summary : propTypes.string,
    description_full : propTypes.string,
    genres : propTypes.arrayOf( propTypes.string).isRequired,
    rating : propTypes.number,
    runtime : propTypes.number
}
export default MovieDetail;
//https://www.youtube.com/watch?v=
//yt_trailer_code
//https://www.youtube.com/watch?v=inm7IGWOSqs
//https://www.youtube.com/embed/inm7IGWOSqs?si=uhImj2oCo4rJvEDm