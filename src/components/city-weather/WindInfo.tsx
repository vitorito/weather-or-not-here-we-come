import getWindDirectionName from '@/util/getWindDirectionName';
import { GiArrowhead } from 'react-icons/gi';
import { TbWind } from 'react-icons/tb';

type WindInfoProps = {
  speed: number;
  direction: number;
};

function WindInfo({ speed, direction }: WindInfoProps) {
  return (
    <div
      className="flex flex-col items-center text-white
      absolute right-3 top-6 md:top-8 md:right-6"
    >
      <div
        title={`Direção do vento: ${getWindDirectionName(direction)}`}
        className="flex items-center justify-center relative
        w-12 aspect-square rounded-full border-current border-2 text-sm"
      >
        <span className="absolute -top-[42%] left-1/2 -translate-x-1/2">N</span>
        <span className="absolute top-1/2 -right-[22%] -translate-y-1/2">
          L
        </span>
        <span className="absolute -bottom-[44%] left-1/2 -translate-x-1/2">
          S
        </span>
        <span className="absolute top-1/2 -left-[32%] -translate-y-1/2">O</span>
        <GiArrowhead
          size="1.25rem"
          style={{ rotate: `${-direction - 45}deg` }}
        />
        <span className="hidden">{speed}</span>
      </div>
      <div title="Velocidade do vento" className="flex items-center gap-1 mt-4">
        <TbWind size="1.375rem" />
        <span className="text-sm">
          {Math.round(speed)}
          <span className="text-xs ml-[0.125rem]">km/h</span>
        </span>
      </div>
    </div>
  );
}

export default WindInfo;
