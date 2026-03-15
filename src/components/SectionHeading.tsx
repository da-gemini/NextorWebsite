/**
 * Reusable section heading with optional subtitle.
 * Keeps all pages visually consistent.
 */
const SectionHeading = ({
  title,
  subtitle,
  center = false,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) => (
  <div className={center ? "text-center mb-8" : "mb-8"}>
    <h2 className="text-foreground mb-2">{title}</h2>
    {subtitle && (
      <p className={`font-body text-sm text-muted-foreground max-w-lg leading-relaxed ${center ? "mx-auto" : ""}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
