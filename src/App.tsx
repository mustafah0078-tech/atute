/**
 * App.tsx
 * 
 * المكوّن الرئيسي لتطبيق معرض "ستائر".
 * - يجمع جميع الأقسام بالتصميم الأخضر الراقي المتطابق مع الموكاب.
 * - قسم الهيرو ثابت بالستائر الخضراء الهادئة دون أزرار ألوان.
 * - تبديل الألوان نشط وفعال داخل بطاقات المجموعات (Product Cards) ويغير لون الستارة فعلياً.
 * - جميع الصور في المجموعات والأقمشة والمشاريع مخصصة وغير مكررة.
 */

import React, { useState, useEffect } from 'react';
import {
  HERO_CONFIG,
  SHOP_INFO,
} from './config/showroomConfig';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CollectionsSection } from './components/CollectionsSection';
import { FabricsSection } from './components/FabricsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppModal } from './components/WhatsAppModal';

export default function App() {
  // حالة نافذة الواتساب
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppMessage, setWhatsAppMessage] = useState('');

  // تحميل مسبق لصورة الهيرو
  useEffect(() => {
    const imgHero = new Image();
    imgHero.src = HERO_CONFIG.heroImage;
  }, []);

  // معالج النقر على أزرار واتساب
  const handleOpenWhatsApp = (customMessage?: string) => {
    const defaultMsg = `مرحباً، أود الاستفسار عن تفصيل وتركيب ستائر من معرضكم لغرفة في بيتي.`;
    const messageToSend = customMessage || defaultMsg;

    // إذا كان الرقم مضبوطاً في الإعدادات، يتم فتح واتساب مباشرة، وإلا تفتح نافذة التنبيه والإعداد
    const rawNumber = SHOP_INFO.whatsappNumber.replace(/\D/g, '');
    if (rawNumber) {
      const url = `https://wa.me/${rawNumber}?text=${encodeURIComponent(messageToSend)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setWhatsAppMessage(messageToSend);
      setIsWhatsAppModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBF8] text-[#344638] selection:bg-[#5D705F]/20 selection:text-[#344638]">
      
      {/* 1. الشريط العلوي النحيف */}
      <Header onOpenWhatsApp={handleOpenWhatsApp} />

      <main className="flex-1">
        {/* 2. القسم الرئيسي الثابت بالستائر الخضراء الهادئة (Hero Section) */}
        <HeroSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* 3. قسم "اكتشف مجموعاتنا" مع التبديل اللوني الفعال داخل البطاقات */}
        <CollectionsSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* 4. قسم "الأقمشة المتوفرة" بصور نسيجية مقربة غير مكررة */}
        <FabricsSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* 5. قسم "من أعمالنا" بصور مشاريع حقيقية غير مكررة ولايت بوكس */}
        <ProjectsSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* 6. قسم "خلّينا نساعدك تختار" والاستشارة */}
        <ConsultationSection onOpenWhatsApp={handleOpenWhatsApp} />
      </main>

      {/* 7. التذييل الهادئ */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* 8. زر واتساب العائم الدائم */}
      <FloatingWhatsApp onOpenWhatsApp={handleOpenWhatsApp} />

      {/* 9. نافذة إعداد واستعراض رسالة الواتساب */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        messageText={whatsAppMessage}
      />

    </div>
  );
}
