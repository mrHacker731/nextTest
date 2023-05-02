import Link from "next/link"
import styles from "../style/navbar.module.css"
import React from 'react'
import Image from "next/image"
import Nav from "./Nav"

function Header() {
  return (
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link href='/'>
            <Image src='/netflix.png' alt="logo" width='80' height='80'/>
          </Link>
        </div>
        <Nav/>
    </header>
  )
}

export default Header