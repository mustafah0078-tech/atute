/**
 * WhatsAppModal.tsx
 * 
 * نافذة إعداد واستعراض رسالة الواتساب:
 * - تظهر عندما يكون رقم الواتساب غير مضبوط في showroomConfig.ts لتجنب اختلاق أرقام وهمية.
 * - تعرض نص الرسالة العربية التلقائية المجهّزة بحسب نوع ولون الستارة المختارة.
 * - توفّر حقل تجربة فوري لكتابة رقم والتجربة المباشرة.
 */

import React, { useState } from 'react';
import { X, MessageCircle, AlertCircle, ExternalLink, Copy, Check } from 'lucide-react';
import { SHOP_INFO } from '../config/showroomConfig';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  messageText: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  messageText,
}) => {
  const [testNumber, setTestNumber] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenWithNumber = () => {
    const targetNumber = testNumber.replace(/\D/g, '') || SHOP_INFO.whatsappNumber.replace(/\D/g, '');
    if (targetNumber) {
      const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(messageText)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAFBF8] rounded-3xl shadow-2xl border border-[#CBD5CD] p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          type="button"
          aria-label="إغلاق النافذة"
          className="absolute top-5 left-5 p-2 rounded-full text-[#344638] hover:bg-[#E8ECE7] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* رأس النافذة */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#344638] font-heading">
              تواصل عبر واتساب
            </h3>
            <span className="text-xs text-[#5D705F]">
              تجهيز رسالة الاستفسار التلقائية
            </span>
          </div>
        </div>

        {/* تنبيه إعداد الرقم */}
        {!SHOP_INFO.whatsappNumber && (
          <div className="mb-5 p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold block">لم يتم ربط رقم واتساب بعد:</span>
              <p className="text-amber-800/90 text-xs leading-relaxed">
                التزاماً بعدم اختلاق أرقام هواتف وهمية، يمكنك كتابة رقم هاتفك في الملف:
                <code className="bg-amber-100/80 px-1 py-0.5 rounded text-amber-950 font-mono text-[11px] mx-1">
                  src/config/showroomConfig.ts
                </code>
                في المتغير <code className="font-mono font-bold">whatsappNumber</code>.
              </p>
            </div>
          </div>
        )}

        {/* نص الرسالة المجهزة */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center justify-between text-xs font-semibold text-[#344638]">
            <span>الرسالة المجهزة للاستفسار:</span>
            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex items-center gap-1 text-[#5D705F] hover:underline"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">تم النسخ</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>نسخ النص</span>
                </>
              )}
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-[#E8ECE7]/50 border border-[#CBD5CD]/40 text-xs sm:text-sm text-[#344638] font-mono leading-relaxed select-all">
            {messageText}
          </div>
        </div>

        {/* تجربة الاتصال الفوري */}
        <div className="space-y-3 pt-2 border-t border-[#CBD5CD]/30">
          <label className="text-xs font-medium text-[#344638] block">
            أو اكتب رقم واتساب للتجربة الفورية (مع مفتاح الدولة، مثل 966500000000):
          </label>
          <div className="flex gap-2">
            <input
              type="tel"
              dir="ltr"
              placeholder="966500000000"
              value={testNumber}
              onChange={(e) => setTestNumber(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#CBD5CD] text-sm text-[#344638] focus:outline-none focus:ring-2 focus:ring-[#5D705F]"
            />
            <button
              type="button"
              disabled={!testNumber.trim() && !SHOP_INFO.whatsappNumber}
              onClick={handleOpenWithNumber}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5D705F] hover:bg-[#4E6050] disabled:opacity-40 disabled:hover:bg-[#5D705F] text-white text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>إرسال</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
