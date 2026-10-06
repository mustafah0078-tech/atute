/**
 * showroomConfig.ts
 * 
 * جميع إعدادات معرض "ستائر" مجمعة في هذا الملف لتسهيل التعديل:
 * - اسم المتجر والبيانات
 * - رقم الواتساب المركزي
 * - أنواع الستائر (ويفي، رول، كلاسيك)
 * - خيارات الألوان وتدرجاتها
 * - المجموعات والأقمشة بصور مخصصة وغير مكررة
 * - مشاريع المعرض التوضيحية بصور واقعية لكل فئة
 */

import heroWaveImg from '../assets/images/hero_room_wave_1791208366370.jpg';
import heroRollerImg from '../assets/images/hero_room_roller_1791208377623.jpg';

// صور مجموعات كاملة مركبة على النوافذ (Complete Installed Curtains over Windows)
import collectionInstalledWaveImg from '../assets/images/collection_installed_wave_1791285362260.jpg';
import collectionInstalledRollerImg from '../assets/images/collection_installed_roller_1791285375705.jpg';
import collectionInstalledClassicImg from '../assets/images/collection_installed_classic_1791285392676.jpg';

// أقمشة مخصصة غير مكررة
import linenTextureImg from '../assets/images/fabric_texture_linen_1791208398645.jpg';
import velvetTextureImg from '../assets/images/fabric_velvet_macro_1791270529904.jpg';
import chiffonTextureImg from '../assets/images/fabric_chiffon_sheer_1791270540232.jpg';
import blackoutTextureImg from '../assets/images/fabric_blackout_weave_1791270549480.jpg';

// مشاريع مخصصة غير مكررة لكل تصنيف
import projectVillaWaveImg from '../assets/images/project_villa_living_1791208414509.jpg';
import projectDiningRollerImg from '../assets/images/project_dining_roller_1791270559246.jpg';
import projectMajlisClassicImg from '../assets/images/project_majlis_classic_1791270576009.jpg';

export interface ShopInfo {
  name: string;
  tagline: string;
  description: string;
  whatsappNumber: string; // اتركها فارغة لعرض نافذة الإعداد أو ضع رقمك مثل "966500000000"
  locationText: string;
  workingHours: string;
}

export interface CurtainType {
  id: 'wave' | 'roller';
  nameAr: string;
  subtitle: string;
  iconType: 'wave' | 'roller';
  description: string;
}

export interface ProductColorOption {
  id: string;
  nameAr: string;
  hex: string;
  blendColor: string;
  shadowColor: string;
  available: boolean;
  unavailableReason?: string;
}

export interface CurtainColor {
  id: string;
  nameAr: string;
  hex: string;
  accentHex: string;
  textureLabel: string;
  blendColor: string;
  shadowColor: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  typeId: 'wave' | 'roller' | 'classic';
  subtitle: string;
  description: string;
  fullness?: string;
  image: string;
  defaultColorId: string;
  colorOptions: ProductColorOption[];
  features: string[];
  fabricRecommendation: string;
  bestFor: string;
}

export interface FabricItem {
  id: string;
  nameAr: string;
  typeAr: string;
  textureImage: string;
  weight: string;
  opacity: string;
  description: string;
  availableColors: { name: string; hex: string }[];
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: 'living' | 'bedroom' | 'majlis' | 'office';
  categoryLabel: string;
  curtainType: string;
  fabricName: string;
  image: string;
  description: string;
}

export const SHOP_INFO: ShopInfo = {
  name: 'العطعوط',
  tagline: 'ستائر تناسب بيتك',
  description: 'معرض العطعوط المتخصص في تصميم وتفصيل الستائر العصرية (ويفي، رول، كلاسيك) بأقمشة أوروبية وعالمية فاخرة.',
  whatsappNumber: '',
  locationText: 'المملكة الأردنية الهاشمية',
  workingHours: 'السبت - الخميس: 9:00 ص - 10:00 م',
};

export const CURTAIN_TYPES: CurtainType[] = [
  {
    id: 'wave',
    nameAr: 'ويفي',
    subtitle: 'انسيابية عصرية مع ثنيات متناسقة تدوم',
    iconType: 'wave',
    description: 'ستائر بنظام الموجة المتصلة (Wave System) تمتاز بتدرج طيات منتظم وانسيابي يمنح الغرفة فخامة هادئة وتوزيعاً ممتازاً للضوء.',
  },
  {
    id: 'roller',
    nameAr: 'رول',
    subtitle: 'تصميم عملي وأنيق يتحكم بدقة في الإضاءة',
    iconType: 'roller',
    description: 'ستائر رول عصرية مدمجة تناسب النوافذ الكبيرة وتسمح بالتحكم الدقيق في درجة العزل والضوء بتصميم بسيط وعملي.',
  },
];

export const CURTAIN_COLORS: CurtainColor[] = [
  {
    id: 'dusty_rose',
    nameAr: 'وردي غباري',
    hex: '#C59E9E',
    accentHex: '#9E6D6D',
    textureLabel: 'كتان ناعم مطفي',
    blendColor: '#BA8D8D',
    shadowColor: '#5C3939',
  },
  {
    id: 'warm_grey',
    nameAr: 'رمادي دافئ',
    hex: '#A5A19B',
    accentHex: '#6E6A64',
    textureLabel: 'قماش منسوج بدرجات خفيفة',
    blendColor: '#9C968F',
    shadowColor: '#45423E',
  },
  {
    id: 'calm_sage',
    nameAr: 'أخضر هادئ',
    hex: '#5D705F',
    accentHex: '#3D4E3F',
    textureLabel: 'كتان طبيعي بلون المريمية',
    blendColor: '#5D705F',
    shadowColor: '#28362A',
  },
  {
    id: 'ivory',
    nameAr: 'عاجي',
    hex: '#EDE8DD',
    accentHex: '#C2B8A3',
    textureLabel: 'نسيج قطني عاجي دافئ',
    blendColor: '#F0ECE3',
    shadowColor: '#8C8578',
  },
  {
    id: 'beige',
    nameAr: 'بيج',
    hex: '#C7B59D',
    accentHex: '#8C775E',
    textureLabel: 'كتان رملي طبيعي',
    blendColor: '#C4B298',
    shadowColor: '#5A4A35',
  },
];

export const HERO_CONFIG = {
  headline: 'ستائر تناسب بيتك',
  supportingText: 'جرّب اللون، واكتشف الفرق',
  primaryCtaText: 'استكشف الأقمشة',
  heroImage: heroWaveImg, // صورة الهيرو الثابتة باللون الأخضر الهادئ
  roomImages: {
    wave: heroWaveImg,
    roller: heroRollerImg,
  },
};

// خيارات الألوان المحددة لكل منتج في بطاقات المجموعات مع تمييز الخيارات غير المتوفرة بوضوح
export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'wave-collection',
    title: 'ستائر ويفي',
    typeId: 'wave',
    subtitle: 'انسيابية مثالية من السقف إلى الأرض',
    description: 'تم تصميم الستائر الويفي بنظام مسارات متطورة تضمن بقاء التموجات متناسقة وموحدة. تضفي على المجالس وغرف المعيشة إحساساً بالفخامة والارتفاع المعماري.',
    fullness: 'نسبة امتلاء 2.5x أو 2.0x',
    image: collectionInstalledWaveImg,
    defaultColorId: 'calm_sage',
    colorOptions: [
      { id: 'calm_sage', nameAr: 'أخضر هادئ', hex: '#5D705F', blendColor: '#5D705F', shadowColor: '#28362A', available: true },
      { id: 'beige', nameAr: 'بيج', hex: '#C7B59D', blendColor: '#C4B298', shadowColor: '#5A4A35', available: true },
      { id: 'ivory', nameAr: 'عاجي', hex: '#EDE8DD', blendColor: '#F0ECE3', shadowColor: '#8C8578', available: true },
      { id: 'warm_grey', nameAr: 'رمادي دافئ', hex: '#A5A19B', blendColor: '#9C968F', shadowColor: '#45423E', available: true },
      { id: 'dusty_rose', nameAr: 'وردي غباري', hex: '#C59E9E', blendColor: '#BA8D8D', shadowColor: '#5C3939', available: true },
    ],
    features: [
      'مسارات ألمنيوم صامتة تدعم أنظمة السحب اليدوي والكهربائي الذكي',
      'توزيع انسيابي متساوٍ للثنيات دون الحاجة إلى تعديل يدوي',
      'مناسبة جداً للأقمشة الثقيلة مع طبقة شيفون داخلية ناعمة',
    ],
    fabricRecommendation: 'كتان طبيعي 100% أو مخمل إيطالي ناعم',
    bestFor: 'الصالات الكبيرة، غرف المعيشة ذات الأسقف العالية، والواجهات الزجاجية',
  },
  {
    id: 'roller-collection',
    title: 'ستائر رول',
    typeId: 'roller',
    subtitle: 'حلول ذكية للمساحات المعاصرة والمكاتب',
    description: 'تعتبر ستائر الرول الخيار الأول للمساحات الهادئة ذات الطابع المعماري البسيط. تتوفر بدرجات عزل متنوعة بدءاً من تصفية أشعة الشمس الناعمة وحتى العزل الكامل للضوء والحرارة.',
    fullness: 'تصميم مسطح مدمج مع صندوق علوي أنيق',
    image: collectionInstalledRollerImg,
    defaultColorId: 'beige',
    colorOptions: [
      { id: 'beige', nameAr: 'بيج', hex: '#C7B59D', blendColor: '#C4B298', shadowColor: '#5A4A35', available: true },
      { id: 'calm_sage', nameAr: 'أخضر هادئ', hex: '#5D705F', blendColor: '#5D705F', shadowColor: '#28362A', available: true },
      { id: 'ivory', nameAr: 'عاجي', hex: '#EDE8DD', blendColor: '#F0ECE3', shadowColor: '#8C8578', available: true },
      { id: 'warm_grey', nameAr: 'رمادي دافئ', hex: '#A5A19B', blendColor: '#9C968F', shadowColor: '#45423E', available: true },
      { id: 'dusty_rose', nameAr: 'وردي غباري', hex: '#C59E9E', blendColor: '#BA8D8D', shadowColor: '#5C3939', available: false, unavailableReason: 'غير متوفر لستائر الرول حالياً' },
    ],
    features: [
      'أقمشة مقاومة للحرارة والأشعة فوق البنفسجية لتقليل استهلاك التكييف',
      'خيارات محركات ذكية صامتة قابلة للربط بتطبيقات المنزل الذكي',
      'سهلة التنظيف ومقاومة للغبار والرطوبة',
    ],
    fabricRecommendation: 'نسيج ألياف بوليستر معالجة وسكرين عازل للحرارة',
    bestFor: 'غرف النوم، المكاتب المنزلية، غرف الطعام، والنوافذ المواجهة للشمس المباشرة',
  },
  {
    id: 'classic-collection',
    title: 'ستائر كلاسيكية',
    typeId: 'classic',
    subtitle: 'أناقة خالدة بتطريزات وكسرات تقليدية متقنة',
    description: 'تجمع بين فخامة الماضي ودقة التنفيذ الحديث. تزدان بربطات قماشية جانبية (Tiebacks) مع كسرات فرنسية أو بنش بليت تعكس الرقي والأصالة في المجالس وصالونات الاستقبال.',
    fullness: 'نسبة امتلاء تصل إلى 3.0x',
    image: collectionInstalledClassicImg,
    defaultColorId: 'beige',
    colorOptions: [
      { id: 'beige', nameAr: 'بيج رملي', hex: '#C7B59D', blendColor: '#C4B298', shadowColor: '#5A4A35', available: true },
      { id: 'ivory', nameAr: 'عاجي ملكي', hex: '#EDE8DD', blendColor: '#F0ECE3', shadowColor: '#8C8578', available: true },
      { id: 'calm_sage', nameAr: 'أخضر هادئ', hex: '#5D705F', blendColor: '#5D705F', shadowColor: '#28362A', available: true },
      { id: 'warm_grey', nameAr: 'رمادي دافئ', hex: '#A5A19B', blendColor: '#9C968F', shadowColor: '#45423E', available: true },
      { id: 'dusty_rose', nameAr: 'وردي غباري', hex: '#C59E9E', blendColor: '#BA8D8D', shadowColor: '#5C3939', available: false, unavailableReason: 'غير متوفر للمجموعة الكلاسيكية' },
    ],
    features: [
      'كسرات محاكة يدوياً بدقة متناهية تحافظ على رونقها الدائم',
      'إكسسوارات وربطات قماشية مطرزة بألوان متناغمة',
      'طبقات متعددة تشمل الشيفون والبطانة العازلة للضوء والصوت',
    ],
    fabricRecommendation: 'مخمل ملكي ثقيل، جاكار منقوش، وحرير دمشقي ناعم',
    bestFor: 'المجالس الرسمية، صالونات الضيافة، والقصور والفلل ذات الطراز الكلاسيكي والنيوكلاسيك',
  },
];

// أقمشة مميزة مع صور مقربة حقيقية وغير مكررة لكل صنف
export const FABRICS: FabricItem[] = [
  {
    id: 'natural-linen',
    nameAr: 'كتان طبيعي فاخر',
    typeAr: 'نسيج طبيعي ناعم',
    textureImage: linenTextureImg,
    weight: '380 جم/م²',
    opacity: 'تصفية ضوء لطيفة (60%)',
    description: 'قماش كتان أصلي بملمس طبيعي يمنح المكان دفئاً وأناقة غير متكلفة. يتميز بمتانة استثنائية وانسياب ساحر مع الإضاءة الطبيعية.',
    availableColors: [
      { name: 'أخضر هادئ', hex: '#5D705F' },
      { name: 'بيج رملي', hex: '#C7B59D' },
      { name: 'عاجي طبيعي', hex: '#EDE8DD' },
      { name: 'وردي غباري', hex: '#C59E9E' },
    ],
  },
  {
    id: 'italian-velvet',
    nameAr: 'مخمل إيطالي ناعم',
    typeAr: 'مخمل فاخر مطفي',
    textureImage: velvetTextureImg,
    weight: '440 جم/م²',
    opacity: 'حجب ضوء عالي (85%)',
    description: 'مخمل إيطالي ناعم بملمس فخم ولمعان خافت مطفي غير عاكس. يعزز العزل الصوتي والحراري ويضفي على الستائر وزناً وانسياباً ملكياً.',
    availableColors: [
      { name: 'أخضر هادئ', hex: '#5D705F' },
      { name: 'رمادي دافئ', hex: '#A5A19B' },
      { name: 'بيج كلاسيكي', hex: '#C7B59D' },
    ],
  },
  {
    id: 'sheer-chiffon',
    nameAr: 'شيفون حريري انسيابي',
    typeAr: 'طبقة داخلية شفافة',
    textureImage: chiffonTextureImg,
    weight: '120 جم/م²',
    opacity: 'نفاذية ضوء ممتازة (20%)',
    description: 'شيفون حريري خفيف يسمح بدخول أشعة الشمس المفلترة مع الحفاظ على الخصوصية نهاراً. ينسدل كالموج الخفيف مع أي حركة هواء.',
    availableColors: [
      { name: 'أبيض لؤلؤي', hex: '#FAF9F6' },
      { name: 'عاجي هادئ', hex: '#EDE8DD' },
      { name: 'رمادي جليدي', hex: '#E2E4E1' },
    ],
  },
  {
    id: 'thermal-blackout',
    nameAr: 'بلاك آوت عازل للحرارة',
    typeAr: 'عازل 100% ثلاثي الطبقات',
    textureImage: blackoutTextureImg,
    weight: '410 جم/م²',
    opacity: 'حجب كامل للضوء (100%)',
    description: 'نسيج تقني متطور بدون طبقة مطاطية مزعجة، يحجب الضوء بنسبة 100% ويقلل من تسرب حرارة الصيف والصوت الخارجي.',
    availableColors: [
      { name: 'بيج رملي', hex: '#C7B59D' },
      { name: 'رمادي دافئ', hex: '#A5A19B' },
      { name: 'أخضر داكن', hex: '#4A5D4D' },
    ],
  },
];

// مشاريع غير مكررة: كل صورة تمثل فئتها بدقة تامة
export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'proj-1',
    title: 'فيلا عصرية - صالة رئيسية',
    category: 'living',
    categoryLabel: 'غرفة معيشة',
    curtainType: 'ستائر ويفي بانورامية',
    fabricName: 'كتان طبيعي - أخضر هادئ',
    image: projectVillaWaveImg, // ستائر ويفي حقيقية على واجهة زجاجية
    description: 'تركيب ستائر ويفي مزدوجة (كتان طبيعي مع شيفون داخلي) على واجهة زجاجية ممتدة بارتفاع 4 أمتار مع مسار مخفي بالسقف المستعار.',
  },
  {
    id: 'proj-2',
    title: 'منطقة طعام مطلة على الفناء',
    category: 'living',
    categoryLabel: 'غرفة طعام',
    curtainType: 'ستائر رول سكرين مدمجة',
    fabricName: 'بلاك آوت وسكرين - بيج رملي',
    image: projectDiningRollerImg, // ستائر رول حقيقية في غرفة طعام
    description: 'ستائر رول عصرية مدمجة لحماية المساحة من حرارة الشمس المباشرة مع الحفاظ على امتداد الضوء الطبيعي للحديقة الخارجية.',
  },
  {
    id: 'proj-3',
    title: 'صالون ومجلس ضيافة كلاسيكي',
    category: 'majlis',
    categoryLabel: 'مجلس وصالون',
    curtainType: 'ستائر كلاسيكية بربطات جانبية',
    fabricName: 'مخمل مطفي مع شيفون مطرز',
    image: projectMajlisClassicImg, // ستائر كلاسيكية بربطات وكسرات تقليدية
    description: 'تصميم متناغم يبرز تفاصيل المجلس الكلاسيكي مع ربطات قماشية منسدلة وكسرات يدوية متقنة.',
  },
];
