import { useState } from 'react';
import styles from '../css/top.module.css';
import movieGenre from '../assets/JSON/movieGenre.json';
import logo from '../assets/svg/theater.svg';
function Top ({onDataChange}){
    // onDataChange : App.js props로 넘긴 선택 장르 메뉴 저장 함수
    const [genre, setGenre] = useState(movieGenre);
   
    const onChange = (event) => {
        if(event.target.value === ''){
            return;
        }
        onDataChange(event.target.value);
    }
    return (
        <div className={styles.top_view}>
            <div className={styles.logo}>
                <img src={logo} alt='logo'></img>
            </div>
            <h2>Mango Movie</h2>
            <select onChange={onChange} className={styles.genreMenu}>
                <option value="">Genre</option>
                {genre.map((g)=>(
                    <option value={g}>{g}</option>
                ))}
            </select>
        </div>
    );
}
export default Top;