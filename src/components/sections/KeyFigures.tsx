import { KEY_FIGURES, KeyFigure } from '@/config';

interface KeyFiguresProps {
  title?: string;
  subtitle?: string;
  variant?: 'light' | 'navy' | 'warm';
  className?: string;
}

export default function KeyFigures({
  title = "Key Figures",
  subtitle = "Proven regulatory track record supporting financial institutions and innovative firms.",
  variant = "light",
  className = "",
}: KeyFiguresProps) {
  const isNavy = variant === "navy";
  const isWarm = variant === "warm";

  const containerBg = isNavy
    ? "bg-[#14283F] text-white border-y border-white/10"
    : isWarm
    ? "bg-[#FAF9F6] text-[#263544] border-y border-[#E2E7E8]"
    : "bg-white text-[#263544] border-y border-[#E2E7E8]";

  const cardBorder = isNavy ? "border-white/10" : "border-[#E2E7E8]";

  return (
    <div className={`${containerBg} py-16 md:py-24 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-vibrant-amber"></span>
              <span className={`text-[11px] font-semibold tracking-widest uppercase ${isNavy ? 'text-vibrant-amber' : 'text-[#24766C]'}`}>
                {title}
              </span>
            </div>
            <h2 className={`text-2xl md:text-3xl font-serif font-medium ${isNavy ? 'text-white' : 'text-[#14283F]'}`}>
              Demonstrated scale and regulatory pedigree.
            </h2>
          </div>
          {subtitle && (
            <p className={`text-sm max-w-md ${isNavy ? 'text-white/70' : 'text-[#263544]/70'} leading-relaxed`}>
              {subtitle}
            </p>
          )}
        </div>

        {/* 4-column Key Figures Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t ${cardBorder}`}>
          {KEY_FIGURES.map((item: KeyFigure, idx: number) => (
            <div
              key={item.id}
              className={`pt-8 pb-10 sm:py-8 lg:py-10 px-0 sm:px-6 lg:px-8 border-b sm:border-b-0 ${cardBorder} ${
                idx % 2 === 1 ? 'sm:border-l' : ''
              } ${idx > 0 ? 'lg:border-l' : ''} flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <div
                    className={`text-3xl sm:text-4xl lg:text-4xl font-serif font-medium tracking-tight ${
                      isNavy ? 'text-white' : 'text-[#14283F]'
                    } group-hover:text-vibrant-amber transition-colors duration-200`}
                  >
                    {item.stat}
                  </div>
                  <span className="text-[10px] font-mono text-vibrant-amber/80 uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                </div>
                <div
                  className={`text-sm md:text-base font-semibold leading-snug mb-2 ${
                    isNavy ? 'text-white/90' : 'text-[#14283F]'
                  }`}
                >
                  {item.label}
                </div>
              </div>
              {item.subtext && (
                <div
                  className={`text-xs leading-relaxed mt-4 pt-3 border-t ${
                    isNavy ? 'border-white/5 text-white/50' : 'border-[#E2E7E8]/60 text-[#263544]/60'
                  }`}
                >
                  {item.subtext}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
