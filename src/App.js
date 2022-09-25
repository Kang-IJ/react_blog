import "./App.css";
import { useState } from "react";

function App() {
  let [postTitle, setPostTitle] = useState(["고양이는", "정말로", "귀여워"]);
  let [like, setLike] = useState([10, 0, 0]);
  let [modal, setModal] = useState(false);
  let [input, setInput] = useState("");
  let [listTitleTarget, setListTitleTarget] = useState("");

  let getDate = new Date();
  let year = getDate.getFullYear();
  let month = getDate.getMonth() + 1;
  let date = getDate.getDate();

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      {postTitle.map((posts, i) => {
        return (
          <div className="list" key={i}>
            <h4
              className="postTitle"
              onClick={(e) => {
                setModal(!modal);
                setListTitleTarget(e.target.textContent);
              }}
            >
              {postTitle[i]}
            </h4>
            <span
              onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
              }}
              style={{ cursor: "pointer" }}
            >
              👍
            </span>
            <span
              onClick={() => {
                let copy = [...like];
                if (copy[i] > 0) {
                  copy[i] = copy[i] - 1;
                  setLike(copy);
                }
              }}
              style={{ cursor: "pointer" }}
            >
              👎
            </span>
            <span
              onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
              }}
              style={{ cursor: "pointer" }}
            ></span>
            {like[i]}{" "}
            <p className="date">
              {year}년 {month}월 {date}일 발행
            </p>
          </div>
        );
      })}{" "}
      {/** map 끝나는 부분 */}
      <input
        className="input"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyPress={(e) => {
          let dupCheck = [...postTitle];
          let lastOfDupCheck = dupCheck.pop();

          if (lastOfDupCheck !== e.target.value) {
            if (input && e.key === "Enter") {
              let copy = [...postTitle];
              copy.push(input);
              setPostTitle(copy);

              let likeCopy = [...like];
              likeCopy.push(0);
              setLike(likeCopy);
            }
          }
        }}
      />
      <button
        className="input-button"
        onClick={() => {
          let dupCheck = [...postTitle];
          let lastOfDupCheckButton = dupCheck.pop();

          if (lastOfDupCheckButton !== input) {
            if (input) {
              let copy = [...postTitle];
              copy.push(input);
              setPostTitle(copy);
              console.log(copy);

              let likeCopy = [...like];
              likeCopy.push(0);
              setLike(likeCopy);
            }
          }
        }}
      >
        Add post
      </button>
      {modal === true ? (
        <Modal
          postTitle={postTitle}
          listTitleTarget={listTitleTarget}
          year={year}
          month={month}
          date={date}
        />
      ) : null}
    </div>
  );
}

function Modal(props, i) {
  return (
    <div className="modal">
      <h4>{props.listTitleTarget}</h4>
      <p>
        {props.year}년 {props.month}월 {props.date}일 발행
      </p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
