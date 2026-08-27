"use client";

import Link from "next/link";
import { 
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/blocks/cta-section-with-gallery";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ShieldCheck } from "lucide-react";

// Verified high-resolution royalty-free images of 30s+ mature professionals
const MATURE_PEOPLE_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    alt: "Professional woman in 30s in a bright setting",
  },
  {
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    alt: "Mature professional man 35+ with calm confidence",
  },
  {
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    alt: "Adult professional experiencing clarity and peace",
  },
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    alt: "Calm professional adult in 30s",
  },
];

export const MindhavenGalleryCta = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-[#FEFFF7]/40 to-[#FEFFF7] border-y border-[#34D399]/15 overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        
        {/* Animated Content Column */}
        <ContainerStagger className="space-y-6">
          <ContainerAnimated className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#0D2E24] bg-[#FEFFF7] border border-[#34D399]/30">
            <ShieldCheck className="w-4 h-4 text-[#34D399]" />
            Restore Mental Clarity & Balance
          </ContainerAnimated>
          
          <ContainerAnimated className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight text-[#0D2E24] font-heading leading-[1.15]">
            Transform Stress Into Sustainable Calm
          </ContainerAnimated>
          
          <ContainerAnimated className="text-base text-[#0D2E24]/90 leading-relaxed font-semibold md:text-lg">
            High performance shouldn&apos;t cost your health or peace of mind. Experience personalized psychotherapeutic support designed for adults navigating burnout, anxiety, and demanding life transitions.
          </ContainerAnimated>

          <ContainerAnimated className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-[#0D2E24] hover:bg-[#34D399] text-white font-extrabold px-8 shadow-lg shadow-[#0D2E24]/15 group cursor-pointer">
              <Link href="/fees-and-booking" className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#34D399]" />
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Link 
              href="/about-erika-martin" 
              className="inline-flex items-center justify-center text-sm font-extrabold text-[#0D2E24] hover:underline px-4 py-2"
            >
              Learn about Erika Martin ?
            </Link>
          </ContainerAnimated>
        </ContainerStagger>

        {/* Gallery Grid Column with 30s+ People Images */}
        <GalleryGrid className="my-4">
          {MATURE_PEOPLE_IMAGES.map((img, index) => (
            <GalleryGridCell index={index} key={index}>
              <img
                className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                width="100%"
                height="100%"
                src={img.url}
                alt={img.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2E24]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </GalleryGridCell>
          ))}
        </GalleryGrid>

      </div>
    </section>
  );
};
