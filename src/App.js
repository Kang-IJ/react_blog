import "./App.css";
import { useState } from "react";

function App() {
  let [postTitle, setPostTitle] = useState([
    "여자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [input, setInput] = useState("");
  let [listTitleTarget, setListTitleTarget] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      {postTitle.map((posts, i) => {
        return (
          <div
            className="list"
            key={i}
            onClick={(e) => {
              setListTitleTarget(e.target.textContent);
            }}
          >
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {postTitle[i]}
            </h4>
            <span
              onClick={(event) => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
                event.stopPropagation();
              }}
              style={{ cursor: "pointer" }}
            >
              👍
            </span>
            {like[i]} <p className="date">9월 11일 발행</p>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyPress={(e) => {
          if (input && e.key === "Enter") {
            let copy = [...postTitle];
            copy.push(input);
            setPostTitle(copy);

            let likeCopy = [...like];
            likeCopy.push(0);
            setLike(likeCopy);
          }
        }}
      />
      <button
        onClick={() => {
          if (input) {
            let copy = [...postTitle];
            copy.push(input);
            setPostTitle(copy);
            console.log(copy);

            let likeCopy = [...like];
            likeCopy.push(0);
            setLike(likeCopy);
          }
        }}
      >
        Add post
      </button>
      {modal === true ? (
        <Modal postTitle={postTitle} listTitleTarget={listTitleTarget} />
      ) : null}
    </div>
  );
}

function Modal(props, i) {
  return (
    <div className="modal">
      <h4>{props.listTitleTarget}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
