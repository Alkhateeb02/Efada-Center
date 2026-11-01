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
    brand: "مركز إفادة للرعاية النهارية",
    brandTitle: "مركز إفادة",
    brandSub: "للرعاية النهارية (متلازمة داون)",
    navAbout: "من نحن",
    navPrograms: "برامج المركز",
    navServices: "الخدمات المساندة",
    navPlatform: "منصة إفادة",
    navContact: "القبول والتسجيل",
    consultationCta: "حجز تقييم",
    
    // Hero
    heroPill: "ترخيص رقم ٢٠٤ - وزارة الموارد البشرية والتنمية الاجتماعية",
    heroSlogan: "أنا لمجتمعي إفادة",
    heroHook: "تعرف مين أنا ؟ تعرف مركز إفادة ؟",
    requestConsultation: "طلب تقييم شامل",
    explorePrograms: "استكشف البرامج والخدمات",
    statGoalMasteryNum: "95%",
    statGoalMastery: "نسبة تحقيق الأهداف الفردية",
    statChildrenNum: "+1000",
    statChildrenSupported: "طفل وطفلة تم تمكينهم ودمجهم مجتمعياً",
    statSpecialistsNum: "+800",
    statSpecialistsTrained: "أخصائية وأخصائي تم تدريبهم تدريب تخصصي",
    
    // Hero Showcase Card
    emblemTitle: "مركز إفادة للرعاية النهارية",
    badgeRatingHead: "حاصل على تقييم +A",
    badgeRatingSub: "من وزارة الموارد البشرية والتنمية الاجتماعية",
    badgeExpHighlight: "+١٣ عاماً",
    badgeExpSub: "في تعليم وتدريب ذوي متلازمة داون وأسرهم",
    heroVideo3Tag: "بكم تكتمل فرحتنا، وبإنجازاتكم نفخر دائماً",
    
    // About Us
    aboutKicker: "من نحن",
    aboutTitle: "مركز إفادة للرعاية النهارية (متلازمة داون)",
    aboutStory1: "انطلقت مبادرة تأسيس مركز إفادة للرعاية النهارية من أخصائية التربية الخاصة <strong>{ديمة عبدالله الطويل}</strong>، وكان الهدف الرئيسي تأهيل وتدريب الأطفال من ذوي متلازمة داون وأمهاتهم في كيفية رعاية وتعليم ابنها بطريقة صحيحة.",
    aboutStory2: "وقد عملت على مجموعات لتدريب الأطفال بشكل خاص منذ عام 2009م، وظل الحصول على ترخيص رسمي هاجساً لهذا الهدف حتى حصلوا عليه عام 2013م بمسمى <strong>مركز إفادة للرعاية النهارية</strong> تشرف عليه وزارة الموارد البشرية والتنمية الاجتماعية بترخيص رقم <strong>(٢٠٤)</strong>. يضع مركز إفادة نصب عينيه استراتيجية طويلة الأمد تهدف لتحقيق تميز نوعي على مستوى الخدمات والبرامج المقدمة للأطفال وذويهم، وبناء عليه تم العمل على تطوير أساليب ونماذج للعمل تتماشى مع المجتمع اعتمد الفريق في التخطيط والتنفيذ على الأساليب العلمية الحديثة لكافة عناصر الخدمات.",
    aboutVisionTitle: "رؤيتنا",
    aboutVisionText: "الوصول بقدرات الأطفال من ذوي متلازمة داون إلى أعلى مستوى يستطيعون من التعليم الأكاديمي والمهني والوصول إلى منافسات مهنية ورياضية.",
    aboutGoalsTitle: "الأهداف والرسالة",
    aboutGoal1: "توفير خدمات التأهيل والرعاية الصحية للأطفال من ذوي متلازمة داون.",
    aboutGoal2: "تطوير وتوفير برامج التأهيل النفسي، التأهيل المهني، والتأهيل الرياضي.",
    aboutGoal3: "تطوير وتوفير برامج التدريب والمعلومات والخدمات المساندة لأسر الأطفال.",
    aboutGoal4: "تطوير وتوفير برامج التعليم والتأهيل لذوي متلازمة داون.",
    aboutGoal5: "تطوير المواد والبرامج التدريبية والعلمية لتأهيل المدربين والمدرسين مهنياً في مجال متلازمة داون والقصور العقلي.",
    founderTag: "المدير التنفيذي",
    founderName: "أخصائية التربية الخاصة ديمة عبدالله الطويل",
    founderBioLead: "خبرة ممتدة + ٢٠ عاماً في مجال تدريب وتأهيل ذوي متلازمة داون وأسرهم ،، مؤسسة عدة مبادرات منها :",
    founderInit1: "مبادرة أنا أقدر",
    founderInit2: "مبادرة أنا لمجتمعي إفادة",
    founderInit3: "مبادرة علاج طفل مقيم",
    founderInit4: "مبادرة التدريب المنتهي بالتوظيف",
    founderInit5: "مبادرة تفعيل العيادات الخارجية لتعليم الطلاب ذوي الدخل المحدود",
    founderInit6: "مبادرة تصميم مناهج وبرامج تخصصية لذوي متلازمة داون",
    founderInit7: "مبادرة تدريب الكوادر على برامج تخصصية للجلسات الفردية، إدارة المجموعة وتعديل السلوك",
    founderInit8: "مبادرة دمج الطلاب من خلال شراكات بمختلف المجالات منها : الرياضية والمهنية",
    licenseLabel: "الترخيص الرسمي للمركز",
    licenseVal: "ترخيص رقم ٢٠٤ - وزارة الموارد البشرية والتنمية الاجتماعية",
    sinceLabel: "تاريخ افتتاح فروع المركز",
    sinceGirls: "فرع البنات: 05/11/2013م",
    sinceBoys: "فرع البنين: 27/07/2023م",
    stagePhotoCaption: "لحظات مليئة بالثقة والإبداع ، أثبتوا فيها أن لكل موهبة نوراً يستحق أن يسطع. نجومنا الصغار .. بكم يزهو المسرح وبإبداعكم نفخر",
    
    // Core Educational & Developmental Programs Section
    programsKicker: "برامج المركز",
    programsTitle: "برامج مركز إفادة",
    programsSubtitle: "مناهج وبرامج تخصصية شاملة مصممة لتمكين أبنائنا معرفياً ومهنياً ورياضياً",
    
    progEarlyTitle: "برنامج التدخل المبكر",
    progEarlyDesc: "تنمية وتأهيل المهارات الأساسية والاستقلالية المبكرة :",
    progEarlyPill1Head: "مهارات الاعتماد على النفس:",
    progEarlyPill1Text: "التدريب على مهارات الاستقلالية اليومية (الحمام، تفريش الأسنان، الأكل، ارتداء الملابس).",
    progEarlyPill2Head: "النمو اللغوي والتواصلي والمعرفي:",
    progEarlyPill2Text: "تنمية المهارات اللغوية والإدراكية والتعبيرية.",
    progEarlyPill3Head: "التطور الحركي:",
    progEarlyPill3Text: "تطوير المهارات الحركية الكبرى والدقيقة.",
    
    progAcadTitle: "برنامج التهيئة الأكاديمية",
    progAcadDesc: "مناهج أكاديمية :",
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
    progVocInProgress: "(قيد التنفيذ)",
    progVocPill1Head: "التقييم والتوجيه المهني:",
    progVocPill1Text: "قياس القدرات وتحديد المسار المهني الملائم.",
    progVocPill2Head: "الوحدات التدريبية:",
    progVocPill2Text: "التدريب في الوحدات التدريبية داخل وخارج المركز.",
    progVocPill3Head: "تدريب منتهي بالتوظيف",
    progVocPill3Text: "",
    progVocVideoTitle: "إلى نجومنا، أنتم أجمل حكايات هذا العام، بكم يكتمل الإنجاز",
    
    progSportTitle: "البرنامج الرياضي",
    sportClubTag: "نادي إفادة الأولمبياد الخاص السعودي",
    progSportDesc: "نادي إفادة للأولمبياد الخاص للتأهيل للبطولات المحلية والدولية بالتعاون مع وزارة الرياضة ممثلة بالاتحاد السعودي للرياضة الجامعية وبالشراكة مع جامعة الأميرة نورة بنت عبدالرحمن",
    
    // Support Services Section
    servicesKicker: "الخدمات المساندة",
    servicesTitle: "الخدمات المساندة في مركز إفادة",
    servicesSubtitle: "عيادات متخصصة تقدم رعاية تأهيلية متكاملة",
    clinicSpeech: "عيادات النطق والتخاطب",
    clinicBehavior: "عيادات تعديل السلوك",
    clinicPT: "العلاج الطبيعي والتأهيل الحركي",
    clinicOT: "العلاج الوظيفي والتكامل الحسي",
    clinicFamily: "الإرشاد الأسري لأسر ذوي متلازمة داون وحديثي الولادة",
    
    // Educational Platform Section
    platformKicker: "المنصة الرقمية",
    platformHeading: "منصة إفادة التعليمية",
    platformDescP1: "حرصًا من مركز إفادة على تطوير العملية التعليمية وتعزيز التواصل مع أولياء الأمور، يسعدنا أن نعرّفكم بمنصتنا التعليمية، والتي تهدف إلى متابعة رحلة الطالب التعليمية وتقدّمه بشكل مستمر.",
    platformDescP2: "تتيح المنصة الاطلاع على الأهداف التربوية الفردية لكل طالب، ومتابعة المهارات والأنشطة التعليمية (الواجبات - أوراق العمل - بطاقات التدريس)، وتقارير الإنجاز ومستوى التقدّم في تحقيق الأهداف.",
    platformDescP3: "منصة إفادة التعليمية شراكة مستمرة بين المركز والأسرة لدعم تطور أبنائنا وبناتنا.",
    platformBtn: "تحميل منصة إفادة التعليمية ↗",
    platformWebBtn: "الدخول للمنصة عبر المتصفح ↗",
    
    // Contact & Registration Section
    contactKicker: "القبول والتسجيل",
    contactTitle: "قسم القبول والتسجيل",
    contactSubtitle: "فرعان في مدينة الرياض (بنين - بنات) تحت قيادة وتدريب نخبة من الكوادر",
    urgencyBanner: "المقاعد محدودة - ننتظركم بحب لحجز مقاعدكم",
    ministryServicePortal: "بوابة وزارة الموارد البشرية والتنمية الاجتماعية",
    ministryServiceTitle: "رابط التقديم على خدمات المراكز النهارية ↗",
    sponsorshipCallout: "التسجيل مجاناً في المواعيد التي تحددها الوزارة عن طريق اختيار اسم مركز إفادة للرعاية النهارية عبر موقع وزارة الموارد البشرية والتنمية الاجتماعية",
    
    // Female Branch
    branchFemaleTitle: "فرع البنات",
    branchFemaleAge: "من الميلاد إلى 45 سنة (بنات) • ومن الميلاد إلى 12 سنة (بنين)",
    branchSocialChannels: "القنوات الرسمية:",
    branchViewMap: "عرض موقع الفرع على خرائط جوجل ↗",
    
    // Male Branch
    branchMaleTitle: "فرع البنين",
    branchMaleAge: "من 12 سنة إلى 45 سنة",
    
    // Engagement Section (Complaints, Partnerships & Careers)
    engagementKicker: "التواصل والشراكات والتوظيف",
    engagementTitle: "تواصل معنا",
    complaintsCardTitle: "للشكاوى والاقتراحات",
    complaintsWhatsappLabel: "لرفع الشكوى / الاقتراح للرئيس التنفيذي عبر رسالة نصية على الواتساب:",
    complaintsEmailLabel: "لرفع الشكوى / الاقتراح للرئيس التنفيذي عبر الإيميل:",
    complaintsFemaleFormLabel: "لرفع شكوى تخص فرع البنات وفق البنود بالرابط التالي:",
    complaintsFemaleFormBtn: "نموذج شكاوى فرع البنات ↗",
    complaintsMaleFormLabel: "لرفع شكوى تخص فرع البنين وفق البنود بالرابط التالي:",
    complaintsMaleFormBtn: "نموذج شكاوى فرع البنين ↗",
    partnershipsCardTitle: "للتعاون والشراكات المجتمعية والمبادرات",
    partnershipsWhatsappLabel: "رقم الواتساب:",
    partnershipsEmailLabel: "البريد الإلكتروني:",
    careersCardTitle: "انضم إلى كادر مركز إفادة للرعاية النهارية",
    careersGirlsPrompt: "- (فرع البنات) بإرسال السيرة الذاتية والمؤهلات على البريد الإلكتروني التالي:",
    careersBoysPrompt: "- (فرع البنين) بإرسال السيرة الذاتية والمؤهلات على البريد الإلكتروني التالي:",
    
    // Final Standalone Video Section (Efada Video 4 - آخر شي)
    finalVideoKicker: "مشاهد من مركز إفادة",
    finalVideoTitle: "إلى نجومنا، أنتم أجمل حكايات هذا العام، بكم يكتمل الإنجاز",
    
    // Footer
    footerCopy: "مركز إفادة للرعاية النهارية. جميع الحقوق محفوظة.",
    footerLicense: "ترخيص رقم ٢٠٤ - وزارة الموارد البشرية والتنمية الاجتماعية",

    // About media tags & captions
    aboutVideo6Tag: "مسيرة التمكين والعطاء في مركز إفادة",
    aboutVisionPicAlt: "رؤية مركز إفادة لتأهيل وتمكين ذوي متلازمة داون",
    aboutGoalsPicAlt: "أهداف ورسالة مركز إفادة للرعاية النهارية",
    aboutVideo7Tag: "كلمة الإدارة التنفيذية لمركز إفادة",

    // Programs media
    progEarlyVideoTag: "جانب من جلسات وتدريبات برنامج التدخل المبكر",
    progEarlyPicCaption: "بطاقات التعلم المصورة ووسائل التدخل المبكر لتنمية المهارات الإدراكية",
    progAcadVideo1Tag: "التطبيق العملي للبرنامج الأكاديمي",
    progAcadVideo2Tag: "تنمية المهارات الأكاديمية والتعليمية للطلاب",

    // Clinics descriptions & media
    clinicSpeechDesc: "تنمية مهارات الطلاب اللغوية لتمكينهم من التواصل والتعبير عن احتياجاتهم، والتفاعل مع من حولهم",
    clinicSpeechVideo1Tag: "جلسات النطق والتخاطب وتطوير مخارج الحروف",
    clinicSpeechVideo2Tag: "تنمية التواصل اللغوي والتعبيري",
    clinicBehaviorDesc: "تنمية سلوكيات الطلاب الإيجابية وتدعيم السلوك البديل عبر برامج التعزيز الإيجابي",
    clinicBehaviorMediaTag: "تطبيقات برامج التعزيز وتعديل السلوك الإيجابي",
    clinicPTDesc: "يهدف إلى تحسين حركة الطلاب من خلال تدريبهم على مهارات التوازن والقوة وتنمية القدرات البدنية الوظيفية",
    clinicPTVideoTag: "تدريبات العلاج الطبيعي والتأهيل الحركي الوظيفي",
    clinicOTDesc: "يهدف إلى تحسين التآزر بين العين واليد ، وتنمية التحكم الحركي الدقيق لتمكين الطلاب من استخدام الأدوات المدرسية وآداء الأنشطة اليومية باستقلال",
    clinicOTMediaTag: "أنشطة العلاج الوظيفي والتكامل الحسي والمهارات الدقيقة",

    // How We Learn Subsection
    learnMethodKicker: "طرق التعلم",
    learnMethodTitle: "هل تساءلتم كيف نتعلم في مركز إفادة ؟",
    learnMethodSubtitle: "بيئة تعليمية تأهيلية متكاملة تصنع من كل هدف خطوة نحو استقلالية وتميز أبنائنا وبناتنا",
    learnMethod1Title: "نتعلم بالجلسات الفردية",
    learnMethod1Desc: "تهدف الجلسات الفردية إلى تدريب كل طالب تدريب مخصص بناء على خطته الفردية التربوية لمراعاة الفروق الفردية",
    learnMethod1Tag: "جانب من الجلسات التدريبية الفردية",
    learnMethod2Title: "ونتعلم بالحلقات الجماعية",
    learnMethod2Desc: "تهدف المجموعات التعليمية إلى دمج الطالب مع أقرانه لتطوير مهاراته الاجتماعية، وتعزيز نمذجة السلوك الإيجابي (التعلم بالتقليد)، ولتعميم المهارات التعليمية عبر مختلف المواقف اليومية",
    learnMethod2Tag: "أنشطة وتفاعل المجموعات التعليمية الجماعية",
    learnMethod3Title: "كما نتعلم عن طريق تحليل المهارة",
    learnMethod3Desc: "تهدف إلى تجزئة الأهداف إلى خطوات تتناسب مع قدرات الطلاب لتمكينه من التعلم والتدريب، ومنح الطالب شعور الإنجاز عند إتقان كل خطوة",

    // Platform app downloads
    platformIosBtn: "تحميل منصة إفادة التعليمية iOS ↗",
    platformAndroidBtn: "تحميل منصة إفادة التعليمية Android ↗",
    platformStoreAppStore: "متوفر على App Store",
    platformStoreGooglePlay: "متوفر على Google Play",

    // Success Stories
    storiesKicker: "نماذج ملهمة",
    storiesTitle: "قصص النجاح",
    storiesSubtitle: "نحتفي بقصص إصرار ونجاح أبطالنا الملهمة وخطواتهم الواثقة نحو المستقبل",
    story1Caption: "قصة نجاح البطل عبدالله الرشدان",
    story2Caption: "قصة نجاح البطل صالح المشعبي",

    // National Pride Section
    nationalKicker: "فخر وانتماء",
    nationalTitle: "وطني .. عزّنا وانتماؤنا 🇸🇦",
    nationalSubtitle: "في وطننا ننتمي، وبقيمه نعتز، وبإنجازاته نفخر، وعلى أرضه نحلم ونتعلم ونبدع",
    nationalVid1Caption: "المملكة العربية السعودية هي وطن يسكن القلوب، وتاريخ نفخر به، وهوية نعتز بها، ومستقبل نشارك جميعًا في صناعته.",
    nationalVid2Caption: "في وطننا ننتمي، وبقيمه نعتز، وبإنجازاته نفخر، وعلى أرضه نحلم ونتعلم ونبدع، فاللهم احفظ لنا مملكتنا",
    nationalPic7Caption: "سنصبح عضو فاعل في مجتمعنا ونقوم بمساعدة من يحتاج إلينا",
    nationalPic6Caption: "احتفالات وفعاليات اليوم الوطني ويوم التأسيس في مركز إفادة",
    nationalStageCaption: "لحظات مليئة بالثقة والإبداع ، أثبتوا فيها أن لكل موهبة نوراً يستحق أن يسطع. نجومنا الصغار .. بكم يزهو المسرح وبإبداعكم نفخر",

    // Partnerships & Careers Updates
    partnershipsHilalCaption: "استضافة نادي الهلال لأبطالنا",
    partnershipsHilalVidCaption: "توثيق استضافة نادي الهلال لأبطال مركز إفادة",
    careersTribute: "كادر التربية الخاصة هم الذين يرون الإمكانات حين قد لا يراها الآخرون، ويحتفون بالخطوات الصغيرة وكأنها انتصارات عظيمة، ويمنحون طلابهم من وقتهم وقلوبهم وجهدهم، إيمانًا بأن لكل طالب قدرة، ولكل إنجاز قيمة، ولكل إنسان حقًا في أن يتعلم ويُقدَّر ويُحتفى به.<br><br><strong>فخورون بكم.. يا من جعلتم من مهنتكم رسالة، ومن عطائكم أثرًا، ومن طلابكم حكايات نجاح تستحق أن تُروى</strong>",

    // Annual Closing Ceremony
    ceremonyKicker: "حصاد الإبداع السنوي",
    ceremonyTitle: "الحفل الختامي السنوي",
    ceremonySubtitle: "لحظات مليئة بالثقة والإبداع ، أثبتوا فيها أن لكل موهبة نوراً يستحق أن يسطع. نجومنا الصغار .. بكم يزهو المسرح وبإبداعكم نفخر",
    ceremonyVid1Tag: "العرض المسرحي واللوحات الإبداعية لنجومنا الصغار",
    ceremonyVid2Tag: "فقرات التكريم وتتويج إنجازات الطلاب السنوية",
    ceremonyVid3Tag: "فرحة النجاح والتخرج والاحتفاء مع الأهالي والكوادر",

    // Summer Program
    summerKicker: "صيف مميز ومثمر",
    summerTitle: "البرنامج الصيفي لمركز إفادة",
    summerDesc: "نهاية كل عامٍ دراسي نفتح أبوابنا لاستقبال الطلاب في الإجازة الصيفية وفق برنامج إفادة الصيفي (تعليمي - تدريبي - تأهيلي - ترفيهي) ، ",
    summerRegisterBtn: "سجل معنا ↗",
    summerVideoTag: "أنشطة وفعاليات برنامج إفادة الصيفي الترفيهي والتأهيلي",

    // Email Modal Action Sheet
    emailModalTitle: "اختر طريقة التواصل عبر البريد",
    emailModalSub: "يمكنك إرسال الرسالة عبر تطبيقك المفضل أو نسخ البريد مباشرة:",
    emailOptionDefault: "فتح في تطبيق البريد الأساسي",
    emailOptionGmail: "فتح في متصفح / تطبيق Gmail",
    emailOptionOutlook: "فتح في متصفح / تطبيق Outlook",
    emailOptionCopy: "نسخ عنوان البريد الإلكتروني",
    emailToastCopied: "تم نسخ عنوان البريد الإلكتروني بنجاح!",
    emailModalClose: "إغلاق"

  },
  
  en: {
    skip: "Skip to main content",
    
    // Top Strip
    topStripText: "• Efada Day Care Center (Down Syndrome) ▪ License No. 204 - Ministry of Human Resources and Social Development",
    registerPrompt: "Register with us",
    bookEvalShort: "Book Evaluation ↗",
    
    // Brand Header
    brand: "Efada Day Care Center",
    brandTitle: "Efada Center",
    brandSub: "Day Care (Down Syndrome)",
    navAbout: "About Us",
    navPrograms: "Center Programs",
    navServices: "Support Services",
    navPlatform: "Efada Platform",
    navContact: "Admissions & Registration",
    consultationCta: "Book Evaluation",
    
    // Hero
    heroPill: "License No. 204 - Ministry of Human Resources and Social Development",
    heroSlogan: "For my community, I am Efada",
    heroHook: "Do you know who I am? Do you know Efada Center?",
    requestConsultation: "Request Comprehensive Evaluation",
    explorePrograms: "Explore Programs & Services",
    statGoalMasteryNum: "95%",
    statGoalMastery: "Individualized Goal Mastery Rate",
    statChildrenNum: "+1,000",
    statChildrenSupported: "Children Empowered & Socially Integrated",
    statSpecialistsNum: "+800",
    statSpecialistsTrained: "Specialists Professionally Trained",
    
    // Hero Showcase Card
    emblemTitle: "Efada Day Care Center",
    badgeRatingHead: "Rated A+ Quality",
    badgeRatingSub: "Ministry of Human Resources & Social Development",
    badgeExpHighlight: "13+ Years",
    badgeExpSub: "In educating & training individuals with Down Syndrome & their families",
    heroVideo3Tag: "With you our joy is complete, and we are always proud of your achievements",
    
    // About Us
    aboutKicker: "About Us",
    aboutTitle: "Efada Day Care Center (Down Syndrome)",
    aboutStory1: "The initiative to establish Efada Day Care Center was launched by Special Education Specialist <strong>Dema Abdullah Al-Tawil</strong>, with the primary goal of rehabilitating and training children with Down Syndrome and empowering their mothers in proper care and educational techniques.",
    aboutStory2: "Having worked with specialized training groups for children since 2009, obtaining official licensing was a constant goal achieved in 2013 under the name <strong>Efada Day Care Center</strong>, supervised by the Ministry of Human Resources and Social Development under License No. <strong>(204)</strong>. Efada Center sets a long-term strategy aimed at achieving qualitative excellence across services and programs provided to children and their families, developing modern models aligned with community needs and scientific standards.",
    aboutVisionTitle: "Our Vision",
    aboutVisionText: "Enabling individuals with Down Syndrome to reach their highest potential in academic and vocational education, as well as competitive athletic and vocational leagues.",
    aboutGoalsTitle: "Goals & Mission",
    aboutGoal1: "Providing comprehensive rehabilitation and healthcare services for children with Down Syndrome.",
    aboutGoal2: "Developing and providing psychological rehabilitation, vocational training, and athletic training.",
    aboutGoal3: "Developing and delivering training programs, knowledge resources, and support services for families.",
    aboutGoal4: "Creating and delivering educational and rehabilitation curricula tailored for Down Syndrome.",
    aboutGoal5: "Developing training and scientific materials to qualify coaches and teachers in Down Syndrome and developmental support.",
    founderTag: "Executive Director",
    founderName: "Special Education Specialist: Dema Abdullah Al-Tawil",
    founderBioLead: "Over 20+ years of extended expertise in training and rehabilitating individuals with Down syndrome and their families. Founder of several initiatives including:",
    founderInit1: "'I Can' Initiative",
    founderInit2: "'For My Community, I am Efada' Initiative",
    founderInit3: "'Resident Child Treatment' Initiative",
    founderInit4: "'Training Leading to Employment' Initiative",
    founderInit5: "Activating outpatient clinics for low-income students",
    founderInit6: "Designing specialized curricula and programs for Down Syndrome",
    founderInit7: "Training specialists on individualized sessions, group management, and behavior modification",
    founderInit8: "Student inclusion through partnerships in various fields (athletic and vocational)",
    licenseLabel: "Official Center License",
    licenseVal: "License No. 204 - Ministry of Human Resources and Social Development",
    sinceLabel: "Center Branches Opening Dates",
    sinceGirls: "Girls' Branch: 05/11/2013",
    sinceBoys: "Boys' Branch: 27/07/2023",
    stagePhotoCaption: "Moments full of confidence and creativity, proving that every talent has a light worthy of shining. Our young stars... with you the stage flourishes, and we are always proud of your brilliance.",
    
    // Core Educational & Developmental Programs Section
    programsKicker: "Center Programs",
    programsTitle: "Efada Center Programs",
    programsSubtitle: "Comprehensive specialized curricula and programs designed to empower our children cognitively, vocationally, and athletically.",
    
    progEarlyTitle: "Early Intervention Program",
    progEarlyDesc: "Developing foundational skills and early independence:",
    progEarlyPill1Head: "Self-Reliance Skills:",
    progEarlyPill1Text: "Training on daily independence skills (toilet training, tooth brushing, eating, dressing).",
    progEarlyPill2Head: "Linguistic, Communicative & Cognitive Growth:",
    progEarlyPill2Text: "Developing receptive, cognitive, and expressive linguistic abilities.",
    progEarlyPill3Head: "Motor Development:",
    progEarlyPill3Text: "Advancing gross and fine motor coordination.",
    
    progAcadTitle: "Academic Readiness Program",
    progAcadDesc: "Academic Curricula:",
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
    progVocInProgress: "(In Progress)",
    progVocPill1Head: "Vocational Assessment & Guidance:",
    progVocPill1Text: "Assessing individual abilities and defining suitable career pathways.",
    progVocPill2Head: "Training Units:",
    progVocPill2Text: "Training in specialized units inside and outside the center.",
    progVocPill3Head: "Training Leading to Employment",
    progVocPill3Text: "",
    progVocVideoTitle: "To our stars, you are this year's most beautiful stories, with you the achievement is complete",
    
    progSportTitle: "Athletic Program",
    sportClubTag: "Efada Saudi Special Olympics Club",
    progSportDesc: "Efada Special Olympics Club for preparing for local and international championships in cooperation with the Ministry of Sport represented by the Saudi Universities Sports Federation and in partnership with Princess Nourah bint Abdulrahman University.",
    
    // Support Services Section
    servicesKicker: "Support Services",
    servicesTitle: "Support Services at Efada Center",
    servicesSubtitle: "Specialized clinics providing comprehensive rehabilitative care",
    clinicSpeech: "Speech & Language Pathology Clinics",
    clinicBehavior: "Behavior Modification Clinics",
    clinicPT: "Physical Therapy & Motor Rehabilitation",
    clinicOT: "Occupational Therapy & Sensory Integration",
    clinicFamily: "Family Guidance for Down Syndrome Families & Newborns",
    
    // Educational Platform Section
    platformKicker: "Digital Platform",
    platformHeading: "Efada Educational Platform",
    platformDescP1: "Out of Efada Center's commitment to advancing the educational process and enhancing continuous communication with parents, we are pleased to present our educational platform designed to track the student's learning journey and progress on an ongoing basis.",
    platformDescP2: "The platform provides access to individualized educational goals for each student, tracking learning skills and activities (homework, worksheets, instructional cards), and reviewing progress reports toward achieving individual milestones.",
    platformDescP3: "Efada Educational Platform: An ongoing partnership between the Center and families to support the growth of our children.",
    platformBtn: "Download Efada Educational Platform ↗",
    platformWebBtn: "Platform Browser Access ↗",
    
    // Contact & Registration Section
    contactKicker: "Admissions & Registration",
    contactTitle: "Admissions & Registration Department",
    contactSubtitle: "Two Riyadh campuses (Boys - Girls) under the leadership and training of an elite team",
    urgencyBanner: "Limited seats available - We warmly look forward to reserving your child's place",
    ministryServicePortal: "Ministry of Human Resources & Social Development Portal",
    ministryServiceTitle: "Day Care Centers Application Portal ↗",
    sponsorshipCallout: "Free registration during periods specified by the Ministry by selecting 'Efada Day Care Center' on the Ministry of Human Resources and Social Development portal.",
    
    // Female Branch
    branchFemaleTitle: "Girls' Branch",
    branchFemaleAge: "From Birth to 45 Years (Girls) • From Birth to 12 Years (Boys)",
    branchSocialChannels: "Official Channels:",
    branchViewMap: "View Campus Location on Google Maps ↗",
    
    // Male Branch
    branchMaleTitle: "Boys' Branch",
    branchMaleAge: "From 12 to 45 Years",
    
    // Engagement Section (Complaints, Partnerships & Careers)
    engagementKicker: "Contact, Partnerships & Careers",
    engagementTitle: "Contact Us",
    complaintsCardTitle: "Complaints & Suggestions",
    complaintsWhatsappLabel: "Submit complaint / suggestion to CEO via WhatsApp text:",
    complaintsEmailLabel: "Submit complaint / suggestion to CEO via Email:",
    complaintsFemaleFormLabel: "Submit a complaint for Girls' Branch according to clauses via link:",
    complaintsFemaleFormBtn: "Girls' Branch Complaint Form ↗",
    complaintsMaleFormLabel: "Submit a complaint for Boys' Branch according to clauses via link:",
    complaintsMaleFormBtn: "Boys' Branch Complaint Form ↗",
    partnershipsCardTitle: "Community Cooperation, Partnerships & Initiatives",
    partnershipsWhatsappLabel: "WhatsApp Number:",
    partnershipsEmailLabel: "Email Address:",
    careersCardTitle: "Join Efada Day Care Center Team",
    careersGirlsPrompt: "- (Girls' Branch) Send CV and qualifications to the following email:",
    careersBoysPrompt: "- (Boys' Branch) Send CV and qualifications to the following email:",
    
    // Final Standalone Video Section (Efada Video 4 - آخر شي)
    finalVideoKicker: "Center Highlights",
    finalVideoTitle: "To our stars, you are this year's most beautiful stories, with you the achievement is complete",
    
    // Footer
    footerCopy: "Efada Day Care Center. All Rights Reserved.",
    footerLicense: "License No. 204 - Ministry of Human Resources and Social Development",

    // About media tags & captions
    aboutVideo6Tag: "Journey of Empowerment and Dedication at Efada Center",
    aboutVisionPicAlt: "Efada Center Vision for Empowering Down Syndrome Champions",
    aboutGoalsPicAlt: "Goals and Mission of Efada Day Care Center",
    aboutVideo7Tag: "Executive Leadership Address - Efada Center",

    // Programs media
    progEarlyVideoTag: "Early Intervention Training & Developmental Sessions",
    progEarlyPicCaption: "Visual Learning Flashcards & Early Intervention Tools",
    progAcadVideo1Tag: "Practical Application of Academic Curriculum",
    progAcadVideo2Tag: "Academic & Cognitive Skills Development",

    // Clinics descriptions & media
    clinicSpeechDesc: "Developing students' language skills to enable them to communicate, express their needs, and interact with those around them.",
    clinicSpeechVideo1Tag: "Speech & Language Articulation Sessions",
    clinicSpeechVideo2Tag: "Expressive & Linguistic Communication Sessions",
    clinicBehaviorDesc: "Developing students' positive behaviors and reinforcing alternative behaviors through positive reinforcement programs.",
    clinicBehaviorMediaTag: "Positive Reinforcement & Behavior Modification Applications",
    clinicPTDesc: "Aims to improve students' movement by training them in balance and strength skills and developing functional physical capabilities.",
    clinicPTVideoTag: "Physical Therapy & Functional Motor Rehabilitation",
    clinicOTDesc: "Aims to improve eye-hand coordination and develop fine motor control to enable students to use school tools and perform daily activities independently.",
    clinicOTMediaTag: "Occupational Therapy, Sensory Integration & Fine Motor Skills",

    // How We Learn Subsection
    learnMethodKicker: "Learning Methods",
    learnMethodTitle: "Have You Wondered How We Learn at Efada Center?",
    learnMethodSubtitle: "An integrated educational framework respecting individual differences and cultivating each student's success.",
    learnMethod1Title: "We Learn Through Individual Sessions",
    learnMethod1Desc: "Individual sessions provide tailored training based on each student's individualized educational plan (IEP) to accommodate individual differences.",
    learnMethod1Tag: "Individual Specialized Training Sessions",
    learnMethod2Title: "We Learn Through Group Circles",
    learnMethod2Desc: "Group learning circles foster peer integration, develop social skills, reinforce positive behavioral modeling (learning by imitation), and generalize skills across daily scenarios.",
    learnMethod2Tag: "Group Educational Activities & Peer Interaction",
    learnMethod3Title: "We Also Learn Through Task Analysis",
    learnMethod3Desc: "Breaks down objectives into progressive steps suited to student capabilities, empowering learning and bestowing a sense of accomplishment upon mastering each step.",

    // Platform app downloads
    platformIosBtn: "Download Efada Platform (iOS) ↗",
    platformAndroidBtn: "Download Efada Platform (Android) ↗",
    platformStoreAppStore: "Available on App Store",
    platformStoreGooglePlay: "Available on Google Play",

    // Success Stories
    storiesKicker: "Inspiring Journeys",
    storiesTitle: "Success Stories",
    storiesSubtitle: "Celebrating our champions' inspiring determination and confident strides toward a brighter future.",
    story1Caption: "Success Story of Champion Abdullah Al-Rashdan",
    story2Caption: "Success Story of Champion Saleh Al-Mashabi",

    // National Pride Section
    nationalKicker: "Pride & Belonging",
    nationalTitle: "My Homeland .. Our Pride and Belonging 🇸🇦",
    nationalSubtitle: "In our homeland we belong, in its values we cherish, in its achievements we take pride, and upon its soil we dream, learn, and innovate.",
    nationalVid1Caption: "The Kingdom of Saudi Arabia is a homeland residing in our hearts, a history we take pride in, an identity we cherish, and a future we all help build.",
    nationalVid2Caption: "In our homeland we belong, in its values we cherish, in its achievements we take pride, and upon its soil we dream, learn, and innovate. May God protect our Kingdom.",
    nationalPic7Caption: "We will become active members in our community and help those who need us.",
    nationalPic6Caption: "National Day & Founding Day Celebrations at Efada Center",
    nationalStageCaption: "Moments filled with confidence and creativity, proving every talent deserves to shine. Our young stars .. the stage flourishes with you and we are proud of your brilliance.",

    // Partnerships & Careers Updates
    partnershipsHilalCaption: "Al-Hilal FC Hosting Our Champions",
    partnershipsHilalVidCaption: "Al-Hilal FC Hosting & Community Partnership with Efada Champions",
    careersTribute: "Special education staff are those who perceive potential when others might not, celebrating small steps as grand victories, giving their time, hearts, and energy, with firm belief that every student possesses ability, every achievement holds worth, and every person deserves to learn, be valued, and celebrated.<br><br><strong>We are proud of you.. you who turned your profession into a mission, your giving into enduring impact, and your students into success stories worthy of being told.</strong>",

    // Annual Closing Ceremony
    ceremonyKicker: "Annual Milestone",
    ceremonyTitle: "Annual Closing Ceremony",
    ceremonySubtitle: "Moments filled with confidence and creativity, proving every talent has a light deserving to shine. Our young stars .. the stage flourishes with you and we take pride in your creativity.",
    ceremonyVid1Tag: "Theatrical & Creative Performances by Our Young Stars",
    ceremonyVid2Tag: "Honoring Student Milestones and Annual Achievements",
    ceremonyVid3Tag: "Celebration of Graduation and Success with Families",

    // Summer Program
    summerKicker: "Enriching Summer Experience",
    summerTitle: "Efada Center Summer Program",
    summerDesc: "At the end of each academic year, we open our doors to welcome students during the summer break under Efada Summer Program (Educational - Training - Rehabilitation - Recreational), ",
    summerRegisterBtn: "Register with Us ↗",
    summerVideoTag: "Efada Summer Program Activities, Training & Fun",

    // Email Modal Action Sheet
    emailModalTitle: "Choose Email Application",
    emailModalSub: "Select your preferred email client or copy the address directly:",
    emailOptionDefault: "Open in Default Mail App",
    emailOptionGmail: "Open in Gmail (Web / App)",
    emailOptionOutlook: "Open in Outlook (Web / App)",
    emailOptionCopy: "Copy Email Address",
    emailToastCopied: "Email address copied to clipboard!",
    emailModalClose: "Close"

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
  setupEmailModalHandler();

  // 4. Update footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = "2026";
  }

  // 5. Final enforcement of phone number LTR integrity
  enforcePhoneBidiIntegrity();
});


/**
 * Cross-Device Email Action Sheet / Modal
 * Solves iOS unconfigured Mail app issues and gives 1-click webmail / copy options.
 */
function setupEmailModalHandler() {
  if (!document.getElementById("emailActionModal")) {
    const modalHtml = `
      <div id="emailActionModal" class="email-modal-backdrop" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="emailModalTitle">
        <div class="email-modal-card">
          <button type="button" class="email-modal-close" id="emailModalCloseBtn" aria-label="Close modal">&times;</button>
          <div class="email-modal-header">
            <span class="email-modal-icon">✉️</span>
            <h3 id="emailModalTitle" data-i18n="emailModalTitle">اختر طريقة التواصل عبر البريد</h3>
            <p id="emailModalSub" data-i18n="emailModalSub">يمكنك إرسال الرسالة عبر تطبيقك المفضل أو نسخ البريد مباشرة:</p>
            <div class="email-target-chip" id="emailModalTargetEmail" dir="ltr">email@example.com</div>
          </div>
          <div class="email-modal-options">
            <button type="button" class="email-option-btn default-mail-btn" id="emailOptDefault">
              <span class="opt-icon">📱</span>
              <span class="opt-label" data-i18n="emailOptionDefault">فتح تطبيق البريد الأساسي</span>
            </button>
            <a href="#" target="_blank" rel="noopener noreferrer" class="email-option-btn gmail-btn" id="emailOptGmail">
              <span class="opt-icon">🔴</span>
              <span class="opt-label" data-i18n="emailOptionGmail">فتح في متصفح / تطبيق Gmail</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="email-option-btn outlook-btn" id="emailOptOutlook">
              <span class="opt-icon">🔵</span>
              <span class="opt-label" data-i18n="emailOptionOutlook">فتح في متصفح / تطبيق Outlook</span>
            </a>
            <button type="button" class="email-option-btn copy-btn" id="emailOptCopy">
              <span class="opt-icon">📋</span>
              <span class="opt-label" data-i18n="emailOptionCopy">نسخ عنوان البريد الإلكتروني</span>
            </button>
          </div>
        </div>
      </div>
      <div id="emailToast" class="email-toast" role="status" aria-live="polite">
        <span class="toast-icon">✓</span>
        <span id="emailToastText" data-i18n="emailToastCopied">تم نسخ عنوان البريد الإلكتروني بنجاح!</span>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHtml);
  }

  const modal = document.getElementById("emailActionModal");
  const targetEmailEl = document.getElementById("emailModalTargetEmail");
  const optDefault = document.getElementById("emailOptDefault");
  const optGmail = document.getElementById("emailOptGmail");
  const optOutlook = document.getElementById("emailOptOutlook");
  const optCopy = document.getElementById("emailOptCopy");
  const closeBtn = document.getElementById("emailModalCloseBtn");
  const toast = document.getElementById("emailToast");

  let currentEmail = "";

  function openEmailModal(email) {
    currentEmail = email;
    targetEmailEl.textContent = email;
    optGmail.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email);
    optOutlook.href = "https://outlook.live.com/mail/0/deeplink/compose?to=" + encodeURIComponent(email);
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeEmailModal() {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function showToast(msg) {
    if (msg) {
      document.getElementById("emailToastText").textContent = msg;
    }
    toast.classList.add("is-visible");
    setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  optDefault.addEventListener("click", () => {
    window.location.href = "mailto:" + currentEmail;
    closeEmailModal();
  });

  optGmail.addEventListener("click", () => {
    closeEmailModal();
  });

  optOutlook.addEventListener("click", () => {
    closeEmailModal();
  });

  optCopy.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentEmail);
      } else {
        const ta = document.createElement("textarea");
        ta.value = currentEmail;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      closeEmailModal();
      const currentLang = document.documentElement.lang === "en" ? "en" : "ar";
      const msg = translations[currentLang]?.emailToastCopied || "تم نسخ عنوان البريد الإلكتروني بنجاح!";
      showToast(msg);
    } catch (err) {
      console.warn("Clipboard copy failed:", err);
      window.location.href = "mailto:" + currentEmail;
      closeEmailModal();
    }
  });

  closeBtn.addEventListener("click", closeEmailModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeEmailModal();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-visible")) {
      closeEmailModal();
    }
  });

  // Attach listener to all mailto links
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href") || "";
      const email = href.replace(/^mailto:/i, "").split("?")[0].trim();
      if (email) {
        openEmailModal(email);
      }
    });
  });
}
