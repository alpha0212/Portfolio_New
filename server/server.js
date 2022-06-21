const express = require('express');
const { executeQuery } = required("../config/db");
const port = process.env.PORT || 9000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/myp", async (req, res) => {
    try{
        let boardData = await executeQuery("select * from board");
        res.status(200).json(boardData);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get("/myp/:id", async (req, res) => {
    let id = req.params.id;
    try {
      let sptData = await executeQuery(
        "select * from board where boardID=?",
        [id]
      );
      res.status(200).json(sptData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

app.post("/saveBoard", async (req, res) => {
    try{
        const {boardTitle, boardDate, boardContent, boardAvailable} = req.body;
        let boardData = await executeQuery(
            "insert into board(boardTitle, boardDate, boardContent, boardAvailable) values(?,?,?,?)",
            [boardTitle, boardDate, boardContent, boardAvailable]
        );
        res.status(201).json(boardData);
    } catch (err) {
        res.status(400).json(err);
    }
});

const Multer = require("multer");
const FormData = require("form-data");
const _ = require("lodash");
const path = require("path");
const fs = require("fs");
let multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: 100 * 1024 * 1024,
    },
})

app.listen(port, () => console.log(`server is running on port ${port}`));