import axios from "axios";
import React, { useState } from "react";
import Title from "../Title";
import { useRouter } from "next/router";
import styles from "../../styles/Board.module.css";
import styled from "styled-components";

function AddBoard() {
  const router = useRouter();
  const [addBoard, setBoard] = useState({
    boardTitle: "",
    boardContent: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(`http://localhost:3000/api/myp`, addBoard);
    if (data.data) router.push("/myps");
    setBoard({
      boardTitle: "",
      boardContent: "",
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("vaule: ", value);
    setBoard({ ...addBoard, [e.target.name]: value });
  };

  const Input_Center = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 10px;
  `
  const Post_Button = styled.button`
    margin: 5px;
    background-color: rgb(0, 0, 0);
    border-radius: 5px;
    width: 150px;
    height: 7vh;
    color: rgb(240, 240, 240);
  `
  return (
    <>
      <Title title="POST" />
      <div className={styles.Board_Container}>
        <form onSubmit={onSubmit}>
          <input
            className={styles.Board_Title}
            name="boardTitle"
            placeholder="제목"
            onChange={handleChange}
            value={addBoard.boardTitle}
          />{" "}
          <br />
          <input
            className={styles.Board_Content}
            name="boardContent"
            placeholder="본문"
            onChange={handleChange}
            value={addBoard.boardContent}
          />
            <Input_Center>
                <Post_Button type="submit">POST</Post_Button>
            </Input_Center>
        </form>
      </div>
    </>
  );
}

export default AddBoard;
