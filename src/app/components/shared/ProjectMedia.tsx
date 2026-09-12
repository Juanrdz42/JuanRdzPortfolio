import { useState } from "react";
import { Expand, Film, ImageIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";

export interface ProjectMediaItem {
  type: "image" | "video";
  src?: string;
  alt: string;
  caption: string;
}

export function ProjectMedia({ media }: { media: ProjectMediaItem }) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const available = media.src && media.src !== failedSrc;
  const Icon = media.type === "video" ? Film : ImageIcon;

  return (
    <figure className="min-w-0">
      <div className="glass-card overflow-hidden rounded-2xl bg-[#031D31]/70">
        {available ? (
          media.type === "video" ? (
            <video key={media.src} src={media.src} controls playsInline preload="metadata" aria-label={media.alt}
              onError={() => setFailedSrc(media.src)} className="block max-h-[75dvh] w-full object-contain">
              Your browser does not support video playback.
            </video>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" aria-label={`Enlarge image: ${media.caption}`}
                  className="relative block w-full rounded-2xl focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[var(--xcode-orange)]">
                  <img src={media.src} alt={media.alt} loading="lazy" onError={() => setFailedSrc(media.src)}
                    className="h-auto w-full" />
                  <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-md border border-white/20 bg-[#07182C]/85 p-2 text-[#F4F7FB]"><Expand size={14} /></span>
                </button>
              </DialogTrigger>
              <DialogContent aria-describedby={undefined} className="max-h-[90dvh] overflow-y-auto border-[#6AA3D8]/30 bg-[#07182C] text-[#F4F7FB] sm:max-w-[min(1200px,calc(100%-2rem))]">
                <DialogTitle className="pr-7 font-mono text-sm leading-relaxed">{media.caption}</DialogTitle>
                <img src={media.src} alt={media.alt} className="max-h-[75dvh] w-full object-contain" />
              </DialogContent>
            </Dialog>
          )
        ) : (
          <div className="flex aspect-video flex-col items-center justify-center gap-3 px-5 text-center text-[#9EB1C4]">
            <Icon size={24} aria-hidden="true" className="text-[#62B0F4]" />
            <p className="font-mono text-xs">{media.caption}</p>
            <p className="text-xs">Media unavailable</p>
          </div>
        )}
      </div>
      <figcaption className="mt-2 px-1 font-mono text-[11px] leading-relaxed text-[#9EB1C4]">
        {media.caption}
      </figcaption>
    </figure>
  );
}
