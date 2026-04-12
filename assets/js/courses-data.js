/* ── Alanwar.edu — Center Data Layer ──
   Transformed from single-instructor biology platform
   to multi-stage, multi-subject, multi-instructor education center.

   Hierarchy: stages[] → grades[] → subjects[] → instructors[] → courses[]
   Backward compat: categories{} auto-derived from subjects[]
   ── End Summary ── */

'use strict';

var COURSE_DATA = (function () {

  function deepFreeze(o) {
    if (o === null || typeof o !== 'object') return o;
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (p) {
      var v = o[p];
      if (v !== null && typeof v === 'object' && !Object.isFrozen(v)) deepFreeze(v);
    });
    return o;
  }

  /* ── Stages ── */

  var stages = [
    { id: 'primary',     name: 'المرحلة الابتدائية' },
    { id: 'preparatory', name: 'المرحلة الاعدادية'  },
    { id: 'secondary',   name: 'المرحلة الثانوية'   }
  ];

  /* ── Grades ── */

  var grades = [
    { id: 'grade-4', stageId: 'primary',     name: 'الصف الرابع الابتدائي',  shortName: '4 ابتدائي' },
    { id: 'grade-5', stageId: 'primary',     name: 'الصف الخامس الابتدائي',  shortName: '5 ابتدائي' },
    { id: 'grade-6', stageId: 'primary',     name: 'الصف السادس الابتدائي',  shortName: '6 ابتدائي' },
    { id: 'grade-7', stageId: 'preparatory', name: 'الصف الأول الاعدادي',    shortName: '1 اعدادي'  },
    { id: 'grade-8', stageId: 'preparatory', name: 'الصف الثاني الاعدادي',   shortName: '2 اعدادي'  },
    { id: 'grade-9',  stageId: 'preparatory', name: 'الصف الثالث الاعدادي',   shortName: '3 اعدادي'  },
    { id: 'grade-10', stageId: 'secondary',   name: 'الصف الأول الثانوي',     shortName: '1 ثانوي'   }
  ];

  /* ── Subjects ── */

  var subjects = [
    { id: 'arabic',  name: 'اللغة العربية',                  icon: 'bi-book',           color: 'emerald' },
    { id: 'science', name: 'العلوم',                         icon: 'bi-virus2',         color: 'teal'    },
    { id: 'math',    name: 'الرياضيات',                      icon: 'bi-calculator',     color: 'cyan'    },
    { id: 'english', name: 'اللغة الإنجليزية',                icon: 'bi-translate',      color: 'purple'  },
    { id: 'social',  name: 'الدراسات الاجتماعية',             icon: 'bi-globe-americas', color: 'amber'   },
    { id: 'cs',      name: 'البرمجة وتكنولوجيا المعلومات',    icon: 'bi-code-slash',     color: 'rose'    },
    { id: 'religion',            name: 'التربية الدينية',                   icon: 'bi-moon-stars',      color: 'sky'     },
    { id: 'integrated-science',  name: 'العلوم المتكاملة',                  icon: 'bi-stars',           color: 'lime'    },
    { id: 'history',             name: 'التاريخ',                           icon: 'bi-hourglass-split', color: 'orange'  },
    { id: 'philosophy',          name: 'الفلسفة والمنطق',                   icon: 'bi-lightbulb',       color: 'indigo'  },
    { id: 'italian',             name: 'اللغة الإيطالية',                   icon: 'bi-flag',            color: 'red'     }
  ];

  /* ── Instructors ── */

  var instructors = [
    /* ── المرحلة الابتدائية ── */
    { id: 'hoda-ahmed',          name: 'ميس هدى أحمد',            subjectId: 'arabic',   phone: '', bio: 'مدرسة لغة عربية للمرحلة الابتدائية' },
    { id: 'bilal-bakr',          name: 'الأستاذ بلال بكر',         subjectId: 'math',     phone: '', bio: 'مدرس رياضيات للمرحلة الابتدائية والاعدادية' },
    { id: 'esraa',               name: 'ميس إسراء',               subjectId: 'english',  phone: '', bio: 'مدرسة لغة إنجليزية للمرحلة الابتدائية' },
    { id: 'abdel-latif',         name: 'الأستاذ عبداللطيف',        subjectId: 'english',  phone: '', bio: 'مدرس لغة إنجليزية للمرحلة الابتدائية والاعدادية' },
    { id: 'aya-ahmed',           name: 'ميس آية أحمد',            subjectId: 'science',  phone: '', bio: 'مدرسة علوم للمرحلة الابتدائية' },
    { id: 'abdel-rahman-ragab',  name: 'الأستاذ عبدالرحمن رجب',   subjectId: 'social',   phone: '', bio: 'مدرس دراسات اجتماعية للمرحلة الابتدائية' },
    { id: 'hany-ibrahim',        name: 'الأستاذ هاني إبراهيم',     subjectId: 'religion', phone: '', bio: 'مدرس تربية دينية للمرحلة الابتدائية والاعدادية والثانوية' },

    /* ── المرحلة الاعدادية ── */
    { id: 'youssef-elsebae',     name: 'مستر يوسف السبع',          subjectId: 'arabic',   phone: '', bio: 'مدرس لغة عربية للمرحلة الاعدادية' },
    { id: 'mostafa-mahmoud',     name: 'أ/ مصطفى محمود',           subjectId: 'science',  phone: '', bio: 'مدرس علوم للمرحلة الاعدادية' },
    { id: 'mohamed-elnadar',     name: 'الأستاذ محمد النضار',       subjectId: 'social',   phone: '', bio: 'مدرس دراسات اجتماعية للمرحلة الاعدادية' },
    { id: 'hussein-elmasry',     name: 'الأستاذ حسين المصري',      subjectId: 'cs',       phone: '', bio: 'رئيس قسم بمنطقة حدائق القبة — مدرس برمجة وتكنولوجيا المعلومات' },
    { id: 'hesham-omar',         name: 'مستر هشام عمر',            subjectId: 'english',  phone: '', bio: 'مدرس لغة إنجليزية للصف الثالث الاعدادي والمرحلة الثانوية' },

    /* ── المرحلة الثانوية ── */
    { id: 'islam-farag',         name: 'الأستاذ إسلام فرج',        subjectId: 'arabic',   phone: '', bio: 'مدرس لغة عربية للمرحلة الثانوية' },
    { id: 'mohamed-hassan',      name: 'الأستاذ محمد حسن',         subjectId: 'english',  phone: '', bio: 'مدرس لغة إنجليزية للمرحلة الثانوية' },
    { id: 'mostafa-nagy',        name: 'الأستاذ مصطفى ناجي',       subjectId: 'math',     phone: '', bio: 'مدرس رياضيات للمرحلة الثانوية' },
    { id: 'dr-seif',             name: 'د. سيف',                   subjectId: 'integrated-science', phone: '', bio: 'مدرس علوم متكاملة للمرحلة الثانوية' },
    { id: 'islam-amer',          name: 'الأستاذ إسلام عامر',       subjectId: 'history',  phone: '', bio: 'مدرس تاريخ للمرحلة الثانوية' },
    { id: 'mohamed-elshatr',     name: 'الأستاذ محمد الشاطر',      subjectId: 'philosophy', phone: '', bio: 'مدرس فلسفة ومنطق للمرحلة الثانوية' },
    { id: 'alaa-salah',          name: 'سنيور علاء صلاح الدين',    subjectId: 'italian',  phone: '', bio: 'مدرس لغة إيطالية للمرحلة الثانوية' }
  ];

  /* ── Course Definitions ── */

  var courses = [
    {
      id: 1,
      title: "النحو — الأفعال الناسخة والحروف الناسخة",
      category: "اللغة العربية",
      stageId: "preparatory",
      gradeId: "grade-7",
      subjectId: "arabic",
      instructorId: "youssef-elsebae",
      level: "Beginner",
      price: 150.00,
      originalPrice: 250.00,
      students: 0,
      lessons: 1,
      rating: 0,
      date: "2025-09-01",
      language: "ar",
      description: "شرح كامل للأفعال الناسخة (كان وأخواتها) والحروف الناسخة (إنّ وأخواتها) لطلاب الصف الأول الاعدادي. يشمل التعريف والإعراب والتطبيقات والتمارين المحلولة من الكتاب المدرسي.",
      image: "og-image.png",
      instructor: "مستر يوسف السبع",
      tags: ["عربي", "نحو", "كان وأخواتها", "إنّ وأخواتها", "أولى اعدادي", "أفعال ناسخة", "حروف ناسخة"],
      driveUrl: "",
      learningObjectives: [
        "التعرف على كان وأخواتها — أنواعها وعملها في الجملة الاسمية",
        "إعراب اسم كان وخبرها بشكل صحيح",
        "التعرف على إنّ وأخواتها وعملها في الجملة الاسمية",
        "إعراب اسم إنّ وخبرها بشكل صحيح",
        "التمييز بين الأفعال الناسخة والحروف الناسخة",
        "حل تمارين إعرابية شاملة من الكتاب المدرسي"
      ],
      curriculum: [
        {
          title: "كان وأخواتها — الأفعال الناسخة",
          lessons: [
            { title: "مقدمة — الجملة الاسمية ودخول النواسخ عليها", duration: "08:00", preview: true, previewUrl: "", previewThumb: "" },
            { title: "كان وأخواتها — التعريف والأنواع", duration: "15:00", preview: true, previewUrl: "", previewThumb: "" },
            { title: "إعراب اسم كان وخبرها — أمثلة تطبيقية", duration: "18:00", preview: false },
            { title: "تمارين محلولة على كان وأخواتها", duration: "20:00", preview: false }
          ]
        },
        {
          title: "إنّ وأخواتها — الحروف الناسخة",
          lessons: [
            { title: "إنّ وأخواتها — التعريف والعمل", duration: "14:00", preview: false },
            { title: "إعراب اسم إنّ وخبرها — أمثلة تطبيقية", duration: "16:00", preview: false },
            { title: "الفرق بين الأفعال والحروف الناسخة", duration: "12:00", preview: false },
            { title: "تمارين محلولة على إنّ وأخواتها", duration: "18:00", preview: false }
          ]
        },
        {
          title: "مراجعة شاملة وتمارين",
          lessons: [
            { title: "مراجعة شاملة على النواسخ", duration: "20:00", preview: false },
            { title: "حل تمارين الكتاب المدرسي", duration: "22:00", preview: false },
            { title: "نماذج امتحانات وتدريبات إعرابية", duration: "25:00", preview: false }
          ]
        }
      ],
      faq: [
        { question: "الكورس مناسب لأولى اعدادي بس؟", answer: "أيوا، الكورس مصمم خصيصاً لمنهج الصف الأول الاعدادي — الترم الأول." },
        { question: "فيه تمارين محلولة؟", answer: "طبعاً، فيه تمارين من الكتاب المدرسي ونماذج امتحانات محلولة بالتفصيل." },
        { question: "إزاي أشتري الكورس؟", answer: "اضغط على زرار اشتري الآن وهيتفتحلك واتساب — بعد تأكيد الدفع هتوصلك بيانات الدخول." }
      ]
    },
    {
      id: 2,
      title: "النحو — المنصوبات (المفعول به والمفعول المطلق والمفعول لأجله)",
      category: "اللغة العربية",
      stageId: "preparatory",
      gradeId: "grade-8",
      subjectId: "arabic",
      instructorId: "youssef-elsebae",
      level: "Intermediate",
      price: 150.00,
      originalPrice: 250.00,
      students: 0,
      lessons: 1,
      rating: 0,
      date: "2025-09-15",
      language: "ar",
      description: "شرح شامل لدروس المنصوبات في النحو العربي لطلاب الصف الثاني الاعدادي: المفعول به والمفعول المطلق والمفعول لأجله. يشمل القواعد والإعراب والتطبيقات.",
      image: "og-image.png",
      instructor: "مستر يوسف السبع",
      tags: ["عربي", "نحو", "مفعول به", "مفعول مطلق", "مفعول لأجله", "تانية اعدادي", "منصوبات"],
      driveUrl: "",
      learningObjectives: [
        "تعريف المفعول به وأنواعه (ظاهر ومستتر وجملة)",
        "إعراب المفعول به في الجمل المختلفة",
        "تعريف المفعول المطلق وأنواعه (مؤكد ومبين للنوع ومبين للعدد)",
        "تعريف المفعول لأجله وشروط نصبه",
        "التمييز بين المنصوبات الثلاثة في الجملة الفعلية",
        "حل تمارين إعرابية شاملة من الكتاب المدرسي"
      ],
      curriculum: [
        {
          title: "المفعول به",
          lessons: [
            { title: "تعريف المفعول به وأنواعه", duration: "12:00", preview: true, previewUrl: "", previewThumb: "" },
            { title: "إعراب المفعول به — أمثلة تطبيقية", duration: "16:00", preview: false },
            { title: "تمارين محلولة على المفعول به", duration: "18:00", preview: false }
          ]
        },
        {
          title: "المفعول المطلق والمفعول لأجله",
          lessons: [
            { title: "المفعول المطلق — تعريفه وأنواعه", duration: "14:00", preview: false },
            { title: "المفعول لأجله — تعريفه وشروط نصبه", duration: "12:00", preview: false },
            { title: "تمارين محلولة على المفعول المطلق والمفعول لأجله", duration: "20:00", preview: false }
          ]
        },
        {
          title: "مراجعة شاملة",
          lessons: [
            { title: "مقارنة بين المنصوبات الثلاثة", duration: "15:00", preview: false },
            { title: "حل تمارين الكتاب المدرسي ونماذج امتحانات", duration: "25:00", preview: false }
          ]
        }
      ],
      faq: [
        { question: "الكورس لأي صف؟", answer: "الصف الثاني الاعدادي — الترم الأول." },
        { question: "فيه تمارين من الكتاب المدرسي؟", answer: "أيوا، كل تمارين الكتاب محلولة بالتفصيل مع نماذج امتحانات إضافية." },
        { question: "إزاي أتواصل لو عندي سؤال؟", answer: "ابعتلنا على واتساب وهنرد عليك في أسرع وقت." }
      ]
    },
    {
      id: 3,
      title: "النحو — البدل وأنواعه والنعت",
      category: "اللغة العربية",
      stageId: "preparatory",
      gradeId: "grade-9",
      subjectId: "arabic",
      instructorId: "youssef-elsebae",
      level: "Intermediate",
      price: 180.00,
      originalPrice: 300.00,
      students: 0,
      lessons: 1,
      rating: 0,
      date: "2025-10-01",
      language: "ar",
      description: "شرح تفصيلي لدرس البدل وأنواعه (مطابق، بعض من كل، اشتمال) ودرس النعت (حقيقي وسببي) لطلاب الصف الثالث الاعدادي. يشمل الإعراب والتمارين المحلولة.",
      image: "og-image.png",
      instructor: "مستر يوسف السبع",
      tags: ["عربي", "نحو", "بدل", "نعت", "تالتة اعدادي", "توابع"],
      driveUrl: "",
      learningObjectives: [
        "تعريف البدل وأنواعه الثلاثة (مطابق، بعض من كل، اشتمال)",
        "إعراب البدل بأنواعه في الجمل المختلفة",
        "تعريف النعت الحقيقي والنعت السببي",
        "التمييز بين النعت والبدل في الجملة",
        "حل تمارين إعرابية شاملة على التوابع",
        "حل نماذج امتحانات الشهادة الاعدادية"
      ],
      curriculum: [
        {
          title: "البدل وأنواعه",
          lessons: [
            { title: "تعريف البدل — المفهوم والأنواع", duration: "10:00", preview: true, previewUrl: "", previewThumb: "" },
            { title: "البدل المطابق — أمثلة وإعراب", duration: "14:00", preview: false },
            { title: "بدل بعض من كل وبدل اشتمال", duration: "16:00", preview: false },
            { title: "تمارين محلولة على البدل", duration: "18:00", preview: false }
          ]
        },
        {
          title: "النعت (الحقيقي والسببي)",
          lessons: [
            { title: "النعت الحقيقي — تعريفه ومطابقته للمنعوت", duration: "12:00", preview: false },
            { title: "النعت السببي — تعريفه وإعرابه", duration: "14:00", preview: false },
            { title: "الفرق بين النعت والبدل", duration: "10:00", preview: false },
            { title: "تمارين محلولة على النعت", duration: "16:00", preview: false }
          ]
        },
        {
          title: "مراجعة نهائية",
          lessons: [
            { title: "مراجعة شاملة على التوابع", duration: "20:00", preview: false },
            { title: "حل نماذج امتحانات الشهادة الاعدادية", duration: "25:00", preview: false }
          ]
        }
      ],
      faq: [
        { question: "الكورس بيجهز للشهادة الاعدادية؟", answer: "أيوا، فيه نماذج امتحانات شهادة اعدادية محلولة بالتفصيل." },
        { question: "محتاج أكون عارف التوابع من قبل؟", answer: "لا، الشرح بيبدأ من الصفر ومتدرج." },
        { question: "فيه فيديوهات مجانية للمعاينة؟", answer: "أيوا، أول درس في كل قسم متاح للمعاينة المجانية." }
      ]
    },
    {
      id: 4,
      title: "المادة وتركيبها — الذرة والجزيء والعنصر والمركب",
      category: "العلوم",
      stageId: "preparatory",
      gradeId: "grade-7",
      subjectId: "science",
      instructorId: "mostafa-mahmoud",
      level: "Beginner",
      price: 180.00,
      originalPrice: 300.00,
      students: 0,
      lessons: 1,
      rating: 0,
      date: "2025-09-10",
      language: "ar",
      description: "شرح تفصيلي لوحدة المادة وتركيبها من منهج العلوم للصف الأول الاعدادي: مفهوم الذرة، الجزيء، العنصر، والمركب. يشمل تجارب عملية وتمارين محلولة.",
      image: "og-image.png",
      instructor: "أ/ مصطفى محمود",
      tags: ["علوم", "أولى اعدادي", "ذرة", "جزيء", "عنصر", "مركب", "مادة"],
      driveUrl: "",
      learningObjectives: [
        "فهم مفهوم المادة وحالاتها الثلاث",
        "التعرف على تركيب الذرة (بروتونات ونيوترونات وإلكترونات)",
        "التمييز بين الذرة والجزيء",
        "التمييز بين العنصر والمركب والمخلوط",
        "فهم الجدول الدوري وتصنيف العناصر",
        "حل تمارين الكتاب المدرسي وامتحانات سابقة"
      ],
      curriculum: [
        {
          title: "المادة وحالاتها",
          lessons: [
            { title: "ما هي المادة؟ — تعريف وحالات", duration: "10:00", preview: true, previewUrl: "", previewThumb: "" },
            { title: "الخواص الفيزيائية والكيميائية للمادة", duration: "14:00", preview: false },
            { title: "التغيرات الفيزيائية والكيميائية", duration: "12:00", preview: false }
          ]
        },
        {
          title: "الذرة والجزيء",
          lessons: [
            { title: "تركيب الذرة — البروتونات والنيوترونات والإلكترونات", duration: "18:00", preview: false },
            { title: "العدد الذري والعدد الكتلي", duration: "14:00", preview: false },
            { title: "الجزيء — تعريفه وأمثلة", duration: "12:00", preview: false }
          ]
        },
        {
          title: "العنصر والمركب والمخلوط",
          lessons: [
            { title: "العنصر — التعريف والأمثلة والجدول الدوري", duration: "16:00", preview: false },
            { title: "المركب — التعريف والفرق بينه وبين المخلوط", duration: "14:00", preview: false },
            { title: "تجارب عملية وتمارين محلولة", duration: "20:00", preview: false }
          ]
        },
        {
          title: "مراجعة نهائية",
          lessons: [
            { title: "مراجعة شاملة على الوحدة", duration: "22:00", preview: false },
            { title: "حل تمارين الكتاب المدرسي وامتحانات", duration: "25:00", preview: false }
          ]
        }
      ],
      faq: [
        { question: "الكورس لأي صف؟", answer: "الصف الأول الاعدادي — الترم الأول." },
        { question: "فيه تجارب عملية؟", answer: "أيوا، التجارب المطلوبة في المنهج مشروحة بالتفصيل مع رسومات." },
        { question: "الأستاذ مصطفى بيشرح إزاي؟", answer: "الشرح مبسط وتفصيلي مع أمثلة كتير وتمارين محلولة خطوة بخطوة." }
      ]
    },
    {
      id: 5,
      title: "الصوت والضوء — خصائص الموجات الصوتية وانعكاس الضوء",
      category: "العلوم",
      stageId: "preparatory",
      gradeId: "grade-8",
      subjectId: "science",
      instructorId: "mostafa-mahmoud",
      level: "Intermediate",
      price: 200.00,
      originalPrice: 350.00,
      students: 0,
      lessons: 1,
      rating: 0,
      date: "2025-10-01",
      language: "ar",
      description: "شرح وحدة الصوت والضوء من منهج العلوم للصف الثاني الاعدادي: خصائص الموجات الصوتية، سرعة الصوت، انعكاس الضوء وانكساره، المرايا والعدسات.",
      image: "og-image.png",
      instructor: "أ/ مصطفى محمود",
      tags: ["علوم", "تانية اعدادي", "صوت", "ضوء", "موجات", "مرايا", "عدسات", "انعكاس"],
      driveUrl: "",
      learningObjectives: [
        "فهم خصائص الموجات الصوتية (التردد، الطول الموجي، السعة)",
        "حساب سرعة الصوت في الأوساط المختلفة",
        "فهم قوانين انعكاس الضوء",
        "التمييز بين أنواع المرايا (مستوية، مقعرة، محدبة)",
        "فهم انكسار الضوء وتطبيقاته في العدسات",
        "حل مسائل رقمية وتمارين الكتاب المدرسي"
      ],
      curriculum: [
        {
          title: "الصوت وخصائصه",
          lessons: [
            { title: "ما هو الصوت؟ — الموجات الصوتية", duration: "12:00", preview: true, previewUrl: "", previewThumb: "" },
            { title: "خصائص الصوت — التردد والسعة والطول الموجي", duration: "16:00", preview: false },
            { title: "سرعة الصوت في الأوساط المختلفة", duration: "14:00", preview: false },
            { title: "مسائل محلولة على الصوت", duration: "18:00", preview: false }
          ]
        },
        {
          title: "الضوء وانعكاسه",
          lessons: [
            { title: "الضوء — تعريفه وخصائصه", duration: "10:00", preview: false },
            { title: "قوانين الانعكاس — المرآة المستوية", duration: "16:00", preview: false },
            { title: "المرآة المقعرة والمرآة المحدبة", duration: "18:00", preview: false },
            { title: "تطبيقات المرايا في الحياة اليومية", duration: "12:00", preview: false }
          ]
        },
        {
          title: "انكسار الضوء والعدسات",
          lessons: [
            { title: "انكسار الضوء — القانون والتطبيقات", duration: "16:00", preview: false },
            { title: "العدسات المحدبة والمقعرة", duration: "14:00", preview: false },
            { title: "تكوين الصور في العدسات", duration: "16:00", preview: false }
          ]
        },
        {
          title: "مراجعة نهائية",
          lessons: [
            { title: "مراجعة شاملة — الصوت والضوء", duration: "22:00", preview: false },
            { title: "حل مسائل وتمارين الكتاب المدرسي", duration: "25:00", preview: false }
          ]
        }
      ],
      faq: [
        { question: "الكورس فيه مسائل رقمية؟", answer: "أيوا، فيه مسائل محلولة على سرعة الصوت وقوانين الانعكاس والانكسار." },
        { question: "المرايا والعدسات مشروحة بالرسم؟", answer: "طبعاً، كل الرسومات المطلوبة مشروحة خطوة بخطوة." },
        { question: "الكورس يكفي للامتحان؟", answer: "أيوا، بيغطي الوحدة كاملة مع تمارين وامتحانات." }
      ]
    },
    {
      id: 6,
      title: "الكائنات الحية والبيئة — التكيف والتنوع البيولوجي",
      category: "العلوم",
      stageId: "primary",
      gradeId: "grade-6",
      subjectId: "science",
      instructorId: "mostafa-mahmoud",
      level: "Beginner",
      price: 120.00,
      originalPrice: 200.00,
      students: 0,
      lessons: 1,
      rating: 0,
      date: "2025-10-15",
      language: "ar",
      description: "شرح مبسط لوحدة الكائنات الحية والبيئة من منهج العلوم للصف السادس الابتدائي: مفهوم التكيف، أنواع التكيف، التنوع البيولوجي، والسلاسل الغذائية.",
      image: "og-image.png",
      instructor: "أ/ مصطفى محمود",
      tags: ["علوم", "سادسة ابتدائي", "تكيف", "بيئة", "تنوع بيولوجي", "سلسلة غذائية"],
      driveUrl: "",
      learningObjectives: [
        "فهم مفهوم التكيف وأنواعه (تركيبي، سلوكي، وظيفي)",
        "التعرف على أمثلة التكيف في الحيوانات والنباتات",
        "فهم مفهوم التنوع البيولوجي وأهميته",
        "رسم وفهم السلاسل والشبكات الغذائية",
        "التعرف على العلاقات بين الكائنات الحية في البيئة",
        "حل تمارين الكتاب المدرسي"
      ],
      curriculum: [
        {
          title: "التكيف",
          lessons: [
            { title: "ما هو التكيف؟ — مقدمة ومفاهيم أساسية", duration: "08:00", preview: true, previewUrl: "", previewThumb: "" },
            { title: "أنواع التكيف — تركيبي وسلوكي ووظيفي", duration: "14:00", preview: false },
            { title: "أمثلة التكيف في الحيوانات والنباتات", duration: "16:00", preview: false }
          ]
        },
        {
          title: "التنوع البيولوجي والسلاسل الغذائية",
          lessons: [
            { title: "التنوع البيولوجي — ماذا يعني ولماذا مهم؟", duration: "12:00", preview: false },
            { title: "السلسلة الغذائية — المنتج والمستهلك والمحلل", duration: "14:00", preview: false },
            { title: "الشبكة الغذائية — أمثلة ورسومات", duration: "12:00", preview: false }
          ]
        },
        {
          title: "مراجعة وتمارين",
          lessons: [
            { title: "مراجعة شاملة على الوحدة", duration: "16:00", preview: false },
            { title: "حل تمارين الكتاب المدرسي", duration: "20:00", preview: false }
          ]
        }
      ],
      faq: [
        { question: "الكورس مناسب لسادسة ابتدائي؟", answer: "أيوا، مصمم خصيصاً لمنهج الصف السادس الابتدائي بأسلوب مبسط ومناسب للسن." },
        { question: "الشرح سهل؟", answer: "طبعاً، الشرح بسيط ومتدرج مع رسومات وأمثلة من الحياة اليومية." },
        { question: "فيه رسومات للسلاسل الغذائية؟", answer: "أيوا، كل السلاسل والشبكات الغذائية مرسومة ومشروحة بالتفصيل." }
      ]
    },
    {
      id: 7,
      title: "النحو — أنواع الجموع (مذكر سالم ومؤنث سالم وتكسير)",
      category: "اللغة العربية",
      stageId: "primary",
      gradeId: "grade-5",
      subjectId: "arabic",
      instructorId: "youssef-elsebae",
      level: "Beginner",
      price: 120.00,
      originalPrice: 200.00,
      students: 0,
      lessons: 1,
      rating: 0,
      date: "2025-11-01",
      language: "ar",
      description: "شرح مبسط لأنواع الجموع في اللغة العربية لطلاب الصف الخامس الابتدائي: جمع المذكر السالم وجمع المؤنث السالم وجمع التكسير — مع الإعراب والتمارين.",
      image: "og-image.png",
      instructor: "مستر يوسف السبع",
      tags: ["عربي", "نحو", "جمع مذكر سالم", "جمع مؤنث سالم", "جمع تكسير", "خامسة ابتدائي"],
      driveUrl: "",
      learningObjectives: [
        "التعرف على أنواع الجمع الثلاثة",
        "تعريف جمع المذكر السالم وعلامات إعرابه",
        "تعريف جمع المؤنث السالم وعلامات إعرابه",
        "تعريف جمع التكسير وأمثلة عليه",
        "التمييز بين أنواع الجمع في الجمل",
        "حل تمارين إعرابية بسيطة من الكتاب المدرسي"
      ],
      curriculum: [
        {
          title: "أنواع الجمع",
          lessons: [
            { title: "مقدمة — المفرد والمثنى والجمع", duration: "08:00", preview: true, previewUrl: "", previewThumb: "" },
            { title: "جمع المذكر السالم — تعريفه وإعرابه", duration: "14:00", preview: false },
            { title: "جمع المؤنث السالم — تعريفه وإعرابه", duration: "14:00", preview: false },
            { title: "جمع التكسير — تعريفه وأمثلة", duration: "12:00", preview: false }
          ]
        },
        {
          title: "تمارين ومراجعة",
          lessons: [
            { title: "التمييز بين أنواع الجمع — تمارين تفاعلية", duration: "16:00", preview: false },
            { title: "حل تمارين الكتاب المدرسي", duration: "20:00", preview: false },
            { title: "مراجعة شاملة ونماذج امتحانات", duration: "18:00", preview: false }
          ]
        }
      ],
      faq: [
        { question: "الكورس لأي صف؟", answer: "الصف الخامس الابتدائي." },
        { question: "أسلوب الشرح مناسب للأطفال؟", answer: "أيوا، الشرح مبسط جداً ومناسب لسن المرحلة الابتدائية مع أمثلة سهلة." },
        { question: "فيه تمارين؟", answer: "طبعاً، كل تمارين الكتاب المدرسي محلولة مع نماذج إضافية." }
      ]
    },
    {
      id: 8,
      title: "الوراثة — قوانين مندل والصفات السائدة والمتنحية",
      category: "العلوم",
      stageId: "preparatory",
      gradeId: "grade-9",
      subjectId: "science",
      instructorId: "mostafa-mahmoud",
      level: "Advanced",
      price: 200.00,
      originalPrice: 350.00,
      students: 0,
      lessons: 1,
      rating: 0,
      date: "2025-11-15",
      language: "ar",
      description: "شرح شامل لوحدة الوراثة من منهج العلوم للصف الثالث الاعدادي: قوانين مندل في الوراثة، الصفات السائدة والمتنحية، التهجين الأحادي والثنائي، والأمراض الوراثية.",
      image: "og-image.png",
      instructor: "أ/ مصطفى محمود",
      tags: ["علوم", "تالتة اعدادي", "وراثة", "مندل", "صفات سائدة", "صفات متنحية", "تهجين"],
      driveUrl: "",
      learningObjectives: [
        "فهم تجارب مندل على نبات البازلاء",
        "شرح قانون مندل الأول (قانون انعزال الصفات)",
        "شرح قانون مندل الثاني (قانون التوزيع الحر)",
        "التمييز بين الصفات السائدة والمتنحية",
        "حل مسائل التهجين الأحادي والثنائي",
        "التعرف على بعض الأمراض الوراثية وكيفية انتقالها"
      ],
      curriculum: [
        {
          title: "مقدمة في الوراثة وتجارب مندل",
          lessons: [
            { title: "ما هي الوراثة؟ — مفاهيم أساسية", duration: "10:00", preview: true, previewUrl: "", previewThumb: "" },
            { title: "تجارب مندل على نبات البازلاء", duration: "18:00", preview: false },
            { title: "المصطلحات الوراثية — الجين والأليل والطراز", duration: "14:00", preview: false }
          ]
        },
        {
          title: "قوانين مندل",
          lessons: [
            { title: "قانون مندل الأول — انعزال الصفات", duration: "16:00", preview: false },
            { title: "قانون مندل الثاني — التوزيع الحر", duration: "18:00", preview: false },
            { title: "الصفات السائدة والمتنحية — أمثلة", duration: "14:00", preview: false }
          ]
        },
        {
          title: "التهجين والمسائل الوراثية",
          lessons: [
            { title: "التهجين الأحادي — مسائل محلولة", duration: "20:00", preview: false },
            { title: "التهجين الثنائي — مسائل محلولة", duration: "22:00", preview: false },
            { title: "الأمراض الوراثية — أنيميا الخلايا المنجلية وعمى الألوان", duration: "16:00", preview: false }
          ]
        },
        {
          title: "مراجعة نهائية",
          lessons: [
            { title: "مراجعة شاملة على الوراثة", duration: "22:00", preview: false },
            { title: "حل تمارين الكتاب ونماذج الشهادة الاعدادية", duration: "28:00", preview: false }
          ]
        }
      ],
      faq: [
        { question: "الكورس مهم للشهادة الاعدادية؟", answer: "أيوا جداً، الوراثة من أهم الوحدات في امتحان الشهادة الاعدادية." },
        { question: "فيه مسائل تهجين محلولة؟", answer: "أيوا، فيه مسائل تهجين أحادي وثنائي كتير محلولة خطوة بخطوة." },
        { question: "محتاج أعرف حاجة قبل الكورس؟", answer: "لا، الشرح بيبدأ من المفاهيم الأساسية." }
      ]
    }
  ];

  /* ── Categories (backward-compatible alias from subjects) ── */

  var categories = {};
  subjects.forEach(function (s) { categories[s.name] = { color: s.color }; });

  /* ── Brand Constants ── */

  var WHATSAPP_NUMBER = "201100343552";
  var BRAND_NAME      = "سنتر الأنوار المحمدية التعليمي";
  var DOMAIN          = "amr-abd-elsalam.github.io/alanwar.edu";

  /* ── Auto-derive lesson count from curriculum ── */

  courses.forEach(function (c) {
    if (c.curriculum && c.curriculum.length) {
      c.lessons = c.curriculum.reduce(function (sum, section) {
        return sum + (section.lessons ? section.lessons.length : 0);
      }, 0);
    }
  });

  /* ── Freeze and Export ── */

  return deepFreeze({
    stages:          stages,
    grades:          grades,
    subjects:        subjects,
    instructors:     instructors,
    courses:         courses,
    categories:      categories,
    WHATSAPP_NUMBER: WHATSAPP_NUMBER,
    BRAND_NAME:      BRAND_NAME,
    DOMAIN:          DOMAIN,

    META: {
      /* ── SEO / Branding ── */
      tagline:          'سنتر الأنوار المحمدية التعليمي — ابتدائي واعدادي وثانوي',
      description:      'سنتر الأنوار المحمدية التعليمي — كورسات أونلاين لطلاب المرحلة الابتدائية والاعدادية والثانوية في كل المواد. شرح تفصيلي من أفضل المدرسين مع دعم مباشر عبر واتساب.',
      descriptionShort: 'سنتر الأنوار المحمدية — كورسات أونلاين ابتدائي واعدادي وثانوي مع أفضل المدرسين.',
      ogImage:          '/assets/img/og-image.png',
      supportEmail:     'eslamkotp53@gmail.com',
      foundingYear:     '2025',
      logoPath:         '/assets/img/fav180.png',
      legalLastUpdated: '2026-03-10',

      /* ── WhatsApp ── */
      whatsappDefaultMessage: 'مرحباً! عندي سؤال عن كورسات سنتر الأنوار المحمدية.',

      /* ── Chat Widget ── */
      chatBotName:        'مساعد سنتر الأنوار',
      chatWelcomeMessage: 'أهلاً بيك! أنا هنا عشان أساعدك بأي سؤال عن الكورسات. اسألني أي حاجة!',
      chatPlaceholder:    'اكتب سؤالك هنا...',
      chatErrorMessage:   'حصل مشكلة في الاتصال. جرّب تاني.',
      chatUnavailable:    'مساعد الكورس غير متاح حالياً.',
      chatEnabled:        false,

      /* Hero section (index.html) */
      heroLine1:    'تعليم أفضل لأولادك،',
      heroLine2:    'من أفضل المدرسين.',
      heroSubtitle: 'كورسات أونلاين لطلاب المرحلة الابتدائية والاعدادية والثانوية — شرح تفصيلي من مدرسين متخصصين ودعم مباشر عبر واتساب.',
      heroBadge:    'سنتر الأنوار المحمدية — ابتدائي واعدادي وثانوي',

      /* Featured section (index.html) */
      featuredBadge:    'أحدث الكورسات',
      featuredTitle:    'كورسات مميزة',
      featuredSubtitle: 'كورسات مختارة لمساعدتك في فهم المنهج والاستعداد للامتحان',
      featuredViewAll:  'عرض كل الكورسات',

      /* Categories section (index.html) */
      categoriesBadge:    'حسب المادة',
      categoriesTitle:    'تصفح حسب المادة',
      categoriesSubtitle: 'اختار المادة اللي عايز تذاكرها',

      /* How-to section (index.html) */
      howBadge:    'خطوات بسيطة',
      howTitle:    'إزاي تبدأ؟',
      howSubtitle: '٣ خطوات وتبدأ تذاكر',
      howSteps: [
        { title: 'اختار الكورس', desc: 'تصفح الكورسات المتاحة واختار الفصل اللي عايز تذاكره. كل كورس فيه شرح تفصيلي ورسومات وأسئلة محلولة.', icon: 'bi-search' },
        { title: 'اشتري عبر واتساب', desc: 'اضغط «اشتري الآن» في صفحة الكورس وهيتفتحلك واتساب برسالة جاهزة. بعد تأكيد الدفع هتوصلك بيانات الدخول.', icon: 'bi-whatsapp' },
        { title: 'ابدأ المذاكرة', desc: 'بعد الدفع هتوصلك بيانات الدخول وتقدر تدخل الكورس فوراً من أي جهاز — وصول مدى الحياة ودعم مباشر من المدرس.', icon: 'bi-play-circle-fill' }
      ],

      /* CTA section badge (index.html) */
      ctaBadge: 'ابدأ النهارده',

      /* CTA section (index.html) */
      ctaTitle:    'مستعد تبدأ رحلة التفوق؟',
      ctaSubtitle: 'كورسات شاملة لكل المواد والصفوف — شرح مبسط من أفضل المدرسين، تمارين محلولة، ودعم مباشر. سجّل النهارده وابدأ فوراً.',

      /* Footer tagline (all pages) */
      footerTagline: 'سنتر الأنوار المحمدية التعليمي — كورسات أونلاين لطلاب الابتدائي والاعدادي والثانوي. شرح تفصيلي ودعم مباشر.',

      /* Course level labels (English key → Arabic display) */
      levels: {
        'All':          'كل المستويات',
        'Beginner':     'مبتدئ',
        'Intermediate': 'متوسط',
        'Advanced':     'متقدم'
      },

      /* Catalog empty state */
      emptyStateTitle: 'مفيش كورسات',
      emptyStateText:  'جرّب تغيّر الفلاتر أو كلمة البحث',
      resetFiltersLabel: 'إعادة ضبط الفلاتر',

      /* Catalog results format */
      resultsTemplate: 'عرض {start}\u2013{end} من {total} نتيجة',

      /* Instructors section (about page) */
      instructorsSectionBadge: 'فريق التدريس',
      instructorsSectionTitle: 'المدرسين',
      instructorsSectionSubtitle: 'مدرسين متخصصين في كل مادة — شرح مبسط ودعم مباشر',

      /* About page section strings */
      aboutPlatformBadge: 'المنصة',
      aboutPlatformTitle: 'تعليم حقيقي',
      aboutPlatformTitleGradient: 'بأسلوب مبسط',
      aboutVisionTitle: 'الرؤية',
      aboutVisionText: 'إن كل طالب — من الابتدائي للثانوي — يلاقي شرح مبسط ومناسب لسنه ومادته يساعده يفهم المنهج ويحقق أعلى الدرجات.',
      aboutMissionTitle: 'الهدف',
      aboutMissionText: 'كورسات شاملة لكل المواد بأسعار مناسبة — مع تمارين محلولة ونماذج امتحانات ودعم مباشر من المدرسين.',
      aboutHowBadge: 'طريقة العمل',
      aboutHowTitle: 'إزاي بنشتغل',
      aboutHowSubtitle: 'عملية بسيطة وواضحة — من اختيار الكورس لحد ما تبدأ تذاكر',
      aboutValuesBadge: 'مبادئنا',
      aboutValuesTitle: 'قيمنا',
      aboutValuesSubtitle: 'المبادئ اللي بنبني عليها كل حاجة بنقدمها',
      aboutContactBadge: 'تواصل معانا',
      aboutContactTitle: 'تواصل معانا',
      aboutContactSubtitle: 'عندك سؤال عن كورس أو عن عملية الشراء؟ ابعتلنا وهنرد بسرعة.',

      /* Course details section titles */
      sectionObjectives: 'هتتعلم إيه',
      sectionCurriculum: 'محتوى الكورس',
      sectionFaq:        'أسئلة شائعة',

      /* Sidebar meta labels */
      metaStage:         'المرحلة',
      metaGrade:         'الصف',

      /* Catalog filter headings */
      filterStageHeading: 'المرحلة',
      filterGradeHeading: 'الصف الدراسي',
      filterStageAll:     'كل المراحل',

      /* Rating card strings */
      ratingTitle:       'قيّم الكورس',
      ratingSubtitle:    'شاركنا رأيك عشان نحسّن المحتوى',
      ratingLoading:     'جاري تحميل التقييمات...',
      ratingEmpty:       'مفيش تقييمات لسه — كن أول من يقيّم!',
      ratingSubmitting:  'جاري إرسال تقييمك...',
      ratingSuccess:     'شكراً لتقييمك! رأيك بيساعدنا نحسّن.',
      ratingDuplicate:   'أنت قيّمت الكورس ده قبل كده. شكراً!',
      ratingError:       'حصل مشكلة. جرّب تاني بعد شوية.',
      ratingLoadError:   'تعذر تحميل التقييمات. جرّب تاني لاحقاً.',
      ratingEnabled:     false,
      ratingUnavailable: 'نظام التقييم غير متاح حالياً.',

      /* Copyright */
      copyrightTemplate: '© {year} {brand}. جميع الحقوق محفوظة.',

      /* Currency */
      currencyLabel: 'ج.م',
      freeLabel:     'مجاني',
      comingSoonLabel: 'قريباً',
      statCoursesLabel: 'كورسات متاحة',
      statStudentsLabel: 'طلاب مسجلين',
      statRatingLabel: 'متوسط التقييم',
      statSatisfactionLabel: 'نسبة الرضا',
      statNoData: 'لا يوجد',
      filterInstructorHeading: 'المدرس',
      filterCategoryHeading: 'المواد',
      filterLevelHeading: 'المستوى',
      filterRatingHeading: 'التقييم',

      /* Course card / details buttons */
      viewCourse:    'عرض الكورس',
      buyCourse:     'اشتري الآن',
      enterCourse:   'اشتريت الكورس\u061F ادخل هنا \u{1F511}',
      startLearning: 'ابدأ التعلم الآن',
      backToCourses: 'العودة للكورسات',

      /* Navigation */
      navHome:    'الرئيسية',
      navCourses: 'الكورسات',

      /* Error page */
      errorTitle:  'الكورس غير موجود',
      errorText:   'الكورس اللي بتدور عليه مش موجود. ممكن يكون اتحذف أو الرابط غلط.',
      errorBrowse: 'تصفح الكورسات',

      /* Preview */
      previewPlayLabel:       'اضغط للمعاينة المجانية',
      previewFullscreenLabel: 'ملء الشاشة',
      previewCloseLabel:      'إغلاق المعاينة'
    }
  });

})();