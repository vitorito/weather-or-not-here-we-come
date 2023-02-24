import { BiCurrentLocation } from 'react-icons/bi';

function SelectCurrentLocationButton() {
  return (
    <button
      type="button"
      className="btn flex items-center
      min-h-[48px] mt-2 hover:bg-gray-200"
    >
      <span className="grow">Usar Localização Atual</span>
      <BiCurrentLocation size={30} className="fill-slate-800" />
    </button>
  );
}

export default SelectCurrentLocationButton;
