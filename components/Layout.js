import * as React from 'react'
import Head from 'next/head'
import Header from './Header.js'
import styles from '../styles/layout.module.css'

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>oddsjar</title>
      </Head>
      <div className={styles.headerContainer}>
        <Header />

      </div>
      {props.children}
    </>
  )
}
export default Layout
