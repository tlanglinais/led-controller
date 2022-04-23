import { useState } from 'react';
import { Led } from '@/types/Led';
import styles from './Controls.module.scss'
import Modal from '../Modal/Modal';
import LedModal from '../Modal/Modals/LedModal';

export interface ControlsProps {
  leds: Led[],
  setLeds: Function
}

const Sidenav = ({ leds, setLeds }: ControlsProps) => {
  const [modal, setModal]: [boolean, Function] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [modalType, setModalType]: [string, Function] = useState('');

  const bulkUpdate = (newLed: Led): void => {
    const colorChanged = !!(newLed.r !== 0 && newLed.g !== 0 && newLed.b !== 0);
    const brightnessChanged = newLed.brightness !== 0;

    const newLeds = leds.map(led => ({
      ...led,
      ...(colorChanged ? { r: newLed.r, g: newLed.g, b: newLed.b } : null),
      ...(brightnessChanged ? { brightness: newLed.brightness } : null),
    }));
    setLeds(newLeds);
    toggleModal();
  }

  const renderModal = () => {
    switch (modalType) {
      case 'brightness':
        return <LedModal onCancel={toggleModal} onSubmit={bulkUpdate}>
          <div className="p-4 mb-4 mx-3 text-xl text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center" role="alert">
            <div className="text-xl">Danger Danger!</div>
            <div>This will overwrite every led!!!</div>
          </div>
        </LedModal>

      default:
        return <></>
    }
  }

  const bulkAdd = (qty) => { }


  return (
    <>
      <Modal isShown={modal}>
        {renderModal()}
      </Modal>

      <div className={`flex flex-col ${styles.sidenav}`}>
        <button
          className={styles.option}
          onClick={() => { setModal(true); setModalType('brightness'); }}
          type="button"
        >
          bulk update
        </button>
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
    </>
  );
}

export default Sidenav;