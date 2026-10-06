/**
 * CurtainCardPreview.tsx
 * 
 * مكوّن المعاينة اللونية داخل بطاقة المنتج (Product Card Curtain Preview):
 * - يحدّث لون الستارة الفعلي عند اختيار اللون دون تلوين باقي الغرفة.
 * - يحافظ على ثبات زاوية الكاميرا، الأثاث، الجدران، الأرضية، والإضاءة لنفس المنتج.
 * - يدعم الانتقال اللوني فائق النعومة (Crossfade) بدون ارتعاش (Flicker) أو تغيّر في أبعاد البطاقة.
 * - يعزل بدقة مناطق الستارة حسب نوعها: ويفي، رول، كلاسيك.
 */

import React from 'react';
import { CollectionItem, ProductColorOption } from '../config/showroomConfig';

interface CurtainCardPreviewProps {
  item: CollectionItem;
  selectedColor: ProductColorOption;
}

export const CurtainCardPreview: React.FC<CurtainCardPreviewProps> = ({
  item,
  selectedColor,
}) => {
  // تحديد ما إذا كان اللون المختار هو لون الصورة الأصلي (لتجنب تطبيق طبقة مضاعفة إذا لم تكن هناك حاجة)
  const isOriginalColor =
    (item.typeId === 'wave' && selectedColor.id === 'calm_sage') ||
    (item.typeId === 'roller' && selectedColor.id === 'beige') ||
    (item.typeId === 'classic' && selectedColor.id === 'beige');

  // مسار القناع الهندسي لعزل الستائر حصرياً بحسب كل صنف:
  const getClipPath = () => {
    switch (item.typeId) {
      case 'wave':
        // عزل الستائر الويفي الجانبية مع الالتفاف حول الأريكة والأرضية والشيفون
        return `polygon(
          0% 0%, 36% 0%, 36% 56%, 31% 60%, 25% 65%, 15% 72%, 0% 75%,
          0% 0%, 65% 0%,
          65% 0%, 100% 0%, 100% 95%, 65% 88%
        )`;
      case 'roller':
        // عزل ألواح ستائر الرول المستطيلة أعلى النوافذ فقط دون لمس الطاولة أو الكراسي
        return `polygon(
          4% 2%, 96% 2%, 96% 58%, 4% 58%
        )`;
      case 'classic':
        // عزل الستائر الكلاسيكية الجانبية وربطات القماش دون لمس مصباح الإضاءة أو طاولة الكونسول
        return `polygon(
          0% 0%, 32% 0%, 30% 65%, 22% 80%, 0% 92%,
          0% 0%, 68% 0%,
          68% 0%, 100% 0%, 100% 92%, 78% 80%, 70% 65%, 68% 0%
        )`;
      default:
        return 'none';
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#E8ECE7] select-none">
      {/* 1. الصورة الأساسية للغرفة والستارة */}
      <img
        src={item.image}
        alt={`${item.title} بلون ${selectedColor.nameAr}`}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* 2. طبقة العزل اللوني الذكية: تطبق فقط على مساحة قماش الستارة */}
      {!isOriginalColor && (
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-500 ease-out"
          style={{
            clipPath: getClipPath(),
          }}
        >
          {/* طبقة تلوين بدرجة اللون المحددة */}
          <div
            className="absolute inset-0 transition-colors duration-500"
            style={{
              backgroundColor: selectedColor.blendColor,
              mixBlendMode: 'color',
              opacity: 0.88,
            }}
          />
          {/* طبقة ظلال لتعزيز عمق الثنيات وواقعية النسيج */}
          <div
            className="absolute inset-0 transition-colors duration-500"
            style={{
              backgroundColor: selectedColor.shadowColor,
              mixBlendMode: 'multiply',
              opacity: 0.35,
            }}
          />
          {/* إشراق ناعم للألوان الفاتحة كالعاجي والبيج */}
          {(selectedColor.id === 'ivory' || selectedColor.id === 'beige') && (
            <div
              className="absolute inset-0 bg-[#FFFDF7] transition-opacity duration-500"
              style={{
                mixBlendMode: 'soft-light',
                opacity: selectedColor.id === 'ivory' ? 0.55 : 0.3,
              }}
            />
          )}
        </div>
      )}

      {/* 3. تدرج داكن خفيف في الأسفل والأعلى للقراءة الواضحة للأزرار */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35 pointer-events-none" />
    </div>
  );
};
