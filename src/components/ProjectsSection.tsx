/**
 * ProjectsSection.tsx
 * 
 * قسم "من أعمالنا" - معرض مشاريع وتصاميم إلهامية توضيحية مع تصفية حسب الغرفة
 * ولايت بوكس (Lightbox) تفاعلي لمعاينة الصور بدقة عالية.
 */

import React, { useState } from 'react';
import { Info, Maximize2, X, MessageCircle } from 'lucide-react';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '../config/showroomConfig';

interface ProjectsSectionProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenWhatsApp }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxProject, setLightboxProject] = useState<ShowcaseProject | null>(null);

  const filterTabs = [
    { id: 'all', label: 'الكل' },
    { id: 'living', label: 'غرف معيشة وطعام' },
    { id: 'majlis', label: 'مجالس وصالونات' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? SHOWCASE_PROJECTS
      : SHOWCASE_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="showcase" className="py-16 md:py-24 border-t border-[#CBD5CD]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* رأس القسم */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#344638] tracking-tight font-heading">
                من أعمالنا
              </h2>
              <div className="h-0.5 w-16 bg-[#344638]/40 rounded-full" />
            </div>
            <p className="text-base text-[#344638]/80 max-w-xl">
              إلهامات تركيب وتصاميم متناسقة توضح دقة الستائر الويفي والرول في مختلف المساحات المنزلية.
            </p>
          </div>

          {/* تنويه التصاميم التوضيحية الإلهامية كما ينص الطلب */}
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#E8ECE7]/70 text-[#344638]/90 text-xs border border-[#CBD5CD]/40 max-w-md">
            <Info className="w-4 h-4 text-[#5D705F] shrink-0" />
            <span>
              نماذج إلهامية توضيحية لمعاينة جودة التفصيل وخيارات التركيب.
            </span>
          </div>
        </div>

        {/* أزرار التصفية (Filter Tabs) */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#5D705F] ${
                  isActive
                    ? 'bg-[#5D705F] text-white shadow-xs'
                    : 'bg-white text-[#344638] border border-[#CBD5CD]/60 hover:bg-[#E8ECE7]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setLightboxProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLightboxProject(project);
                }
              }}
              className="group relative h-80 rounded-2xl overflow-hidden bg-[#E8ECE7] border border-[#CBD5CD]/40 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5D705F]"
            >
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* تدرج القراءة */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* أيقونة التكبير */}
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#344638] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* نصوص البطاقة */}
              <div className="absolute bottom-4 right-4 left-4 text-white space-y-1">
                <span className="text-[11px] font-semibold text-emerald-200 tracking-wide block">
                  {project.categoryLabel} · {project.curtainType}
                </span>
                <h3 className="text-base font-bold font-heading line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-1">
                  {project.fabricName}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================
          نافذة اللايت بوكس (Lightbox)
          ======================================================== */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#FAFBF8] rounded-3xl overflow-hidden shadow-2xl border border-[#CBD5CD] p-4 sm:p-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* زر الإغلاق */}
            <button
              onClick={() => setLightboxProject(null)}
              type="button"
              aria-label="إغلاق المعاينة"
              className="absolute top-4 left-4 z-10 p-2.5 rounded-full bg-white/90 text-[#344638] hover:bg-white shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* الصورة بحجم كبير */}
            <div className="h-[340px] sm:h-[460px] rounded-2xl overflow-hidden bg-black/5">
              <img
                src={lightboxProject.image}
                alt={lightboxProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* الوصف والإجراءات */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#5D705F] font-semibold">
                  {lightboxProject.categoryLabel} · {lightboxProject.curtainType}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#344638] font-heading">
                  {lightboxProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#344638]/80 mt-1 max-w-xl">
                  {lightboxProject.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const title = lightboxProject.title;
                  setLightboxProject(null);
                  onOpenWhatsApp(
                    `مرحباً، أود الاستفسار عن تفصيل ستائر بمواصفات مطابقة لمشروع (${title}) المعروض في موقعكم.`
                  );
                }}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#5D705F] text-white text-sm font-medium hover:bg-[#4E6050] transition-colors shadow-sm shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>طلب تصميم مشابه عبر واتساب</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
