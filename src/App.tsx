import { useState } from 'react';
import LedCard from './components/Cards/LedCard';
import ledJson from './leds.json';
import Modal from './components/Modal/Modal';
import { Led } from '@/types/Led';
import LedModal from './components/Modal/Modals/LedModal'
import styles from './App.module.scss';
import Controls from './components/Controls/Controls';

function App() {
  const [leds, setLeds]: [Led[], Function] = useState(ledJson);
  const [selectedLed, setSelectedLed]: [Led, Function] = useState(leds[0]);
  const [modal, setModal]: [boolean, Function] = useState(false);

  const onClick = (newLed: Led): void => {
    setSelectedLed(newLed);
    setModal(true);
  }

  const onClose = (): void => {
    setSelectedLed(null);
    setModal(false);
  }

  const updateLed = ({ position, r, g, b, brightness }: Led): void => {
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
    <main className="min-h-screen w-full font-main">
      <div className={styles.grid}>
        <div className={styles.sidenav}>
          <Controls leds={leds} setLeds={setLeds} />
        </div>

        <div className={`px-3 py-2 flex flex-wrap gap-3 ${styles.leds}`}>
          {leds.map(led => (
            <LedCard
              key={led.position}
              led={led}
              onClick={onClick}
            />
          ))}
        </div>

        <Modal isShown={modal}>
          <LedModal
            led={selectedLed}
            onSubmit={updateLed}
            onCancel={onClose}
          />
        </Modal>

      </div>
    </main>
  );
}

export default App;
