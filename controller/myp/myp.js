import { executeQuery } from "../../config/db";
import sptValidation from "../../common/sptValidator";
import ErrorHandler from "../../common/errorHandler";

const getAllBoards = async (req, res) => {
    try{
        console.log("all the boards");
        let boardData = await executeQuery("select * from board", []);
        res.send(boardData);
    } catch(err){
        res.status(500).json(err);
    }
};

const getBoardById = async (req, res, next) => {
    let id = req.query.id;
    try{
        console.log("boad by id");
        let boardData = await executeQuery(
            `select * from board where boardID = ${id}`,
            []
        );
        if(boardData.length > 0) res.status(200).json(boardData);
        else{
            next(new ErrorHandler(`no board found with this id ${id}`, 404));
        }
    }   catch(err) {
        res.status(500).json(err);
    }
};

const deleteBoardById = async (req, res, next) => {
    let id = req.query.id;
    try{
        let boardData = await executeQuery(
            "delete from board where boardID=?",
            [id]
        );
        res.status(200).json("Board Deleted Successfully");
    } catch(err){
        res.status(500).json(err);
    }
};

const saveBoard = async(req, res) => {
    try{
        const result = req.body;
        const { boardTitle, boardDate, boardContent, boardAvailable} = result;
        let { error } = boardAvailable(result);
        if(error) {
            res.status(400).json(error.details[0].message);
        } else {
            console.log("post request");
            let boardData = await executeQuery(
                "insert into board(boardTitle, boardDate, boardContent, boardAvailable) vaules(?,?,?,?)",
                [ boardTitle, boardDate, boardContent, boardAvailable ]
            );
            boardData = await executeQuery(
                `select * from board where boardID = ${boardData.insertId}`
            );
            res.status(201).json(boardData);
        }
    } catch(err){
        res.status(400).json(err);
    }
};

const updateBoard = async (req, res) => {
    let id = req.query.id;
    console.log("id", id);
    const { boardTitle, boardDate, boardContent, boardAvailable } = req.body;
    console.log("req.body", req.body);
    try{
        let boardData = await executeQuery(
            "select * from board where boardID=?",
            [id]
        );
        if(boardData.length > 0){
            console.log("putrequest", boarData);
            boardData = await executeQuery(
                `update board set boardTitle=?, boardDate=?, boardContent=?, boardAvailable=?, where boardID=${id}`,
                [boardTitle, boardDate, boardContent, boardAvailable]
            );
            res.status(200).json(boardData);
        } else {
            res.status(400).json(`board not found on this id = ${id}`);
        }
    } catch(err){
        res.status(400).json(err);
    }
};

export {
    getAllBoards,
    getBoardById,
    deleteBoardById,
    saveBoard,
    updateBoard,
};
