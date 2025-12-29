// Animated Text Component
export default function AnimatedText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block hero-animate-fade-in-up"
          style={{
            animationDelay: `${delay + index * 100}ms`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}
