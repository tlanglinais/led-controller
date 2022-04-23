import { useState } from 'react';
import LEDCard from '../Cards/LEDCard';
import ledJson from '../../leds.json';
import Modal from '../Modal/Modal';
import { LED } from '@/types/LED';
import LEDModal from './LEDModal'
import styles from './LEDController.module.scss';
import Sidenav from '../Sidenav/Sidenav';

const LEDController = () => {
  const leds = ledJson;
  const [selectedLed, setSelectedLed]: [LED, Function] = useState(leds[0]);
  const [modal, setModal]: [boolean, Function] = useState(false);

  const onClick = (newLed: LED): void => {
    setSelectedLed(newLed);
    setModal(true);
  }

  const onClose = (): void => {
    setSelectedLed(null);
    setModal(false);
  }

  const updateLed = (position, { r, g, b }, brightness): void => {
    const found = leds.find(l => l.position === position);
    found.r = r;
    found.g = g;
    found.b = b;
    found.brightness = brightness;
    setSelectedLed({ ...found })
    setModal(false);
  }

  // const loadJson = () => {}


  return (
    <>
      <div className={styles.grid}>
        <div className={styles.sidenav}>
          <Sidenav leds={leds} />
        </div>

        <div className={`px-3 py-2 flex flex-wrap gap-3 ${styles.leds}`}>
          {leds.map(led => (
            <LEDCard
              key={led.position}
              led={led}
              onClick={onClick}
            />
          ))}
        </div>

        {modal && (
          <Modal isShown={modal}>
            <LEDModal
              led={selectedLed}
              onSubmit={updateLed}
              onCancel={onClose}
            />
          </Modal>
        )}

      </div>
    </>
  );
};

export default LEDController;
