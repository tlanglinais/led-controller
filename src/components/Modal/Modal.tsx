import styles from './Modal.module.scss';

const Modal = ({ isShown, children }) => {
  if (!isShown) return <></>

  return (
    <>
      <div className={styles.modalShadow}>
        <div className={styles.modal}>
          <div className={styles.modalBody}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;