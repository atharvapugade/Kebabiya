import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  centered = true,
  className = "",
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4 justify-start md:justify-center">
          <span className="h-[1px] w-6 bg-accent/60"></span>
          <span className="editorial-eyebrow text-accent tracking-[0.25em]">
            {eyebrow}
          </span>
          <span className="h-[1px] w-6 bg-accent/60"></span>
        </div>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-main font-normal tracking-tight leading-[1.15]">
        {title}{" "}
        {highlight && (
          <span className="block italic text-accent font-normal mt-1">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-5 text-text-muted text-base sm:text-lg leading-relaxed font-light font-sans max-w-2xl mx-auto">
          {description}
        </p>
      )}

      <div className={cn("mt-6 flex items-center gap-2", centered ? "justify-center" : "justify-start")}>
        <div className="h-[1px] w-12 bg-accent/40" />
        <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
        <div className="h-[1px] w-12 bg-accent/40" />
      </div>
    </div>
  );
}
