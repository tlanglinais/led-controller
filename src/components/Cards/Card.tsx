import { LED } from '@/types/Cards/Card';

interface Props {
  led: LED,
  onClick: Function
}

const Card = ({ led, onClick }: Props) => {
  const { position, r, g, b } = led;
  return (
    <div
      className="shadow-lg rounded-md relative pl-4"
      style={{ backgroundColor: `rgb(${r},${g},${b})`, width: '10rem', height: '10rem' }}
      onClick={() => { console.log('hello?'); onClick(led) }}
      role="button"
      tabIndex={position}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(position) }}
    >
      <div className="font-cardHeader text-4.5xl pt-5 pb-1 pl-3 font-black flex">
        <span>{position}</span>
      </div>
    </div>
  )
};

export default Card;
