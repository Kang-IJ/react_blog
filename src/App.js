import './App.css';
import { useState } from 'react';


function App() {
  let [postTitle, setPostTitle] = useState(["여자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>{
        postTitle.map((posts, i) => {
          return (
            <div className="list">
              <h4>{ postTitle[i] }</h4>
              <p>9월 11일 발행</p>
            </div>
          )
        })
      }
      
    </div>
  );
}

export default App;
