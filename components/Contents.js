import React from 'react';
import Image from "next/image";
import styles from '../styles/index.module.css';
import styled from 'styled-components';
import { useRouter } from "next/router";
import Link from "next/link";
import axios from 'axios';


export default function Contents() {
    const router = useRouter();
    const deleteBoard = async(id) =>{
        let data = await axios.delete(`http://localhost:3000/api/board/${id}`);
        router.push("/boards");
    };
    return (
        <div className={styles.content_container}>
            <div>
                <div className={styles.content}>
                    <a href="https://github.com/alpha0212" width={400} alt="github">
                        <Image src="/GIt.png" width={500} height={300} />
                    </a>
                    <span className={styles.content_text}>My GitHub</span>
                </div>
                <div className={styles.content}>
                    <a href="https://stp-app.vercel.app/" width={400} alt="STP" >
                        <Image src="/STP.png" width={500} height={300} />
                    </a>
                    <span className={styles.content_text}>SPT_Project</span>
                </div>
                <div>
                    {boardData.map((boardData, index) => (
                        <div key={index}>
                            <div className={styles.content}>
                                <button><Link href={`/board/${boardData.boardID}`}></Link></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}