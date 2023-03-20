type ShrinkTextProps = {
  text: string;
  open: boolean;
};

function ShrinkText({ text, open }: ShrinkTextProps) {
  return (
    <span className="flex leading-6 lg:leading-7">
      {text.split('').map((letter, i) => {
        if (i === 0) return <span key={i}>{letter}</span>;

        return (
          <span
            key={i}
            className={`block transition-[max-width,color] ${
              open
                ? 'max-w-[20px] duration-700'
                : 'max-w-0 duration-[500ms,400ms] text-transparent'
            }`}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
}

export default ShrinkText;
