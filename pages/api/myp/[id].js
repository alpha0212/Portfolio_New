import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
    getBoardById,
    deleteBoardById,
    updateBoard,
} from "../../../controller/myp/myp";

const handler = nc({ onError });
handler.get(getBoardById);
handler.delete(deleteBoardById);
handler.put(updateBoard);
export default handler;