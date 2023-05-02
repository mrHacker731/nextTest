import React from 'react'
import styles from'./style/common.module.css'
function loading() {
  return (
    <section className={styles.loading_section}>
        <div className={styles.loading}></div>
    </section>
  )
}

export default loading