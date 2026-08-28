"use client";

import { ArrowRight, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HalftonePattern } from "@/components/ui/HalftonePattern";
import { Badge } from "@/components/ui/Badge";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  href: string;
  image: string;
  blobShape?: string;
  objectPosition?: string;
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
    categoryColor: "#457A5D", // 40% Brighter Pine
    title: "Understanding High-Functioning Burnout in Professionals",
    description: "Why high achievers ignore early warning signs of nervous system exhaustion.",
    href: "/blog/burnout-therapist-edinburgh",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&crop=faces",
    blobShape: "73% 27% 41% 59% / 34% 68% 32% 66%",
    objectPosition: "center 20%",
  },
  {
    id: "nervous-system-calm",
    category: "Nervous System",
    categoryColor: "#C06A33", // 40% Brighter Terracotta
    title: "Regulating the Nervous System Under Pressure",
    description: "Practical techniques to shift out of chronic fight-or-flight survival states.",
    href: "/blog/nervous-system-regulation",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop&crop=faces",
    blobShape: "31% 69% 62% 38% / 65% 31% 69% 35%",
    objectPosition: "center 30%",
  },
  {
    id: "imposter-syndrome",
    category: "Mindset & Anxiety",
    categoryColor: "#E06A17", // 40% Brighter Burnt Orange
    title: "Overcoming Internal Imposter Dynamics",
    description: "How internalised perfectionism creates silent anxiety in leadership roles.",
    href: "/blog/imposter-syndrome-in-professionals",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop&crop=faces",
    blobShape: "68% 32% 25% 75% / 42% 64% 36% 58%",
    objectPosition: "center 20%",
  },
  {
    id: "work-life-boundaries",
    category: "Work-Life Balance",
    categoryColor: "#34658C", // 40% Brighter Slate Navy
    title: "Setting Sustainable Boundaries Without Guilt",
    description: "Protecting your emotional bandwidth while continuing to excel at work.",
    href: "/blog/sustainable-boundaries",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop&crop=faces",
    blobShape: "38% 62% 76% 24% / 28% 62% 38% 72%",
    objectPosition: "center 15%",
  },
  {
    id: "somatic-therapy",
    category: "Therapeutic Methods",
    categoryColor: "#7A6F64", // 40% Brighter Warm Taupe
    title: "Somatic & Integrative Approaches to Stress",
    description: "Combining body-centred mindfulness and CBT to release stored tension.",
    href: "/blog/somatic-therapy-explained",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop&crop=faces",
    blobShape: "62% 38% 54% 46% / 41% 65% 35% 59%",
  },
  {
    id: "burnout-vs-stress",
    category: "Stress & Burnout",
    categoryColor: "#5E503F",
    title: "Understanding Burnout vs. Stress",
    description: "They are often used interchangeably, but they require entirely different recovery strategies.",
    href: "/blog/understanding-burnout-vs-stress",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop&crop=faces",
    blobShape: "48% 52% 24% 76% / 48% 64% 36% 52%",
    objectPosition: "center 20%",
  },
];

const Gallery4 = ({
  title = "Insights on Resilience & Clarity",
  description = "Evidence-based perspectives on burnout, stress, and nervous system resilience by Erika Martin.",
  items = mindhavenArticles,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-12 sm:py-16 bg-transparent text-[#0D2E24] overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Emerald Green Micro-Noise Grain Patches - Anchored close to content elements */}
        <HalftonePattern 
          color="#34D399" 
          className="-top-8 right-4 w-[380px] h-[380px]" 
          opacity={0.20} 
        />
        <HalftonePattern 
          color="#059669" 
          className="-bottom-8 left-4 w-[340px] h-[340px]" 
          opacity={0.20} 
        />

        {/* Centered Gallery Header */}
        <div className="mb-10 max-w-3xl mx-auto text-center flex flex-col items-center space-y-3 relative z-10">
          <Badge className="gap-1.5 px-3.5 py-1 bg-white/50 w-fit">
            <Leaf className="w-3.5 h-3.5 text-[#34D399]" />
            <span>Wellbeing Insights</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2E24] font-heading">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#0D2E24]/85 font-medium leading-relaxed">
            {description}
          </p>
        </div>

        {/* Mobile- & Ultrawide-Optimized Centered Carousel */}
        <div className="w-full relative z-10 -mx-4 w-[calc(100%+2rem)] sm:mx-0 sm:w-full">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <CarouselContent className="pr-4 sm:-ml-4 sm:pr-0">
            {items.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="basis-[78%] sm:basis-[260px] lg:basis-[20%] pl-4"
              >
                <Link
                  href={item.href}
                  className="group relative block w-full pt-2 h-[25.5rem] sm:h-[25rem]"
                >
                  {/* Floating Top Category Badge - In Front of Blob */}
                  <div className="absolute top-0 left-0 z-20">
                    <Badge 
                      className="px-2 py-0.5 text-[9px] sm:text-[10px] border-white/20 text-white shadow-sm"
                      style={{ backgroundColor: item.categoryColor }}
                    >
                      {item.category}
                    </Badge>
                  </div>

                  {/* Static Blob Image Container */}
                  <div 
                    className="relative w-full overflow-hidden border-[3px] border-white bg-slate-100 transition-all duration-500 z-0 mt-3 h-[19.5rem] sm:h-[19rem]"
                    style={{ 
                      borderRadius: item.blobShape || "60% 40% 30% 70% / 60% 30% 70% 40%", 
                      transform: "translateZ(0)" 
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 260px, (max-width: 1024px) 260px, 240px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-105"
                      style={{ objectPosition: item.objectPosition || "center" }}
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                    />
                  </div>

                  {/* Floating Description Card - In Front of Blob */}
                  <div 
                    className="absolute bottom-2 left-1.5 right-1.5 z-20 p-3 sm:p-4 rounded-xl backdrop-blur-xl border border-white/30 text-white shadow-md transition-all duration-300"
                    style={{ 
                      backgroundColor: 'rgba(13, 46, 36, 0.90)',
                      animation: `breatheGentle ${12 + (index % 4) * 2.5}s ease-in-out infinite` 
                    }}
                  >
                    <h3 className="text-xs sm:text-sm font-extrabold font-heading leading-snug line-clamp-2 text-white group-hover:text-[#34D399] transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-[11px] sm:text-xs text-slate-200 font-medium line-clamp-2 mt-1 leading-relaxed opacity-95">
                      {item.description}
                    </p>

                    <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#34D399] group-hover:text-white transition-colors">
                        <span>Read Article</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-[#34D399] group-hover:text-white" />
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
                currentSlide === index ? "w-5 sm:w-6 bg-[#34D399]" : "w-1.5 sm:w-2 bg-[#34D399]/20"
              }`} />
            </button>
          ))}
        </div>
        
        {/* View All Blog Link */}
        <div className="mt-10 flex justify-center">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0D2E24] hover:text-[#34D399] transition-colors group/link"
          >
            <span>Explore all articles</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
}

export { Gallery4 };
