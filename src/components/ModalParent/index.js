import React from 'react'
import styles from './ModalParent.module.css'

const ModalParent = ({children}) => {
  return (
    <div className={styles.modalParent}>{children}</div>
  )
}

export default ModalParent;