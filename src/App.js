import './App.css';
import { useState } from 'react';


function App() {
  let [ postTitle, setPostTitle ] = useState(["여자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [ like, setLike ] = useState([0, 0, 0]);
  console.log(like[1]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>{
        postTitle.map((posts, i) => {
          return (
            <div className="list">
              <h4>{ postTitle[i] } <span onClick={()=>{
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
              }} style={{cursor: "pointer"}}>👍</span> { like[i] } </h4>
              <p>9월 11일 발행</p>
            </div>
          )
        })
      }
      
    </div>
  );
}

export default App;
