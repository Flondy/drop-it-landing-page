'use strict';

// Purely client-side translation; GitHub Pages does not require a backend.
const translations = {
  de: {
    skip:'Zum Inhalt springen','nav.features':'Features','nav.screenshots':'Screenshots','nav.how':"So funktioniert’s",'nav.download':'Jetzt spielen ↗',
    'hero.eyebrow':'JETZT FÜR ANDROID & IPHONE','hero.iosSmall':'LADEN IM','hero.title':'STAPEL. TRIFF. WIEDERHOLE.',
    'hero.description':'Ein Tap entscheidet alles. Setze jeden Block im perfekten Moment ab, baue deinen Neon-Turm und knacke deinen eigenen Highscore.',
    'hero.storeSmall':'JETZT DOWNLOADEN','hero.gallery':'Screenshots ansehen','hero.benefit1':'One-Tap-Gameplay','hero.benefit2':'Neon-Look','hero.benefit3':'Highscore-Challenge',
    'hero.float1':'PERFECT DROP!','hero.float2':'WIE HOCH KOMMST DU?',
    'features.kicker':'WARUM DROP IT?','features.titleA':'KLEINES SPIEL.','features.titleB':'GROSSER SPASS.','features.subtitle':'Schnell verstanden, schwer gemeistert – jeder neue Block zählt.',
    'features.f1title':'SMOOTH STACKING','features.f1desc':'Nur ein Fingertipp: Stoppe den beweglichen Block im richtigen Augenblick und lass deinen Turm wachsen.','features.f1tag':'EINFACHE STEUERUNG',
    'features.f2title':'PERFECT DROPS','features.f2desc':'Triff die Mitte für perfekte Platzierungen, Partikeleffekte und dieses besondere Erfolgsgefühl.','features.f2tag':'PRÄZISION ZÄHLT',
    'features.f3title':'THEMES & KAMERA','features.f3desc':'Wähle deinen Farblook und entscheide, wie oft die Kamera beim Stapeln mit nach oben fährt.','features.f3tag':'DEIN STIL',
    'features.f4title':'HIGHSCORE HUNT','features.f4desc':'Ein Fehlversuch? Starte neu und versuche, deinen bisherigen Rekord zu schlagen.','features.f4tag':'IMMER EINE RUNDE MEHR',
    'gallery.kicker':'DAS SPIEL IN BILDERN','gallery.titleA':'NEON-STYLE.','gallery.titleB':'PURE ACTION.','gallery.subtitle':'Vier Einblicke in das Spielprinzip, die Einstellungen und deine Highscore-Jagd.',
    'gallery.c1':'DROP & STACK','gallery.s1':'Der perfekte Moment zählt.','gallery.c2':'PERFECT DROPS','gallery.s2':'Präzision sieht gut aus.','gallery.c3':'THEMES & SETTINGS','gallery.s3':'Spiele auf deine Weise.','gallery.c4':'CHASE YOUR BEST','gallery.s4':'Ein Versuch geht noch.',
    'gallery.note':'Hinweis: Die dargestellten Bilder sind gestaltete Werbevisualisierungen und keine unveränderten Ingame-Screenshots.',
    'how.kicker':"SO EINFACH GEHT’S",'how.titleA':'ONE TAP.','how.titleB':'ENDLESS SKILL.','how.intro':'Keine komplizierten Regeln. Nur du, deine Reaktion und der nächste Block.',
    'how.oneTitle':'TIMING FINDEN','how.oneBody':'Beobachte, wie sich der neue Block über dem Turm bewegt.',
    'how.twoTitle':'TIPPEN & STAPELN','how.twoBody':'Tippe im richtigen Moment. Was übersteht, wird abgeschnitten.',
    'how.threeTitle':'REKORD BRECHEN','how.threeBody':'Halte deinen Turm am Leben und erreiche neue Höhen.','how.sticker':'REPEAT TO BEAT',
    'cta.kicker':'BEREIT FÜR DIE CHALLENGE?','cta.titleA':'WIE HOCH','cta.titleB':'KOMMST DU?','cta.text':'Hol dir Drop It für Android oder iPhone und starte deine nächste Highscore-Runde.','cta.button':'JETZT AUF GOOGLE PLAY','cta.iosButton':'JETZT IM APP STORE',
    'footer.rights':'Alle Rechte vorbehalten.','footer.contact':'Kontakt','footer.privacy':'Datenschutz','footer.imprint':'Impressum',
    pageDescription:'Drop It – das farbenfrohe Geschicklichkeitsspiel mit One-Tap-Steuerung. Blöcke stapeln, perfekte Treffer landen und den Highscore knacken.',
    pageTitle:'Drop It – Stack Game | Flondy'
  },
  en: {
    skip:'Skip to content','nav.features':'Features','nav.screenshots':'Screenshots','nav.how':'How to play','nav.download':'Play now ↗',
    'hero.eyebrow':'OUT NOW ON ANDROID & IPHONE','hero.iosSmall':'DOWNLOAD ON THE','hero.title':'DROP. STACK. REPEAT.',
    'hero.description':'One tap makes all the difference. Time each moving block, build a towering neon masterpiece and beat your personal best.',
    'hero.storeSmall':'DOWNLOAD NOW','hero.gallery':'View screenshots','hero.benefit1':'One-tap gameplay','hero.benefit2':'Neon visuals','hero.benefit3':'Highscore challenge',
    'hero.float1':'PERFECT DROP!','hero.float2':'HOW HIGH CAN YOU GO?',
    'features.kicker':'WHY DROP IT?','features.titleA':'SMALL GAME.','features.titleB':'BIG FUN.','features.subtitle':'Easy to learn, challenging to master – every block counts.',
    'features.f1title':'SMOOTH STACKING','features.f1desc':'Just one tap: stop the moving block at the perfect moment and watch your tower grow.','features.f1tag':'SIMPLE CONTROLS',
    'features.f2title':'PERFECT DROPS','features.f2desc':'Land centered placements for visual effects, satisfying feedback and that perfect-hit feeling.','features.f2tag':'PRECISION MATTERS',
    'features.f3title':'THEMES & CAMERA','features.f3desc':'Choose your colors and customize how often the camera moves upward as your tower grows.','features.f3tag':'YOUR STYLE',
    'features.f4title':'HIGHSCORE HUNT','features.f4desc':'Missed a block? Try again and challenge yourself to beat your previous record.','features.f4tag':'JUST ONE MORE RUN',
    'gallery.kicker':'THE GAME IN PICTURES','gallery.titleA':'NEON STYLE.','gallery.titleB':'PURE ACTION.','gallery.subtitle':'Four looks at the gameplay, settings, and your highscore challenge.',
    'gallery.c1':'DROP & STACK','gallery.s1':'Timing is everything.','gallery.c2':'PERFECT DROPS','gallery.s2':'Precision looks good.','gallery.c3':'THEMES & SETTINGS','gallery.s3':'Play your way.','gallery.c4':'CHASE YOUR BEST','gallery.s4':'One more round.',
    'gallery.note':'Note: These images are stylized promotional concepts, not unedited in-game screenshots.',
    'how.kicker':'HERE’S HOW IT WORKS','how.titleA':'ONE TAP.','how.titleB':'ENDLESS SKILL.','how.intro':'No complicated rules. Just you, your timing and the next block.',
    'how.oneTitle':'FIND THE MOMENT','how.oneBody':'Watch the next block move above your growing tower.',
    'how.twoTitle':'TAP TO STACK','how.twoBody':'Tap at the right moment. Anything overhanging gets sliced away.',
    'how.threeTitle':'BEAT YOUR BEST','how.threeBody':'Keep the tower alive and reach new heights.','how.sticker':'REPEAT TO BEAT',
    'cta.kicker':'READY FOR THE CHALLENGE?','cta.titleA':'HOW HIGH','cta.titleB':'CAN YOU GO?','cta.text':'Get Drop It for Android or iPhone and start chasing your next highscore.','cta.button':'GET IT ON GOOGLE PLAY','cta.iosButton':'GET IT ON THE APP STORE',
    'footer.rights':'All rights reserved.','footer.contact':'Contact','footer.privacy':'Privacy','footer.imprint':'Legal notice',
    pageDescription:'Drop It – neon-styled one-tap stacking game. Time your drops, build the tallest tower and chase your highscore.',
    pageTitle:'Drop It – Stack Game | Flondy'
  }
};

let activeLanguage = 'de';
function setLanguage(lang) {
  if (!translations[lang]) return;
  activeLanguage = lang;
  document.documentElement.lang = lang;
  for (const element of document.querySelectorAll('[data-i18n]')) {
    const translated = translations[lang][element.dataset.i18n];
    if (translated !== undefined) element.textContent = translated;
  }
  for (const button of document.querySelectorAll('[data-lang]')) {
    const selected = button.dataset.lang === lang;
    button.classList.toggle('active',selected);
    button.setAttribute('aria-pressed',String(selected));
  }
  const description = document.querySelector('#meta-description');
  if (description) description.setAttribute('content',translations[lang].pageDescription);
  document.title = translations[lang].pageTitle;
  try { localStorage.setItem('dropit-lang',lang); } catch(e) { /* private mode */ }
  const caption = document.getElementById('lightbox-caption');
  if (caption && caption.dataset.caption) caption.textContent = translations[lang][caption.dataset.caption] || '';
}
function preferredLanguage() {
  const param = new URLSearchParams(location.search).get('lang');
  if (translations[param]) return param;
  try { const saved = localStorage.getItem('dropit-lang'); if (translations[saved]) return saved; } catch(e) {}
  return (navigator.language || 'de').toLowerCase().startsWith('de') ? 'de' : 'en';
}
for(const button of document.querySelectorAll('[data-lang]')) button.addEventListener('click',()=>setLanguage(button.dataset.lang));
setLanguage(preferredLanguage());

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click',()=>{
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
  });
  for(const link of navLinks.querySelectorAll('a')) link.addEventListener('click',()=>{
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
  });
  window.addEventListener('resize',()=>{
    if(innerWidth > 850) { navLinks.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); }
  });
}

if ('IntersectionObserver' in window) {
  const targets = Array.from(document.querySelectorAll('.reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    });
  },{threshold:.06,rootMargin:'0px 0px 60px 0px'});
  targets.forEach(target=>observer.observe(target));
  // Only enable entry-animation after observer has been set up.
  document.documentElement.classList.add('js-ready');
}

const galleryButtons = [...document.querySelectorAll('.screenshot-card')];
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
let selectedImageIndex = 0;
let previousFocus = null;
function showImageAt(index) {
  selectedImageIndex = (index + galleryButtons.length) % galleryButtons.length;
  const button = galleryButtons[selectedImageIndex];
  lightboxImage.src = button.dataset.image;
  lightboxImage.alt = button.querySelector('img').alt;
  lightboxCaption.dataset.caption = button.dataset.caption;
  lightboxCaption.textContent = translations[activeLanguage][button.dataset.caption] || '';
}
function openLightbox(index){
  if (!lightbox) return;
  previousFocus = document.activeElement;
  lightbox.hidden = false;
  document.body.classList.add('modal-open');
  showImageAt(index);
  lightboxClose.focus();
}
function closeLightbox(){
  lightbox.hidden = true;
  document.body.classList.remove('modal-open');
  lightboxImage.removeAttribute('src');
  if(previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
}
galleryButtons.forEach((button,index)=>button.addEventListener('click',()=>openLightbox(index)));
if(lightbox){
  lightboxClose.addEventListener('click',closeLightbox);
  document.getElementById('lightbox-prev').addEventListener('click',()=>showImageAt(selectedImageIndex-1));
  document.getElementById('lightbox-next').addEventListener('click',()=>showImageAt(selectedImageIndex+1));
  lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox()});
  document.addEventListener('keydown',event=>{
    if(lightbox.hidden)return;
    if(event.key==='Escape')closeLightbox();
    if(event.key==='ArrowLeft')showImageAt(selectedImageIndex-1);
    if(event.key==='ArrowRight')showImageAt(selectedImageIndex+1);
    if(event.key==='Tab'){
      const items=[lightboxClose,document.getElementById('lightbox-prev'),document.getElementById('lightbox-next')];
      const current=items.indexOf(document.activeElement);
      const delta=event.shiftKey?-1:1;
      items[(current+delta+items.length)%items.length].focus();
      event.preventDefault();
    }
  });
}
