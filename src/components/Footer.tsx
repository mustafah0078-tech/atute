/**
 * Footer.tsx
 * 
 * تذييل هادئ وأنيق لمعرض "ستائر":
 * - اسم المتجر والنبذة المقتضبة
 * - روابط التصفح السريع
 * - تفاصيل التواصل المهيأة (الموقع وساعات العمل)
 * - دون اختلاق إحصاءات أو أرقام هواتف وهمية
 */

import React from 'react';
import { SHOP_INFO } from '../config/showroomConfig';

interface FooterProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAFBF8] border-t border-[#CBD5CD]/40 py-12 md:py-16 text-[#344638]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#CBD5CD]/30">
          
          {/* هوية المتجر */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-3xl font-extrabold tracking-tight font-heading block">
              {SHOP_INFO.name}
            </span>
            <p className="text-sm text-[#344638]/75 leading-relaxed max-w-sm">
              {SHOP_INFO.description}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenWhatsApp(`مرحباً، أود التواصل مع معرض ${SHOP_INFO.name}.`)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#5D705F] hover:underline"
              >
                <span>طلب تسعيرة أو استفسار عبر واتساب ←</span>
              </button>
            </div>
          </div>

          {/* روابط التصفح */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#344638] font-heading">
              أقسام المعرض
            </h4>
            <ul className="space-y-2 text-sm text-[#344638]/75">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="hover:text-[#5D705F] transition-colors"
                >
                  الرئيسية والمعاينة
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  onClick={(e) => handleNavClick(e, '#collections')}
                  className="hover:text-[#5D705F] transition-colors"
                >
                  المجموعات (ويفي، رول، كلاسيك)
                </a>
              </li>
              <li>
                <a
                  href="#fabrics"
                  onClick={(e) => handleNavClick(e, '#fabrics')}
                  className="hover:text-[#5D705F] transition-colors"
                >
                  الأقمشة والخامات
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  onClick={(e) => handleNavClick(e, '#showcase')}
                  className="hover:text-[#5D705F] transition-colors"
                >
                  معرض الأعمال والإلهامات
                </a>
              </li>
            </ul>
          </div>

          {/* بيانات المتجر والمعلومات */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-[#344638] font-heading">
              معلومات المعرض
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-[#344638]/75">
              <p>
                <span className="font-medium text-[#344638]">الموقع: </span>
                {SHOP_INFO.locationText}
              </p>
              <p>
                <span className="font-medium text-[#344638]">أوقات الاستفسارات: </span>
                {SHOP_INFO.workingHours}
              </p>
            </div>
          </div>

        </div>

        {/* سطر الحقوق */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#344638]/60 gap-4">
          <p>© {currentYear} {SHOP_INFO.name}. جميع الحقوق محفوظة.</p>
          <p>معرض ستائر رقمي تفاعلي — تجربة الألوان والأقمشة قبل التفصيل.</p>
        </div>
      </div>
    </footer>
  );
};
