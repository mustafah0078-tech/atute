/**
 * CurtainRoomCanvas.tsx
 * 
 * المكوّن البصري لقسم الهيرو (Hero Room Canvas):
 * - يعرض صورة الهيرو الثابتة بالستائر الخضراء الهادئة (Muted Green Curtains).
 * - يحافظ على الزاوية المنحنية العلوية اليمنى (rounded-tr-[90px]).
 * - خالي من أزرار أو شرائح تبديل الألوان (تم نقل تبديل الألوان لبطاقات المنتجات).
 */

import React from 'react';
import { HERO_CONFIG } from '../config/showroomConfig';

export const CurtainRoomCanvas: React.FC = () => {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[540px] lg:h-[600px] select-none group">
      {/* الحاوية الرئيسية مع القوس المنحني الأنيق في الزاوية العلوية اليمنى كما في التصميم الأصلي */}
      <div className="relative w-full h-full overflow-hidden bg-[#E8ECE7] shadow-xl md:shadow-2xl rounded-2xl md:rounded-bl-3xl md:rounded-tl-2xl md:rounded-br-2xl md:rounded-tr-[90px] border border-[#CBD5CD]/40">
        
        {/* الصورة الثابتة للهيرو بالستائر الخضراء الهادئة */}
        <img
          src={HERO_CONFIG.heroImage}
          alt="ستائر ويفي بلون أخضر هادئ في غرفة معيشة بإضاءة طبيعية"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          referrerPolicy="no-referrer"
        />

        {/* تدرج إضاءة ناعم غير حاجب للتفاصيل */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/25 via-transparent to-black/5" />
      </div>
    </div>
  );
};
