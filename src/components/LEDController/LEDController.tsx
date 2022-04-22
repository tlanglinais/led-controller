import { useState } from 'react';
import Card from '../Cards/Card';
import ledJson from '../../leds.json';
import Modal from '../Modal/Modal';
import { LED } from '@/types/Cards/Card';
import LEDModal from './LEDModal'

const LEDController = () => {
  const leds = ledJson;
  const [selectedLed, setSelectedLed] = useState(leds[0]);
  const [modal, setModal] = useState(false);

  const onClick = (newLed: LED): void => {
    setSelectedLed(newLed);
    setModal(true);
  }

  const onClose = (): void => {
    setSelectedLed(null);
    setModal(false);
  }

  const updateLed = (position, { r, g, b }): void => {
    const found = leds.find(l => l.position === position);
    found.r = r;
    found.g = g;
    found.b = b;
    setModal(false);
  }

  return (
    <>
      <div className="px-3 py-2 flex flex-wrap gap-3">
        {leds.map(led => (
          <Card
            key={led.position}
            led={led}
            onClick={onClick}
          />
        ))}
      </div>

      {modal && (
        <Modal
          isShown={modal}
          onClose={onClose}
          header=""
        >
          <LEDModal
            led={selectedLed}
            onSubmit={updateLed}
          />
        </Modal>
      )}
    </>
  );
};

export default LEDController;
