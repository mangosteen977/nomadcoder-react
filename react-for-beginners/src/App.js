// import Button from "./button"
// import { PropTypes } from "prop-types";
import styles from "./App.module.css"
import { useState, useEffect } from "react";
// useEffect : 코드 실행 제어, event리스너 등에 의한 state변화에도 re-render되지 않고 초기 한 번만 실행.

function Hello(){
  // cleanUp function 원리
  // function destroyFn () {
  //   console.log("destroyed");
  // }
  // function effectFn () {
  //   console.log("created");
  //   return destroyFn; // 컨포넌츠가 삭제될 때 return 실행.
  // }
  // useEffect(effectFn, []); 


  // cleanUp function (useEffect에서 return function)
  useEffect(()=>{
    console.log("created");
    //cleanUp function
    return () => console.log("destroyed");
    // return function() {console.log("destroyed")};
    // cleanUp function : 컴포넌츠가 삭제될 때의 상태 리턴.
  },[])
  return <h1>Hello</h1>
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () =>  setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  }

  console.log("i run all the time"); //모든 state변화 re-render

  useEffect(()=>{
    // useEffect : event리스너 등에 의한 state변화에도 re-render되지 않고 초기 한 번만 실행.
    // api호출 등 여러 번 호출되지 않을 함수
    console.log("i run only once")

  }, []);

  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5){
      console.log("i search for", keyword);
    }
  }, [keyword]); //keyword state변화 watch re-render
  //[] : watch, re-render에 반응할 state. 해당 state 변화에만 re-render

  useEffect(()=>{
    console.log("i run when counter change")
  }, [counter]);

  // Cleanup function
  const [showing, setShowing] = useState(false);
  const onShowing = () => setShowing((prev) => !prev);
  return (
    <div>
      <h1>useEffect</h1>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="search for.." 
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click</button>
      <hr />

      <h1>Cleanup</h1>
      <button onClick={onShowing}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
