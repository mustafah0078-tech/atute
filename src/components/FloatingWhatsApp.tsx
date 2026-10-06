/**
 * FloatingWhatsApp.tsx
 * 
 * زر الواتساب العائم في الزاوية:
 * - لون أخضر مميز مع أيقونة الواتساب ونبض إشعار خفيف.
 * - يجهّز رسالة تفاعلية للاستفسار السريع.
 */

import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenWhatsApp,
}) => {
  const handleClick = () => {
    const msg = 'مرحباً، أود الاستفسار عن تفصيل وتركيب الستائر لديكم.';
    onOpenWhatsApp(msg);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={handleClick}
        type="button"
        aria-label="تواصل عبر واتساب"
        title="تواصل عبر واتساب"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#38764B] hover:bg-[#2C5F3B] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#38764B]/40"
      >
        {/* نبض إشعار خفيف */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
        </span>

        <MessageCircle className="w-7 h-7 fill-white stroke-none" />

        {/* تلميح عند التمرير */}
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-[#344638] text-white text-xs font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          استفسر عبر واتساب
        </span>
      </button>
    </div>
  );
};
