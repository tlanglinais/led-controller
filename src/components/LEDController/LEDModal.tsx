/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { ChromePicker } from 'react-color';
import { LED } from '@/types/LED';

interface LEDModalProps {
  led: LED,
  onSubmit: (position, led, brightness) => void,
  onCancel: Function
}

const colorToHex = (color): string => {
  const hexadecimal = color.toString(16);
  return hexadecimal.length === 1 ? `0${hexadecimal}` : hexadecimal;
}

const hexToRGB = (hex): { r: number, g: number, b: number } => {
  const newR = parseInt(hex.slice(1, 3), 16);
  const newG = parseInt(hex.slice(3, 5), 16);
  const newB = parseInt(hex.slice(5, 7), 16);
  return { r: newR, g: newG, b: newB };
}

const LEDModal = ({ led, onSubmit, onCancel }: LEDModalProps) => {
  const { r, g, b, position, brightness } = led;
  const [rgb, setRgb] = useState({ r, g, b });
  const [hex, setHex] = useState(`#${colorToHex(r)}${colorToHex(g)}${colorToHex(b)}`)
  const [newBrightness, setNewBrightness] = useState(brightness);
  const [errors, setErrors] = useState([]);

  const handleRgbInput = (name: string, value: number): void => {
    if (value >= 0 && value <= 255) {
      const newRgb = { ...rgb, [name]: value };
      setRgb(newRgb);
      setHex(`#${colorToHex(newRgb.r)}${colorToHex(newRgb.g)}${colorToHex(newRgb.b)}`);
    }
    else {
      // setErrors()
    }
  }

  const handleHexInput = (newHex: string): void => {
    setRgb(hexToRGB(newHex));
    setHex(newHex);
  }

  return (
    <>
      <div className='flex justify-center align-middle mt-5'>
        <ChromePicker
          color={hex}
          onChange={updatedColor => handleHexInput(updatedColor.hex)}
          disableAlpha
        />
      </div>
      <form className="w-full max-w-lg p-6 pt-0">
        <div className="flex flex-wrap mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="r">
              Red
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              placeholder="Red"
              value={rgb.r}
              name='r'
              onChange={(e) => handleRgbInput(e.target.name, Number(e.target.value))}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="g">
              Green
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              placeholder="Green"
              value={rgb.g}
              name='g'
              onChange={(e) => handleRgbInput(e.target.name, Number(e.target.value))}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="b">
              Blue
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              placeholder="Blue"
              value={rgb.b}
              name='b'
              onChange={(e) => handleRgbInput(e.target.name, Number(e.target.value))}
            />
          </div>
        </div>
        <div className="relative pt-1">
          <label
            className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"
            htmlFor="brightness">
            {`Brightness - ${newBrightness}`}
          </label>
          <input
            type="range"
            className="
            form-range
            w-full
            h-6
            p-0
            focus:outline-none 
            focus:ring-0 
            focus:shadow-none
          "
            name="brightness"
            min="0"
            max="255"
            step="1"
            onChange={(e) => setNewBrightness(Number(e.target.value))}
          />
        </div>

        <div className="flex align-middle justify-center mt-6 gap-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            type="button"
            onClick={() => onCancel()}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="button"
            onClick={() => onSubmit(position, rgb, newBrightness)}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default LEDModal;