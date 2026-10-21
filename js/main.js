/**
 * Efada Day Care Center (Down Syndrome) - مركز إفادة للرعاية النهارية (متلازمة داون)
 * License No. 204 - Ministry of Human Resources and Social Development
 * Bilingual Engine (AR/EN), Theme Switching, LTR Phone Number Enforcement, and Smooth Scrolling
 */

const translations = {
  ar: {
    skip: "الانتقال للمحتوى الرئيسي",
    
    // Top Strip
    topStripText: "• مركز إفادة للرعاية النهارية (متلازمة داون) ▪ ترخيص رقم ٢٠٤ - وزارة الموارد البشرية والتنمية الاجتماعية",
    registerPrompt: "سجل معنا",
    bookEvalShort: "حجز تقييم ↗",
    
    // Brand Header
    brand: "مركز إفادة",
    brandSub: "للرعاية النهارية (متلازمة داون)",
    navAbout: "من نحن",
    navPillars: "ركائزنا",
    navPrograms: "برامج المركز",
    navServices: "الخدمات المساندة",
    navContact: "التواصل والتسجيل",
    consultationCta: "حجز تقييم",
    
    // Hero
    heroPill: "ترخيص رقم ٢٠٤ - وزارة الموارد البشرية والتنمية الاجتماعية",
    heroSlogan: "أنا لمجتمعي إفادة",
    heroHook: "تعرف مين أنا ؟ تعرف مركز إفادة للرعاية النهارية ؟",
    requestConsultation: "طلب تقييم شامل",
    explorePrograms: "استكشف البرامج والخدمات",
    statGoalMastery: "نسبة تحقيق الأهداف الفردية",
    statChildrenSupported: "طفل تم تمكينهم ودمجهم",
    
    // Hero Showcase Card
    emblemTitle: "مركز إفادة للرعاية النهارية",
    badgeRatingHead: "حاصل على تقييم +A",
    badgeRatingSub: "من وزارة الموارد البشرية والتنمية الاجتماعية",
    badgeExpHighlight: "+١٣ عاماً",
    badgeExpSub: "في تعليم وتدريب ذوي متلازمة داون وأسرهم",
    
    // About Us
    aboutKicker: "من نحن",
    aboutTitle: "مركز إفادة للرعاية النهارية (متلازمة داون)",
    aboutStory1: "انطلقت مبادرة تأسيس مركز إفادة للرعاية النهارية من أخصائية التربية الخاصة <strong>{ديمة عبدالله الطويل}</strong>، وكان الهدف الرئيسي تأهيل وتدريب الأطفال من ذوي متلازمة داون وأمهاتهم في كيفية رعاية وتعليم ابنها بطريقة صحيحة.",
    aboutStory2: "وقد عملت على مجموعات لتدريب الأطفال بشكل خاص منذ عام 2009م، وظل الحصول على ترخيص رسمي هاجساً لهذا الهدف حتى حصلوا عليه عام 2013م بمسمى <strong>مركز إفادة للرعاية النهارية</strong> تشرف عليه وزارة الموارد البشرية والتنمية الاجتماعية بترخيص رقم <strong>(٢٠٤)</strong>.",
    aboutVisionTitle: "رؤيتنا",
    aboutVisionText: "الوصول بقدرات الأطفال من ذوي متلازمة داون إلى أعلى مستوى يستطيعون من التعليم الأكاديمي والمهني والوصول إلى منافسات مهنية ورياضية.",
    aboutGoalsTitle: "الأهداف والرسالة",
    aboutGoal1: "توفير خدمات التأهيل والرعاية الصحية للأطفال من ذوي متلازمة داون.",
    aboutGoal2: "توفير التأهيل النفسي للمراهقين والتأهيل المهني والرياضي.",
    aboutGoal3: "تطوير وتوفير برامج التدريب والمعلومات والخدمات المساندة لأسر الأطفال.",
    aboutGoal4: "تطوير وتوفير برامج التعليم والتأهيل لذوي متلازمة داون.",
    aboutGoal5: "تطوير المواد والبرامج التدريبية والعلمية لتأهيل المدربين والمدرسين مهنياً في مجال متلازمة داون والقصور العقلي.",
    founderTag: "المؤسسة والمديرة العامة",
    founderName: "أخصائية التربية الخاصة ديمة عبدالله الطويل",
    founderBio: "رائدة تأهيل ورعاية أطفال متلازمة داون وتدريب الكوادر التربوية بخبرة ممتدة منذ عام 2009م، ومؤسسة المبادرة التخصصية للدمج الرياضي والأكاديمي.",
    licenseLabel: "الترخيص الرسمي للمركز",
    licenseVal: "ترخيص رقم ٢٠٤ - وزارة الموارد البشرية والتنمية الاجتماعية",
    sinceLabel: "تاريخ الانطلاق",
    sinceVal: "منذ 2009م (ترخيص رسمي 2013م)",
    
    // Four Identity Pillars
    pillarsKicker: "هويتنا وركائزنا",
    pillarsTitle: "أربع ركائز أساسية للرعاية والتأهيل",
    pillarsSubtitle: "مستوحاة من ألوان شعارنا الرسمي، حيث يمثل كل لون بُعداً جوهرياً في رحلة تطور واستقلالية طفلك.",
    pGreenLabel: "الركيزة الخضراء • المظلة والساق",
    pGreenTitle: "الأمان والنمو التأسيسي",
    pGreenDesc: "ملاذ آمن وبيئة مهيأة يشعر فيها الطفل بالاستقرار النفسي الذي يُشكل الأساس العصبي والنفسي لكل تعلّم مستقبلي.",
    pRedLabel: "الركيزة الحمراء • مهد الرعاية والدفء",
    pRedTitle: "الدعم السلوكي باحتواء وعاطفة",
    pRedDesc: "برامج الدعم والتوجيه السلوكي الإيجابي القائمة على تفهم مشاعر الطفل وبناء مهارات بديلة وتعديل السلوك بروح إنسانية وتعزيز التعاون الأسري.",
    pBlueLabel: "الركيزة الزرقاء • جناح الثقة والتواصل",
    pBlueTitle: "النطق وبناء جسور التعبير",
    pBlueDesc: "علاج اضطرابات النطق واللغة، وتدريب وسائل التواصل المعزز والبديل (AAC) لتمليك كل طفل صوته وقدرته على التعبير الواثق.",
    pYellowLabel: "الركيزة الذهبية • شمس الانطلاق والأمل",
    pYellowTitle: "الاستقلالية وتحقيق الإنجازات",
    pYellowDesc: "تنمية المهارات الحياتية، والمنافسات الرياضية، والاحتفاء بكل إنجاز ومحطة جديدة نحو الاعتماد التام على الذات.",
    
    // Core Educational & Developmental Programs Section
    programsKicker: "برامج المركز",
    programsTitle: "البرامج المقدمة في مركز إفادة",
    programsSubtitle: "مناهج وركائز تأهيلية شاملة مصممة لتمكين أبنائنا معرفياً ومهنياً ورياضياً",
    
    progEarlyTitle: "برنامج التدخل المبكر",
    progEarlyPill1Head: "مهارات الاعتماد على النفس:",
    progEarlyPill1Text: "التدريب على مهارات الاستقلالية اليومية (الحمام، تفريش الأسنان، الأكل، ارتداء الملابس).",
    progEarlyPill2Head: "النمو اللغوي والتواصلي والمعرفي:",
    progEarlyPill2Text: "تنمية المهارات اللغوية والإدراكية والتعبيرية.",
    progEarlyPill3Head: "التطور الحركي:",
    progEarlyPill3Text: "تطوير المهارات الحركية الكبرى والدقيقة.",
    
    progAcadTitle: "برنامج التهيئة الأكاديمية",
    progAcadDesc: "تدريس المواد الأكاديمية الأساسية لبناء قاعدة معرفية متينة تمهيداً للدمج المدرسي الناجح:",
    subjMath: "رياضيات",
    subjReading: "قراءة",
    subjWriting: "كتابة",
    subjScience: "علوم",
    subjEnglish: "اللغة الإنجليزية",
    subjGeography: "جغرافيا",
    subjHistory: "تاريخ",
    subjIslamic: "دين",
    subjComputer: "حاسب آلي",
    
    progVocTitle: "برنامج التأهيل المهني",
    progVocPill1Head: "التقييم والتوجيه المهني:",
    progVocPill1Text: "قياس القدرات وتحديد المسار المهني الملائم.",
    progVocPill2Head: "الوحدات التدريبية:",
    progVocPill2Text: "تدريب عملي تطبيقي داخل الورش التدريبية وخارج المركز.",
    progVocPill3Head: "تدريب منتهي بالتوظيف:",
    progVocPill3Text: "تأهيل لسوق العمل وبرامج توظيف مباشرة.",
    
    progSportTitle: "البرنامج الرياضي",
    progSportDesc: "تطوير اللياقة البدنية، والتوافق الحركي، وتدريبات كرة القدم والأنشطة الرياضية التنافسية والدمج المجتمعي.",
    
    // Support Services Section
    servicesKicker: "الخدمات المساندة",
    servicesTitle: "الخدمات المساندة في مركز إفادة",
    servicesSubtitle: "عيادات متخصصة تقدم رعاية تأهيلية متكاملة وفق أحدث المعايير والبروتوكولات المعتمدة",
    clinicSpeech: "عيادات النطق والتخاطب",
    clinicBehavior: "عيادات تعديل السلوك",
    clinicPT: "العلاج الطبيعي والتأهيل الحركي",
    clinicOT: "العلاج الوظيفي والتكامل الحسي",
    clinicFamily: "الإرشاد الأسري لأسر ذوي متلازمة داون وحديثي الولادة",
    
    // Contact & Registration Section
    contactKicker: "التواصل والتسجيل",
    contactTitle: "قسم التواصل والتسجيل",
    contactSubtitle: "فرعان متكاملان للبنين والبنات تحت إشراف نخبة من الكوادر التأهيلية والتربوية",
    urgencyBanner: "المقاعد محدودة - ننتظركم بحب لحجز مقاعدكم",
    ministryServicePortal: "بوابة وزارة الموارد البشرية والتنمية الاجتماعية",
    ministryServiceTitle: "رابط التقديم على خدمات المراكز النهارية ↗",
    sponsorshipCallout: "التسجيل مجاناً عن طريق اختيار اسم مركز إفادة في موقع وزارة الموارد البشرية أو التواصل معنا",
    
    // Female Branch
    branchFemaleTitle: "قسم الإناث / فرع البنات",
    branchFemaleAge: "من الميلاد إلى عمر 45 سنة",
    branchDirectLine: "الخط المباشر:",
    branchSecondaryLine: "الخط الإضافي:",
    branchSharedLine: "الخط المشترك:",
    branchSocialChannel: "القناة الرسمية:",
    branchSocialChannels: "القنوات الرسمية:",
    branchViewMap: "عرض موقع الفرع على خرائط جوجل ↗",
    
    // Male Branch
    branchMaleTitle: "قسم الذكور / فرع البنين",
    branchMaleAge: "من 12 سنة إلى 45 سنة",
    
    // Footer
    footerCopy: "مركز إفادة للرعاية النهارية. جميع الحقوق محفوظة.",
    footerTechSupport: "قسم الدعم الفني:",
    footerLicense: "ترخيص رقم ٢٠٤ - وزارة الموارد البشرية والتنمية الاجتماعية"
  },
  
  en: {
    skip: "Skip to main content",
    
    // Top Strip
    topStripText: "• Efada Day Care Center (Down Syndrome) ▪ License No. 204 - Ministry of Human Resources and Social Development",
    registerPrompt: "Register with us",
    bookEvalShort: "Book Evaluation ↗",
    
    // Brand Header
    brand: "EFADA CENTER",
    brandSub: "Day Care Center (Down Syndrome)",
    navAbout: "About Us",
    navPillars: "Our Pillars",
    navPrograms: "Center Programs",
    navServices: "Support Services",
    navContact: "Contact & Registration",
    consultationCta: "Book Evaluation",
    
    // Hero
    heroPill: "License No. 204 - Ministry of Human Resources and Social Development",
    heroSlogan: "For my community, I am Efada",
    heroHook: "Do you know who I am? Do you know Efada Day Care Center?",
    requestConsultation: "Request Comprehensive Evaluation",
    explorePrograms: "Explore Programs & Services",
    statGoalMastery: "Individualized Goal Mastery",
    statChildrenSupported: "Children Empowered & Integrated",
    
    // Hero Showcase Card
    emblemTitle: "Efada Day Care Center",
    badgeRatingHead: "Rated A+ Quality",
    badgeRatingSub: "Ministry of Human Resources & Social Development",
    badgeExpHighlight: "13+ Years",
    badgeExpSub: "In educating & training individuals with Down Syndrome & their families",
    
    // About Us
    aboutKicker: "About Us",
    aboutTitle: "Efada Day Care Center (Down Syndrome)",
    aboutStory1: "The initiative to establish Efada Day Care Center was launched by Special Education Specialist <strong>Dema Abdullah Al-Tawil</strong>, with the primary goal of rehabilitating and training children with Down Syndrome and empowering their mothers in proper care and educational techniques.",
    aboutStory2: "Having worked with specialized training groups for children since 2009, obtaining official licensing was a constant goal achieved in 2013 under the name <strong>Efada Day Care Center</strong>, supervised by the Ministry of Human Resources and Social Development under License No. <strong>(204)</strong>.",
    aboutVisionTitle: "Our Vision",
    aboutVisionText: "Enabling individuals with Down Syndrome to reach their highest potential in academic and vocational education, as well as competitive athletic and vocational leagues.",
    aboutGoalsTitle: "Goals & Mission",
    aboutGoal1: "Providing comprehensive rehabilitation and healthcare services for children with Down Syndrome.",
    aboutGoal2: "Providing psychological rehabilitation for adolescents and specialized vocational and athletic training.",
    aboutGoal3: "Developing and delivering training programs, knowledge resources, and support services for families.",
    aboutGoal4: "Creating and delivering educational and rehabilitation curricula tailored for Down Syndrome.",
    aboutGoal5: "Developing training and scientific materials to qualify coaches and teachers in Down Syndrome and developmental support.",
    founderTag: "Founder & General Director",
    founderName: "Special Education Specialist: Dema Abdullah Al-Tawil",
    founderBio: "Pioneer in Down Syndrome pediatric rehabilitation, family empowerment, and vocational/athletic integration programs with active practice since 2009.",
    licenseLabel: "Official License",
    licenseVal: "License No. 204 - Ministry of Human Resources and Social Development",
    sinceLabel: "Establishment",
    sinceVal: "Since 2009 (Officially Licensed 2013)",
    
    // Four Identity Pillars
    pillarsKicker: "Our Foundation",
    pillarsTitle: "Four Core Pillars of Developmental Care",
    pillarsSubtitle: "Represented by the colors of our official emblem, each element forms an essential dimension of your child's journey.",
    pGreenLabel: "Green Pillar • The Roof & Stem",
    pGreenTitle: "Shelter & Foundational Growth",
    pGreenDesc: "A safe, structured sanctuary where children feel protected and grounded, laying the neurological groundwork for all future learning.",
    pRedLabel: "Red Pillar • The Compassion Cradle",
    pRedTitle: "Compassion & Behavioral Support",
    pRedDesc: "Positive behavioral guidance and support programs based on understanding the child's emotions, building alternative skills, humanely modifying behavior, and fostering family cooperation.",
    pBlueLabel: "Blue Pillar • The Trust Wing",
    pBlueTitle: "Speech & Expressive Bridges",
    pBlueDesc: "Speech-language therapy, articulation coaching, and augmentative and alternative communication (AAC) giving every child their rightful voice.",
    pYellowLabel: "Gold Pillar • The Rising Sun",
    pYellowTitle: "Autonomy & Milestone Triumphs",
    pYellowDesc: "Life skills, gross motor dexterity, classroom readiness, and athletic integration celebrating genuine self-reliance.",
    
    // Core Educational & Developmental Programs Section
    programsKicker: "Center Programs",
    programsTitle: "Programs Offered at Efada Center",
    programsSubtitle: "Comprehensive educational and developmental curricula designed to empower our children cognitively, vocationally, and athletically.",
    
    progEarlyTitle: "Early Intervention Program",
    progEarlyPill1Head: "Self-Reliance Skills:",
    progEarlyPill1Text: "Training on daily independence skills (toilet training, tooth brushing, eating, dressing).",
    progEarlyPill2Head: "Linguistic, Communicative & Cognitive Growth:",
    progEarlyPill2Text: "Developing receptive, cognitive, and expressive linguistic abilities.",
    progEarlyPill3Head: "Motor Development:",
    progEarlyPill3Text: "Advancing gross and fine motor coordination.",
    
    progAcadTitle: "Academic Readiness Program",
    progAcadDesc: "Instruction in core academic subjects to build solid foundational literacy and numeracy for mainstream school inclusion:",
    subjMath: "Mathematics",
    subjReading: "Reading",
    subjWriting: "Writing",
    subjScience: "General Science",
    subjEnglish: "English Language",
    subjGeography: "Geography",
    subjHistory: "History",
    subjIslamic: "Islamic Studies",
    subjComputer: "Computer Skills",
    
    progVocTitle: "Vocational Rehabilitation Program",
    progVocPill1Head: "Vocational Assessment & Guidance:",
    progVocPill1Text: "Assessing individual abilities and defining suitable career pathways.",
    progVocPill2Head: "Hands-on Training Units:",
    progVocPill2Text: "Applied practical training inside specialized workshops and external partner sites.",
    progVocPill3Head: "Training Leading to Employment:",
    progVocPill3Text: "Direct labor market readiness and structured placement programs.",
    
    progSportTitle: "Athletic & Physical Fitness Program",
    progSportDesc: "Developing physical fitness, motor coordination, football drills, competitive sports tournaments, and community integration.",
    
    // Support Services Section
    servicesKicker: "Support Services",
    servicesTitle: "Support Services at Efada Center",
    servicesSubtitle: "Specialized clinics delivering integrated therapeutic care in accordance with certified rehabilitation standards.",
    clinicSpeech: "Speech & Language Pathology Clinics",
    clinicBehavior: "Behavior Modification Clinics",
    clinicPT: "Physical Therapy & Motor Rehabilitation",
    clinicOT: "Occupational Therapy & Sensory Integration",
    clinicFamily: "Family Guidance for Down Syndrome Families & Newborns",
    
    // Contact & Registration Section
    contactKicker: "Contact & Admissions",
    contactTitle: "Admissions & Registration Hub",
    contactSubtitle: "Two fully equipped campuses for boys and girls under specialized pedagogical supervision",
    urgencyBanner: "Limited seats available - We warmly look forward to reserving your child's place",
    ministryServicePortal: "Ministry of Human Resources & Social Development Portal",
    ministryServiceTitle: "Day Care Centers Application Portal ↗",
    sponsorshipCallout: "Free government-sponsored registration by selecting Efada Center on the Ministry of Human Resources portal or by contacting us directly.",
    
    // Female Branch
    branchFemaleTitle: "Female Section / Girls' Branch",
    branchFemaleAge: "From Birth to 45 Years",
    branchDirectLine: "Direct Line:",
    branchSecondaryLine: "Secondary Line:",
    branchSharedLine: "Shared Branch Line:",
    branchSocialChannel: "Official Channel:",
    branchSocialChannels: "Official Channels:",
    branchViewMap: "View Campus Location on Google Maps ↗",
    
    // Male Branch
    branchMaleTitle: "Male Section / Boys' Branch",
    branchMaleAge: "From 12 to 45 Years",
    
    // Footer
    footerCopy: "Efada Day Care Center. All Rights Reserved.",
    footerTechSupport: "Technical Support:",
    footerLicense: "License No. 204 - Ministry of Human Resources and Social Development"
  }
};

/**
 * Enforce strict LTR on all phone numbers and numeric codes across the entire document
 */
function enforcePhoneBidiIntegrity() {
  document.querySelectorAll('.phone-number, [dir="ltr"], a[href^="tel:"]').forEach((el) => {
    el.setAttribute("dir", "ltr");
    el.style.direction = "ltr";
    el.style.unicodeBidi = "isolate";
    el.style.display = "inline-block";
  });
}

/**
 * Apply Language (en / ar)
 */
function applyLanguage(lang) {
  const currentLang = lang === "ar" ? "ar" : "en";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  const langDict = translations[currentLang] || translations.ar;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (langDict[key]) {
      if (el.tagName.toLowerCase() === "input" || el.tagName.toLowerCase() === "textarea") {
        el.setAttribute("placeholder", langDict[key]);
      } else {
        el.innerHTML = langDict[key];
      }
    }
  });

  const languageToggle = document.getElementById("languageToggle");
  if (languageToggle) {
    languageToggle.textContent = currentLang === "ar" ? "English" : "العربية";
  }

  // Always enforce phone LTR integrity
  enforcePhoneBidiIntegrity();

  try {
    localStorage.setItem("efada_lang", currentLang);
  } catch (e) {
    // LocalStorage fallback
  }
}

/**
 * Theme Manager (Light / Dark)
 */
function applyTheme(theme) {
  const currentTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);

  const themeIcon = document.querySelector(".theme-icon");
  if (themeIcon) {
    themeIcon.textContent = currentTheme === "dark" ? "☀️" : "🌙";
  }

  try {
    localStorage.setItem("efada_theme", currentTheme);
  } catch (e) {
    // LocalStorage fallback
  }
}

/**
 * Smooth internal anchor scrolling
 */
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });
}

/**
 * DOM Initialization
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Language restore or default Arabic
  const savedLang = localStorage.getItem("efada_lang") || "ar";
  applyLanguage(savedLang);

  const languageToggle = document.getElementById("languageToggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const nextLang = document.documentElement.lang === "ar" ? "en" : "ar";
      applyLanguage(nextLang);
    });
  }

  // 2. Theme restore or system preference
  const savedTheme = localStorage.getItem("efada_theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  // 3. Smooth scrolling
  setupSmoothScrolling();

  // 4. Update footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = "2026";
  }

  // 5. Final enforcement of phone number LTR integrity
  enforcePhoneBidiIntegrity();
});
