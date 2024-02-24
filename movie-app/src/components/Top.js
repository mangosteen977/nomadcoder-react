import { useState } from 'react';
import movieGenre from '../data/movieGenre.json'
function Top (){
    const [genere, setGenere] = useState(movieGenre);
    console.log(genere)
    return (
        <div>Top view</div>
    );
}
export default Top;