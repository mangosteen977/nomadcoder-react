import { useEffect } from "react";
import { useParams } from "react-router-dom";
// router의 param 값 사용, 변수명은 router path에서 :변수명으로 지정한 것..

function Detail(){
    const {id} = useParams(); // router의 param 값, :변수명
    const getMovies = async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        console.log(json)
    }
    useEffect(()=>{
        getMovies();
    })
    console.log(id)
    return (
        <h1>detail</h1>
    );
}
export default Detail;