"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { BookOpen, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function EducationClient() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen bg-background pt-32">
      {/* Header Section */}
      <section className="relative py-32 bg-foreground/5 dark:bg-[#001224] border-b border-primary/20">
        <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-foreground mb-6 drop-shadow-sm">
              {t("edu.header.title")}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-8 max-w-2xl mx-auto italic">
              {t("edu.header.subtitle")}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
          </m.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Weekend Classes */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="flex items-center gap-4 text-primary">
              <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                <BookOpen size={28} />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.2em]">{t("edu.weekend.label")}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground leading-tight">
              {t("edu.weekend.title")}
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-lg text-foreground/70 leading-relaxed font-light">
              {t("edu.weekend.desc")}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.weekend.item1")}
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.weekend.item2")}
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.weekend.item3")}
              </li>
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-primary/20 group"
          >
            <Image
              src="/assets/punjabi school in gurdwara Langenthal Switzerland picture.webp"
              alt="Inside view of Gurdwara Gurmat School during a Punjabi class session"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </m.div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        {/* Annual Gurmat Camps */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="flex items-center gap-4 text-primary">
              <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                <Calendar size={28} />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.2em]">{t("edu.annual.label")}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground leading-tight">
              {t("edu.annual.title")}
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-lg text-foreground/70 leading-relaxed font-light">
              {t("edu.annual.desc")}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.annual.item1")}
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.annual.item2")}
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {t("edu.annual.item3")}
              </li>
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-primary/20 group"
          >
            <Image
              src="/assets/punjabi school kids group picture outside in gurdwara switzerland.webp"
              alt="Group of students and kids outside Gurdwara Sahib Switzerland during a Gurmat Camp"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </m.div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground/5 dark:bg-[#001224] border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 rounded-[3rem] border-primary/30 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-6">
              {t("edu.cta.title")}
            </h3>
            <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
              {t("edu.cta.desc")}
            </p>
            <Link 
              href="/about#contact" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-secondary text-[#001224] font-bold rounded-2xl transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
            >
              {t("edu.cta.btn")}
              <ArrowRight size={20} />
            </Link>
          </m.div>
        </div>
      </section>
    </div>
  );
}
