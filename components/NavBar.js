import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/NavBar.module.css';
import styled from 'styled-components';
import Head from 'next/head';


export default function NavBar() {
  const router = useRouter();


  return (
    <>
      <div className={styles.Navbar_Container}>
        <span className={styles.Navbar_item}>
          <Link href="/"><a className={`${router.pathname === "/" ? "active" : ""} ${styles.Navbar_a}`}>JUN</a></Link>
          <Link href="/about"><a className={styles.Navbar_a}>About</a></Link>
          <Link href="/board"><a className={styles.Navbar_a}>Board</a></Link>
        </span>
      </div>
    </>
  );
}
