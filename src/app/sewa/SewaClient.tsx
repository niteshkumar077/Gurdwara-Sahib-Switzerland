"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { BookOpen, HandHeart, Users, Heart, GraduationCap, Tent } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function SewaClient() {
  const { t } = useLanguage();

  const SERVICES = [
    {
      title: t("sewa.langar.title"),
      desc: t("sewa.langar.desc"),
      icon: <HandHeart size={32} />,
      image: "/assets/langar sewa inside gurdwara sahib in swiss picture.webp"
    },
    {
      title: t("sewa.akhand.title"),
      desc: t("sewa.akhand.desc"),
      icon: <BookOpen size={32} />,
      image: "/assets/granth sahib zoomed picture inside gurdwara.webp"
    },
    {
       title: t("sewa.samagam.title"),
       desc: t("sewa.samagam.desc"),
       icon: <Users size={32} />,
       image: "/assets/all people in gurdwara darbar sahib inside picture.webp"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* 1. Header */}
      <section className="relative py-40 overflow-hidden bg-foreground/5 dark:bg-[#001224]">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] dark:opacity-10">
          <Image
            src="/assets/granth sahib inside gurdwara zoomed picture.webp"
            alt="Sri Guru Granth Sahib Ji"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-black text-foreground mb-8">
              {t("sewa.header.title")}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-12 italic max-w-3xl mx-auto">
               {t("sewa.header.quote")}
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full shadow-lg shadow-primary/20"></div>
          </m.div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group flex flex-col rounded-[2.5rem] overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500 shadow-xl"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 p-4 bg-primary text-[#001224] rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-10 flex-grow">
                <h3 className="text-3xl font-playfair font-black text-foreground mb-6 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-lg text-foreground/70 font-light leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <Link 
                    href="/about#contact" 
                    className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
                  >
                    {t("common.learnMore")}
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </section>

      {/* 4. Volunteer CTA */}
      <section className="relative py-32 bg-foreground/5 overflow-hidden border-t border-primary/20">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-20 rounded-[4rem] border-primary/30 shadow-2xl"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-primary/30">
              <Heart className="text-primary animate-pulse" size={40} fill="currentColor" />
            </div>
            <h2 className="text-3xl md:text-5xl font-playfair font-black text-foreground mb-12 leading-tight">
              {t("sewa.cta.title")}
            </h2>
            <Link 
              href="/about#contact" 
              className="px-12 py-5 bg-primary hover:bg-secondary text-[#001224] font-black text-lg rounded-2xl transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 inline-block"
            >
              {t("common.volunteer")}
            </Link>
          </m.div>
        </div>
      </section>
    </div>
  );
}
