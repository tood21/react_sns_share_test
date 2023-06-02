import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";
import React from "react";
import NotInclude from "./pages/NotInclude";

function App() {
    const currentUrl = window.location.href;

    const shareFacebook = () => {
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                currentUrl
            )}`,
            'facebook-share-dialog',
            'width=626,height=436'
        );
    };

  return (
    <div>
        <Link to={'/main?id=1987398127'}>메인</Link>
        <Link to={'/sub'}>서브</Link>
      테스트용
        <button onClick={shareFacebook} type={"button"}>페이스북</button>
        <button type={"button"}>트위터</button>
      <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/sub' element={<Sub />} />
          <Route path='/notInclude' element={<NotInclude />} />
          <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
