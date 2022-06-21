import EditBoard from "../../components/EditBoard";

function updateBoard({ board }){
    console.log("board", board);
    return <EditBoard boardUpdateData={board} />;
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/myp/${params.id}`);
    const myp = await res.json();

    return {
        props: { board },
    };
}

export default updateBoard;