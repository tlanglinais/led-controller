import * as icons from 'react-icons/fi';
import { darken } from '../../../helpers/colors';

const IconButton = ({ icon, bgColor, onClick, ...props }) => {
  const Icon = icons[icon];
  return (
    <Icon
      className={`border-curved-left hover:bg-${darken(bgColor)} 
      hover:bg-opacity-40
      rounded-2xl
      p-2
      cursor-pointer`}
      onClick={onClick}
      {...props}
    />
  );
};

export default IconButton;
