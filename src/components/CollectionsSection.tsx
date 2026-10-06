/**
 * CollectionsSection.tsx
 * 
 * قسم "اكتشف مجموعاتنا":
 * - بطاقات المجموعات الثلاث (ويفي، رول، كلاسيك) بصور فوتوغرافية مخصصة وعالية الدقة.
 * - خالية تماماً من دوائر أو أدوات تبديل الألوان ومؤشرات الألوان، مع ضبط التباعد بدقة.
 * - تتضمن كل بطاقة: الصورة الرئيسية، العنوان، الوصف المختصر، وزر الإجراء التفاعلي.
 * - فتح نافذة التفاصيل والاستفسار المباشر عبر واتساب.
 */

import React, { useState } from 'react';
import { ArrowLeft, X, CheckCircle2, MessageCircle } from 'lucide-react';
import { COLLECTIONS, CollectionItem } from '../config/showroomConfig';

interface CollectionsSectionProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  onOpenWhatsApp,
}) => {
  // حالة النافذة المنبثقة للتفاصيل
  const [activeModalItem, setActiveModalItem] = useState<CollectionItem | null>(null);

  return (
    <section id="collections" className="py-16 md:py-24 border-t border-[#CBD5CD]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            عنوان القسم مع الخط الأفقي المتناسق
            ======================================================== */}
        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#344638] tracking-tight font-heading">
            اكتشف مجموعاتنا
          </h2>
          <div className="h-0.5 w-16 md:w-24 bg-[#344638]/40 rounded-full" />
        </div>

        {/* ========================================================
            شبكة البطاقات الثلاث (3 Collection Cards Grid)
            بدون أي أدوات لاختيار الألوان مع تباعد متناسق وبصري نقي
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COLLECTIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveModalItem(item);
                }
              }}
              className="group relative h-[380px] sm:h-[420px] md:h-[450px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#CBD5CD]/40 bg-[#E8ECE7] focus:outline-none focus:ring-2 focus:ring-[#5D705F]"
            >
              {/* الصورة الرئيسية للمجموعة */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* تدرج داكن ناعم في الأسفل لضمان وضوح الكبسولة التفاعلية */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* ========================================================
                  الكبسولة السفلية المتطابقة مع التصميم:
                  تحتوي على العنوان والوصف وزر الإجراء
                  ======================================================== */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-white/90 hover:bg-white backdrop-blur-md border border-white/70 shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]">
                
                {/* زر السهم على اليسار */}
                <span
                  aria-label={`عرض تفاصيل ${item.title}`}
                  className="w-10 h-10 rounded-xl bg-black/5 group-hover:bg-[#5D705F] group-hover:text-white text-[#344638] flex items-center justify-center transition-all duration-300 shrink-0"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                </span>

                {/* العنوان والوصف على اليمين */}
                <div className="text-right pr-3 flex-1 min-w-0">
                  <span className="text-base sm:text-lg font-bold text-[#344638] font-heading block truncate">
                    {item.title}
                  </span>
                  <p className="text-xs text-[#344638]/75 truncate font-normal mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ========================================================
          نافذة التفاصيل الكاملة للمجموعة (Modal)
          ======================================================== */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#FAFBF8] rounded-3xl shadow-2xl border border-[#CBD5CD] p-6 sm:p-8 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* زر الإغلاق */}
            <button
              onClick={() => setActiveModalItem(null)}
              type="button"
              aria-label="إغلاق"
              className="absolute top-5 left-5 p-2 rounded-full text-[#344638] hover:bg-[#E8ECE7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5D705F]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* محتوى النافذة */}
            <div className="space-y-4">
              <div className="h-60 sm:h-72 rounded-2xl overflow-hidden shadow-inner border border-[#CBD5CD]/40">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-semibold text-[#5D705F] uppercase tracking-wider">
                  مجموعة المعرض الفاخرة
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#344638] font-heading mt-0.5">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm font-medium text-[#5D705F] mt-1">
                  {activeModalItem.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#344638]/85 leading-relaxed">
                {activeModalItem.description}
              </p>

              {/* المزايا الرئيسية */}
              <div className="space-y-2 pt-2 border-t border-[#CBD5CD]/40">
                <h4 className="text-sm font-bold text-[#344638]">أبرز المواصفات:</h4>
                <div className="space-y-2">
                  {activeModalItem.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#344638]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#5D705F] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* التوصية والمساحات المناسبة */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-[#E8ECE7]/50 border border-[#CBD5CD]/30">
                  <span className="font-bold text-[#344638] block mb-1">الأقمشة المقترحة:</span>
                  <span className="text-[#344638]/80">{activeModalItem.fabricRecommendation}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#E8ECE7]/50 border border-[#CBD5CD]/30">
                  <span className="font-bold text-[#344638] block mb-1">المساحة المثالية:</span>
                  <span className="text-[#344638]/80">{activeModalItem.bestFor}</span>
                </div>
              </div>

              {/* أزرار الإجراءات */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const title = activeModalItem.title;
                    setActiveModalItem(null);
                    onOpenWhatsApp(`مرحباً، أود الاستفسار عن تفصيل (${title}) لمقاسات نوافذ في منزلي.`);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#5D705F] text-white font-medium hover:bg-[#4E6050] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>طلب استشارة عبر واتساب لهذه المجموعة</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
