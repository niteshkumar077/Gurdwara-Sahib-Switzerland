"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function ScheduleClient() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen pt-32">
      <section className="relative py-40 overflow-hidden bg-foreground/5 dark:bg-[#001224]">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          <Image
            src="/assets/gurdwara inside darbar sahib zoomed picture in Langenthal Switzerland.webp"
            alt="Darbar Sahib inside Gurdwara Sahib Switzerland"
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-black text-foreground mb-8 tracking-tight">
              {t("schedule.header.title")}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-12 italic max-w-3xl mx-auto drop-shadow-sm">
              {t("schedule.header.quote")}
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full shadow-lg shadow-primary/20"></div>
          </m.div>
        </div>
      </section>

      {/* 2. Visual Schedule Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {[
              { src: "/assets/Daily Diwan Schedule  Gurdwara Sahib in english (1).webp", label: t("schedule.showcase.en") },
              { src: "/assets/Daily Diwan Schedule  Gurdwara Sahib in panjabi (1).webp", label: t("schedule.showcase.pa") }
            ].map((schedule, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative"
              >
                <div className="relative aspect-[1/1.4] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-primary/20 bg-foreground/5 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-primary/20 group-hover:-translate-y-2">
                  <Image
                    src={schedule.src}
                    alt={schedule.label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4 md:p-8 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="mt-6 text-center">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-foreground/40">{schedule.label}</span>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden border-t border-primary/20 bg-foreground/5">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-20 rounded-[4rem] border-primary/30 shadow-[0_30px_100px_rgba(0,0,0,0.1)] relative"
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-black text-foreground mb-10 leading-tight">
              {t("schedule.cta.title")}
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/about#contact" 
                className="px-12 py-5 bg-primary hover:bg-secondary text-[#001224] font-black text-lg rounded-2xl transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 block sm:inline-block"
              >
                {t("schedule.cta.btn")}
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
}
