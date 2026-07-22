import { useCallback, useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function ProjectCarousel({
  images,
  projectName,
  labels,
  transparent = false,
}: {
  images: string[];
  projectName: string;
  labels?: string[];
  transparent?: boolean;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  const updateActiveSlide = useCallback((carouselApi: CarouselApi) => {
    if (carouselApi) setActiveSlide(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    updateActiveSlide(api);
    api.on("select", updateActiveSlide);
    api.on("reInit", updateActiveSlide);
    return () => {
      api.off("select", updateActiveSlide);
      api.off("reInit", updateActiveSlide);
    };
  }, [api, updateActiveSlide]);

  useEffect(() => {
    if (!api || !isPlaying || isInteracting) return;
    const interval = window.setInterval(() => api.scrollNext(), 4500);
    return () => window.clearInterval(interval);
  }, [api, isInteracting, isPlaying]);

  return (
    <div
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
      }}
    >
      <Carousel setApi={setApi} opts={{ loop: true }} className="group/carousel">
        <CarouselContent className="ml-0">
          {images.map((src, index) => (
            <CarouselItem key={src} className="pl-0">
              <div className={transparent ? "flex justify-center" : "glass-card overflow-hidden rounded-xl bg-[#031D31]/70"}>
                <img
                  src={src}
                  alt={labels?.[index] ?? `${projectName}, imagen ${index + 1} de ${images.length}`}
                  className={transparent ? "h-[620px] max-h-[72vh] w-auto max-w-full object-contain" : "aspect-video w-full object-contain"}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          aria-label="Imagen anterior"
          className="left-3 border-[#6AA3D8]/30 bg-[#07182C]/80 text-[#F4F7FB] hover:bg-[#0B2944] disabled:hidden sm:left-4"
        />
        <CarouselNext
          aria-label="Imagen siguiente"
          className="right-3 border-[#6AA3D8]/30 bg-[#07182C]/80 text-[#F4F7FB] hover:bg-[#0B2944] disabled:hidden sm:right-4"
        />
      </Carousel>

      <div className="mt-3 flex items-center justify-center gap-2" aria-label="Controles del carrusel">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => api?.scrollTo(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all ${
              activeSlide === index ? "w-6 bg-[#62B0F4]" : "w-1.5 bg-[#6AA3D8]/35 hover:bg-[#6AA3D8]/65"
            }`}
          />
        ))}
        <button
          type="button"
          onClick={() => setIsPlaying((playing) => !playing)}
          className="ml-1 rounded-md p-1 text-[#9EB1C4] transition-colors hover:bg-[#6AA3D8]/10 hover:text-[#F4F7FB]"
          aria-label={isPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
        >
          {isPlaying ? <Pause size={13} /> : <Play size={13} />}
        </button>
      </div>
    </div>
  );
}
