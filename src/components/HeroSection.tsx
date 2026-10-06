/**
 * HeroSection.tsx
 * 
 * القسم الرئيسي للواجهة بعد إزالة التحكم اللوني ونقله لبطاقات المنتجات:
 * - صورة ثابتة بالستائر الخضراء الهادئة على اليسار بنسبة 60-65% مع زاوية مقوسة ناعمة.
 * - إزالة عينات الألوان وتسمية "اختر اللون" والشريحة العائمة من الهيرو بالكامل.
 * - إعادة موازنة المساحات الرأسية والأفقية بانسجام وأناقة.
 * - الحفاظ على العنوان الأساسي والزر الرئيسي "استكشف الأقمشة".
 */

import React from 'react';
import { ArrowLeft, Sparkles, ShieldCheck, Ruler } from 'lucide-react';
import { HERO_CONFIG } from '../config/showroomConfig';
import { CurtainRoomCanvas } from './CurtainRoomCanvas';

interface HeroSectionProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhatsApp }) => {
  const scrollToFabrics = () => {
    const el = document.getElementById('fabrics');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCollections = () => {
    const el = document.getElementById('collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 md:py-20 overflow-hidden">
      {/* ظل تزييني خافت في الزاوية اليمنى كما في التصميم الأصلي */}
      <div 
        className="absolute top-0 right-0 w-80 h-96 opacity-20 pointer-events-none -z-10 translate-x-12 -translate-y-12"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 30%, #5D705F 0%, transparent 65%)`,
          filter: 'blur(45px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ========================================================
              الجانب الأيسر (على الشاشات الكبيرة): معاينة الغرفة الكبيرة الثابتة (60% - 65%)
              في RTL يكون ترتيب العناصر: المحتوى يميناً والصورة يساراً (lg:col-span-7)
              ======================================================== */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <CurtainRoomCanvas />
          </div>

          {/* ========================================================
              الجانب الأيمن (على الشاشات الكبيرة): النصوص والإجراءات الرئيسية
              (lg:col-span-5) مع موازنة متناسقة للمسافات
              ======================================================== */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center space-y-7 md:space-y-8 pr-0 lg:pr-2">
            
            {/* العناوين المحددة بالنص الدقيق */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-bold text-[#344638] tracking-tight leading-[1.18] font-heading">
                {HERO_CONFIG.headline}
              </h1>
              <p className="text-xl sm:text-2xl text-[#344638]/85 font-normal tracking-wide">
                {HERO_CONFIG.supportingText}
              </p>
            </div>

            {/* وصف توضيحي متوازن يملأ الفراغ بعد إزالة عناصر الألوان من الهيرو */}
            <p className="text-base sm:text-lg text-[#344638]/80 leading-relaxed max-w-lg">
              تصاميم معمارية راقية تجمع بين جمال النسيج الطبيعي وانسيابية الضوء. استكشف مجموعاتنا بالأسفل وتعرف على خيارات الويفي والرول والكلاسيك.
            </p>

            {/* مزايا سريعة تعزز الثقة والمظهر الراقي للمعرض */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#344638]/85 bg-white/70 p-3 rounded-2xl border border-[#CBD5CD]/40 shadow-2xs">
                <Ruler className="w-4 h-4 text-[#5D705F] shrink-0" />
                <span>تفصيل دقيق حسب المقاس</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#344638]/85 bg-white/70 p-3 rounded-2xl border border-[#CBD5CD]/40 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#5D705F] shrink-0" />
                <span>مسارات ألمنيوم صامتة</span>
              </div>
            </div>

            {/* الأزرار الرئيسية */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={scrollToFabrics}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#5D705F] text-white text-base font-medium shadow-md hover:bg-[#4E6050] hover:shadow-lg active:scale-98 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5D705F]/50 group"
              >
                <span>{HERO_CONFIG.primaryCtaText}</span>
                <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
              </button>

              <button
                type="button"
                onClick={scrollToCollections}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#CBD5CD] text-[#344638] text-sm font-medium hover:bg-[#F3F6F2] hover:border-[#5D705F]/60 active:scale-98 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-[#5D705F]" />
                <span>استكشف المجموعات ↓</span>
              </button>
            </div>

            {/* رابط تواصل سريع */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => onOpenWhatsApp('مرحباً، أود الاستفسار عن تفصيل وتركيب الستائر لديكم.')}
                className="text-xs sm:text-sm text-[#5D705F] hover:underline font-medium inline-flex items-center gap-1.5"
              >
                <span>أو تواصل مباشرة مع مستشار المعرض عبر واتساب ←</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
