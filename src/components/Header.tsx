/**
 * Header.tsx
 * 
 * الشريط العلوي النحيف والأنيق لمعرض "ستائر".
 * - اسم المتجر على اليمين.
 * - روابط التصفح: الرئيسية، المجموعات، الأقمشة، أعمالنا.
 * - زر "تواصل معنا" الأخضر المتناسق على اليسار.
 * - قائمة متجاوبة لشاشات الهواتف.
 */

import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { SHOP_INFO } from '../config/showroomConfig';

interface HeaderProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'المجموعات', href: '#collections' },
    { label: 'الأقمشة', href: '#fabrics' },
    { label: 'أعمالنا', href: '#showcase' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFBF8]/95 backdrop-blur-md border-b border-[#CBD5CD]/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* ========================================================
            الطرف الأيمن: شعار واسم المتجر "ستائر"
            ======================================================== */}
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2 focus:outline-none"
          >
            <span className="text-3xl md:text-4xl font-extrabold text-[#344638] tracking-tight font-heading group-hover:text-[#5D705F] transition-colors">
              {SHOP_INFO.name}
            </span>
          </a>
        </div>

        {/* ========================================================
            الوسط: روابط التنقل الرئيسية (سطح المكتب)
            ======================================================== */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-medium text-[#344638]/90 hover:text-[#5D705F] relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#5D705F] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ========================================================
            الطرف الأيسر: زر "تواصل معنا" وقائمة الهاتف
            ======================================================== */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenWhatsApp('مرحباً، أود الاستفسار عن تفصيل وتركيب الستائر لديكم.')}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5D705F] text-white text-sm font-medium hover:bg-[#4E6050] active:scale-95 shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5D705F]/50"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="whitespace-nowrap">تواصل معنا</span>
          </button>

          {/* زر القائمة للشاشات الصغيرة */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="md:hidden p-2 rounded-lg text-[#344638] hover:bg-[#E8ECE7] focus:outline-none focus:ring-2 focus:ring-[#5D705F]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ========================================================
          قائمة الهاتف المنسدلة
          ======================================================== */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFBF8] border-b border-[#CBD5CD]/40 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#344638] hover:bg-[#E8ECE7]/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#CBD5CD]/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp('مرحباً، أود الاستفسار عن تفصيل وتركيب الستائر لديكم.');
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5D705F] text-white font-medium shadow-sm hover:bg-[#4E6050]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>تواصل معنا عبر واتساب</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
