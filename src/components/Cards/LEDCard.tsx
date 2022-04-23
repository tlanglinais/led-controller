import { LED } from '@/types/LED';

interface Props {
  led: LED,
  onClick: Function
}

const LEDCard = ({ led, onClick }: Props) => {
  const { position, r, g, b } = led;
  const cardSize = '8rem';
  return (
    <div
      className="shadow-lg rounded-md relative pl-4"
      style={{ backgroundColor: `rgb(${r},${g},${b})`, width: cardSize, height: cardSize }}
      onClick={() => onClick(led)}
      role="button"
      tabIndex={position}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(led) }}
    >
      <div
        className="font-cardHeader pt-5 pb-1 pl-3 font-black flex"
        style={{ fontSize: '2.4rem' }}
      >
        <span>{position}</span>
      </div>
    </div>
  )
};

export default LEDCard;
