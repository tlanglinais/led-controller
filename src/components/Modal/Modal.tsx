import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './Modal.module.scss';

const Modal = ({ isShown, onClose, header = '', children }) => {
  if (!isShown) return <></>

  return (
    <>
      <div className={styles.modalShadow}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span style={{ flexGrow: 2 }}>
              {header}
            </span>
            <span
              className={`${styles.modalButton}`}
            >
              <FaTimes
                onClick={() => onClose()}
                className="cursor-pointer mx-auto"
              />
            </span>
          </div>

          <div className={styles.modalBody}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;