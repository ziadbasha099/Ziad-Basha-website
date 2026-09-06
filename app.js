/* ============ I18N ============ */
const translations = {
  ar: {
    nav_about:"نبذة", nav_skills:"المهارات", nav_process:"أسلوب العمل", nav_work:"الأعمال", nav_contact:"تواصل",
    hero_eyebrow:"متاح لمشاريع جديدة",
    hero_name1:"زياد", hero_name2:"باشا",
    hero_prefix:"// ",
    hero_cta1:"شاهد أعمالي", 
    hero_cta2:"إبنْ موقعك 🌱",
    scroll:"مرر للأسفل",
    about_tag:"من أنا",
    about_title:"مصمم يهتم بالتفاصيل الصغيرة التي تصنع فرقاً كبيراً",
    about_p1:"مصمم ومطوّر مواقع إلكترونية، أعمل على تحويل الأفكار إلى تجارب رقمية بصرية واضحة وسريعة الاستجابة. أومن بأن التصميم الجيد هو الذي يُفهم دون شرح.",
    about_p2:"على مدار السنوات الماضية عملت مع شركات ناشئة وأفراد على بناء مواقع تجمع بين الجمال البصري والأداء التقني، من الفكرة الأولى حتى الإطلاق.",
    stat1:"سنوات خبرة", stat2:"مشروع مُنجز", stat3:"عميل سعيد",
    skills_tag:"الأدوات", skills_title:"التقنيات التي أستخدمها يومياً",
    process_tag:"أسلوب العمل", process_title:"من الفكرة إلى موقع جاهز، بأربع خطوات",
    p1_t:"الاكتشاف", p1_d:"نبدأ بفهم أهدافك وجمهورك المستهدف قبل رسم أي خط.",
    p2_t:"التصميم", p2_d:"بناء واجهات واضحة ومتناسقة تعكس هوية علامتك التجارية.",
    p3_t:"التطوير", p3_d:"تحويل التصميم إلى موقع سريع ومتجاوب يعمل على كل الأجهزة.",
    p4_t:"الإطلاق", p4_d:"اختبار شامل ثم إطلاق الموقع مع متابعة ودعم بعد التسليم.",
    work_tag:"أعمال مختارة",  
    work_title:"مشاريع أفخر بها",
    w1_cat:"موقع تعليمي / تطبيق ويب",
    w1_t:"موقع مسودة التعليمي", 
    w1_d:"موقع تعليمي تفاعلي بتصميم بسيط وسريع أفتخر بأنه أول موقع لي أقوم بإنشائه من الفكرة للنشر.",
    w2_cat:"صفحة تعريفية", 
    w2_t:"موقع للمتحف المصري الكبير", 
    w2_d:"موقع تعريفي يعرض بعض المعلومات والآثار في المتحف المصري الكبير.",
    
    w3_cat:"موقع ثلاثي الأبعاد", 
    w3_t:"موقع عطور", 
    w3_d:"موقع عطور ثلاثي الابعاد تفاعلي",
    
    w4_cat:"متجر . موقع شركة سماعات", 
    w4_t:"موقع نيترو", 
    w4_d:"موقع شركة سماعات راس ثلاثي الأبعاد عصري",
    
    w5_cat:"موقع ثلاثي الأبعاد", 
    w5_t:"موقع شركة طيران", 
    w5_d:"موقع شركة طيران مصرية ثلاثي الأبعاد",
    
    contact_title:"هل لديك مشروع في ذهنك؟",
    contact_sub:"أراسلني وأخبرني عن فكرتك، دعنا نحوّلها إلى موقع حقيقي يليق بها.",
    contact_email:"راسلني الآن",
    roles:["مصمم واجهات ومواقع","مطوّر واجهات أمامية","خبير تجربة مستخدم"],

    pd_eyebrow:"نموذج بدء المشروع",
    pd_page_title:"بيانات المشروع",
    pd_sub:"املأ البيانات دي وابعتها، وهبدأ أراجعها وأتواصل معك في أقرب وقت.",
    pd_back:"الرئيسية",
    pd_user_tag:"بياناتك",
    pd_user_title:"معلومات التواصل",
    pd_name_label:"اسم صاحب المشروع",
    pd_name_ph:"مثال: زياد باشا",
    pd_email_label:"البريد الإلكتروني",
    pd_phone_label:"رقم الهاتف (اختياري)",
    pd_project_tag:"مشروعك",
    pd_project_title:"تفاصيل المشروع",
    pd_pname_label:"اسم المشروع",
    pd_pname_ph:"اكتب اسم المشروع",
    pd_logo_label:"شعار المشروع",
    pd_colors_label:"الألوان والخطوط",
    pd_video_label:"الفيديوهات",
    pd_figma_label:"تصاميمك على Figma",
    pd_content_label:"محتوى الموقع (النصوص التي ستكون في الموقع)",
    pd_none:"لا يوجد",
    pd_upload_cta:"اختر ملف",
    pd_no_file:"لم يتم اختيار ملف",
    pd_type_label:"نوع الموقع",
    pd_type_placeholder:"اختر نوع الموقع",
    pd_type_edu:"تعليمي",
    pd_type_store:"متجر إلكتروني",
    pd_type_personal:"موقع شخصي",
    pd_type_blog:"مدونة",
    pd_type_webapp:"تطبيق ويب",
    pd_type_company:"موقع تعريفي لشركة أو مؤسسة أو مكان",
    pd_type_error:"من فضلك اختر نوع الموقع",
    pd_style_label:"نمط الموقع",
    pd_style_normal:"عادي",
    pd_details_label:"تفاصيل أخرى (اختياري)",
    pd_details_ph:"أي حاجة تانية حابب تقولّها...",
    pd_note1:"التعديلات المجانية: واحد فقط (يمكنك الزيادة عليها).",
    pd_note2:"سيتم إرسال رسالة تأكيد لك فيها معلومات الموقع والسعر والوقت المتوقع، يرجى الرد عليها.",
    pd_note3:"يتم دفع ١٥٪ مقدماً، ويتم إرسال الموقع على ثلاث مراحل (الخطة / MVP / الموقع النهائي).",
    pd_note4:"لست خبيرًا في قواعد البيانات أو الأمن السيبراني.",
    pd_pages_label:"عدد صفحات الموقع",
    pd_submit:"إرسال البيانات",
    pd_success_title:"تم استلام بياناتك 🎉",
    pd_success_sub:"وصلتني كل التفاصيل، وهتواصل معاك قريب جداً.",
    pd_price_main:"السعر يبدأ من ٣٠٠ ج.م (٦ $) فقط",
    pd_price_sub:"ملاحظة: السعر يزيد كلما زادت المهام المطلوبة وعدد الصفحات ونوع الموقع والتعديلات.",
  },
  en: {
    nav_about:"About", nav_skills:"Skills", nav_process:"Process", nav_work:"Work", nav_contact:"Contact",
    hero_eyebrow:"Available for new projects",
    hero_name1:"Ziad", hero_name2:"Basha",
    hero_prefix:"// ",
    hero_cta1:"View my work", 
    hero_cta2:"Build your website🌱",
    scroll:"Scroll down",
    about_tag:"About me",
    about_title:"A designer who cares about the small details that make a big difference",
    about_p1:"I'm a web designer and developer, turning ideas into clear, fast, responsive digital experiences. I believe good design is design that needs no explanation.",
    about_p2:"Over the past years I've worked with startups and individuals to build websites that blend visual beauty with technical performance, from first sketch to launch.",
    stat1:"Years experience", 
    stat2:"Projects shipped", 
    stat3:"Happy clients",
    skills_tag:"Toolkit",  
    skills_title:"Technologies I use every day",
    process_tag:"How I work",
    process_title:"From idea to live website, in four steps",
    p1_t:"Discover", p1_d:"We start by understanding your goals and audience before drawing a single line.",
    p2_t:"Design", p2_d:"Building clear, consistent interfaces that reflect your brand identity.",
    p3_t:"Develop", p3_d:"Turning the design into a fast, responsive site that works on every device.",
    p4_t:"Launch", p4_d:"Full testing, then launch — with follow-up support after delivery.",
    work_tag:"Selected work",
    work_title:"Projects I'm proud of",
    w1_cat:"Educational  website / web app", 
    w1_t:"moswada-edu", 
    w1_d:"An interactive educational website with a simple and fast design. I'm proud that it's my first website, created from idea to publication.",
    w2_cat:"Informational page",
    w2_t:"Grand Egyptian Museum", 
    w2_d:"An informational website showcasing some information and artifacts in the Grand Egyptian Museum.",
    
    w3_cat:"3D website", 
    w3_t:"Rose perfume website", 
    w3_d:"Interactive 3d prefume website",
    
    w4_cat:"Company site . E-commerce", 
    w4_t:"Nitro headphone", 
    w4_d:"The website for the 3D headphones company is modern.",
    
    w5_cat:"3D website", 
    w5_t:"Airline website", 
    w5_d:"An Egyptian airline 3d website.",
    
    contact_title:"Got a project in mind?",
    contact_sub:"Send me a message and tell me about your idea — let's turn it into a real website worthy of it.",
    contact_email:"Email me",
    roles:["UI & Web Designer","Front-End Developer","UX Specialist"],

    pd_eyebrow:"Project kickoff form",
    pd_page_title:"Project Details",
    pd_sub:"Fill in the details below and send them over — I'll review everything and get back to you soon.",
    pd_back:"Home",
    pd_user_tag:"About you",
    pd_user_title:"Contact information",
    pd_name_label:"Project owner's name",
    pd_name_ph:"e.g. Ziad Basha",
    pd_email_label:"Email address",
    pd_phone_label:"Phone number (optional)",
    pd_project_tag:"Your project",
    pd_project_title:"Project details",
    pd_pname_label:"Project name",
    pd_pname_ph:"Write the project name",
    pd_logo_label:"Project logo",
    pd_colors_label:"Colors & fonts",
    pd_video_label:"Videos",
    pd_figma_label:"Your Figma designs",
    pd_content_label:"Website content (text in website)",
    pd_none:"None",
    pd_upload_cta:"Choose file",
    pd_no_file:"No file chosen",
    pd_type_label:"Website type",
    pd_type_placeholder:"Select website type",
    pd_type_edu:"Educational",
    pd_type_store:"E-commerce store",
    pd_type_personal:"Personal website",
    pd_type_blog:"Blog",
    pd_type_webapp:"Web app",
    pd_type_company:"Company / organization / place profile",
    pd_type_error:"Please choose a website type",
    pd_style_label:"Website style",
    pd_style_normal:"Standard",
    pd_details_label:"Other details (optional)",
    pd_details_ph:"Anything else you'd like to add...",
    pd_note1:"Free revisions: one only (you can add more).",
    pd_note2:"You'll receive a confirmation message with the site details, price, and estimated time — please reply to it.",
    pd_note3:"A 15% upfront payment is required, and the site is delivered in three stages (plan / MVP / final website).",
    pd_note4:"I'm not an expert in databases or cybersecurity.",
    pd_pages_label:"Number of site pages",
    pd_submit:"Send details",
    pd_success_title:"Your details are in 🎉",
    pd_success_sub:"Got everything — I'll be in touch very soon.",
    pd_price_main:"Prices start from 300 EGP ($6) only",
    pd_price_sub:"Note: the price increases with more requested tasks, more pages, the site type, and revisions."
  }
};

let currentLang = 'ar';

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang][key] !== undefined){ el.textContent = translations[lang][key]; }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(translations[lang][key] !== undefined){ el.setAttribute('placeholder', translations[lang][key]); }
  });
  document.getElementById('langToggle').textContent = (lang === 'ar') ? 'EN' : 'AR';
  startRoleCycle();
}

document.getElementById('langToggle').addEventListener('click', ()=>{
  applyLang(currentLang === 'ar' ? 'en' : 'ar');
});

/* ============ ROLE TICKER ============ */
let roleIndex = 0, roleTimer = null;
function startRoleCycle(){
  const roleEl = document.getElementById('role-text');
  if(!roleEl) return;
  if(roleTimer) clearInterval(roleTimer);
  roleIndex = 0;
  const setRole = ()=>{
    const roles = translations[currentLang].roles;
    roleEl.style.opacity = 0;
    setTimeout(()=>{
      roleEl.textContent = roles[roleIndex % roles.length];
      roleEl.style.opacity = 1;
      roleIndex++;
    }, 350);
  };
  roleEl.style.transition = 'opacity .35s ease';
  setRole();
  roleTimer = setInterval(setRole, 3200);
}

/* ============ THEME ============ */
const themeIcon = document.getElementById('themeIcon');
function applyTheme(theme){
  document.documentElement.dataset.theme = theme;
  themeIcon.innerHTML = theme === 'dark'
    ? '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
    : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
}
document.getElementById('themeToggle').addEventListener('click', ()=>{
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

/* ============ SCROLL / NAV ============ */
const headerEl = document.getElementById('siteHeader');
window.addEventListener('scroll', ()=>{
  headerEl.classList.toggle('scrolled', window.scrollY > 40);
}, {passive:true});

/* ============ CURSOR GLOW ============ */
const glow = document.getElementById('glow');
let gx=0, gy=0, cx=0, cy=0;
const isTouch = matchMedia('(hover:none)').matches;
if(!isTouch){
  window.addEventListener('mousemove', e=>{ gx = e.clientX; gy = e.clientY; });
  function loop(){
    cx += (gx-cx)*0.12; cy += (gy-cy)*0.12;
    glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  }
  loop();
} else { glow.style.display = 'none'; }

/* ============ SCROLL REVEAL ============ */
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, {threshold:0.15, rootMargin:'0px 0px -60px 0px'});
revealEls.forEach(el=>io.observe(el));

/* ============ CUSTOM SELECT (نوع الموقع) ============ */
document.querySelectorAll('.custom-select').forEach(cs=>{
  const trigger = cs.querySelector('.cs-trigger');
  const valueEl = cs.querySelector('.cs-value');
  const hiddenInput = cs.querySelector('input[type=hidden]');
  const field = cs.closest('.field');

  trigger.setAttribute('aria-haspopup','listbox');
  trigger.setAttribute('aria-expanded','false');

  const closeList = ()=>{ cs.classList.remove('open'); trigger.setAttribute('aria-expanded','false'); };
  const openList = ()=>{
    document.querySelectorAll('.custom-select.open').forEach(o=>{ if(o!==cs) o.classList.remove('open'); });
    cs.classList.add('open'); trigger.setAttribute('aria-expanded','true');
  };

  trigger.addEventListener('click', (e)=>{
    e.stopPropagation();
    cs.classList.contains('open') ? closeList() : openList();
  });

  cs.querySelectorAll('.cs-option').forEach(opt=>{
    opt.addEventListener('click', ()=>{
      cs.querySelectorAll('.cs-option').forEach(o=>o.classList.remove('active'));
      opt.classList.add('active');
      hiddenInput.value = opt.dataset.value;
      valueEl.setAttribute('data-i18n', opt.getAttribute('data-i18n'));
      valueEl.textContent = opt.textContent;
      cs.classList.add('has-value');
      field && field.classList.remove('invalid');
      closeList();
    });
  });

  document.addEventListener('click', (e)=>{ if(!cs.contains(e.target)) closeList(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeList(); });
});

/* ============ PROJECT-DATA FORM (optional uploads) ============ */
document.querySelectorAll('.upload-row input[type=file]').forEach(input=>{
  input.addEventListener('change', ()=>{
    const row = input.closest('.upload-row');
    const fname = row && row.querySelector('.file-name');
    if(!fname) return;
    if(input.files.length){
      fname.removeAttribute('data-i18n');
      fname.textContent = input.files[0].name;
    } else {
      fname.setAttribute('data-i18n','pd_no_file');
      fname.textContent = translations[currentLang].pd_no_file;
    }
  });
});

const pagesStepper = document.getElementById('pagesStepper');
if(pagesStepper){
  const pagesValueEl = document.getElementById('pagesValue');
  const pagesInputEl = document.getElementById('pagesInput');
  const decBtn = pagesStepper.querySelector('[data-action="dec"]');
  const incBtn = pagesStepper.querySelector('[data-action="inc"]');
  const MIN_PAGES = 1, MAX_PAGES = 6;
  let pagesCount = MIN_PAGES;

  function renderPages(){
    pagesValueEl.textContent = pagesCount;
    pagesInputEl.value = pagesCount;
    decBtn.disabled = (pagesCount <= MIN_PAGES);
    incBtn.disabled = (pagesCount >= MAX_PAGES);
  }
  decBtn.addEventListener('click', ()=>{
    if(pagesCount > MIN_PAGES){ pagesCount--; renderPages(); }
  });
  incBtn.addEventListener('click', ()=>{
    if(pagesCount < MAX_PAGES){ pagesCount++; renderPages(); }
  });
  renderPages();
}

document.querySelectorAll('.none-toggle').forEach(chk=>{
  const target = document.getElementById(chk.dataset.target);
  const row = chk.closest('.upload-row');
  const btnLabel = row && row.querySelector('.upload-btn');
  const fname = row && row.querySelector('.file-name');
  chk.addEventListener('change', ()=>{
    if(target) target.disabled = chk.checked;
    if(btnLabel) btnLabel.classList.toggle('is-disabled', chk.checked);
    if(chk.checked && target) target.value = '';
    if(chk.checked && fname){
      fname.setAttribute('data-i18n','pd_no_file');
      fname.textContent = translations[currentLang].pd_no_file;
    }
  });
});

const pdForm = document.querySelector('.pd-form');
if(pdForm){
  pdForm.addEventListener('submit', (e)=>{
    let valid = true;
    pdForm.querySelectorAll('.custom-select').forEach(cs=>{
      const hiddenInput = cs.querySelector('input[type=hidden]');
      const field = cs.closest('.field');
      if(!hiddenInput.value){
        valid = false;
        field && field.classList.add('invalid');
      }
    });
    if(!valid){
      e.preventDefault();
      const firstInvalid = pdForm.querySelector('.field.invalid .cs-trigger');
      if(firstInvalid){ firstInvalid.scrollIntoView({behavior:'smooth', block:'center'}); firstInvalid.focus(); }
      return;
    }
    const submitBtn = pdForm.querySelector('.pd-submit');
    if(submitBtn){ submitBtn.disabled = true; submitBtn.style.opacity = .6; }
  });
}

/* ============ INIT ============ */
applyLang('ar');

/* ============ SCROLL TO TOP FUNCTIONALITY ============ */
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
