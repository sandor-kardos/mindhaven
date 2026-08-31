"use client";

import { ArrowLeft, ArrowRight, Sparkles, BookOpen, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  category: string;
  categoryBg: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const mindhavenArticles: Gallery4Item[] = [
  {
    id: "burnout-recovery",
    category: "Burnout Recovery",
    categoryBg: "bg-[#155D49]",
    title: "Understanding High-Functioning Burnout in Professionals",
    description: "Why high achievers ignore early warning signs of nervous system exhaustion.",
    href: "/blog/burnout-therapist-edinburgh",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&crop=faces",
  },
  {
    id: "nervous-system-calm",
    category: "Nervous System",
    categoryBg: "bg-[#0284C7]",
    title: "Regulating the Nervous System Under Pressure",
    description: "Practical techniques to shift out of chronic fight-or-flight survival states.",
    href: "/blog/nervous-system-regulation",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop&crop=faces",
  },
  {
    id: "imposter-syndrome",
    category: "Mindset & Anxiety",
    categoryBg: "bg-[#6B4B08]",
    title: "Overcoming Internal Imposter Dynamics",
    description: "How internalised perfectionism creates silent anxiety in leadership roles.",
    href: "/blog/imposter-syndrome-in-professionals",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&crop=faces",
  },
  {
    id: "work-life-boundaries",
    category: "Work-Life Balance",
    categoryBg: "bg-[#7A4C08]",
    title: "Setting Sustainable Boundaries Without Guilt",
    description: "Protecting your emotional bandwidth while continuing to excel at work.",
    href: "/blog/sustainable-boundaries",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop&crop=faces",
  },
  {
    id: "somatic-therapy",
    category: "Therapeutic Methods",
    categoryBg: "bg-[#4F46E5]",
    title: "Somatic & Integrative Approaches to Stress",
    description: "Combining body-centred mindfulness and CBT to release stored tension.",
    href: "/blog/somatic-therapy-explained",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&crop=faces",
  },
];

const Gallery4 = ({
  title = "Insights on Resilience & Clarity",
  description = "Evidence-based perspectives on burnout, stress, and building personal resilience, by Erika Martin.",
  items = mindhavenArticles,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAF8] text-[#0D2E24] border-y border-[#155D49]/15 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#155D49] bg-[#E6F2ED] border border-[#155D49]/30 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-[#155D49]" />
            <span>Wellbeing Insights</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2E24] font-heading">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#0D2E24]/85 font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Mobile-Optimized Bright Cards */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 px-4 md:px-8">
            {items.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="basis-[285px] sm:basis-[290px] lg:basis-[310px] pl-3.5 sm:pl-4 shrink-0"
              >
                <Link
                  href={item.href}
                  className="group relative flex flex-col justify-between aspect-[3/4] h-[28rem] w-full overflow-hidden rounded-3xl border-2 border-white bg-slate-100 shadow-lg hover:shadow-2xl hover:shadow-[#155D49]/15 transition-all duration-500 transform group-hover:-translate-y-1.5"
                >
                  {/* Bright Portrait Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 285px, (max-width: 1024px) 290px, 310px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-108 brightness-[1.03]"
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                  />

                  {/* Top Category Badge */}
                  <div className="relative z-10 p-3 sm:p-4 flex items-start">
                    <span className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-white shadow-xs ${item.categoryBg}`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Glassmorphism Frosted Bottom Banner */}
                  <div className="relative z-10 m-3 p-4 rounded-2xl bg-[#0D2E24]/85 backdrop-blur-md border border-white/30 text-white shadow-lg group-hover:bg-[#0D2E24]/95 transition-colors duration-300">
                    <h3 className="text-sm sm:text-base font-extrabold font-heading leading-snug line-clamp-2 text-white group-hover:text-[#34D399] transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-slate-200 font-medium line-clamp-2 mt-1 leading-relaxed opacity-95">
                      {item.description}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#34D399] group-hover:text-white transition-colors">
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#34D399]" />
                      </span>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Indicator Dots */}
        <div className="mt-5 sm:mt-6 flex justify-center">
          {items.map((_, index) => (
            <button
              key={index}
              className="min-h-[48px] min-w-[24px] flex items-center justify-center px-1"
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className={`block h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-5 sm:w-6 bg-[#155D49]" : "w-1.5 sm:w-2 bg-[#155D49]/20"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
