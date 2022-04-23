import styles from './Sidenav.module.scss'

const Sidenav = ({ leds }) => (
  <div className={`flex flex-col ${styles.sidenav}`}>
    <div className={styles.option}>adjust brightness</div>
    <hr className={styles.border} />
    <div className={styles.option}>add new led</div>
    <div className={styles.option}>bulk add</div>
    <div className={styles.option}>clear all</div>
    <hr className={styles.border} />
    <div className={styles.option}>load</div>
    <a
      href={`data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(leds)
      )}`}
      download='leds.json'
    >
      <div className={styles.option}>
        export
      </div>
    </a>
  </div>
)

export default Sidenav;