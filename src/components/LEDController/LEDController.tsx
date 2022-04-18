import { useState } from 'react';
import Card from '../Cards/Card';
import ledJson from '../../leds.json';
import Modal from '../Modal/Modal';
import { LED } from '@/types/Cards/Card';

const LEDController = () => {
  const leds = ledJson;
  const [selectedLed, setSelectedLed] = useState(leds[0])
  const [modal, setModal] = useState(false)

  const onClick = (newLed: LED) => {
    console.log('clicked?',);
    setSelectedLed(newLed);
    setModal(true);
  }

  const onClose = () => {
    setSelectedLed(null);
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
          Current Values
          <div className='flex flex-col'>
            <span>Red: {selectedLed.r}</span>
            <span>Green: {selectedLed.g}</span>
            <span>Blue: {selectedLed.b}</span>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LEDController;
