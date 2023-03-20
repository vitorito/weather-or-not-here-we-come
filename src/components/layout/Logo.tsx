import { useState } from 'react';
import ShrinkText from './ShrinkText';

function Logo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setIsOpen((prev) => !prev)}
      className={`relative flex items-center justify-center lg:w-12 mx-2 outline-none
      focus-visible:after:block after:hidden after:absolute
      after:border-2 after:border-gray-400 ${
        isOpen
        ? 'after:-inset-x-2 sm:after:-inset-x-1 lg:after:-inset-x-[150%] after:-inset-y-2'
          : 'after:-inset-x-2 sm:after:-inset-x-3 lg:after:-inset-x-4 after:-inset-y-2'
      }`}
    >
      <div
        className="text-lg md:text-xl text-gray-400 uppercase
        px-0.5 py-0.5 border-y border-gray-400"
      >
        <span className="flex justify-center gap-1">
          <ShrinkText text="Weather" open={isOpen} />
          <ShrinkText text="or" open={isOpen} />
          <ShrinkText text="not" open={isOpen} />
        </span>
        <span className="flex justify-center gap-1.5">
          <ShrinkText text="Here" open={isOpen} />
          <ShrinkText text="We" open={isOpen} />
          <ShrinkText text="Come" open={isOpen} />
        </span>
      </div>
    </button>
  );
}

export default Logo;
