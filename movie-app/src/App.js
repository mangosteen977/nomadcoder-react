import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Top from './components/Top';
import Footer from './components/Footer';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App () {
  return (
    <div>
      <Top />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;

// npm install react-router-dom
// npm i react-router-dom@5.3.0
// https://v5.reactrouter.com/web/guides/quick-start
// react-router-dom 6버전 문서
// https://reactrouter.com/docs/en/v6/getting-started/overview
// 버전 5 -> 버전 6 바뀐 부분
// 1. Switch컴포넌트가 Routes컴포넌트로 대체.
// Switch -> Routes
// 2. Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고,
// element prop에 자식 컴포넌트를 할당.
// Route path="/" element={< Home / >}