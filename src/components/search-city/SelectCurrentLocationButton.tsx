import { BiCurrentLocation } from 'react-icons/bi';
import Button from '../Button';

function SelectCurrentLocationButton() {
  return (
    <Button
      type="button"
      className="flex items-center
      min-h-[48px] mt-2 hover:bg-gray-200"
    >
      <span className="grow">Usar Localização Atual</span>
      <BiCurrentLocation size={30} className="fill-slate-800" />
    </Button>
  );
}

export default SelectCurrentLocationButton;
