import { BiCurrentLocation } from 'react-icons/bi';
import Button from '../Button';

type SelectCurrentLocationButtonProps = {
  className?: string;
};

function SelectCurrentLocationButton({
  className,
}: SelectCurrentLocationButtonProps) {
  return (
    <Button
      type="button"
      className={`flex items-center min-h-[55px] p-0
      bg-white hover:bg-gray-200 ${className}`}
    >
      <p className="grow">Usar Localização Atual</p>
      <BiCurrentLocation size={30} className="fill-slate-700" />
    </Button>
  );
}

SelectCurrentLocationButton.defaultProps = {
  className: '',
};

export default SelectCurrentLocationButton;
