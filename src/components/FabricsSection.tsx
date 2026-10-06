/**
 * FabricsSection.tsx
 * 
 * قسم "الأقمشة المتوفرة" - معرض أقمشة نسيجي راقٍ مع صور مقربة للنسيج
 * ومواصفات الأوزان ونفاذية الضوء وتدرجات الألوان المتوفرة لكل خامة.
 */

import React, { useState } from 'react';
import { Layers, SunMedium, Sparkles, MessageSquare } from 'lucide-react';
import { FABRICS, FabricItem } from '../config/showroomConfig';

interface FabricsSectionProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const FabricsSection: React.FC<FabricsSectionProps> = ({ onOpenWhatsApp }) => {
  const [selectedFabricColors, setSelectedFabricColors] = useState<{ [fabricId: string]: string }>({
    'natural-linen': '#5D705F',
    'italian-velvet': '#5D705F',
    'sheer-chiffon': '#FAF9F6',
    'thermal-blackout': '#C7B59D',
  });

  const handleSelectColor = (fabricId: string, hex: string) => {
    setSelectedFabricColors((prev) => ({ ...prev, [fabricId]: hex }));
  };

  return (
    <section id="fabrics" className="py-16 md:py-24 bg-[#F5F7F3]/60 border-t border-[#CBD5CD]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* رأس القسم */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#344638] tracking-tight font-heading">
                الأقمشة المتوفرة
              </h2>
              <div className="h-0.5 w-16 bg-[#344638]/40 rounded-full" />
            </div>
            <p className="text-base text-[#344638]/80 max-w-xl">
              ننتقي أجود الأقمشة الإسبانية والإيطالية المعتمدة المقاومة للتجعد والبهتان لتمنح منزلك انسيابية خالدة.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-medium text-[#5D705F] bg-white px-3.5 py-2 rounded-full border border-[#CBD5CD]/50 shadow-xs">
            <Sparkles className="w-4 h-4" />
            <span>عينات الأقمشة متوفرة للمعاينة المنزلية</span>
          </div>
        </div>

        {/* شبكة الأقمشة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FABRICS.map((fabric) => {
            const activeColorHex = selectedFabricColors[fabric.id] || fabric.availableColors[0].hex;
            const activeColorObj = fabric.availableColors.find((c) => c.hex === activeColorHex) || fabric.availableColors[0];

            return (
              <div
                key={fabric.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#CBD5CD]/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* صورة النسيج المقربة */}
                <div className="relative h-48 w-full overflow-hidden bg-[#E8ECE7]">
                  <img
                    src={fabric.textureImage}
                    alt={fabric.nameAr}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* تدرج خفيف يحاكي لون القماش المختار */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-colors duration-300 opacity-25"
                    style={{ backgroundColor: activeColorHex, mixBlendMode: 'color' }}
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#344638] shadow-xs">
                    {fabric.typeAr}
                  </div>
                </div>

                {/* تفاصيل القماش */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#344638] font-heading">
                      {fabric.nameAr}
                    </h3>
                    <p className="text-xs text-[#344638]/75 mt-1 line-clamp-2 leading-relaxed">
                      {fabric.description}
                    </p>
                  </div>

                  {/* مواصفات الوزن والعزل */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#344638]/80 py-2 border-y border-[#CBD5CD]/30">
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#5D705F]" />
                      <span>{fabric.weight}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <SunMedium className="w-3.5 h-3.5 text-[#5D705F]" />
                      <span className="truncate">{fabric.opacity}</span>
                    </div>
                  </div>

                  {/* تدرجات الألوان المتوفرة */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#344638]/70">الألوان:</span>
                      <span className="font-medium text-[#5D705F]">{activeColorObj.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {fabric.availableColors.map((color) => {
                        const isColorActive = color.hex === activeColorHex;
                        return (
                          <button
                            key={color.hex}
                            type="button"
                            onClick={() => handleSelectColor(fabric.id, color.hex)}
                            aria-label={`${fabric.nameAr} - ${color.name}`}
                            title={color.name}
                            className={`w-6 h-6 rounded-full transition-transform duration-200 border border-black/10 focus:outline-none ${
                              isColorActive ? 'ring-2 ring-offset-1 ring-[#5D705F] scale-110' : 'hover:scale-105 opacity-85'
                            }`}
                            style={{ backgroundColor: color.hex }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* زر طلب عينة */}
                  <button
                    type="button"
                    onClick={() =>
                      onOpenWhatsApp(
                        `مرحباً، أود الاستفسار عن قماش (${fabric.nameAr}) بلون (${activeColorObj.name}) لمعاينة العينات.`
                      )
                    }
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FAFBF8] hover:bg-[#5D705F] text-[#344638] hover:text-white border border-[#CBD5CD]/60 hover:border-[#5D705F] text-xs font-medium transition-all duration-200 mt-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>طلب معاينة القماش</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
