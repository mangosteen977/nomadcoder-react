import {Link} from 'react-router-dom';
// router Link : 새로고침없이 컴포넌츠 뷰 이동
import propTypes from 'prop-types'
import styles from '../css/movie.module.css'
function Movie({id, medium_cover_image, title, genres}){
    return (
        <div className={styles.movie_card}>
            <img src={medium_cover_image} alt={title} />
            {genres ? (
                <div className={styles.keywords_hash}>
                    {genres.map((g)=><span key={g}>#{g}</span>)}
                </div>
            ) : null}
            <h2><Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link></h2>
        </div>
    )
}
Movie.propTypes = {
    id : propTypes.number.isRequired,
    medium_cover_image : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    genres : propTypes.arrayOf( propTypes.string).isRequired
}
export default Movie;