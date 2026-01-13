interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  description?: string;
  headingLevel?: "h1" | "h2" | "h3";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  description,
  headingLevel: HeadingTag = "h2",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const eyebrowColor = theme === "dark" ? "text-white" : "text-primary";
  const headingColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const descriptionColor = theme === "dark" ? "text-gray-200" : "text-gray-700";

  return (
    <header className={className}>
      <p className={`text-base font-semibold leading-7 ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <HeadingTag className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${headingColor}`}>
        {heading}
      </HeadingTag>
      {description && (
        <p className={`lg:mt-6 mt-2 text-lg leading-8 ${descriptionColor}`}>
          {description}
        </p>
      )}
    </header>
  );
}
