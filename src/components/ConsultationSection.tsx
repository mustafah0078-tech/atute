/**
 * ConsultationSection.tsx
 * 
 * قسم "خلّينا نساعدك تختار" - يقدم استشارة سريعة عبر واتساب مع خطوات واضحة
 * للمساعدة في اختيار القماش والمقاس ونوع الستارة الأنسب للغرفة.
 */

import React from 'react';
import { Ruler, Palette, Sparkles, MessageCircle } from 'lucide-react';

interface ConsultationSectionProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  onOpenWhatsApp,
}) => {
  const steps = [
    {
      icon: Ruler,
      title: '١. أرسل مقاسات النافذة',
      desc: 'صورة للنافذة أو مقاس تقريبي (العرض والارتفاع) لنحدد كمية القماش ونوع المسار الأنسب.',
    },
    {
      icon: Palette,
      title: '٢. اختر درجات الألوان والأقمشة',
      desc: 'سنرسل لك صوراً حية لعينات الكتان والمخمل والشيفون المتناغمة مع أثاث وإضاءة غرفتك.',
    },
    {
      icon: Sparkles,
      title: '٣. تسعيرة دقيقة وخيارات التركيب',
      desc: 'تحصل على عرض سعر مفصل وشفاف يشمل التفصيل والمسارات الذكية أو اليدوية والتركيب المتقن.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#E8ECE7]/40 border-t border-[#CBD5CD]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#CBD5CD]/50 shadow-sm relative overflow-hidden">
          {/* لمسة خلفية هادئة */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#5D705F]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-semibold text-[#5D705F] tracking-widest uppercase">
              استشارة مجانية متخصصة
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#344638] font-heading tracking-tight">
              خلّينا نساعدك تختار
            </h2>
            <p className="text-base sm:text-lg text-[#344638]/80 leading-relaxed">
              محتار بين الويفي والرول أو تفكر في ستائر كلاسيكية؟ مستشار الستائر معك خطوة بخطوة لمساعدتك في اختيار القماش وتحديد المقاسات المناسبة.
            </p>
          </div>

          {/* الخطوات الثلاث */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAFBF8] border border-[#CBD5CD]/40 flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#5D705F]/10 text-[#5D705F] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#344638] font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#344638]/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* زر التواصل عبر واتساب */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <button
              type="button"
              onClick={() =>
                onOpenWhatsApp(
                  'مرحباً، أود استشارة حول اختيار ستائر وتحديد المقاسات والأقمشة المناسبة لبيتي.'
                )
              }
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5D705F] text-white text-base sm:text-lg font-medium shadow-md hover:bg-[#4E6050] hover:shadow-xl active:scale-98 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>تحدث مع مستشار الستائر عبر واتساب</span>
            </button>

            <span className="text-xs text-[#344638]/60">
              خدمة المعاينة المنزلية والاستشارة متوفرة لجميع المقاسات
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
