import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
    getAllBoards,
    saveBoard,
} from "../../../controller/myp/myp";

const handler = nc({ onError });
handler.get(getAllBoards);
handler.post(saveBoard);
export default handler;