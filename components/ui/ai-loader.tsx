const GENERATING = "Generating".split("");

export function AiLoader() {
  return (
    <div className="loader-wrapper" role="status" aria-label="Generating response">
      {GENERATING.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="loader-letter"
          style={{ animationDelay: `${index * 0.05}s` }}
          aria-hidden="true"
        >
          {letter}
        </span>
      ))}
      <span className="loader" aria-hidden="true" />
    </div>
  );
}

export default AiLoader;
