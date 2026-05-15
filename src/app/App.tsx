import { useState, useEffect, useRef } from 'react';
import { StachubLogo } from './components/StachubLogo';
import {
  DesktopMockup, IPhone17ProMockup,
  RetailTrackDashboard, RetailTrackCashier, RetailTrackInventory,
  RetailTrackSplashScreen, IPhoneCashierScreen, IPhoneTrustScreen,
  StachubSplashScreen, StachubMissionScreen, StachubTrustScreen, ComingSoonScreen
} from './components/DeviceMockups';
import {
  Menu, X, Instagram, Twitter, Linkedin, MessageCircle, Github,
  ChevronDown, ChevronUp, Shield, Clock, Headphones, CheckCircle,
  Star, ExternalLink, Zap
} from 'lucide-react';

// ─── SHARED DEVICE SIZES — same everywhere ────────────────────────────────────
const DESKTOP_H = 190;   // desktop screen height px
const PHONE_H   = 270;   // iphone screen height px

// ─── ANIMATION HOOK ───────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView?1:0, transform: inView?'translateY(0)':'translateY(28px)', transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

// ─── DEVICE PAIR — consistent sizing on every page ────────────────────────────
function DevicePair({ desktopScreens, phoneScreens, bg = 'bg-gray-50' }: {
  desktopScreens: React.ReactNode[];
  phoneScreens: React.ReactNode[];
  bg?: string;
}) {
  return (
    <div className={`${bg} rounded-2xl p-6`}>
      <div className="flex items-end gap-5 justify-center">
        <div style={{ width:'63%', filter:'drop-shadow(0 12px 28px rgba(0,0,0,0.16))' }}>
          <DesktopMockup screens={desktopScreens} screenHeight={DESKTOP_H} />
        </div>
        <div style={{ width:'28%', marginBottom:'20px', filter:'drop-shadow(0 12px 28px rgba(0,0,0,0.2))' }}>
          <IPhone17ProMockup screens={phoneScreens} screenHeight={PHONE_H} />
        </div>
      </div>
    </div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const faqs = [
  { q:'Is RetailTrack free to start?', a:'Yes — RetailTrack has a free tier for small shops. Paid plans unlock advanced analytics, AI insights, multi-branch support, and priority support. No credit card required to sign up.' },
  { q:'Do I need internet to use RetailTrack?', a:'RetailTrack works online and has offline support for point-of-sale so you can keep selling even when your connection drops. Data syncs automatically when you reconnect.' },
  { q:'Is my business data safe with Stachub?', a:'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never sell your data. Your business data belongs to you — you can export it at any time.' },
  { q:'Can I use RetailTrack on my phone?', a:'Yes. RetailTrack has a mobile-optimised web app and the cashier interface is designed for phones and tablets. A native Android app is also in development.' },
  { q:'Does Stachub support businesses outside Ghana?', a:'Absolutely. RetailTrack supports multiple currencies including GHS, NGN, KES, ZAR and USD. We currently serve businesses across 14 countries.' },
  { q:'How do I get support?', a:'We offer WhatsApp support (+233 500 593 722), email support (hello@stachubgh.com), and in-app chat. Our average first-response time is under 2 hours during business days.' }
];

const testimonials = [
  { name:'William', role:'Owner, Forever Victorious Enterprise — Cold Store & Provisions, Ghana', avatar:'WF', rating:5, text:"Before RetailTrack, I was running my cold store and provision shop on paper and memory. I didn't know which items were moving fast or when I was running low on stock. Now I get alerts before I run out, I can see my daily sales on my phone, and my staff can't hide anything from me anymore. Best decision I made for my business." },
  { name:'Ama Serwaa', role:'Owner, Serwaa Cosmetics — Kumasi', avatar:'AS', rating:5, text:"RetailTrack changed how I run my shop. I can see which products are selling, track my staff and get daily reports on my phone. I stopped losing stock I couldn't account for." },
  { name:'Kwame Boateng', role:'Manager, FreshMart Supermarket — Accra', avatar:'KB', rating:5, text:"We've been using RetailTrack for 6 months. The AI advisor told us our best-selling items and we doubled orders on those. Revenue went up 30% in two months." }
];

function Stars({ count }: { count: number }) {
  return <div className="flex gap-0.5">{Array.from({ length:count }).map((_,i) => <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]"/>)}</div>;
}

function FAQItem({ q, a }: { q:string; a:string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-900">{q}</span>
        {open ? <ChevronUp size={20} className="text-[#1E40AF] shrink-0"/> : <ChevronDown size={20} className="text-gray-400 shrink-0"/>}
      </button>
      {open && <div className="px-6 pb-5 border-t border-gray-100"><p className="pt-4 text-gray-600 leading-relaxed">{a}</p></div>}
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [formData, setFormData] = useState({ name:'', email:'', company:'', message:'' });
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 120);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll); };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setFormState('sending');
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(formData) });
      const data = await res.json();
      if (data.success) { setFormState('sent'); setFormData({ name:'', email:'', company:'', message:'' }); }
      else setFormState('error');
    } catch { setFormState('error'); }
  };

  const hi = (delay: number) => ({
    opacity: heroVisible?1:0,
    transform: heroVisible?'translateY(0)':'translateY(24px)',
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`
  });

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes floatD { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
        @keyframes floatP { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        .float-d { animation: floatD 5s ease-in-out infinite; }
        .float-p { animation: floatP 5s ease-in-out infinite 1s; }
      `}</style>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled?'bg-white shadow-lg':'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <StachubLogo variant={scrolled?'default':'white'}/>
          <div className="hidden md:flex items-center gap-8">
            {['products','about','careers','contact'].map(l => (
              <a key={l} href={`#${l}`} className={`capitalize transition-colors ${scrolled?'text-gray-700 hover:text-[#1E40AF]':'text-white hover:text-[#F59E0B]'}`}>{l}</a>
            ))}
          </div>
          <a href="#contact" className="hidden md:block bg-[#F59E0B] text-white px-6 py-2.5 rounded-xl hover:bg-[#D97706] transition-all hover:-translate-y-0.5 shadow-lg font-medium">Get in Touch</a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden ${scrolled?'text-gray-800':'text-white'}`}>
            {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl">
            <div className="px-6 py-4 space-y-4">
              {['products','about','careers','contact'].map(l => (
                <a key={l} href={`#${l}`} onClick={() => setMobileMenuOpen(false)} className="block capitalize text-gray-700 hover:text-[#1E40AF]">{l}</a>
              ))}
              <a href="#contact" className="block text-center bg-[#F59E0B] text-white px-6 py-2.5 rounded-xl">Get in Touch</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1E40AF] via-[#1E3A8A] to-[#1E40AF] pt-24">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage:`repeating-linear-gradient(45deg,transparent,transparent 35px,white 35px,white 37px),repeating-linear-gradient(-45deg,transparent,transparent 35px,white 35px,white 37px)` }}/>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div style={hi(100)}><div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"><span className="text-xl">🇬🇭</span>Founded in Ghana</div></div>
              <div style={hi(200)}>
                <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">The Hub Is Yours</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">Your Business.<br/>Our Software.<br/><span className="text-[#F59E0B]">Anywhere.</span></h1>
              </div>
              <div style={hi(320)}><p className="text-xl text-white/80 max-w-xl">We build world-class software products that solve real problems for businesses, students and organisations — from Ghana to the world.</p></div>
              <div style={hi(420)}><div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-300 px-4 py-2 rounded-full text-sm"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>RetailTrack is live — 500+ businesses using it now</div></div>
              <div style={hi(520)}>
                <div className="flex flex-wrap gap-4">
                  <a href="#products" className="bg-white text-[#1E40AF] px-8 py-3.5 rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg">Explore Our Products</a>
                  <a href="#about" className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-semibold hover:-translate-y-1 transition-all hover:bg-white/10">About Us</a>
                </div>
              </div>
              <div style={hi(620)}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  {[{ label:'Products', value:'2+' }, { label:'Businesses', value:'500+' }, { label:'Countries', value:'14+' }, { label:'Support', value:'24/7' }].map((s,i) => (
                    <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all hover:-translate-y-1">
                      <div className="text-2xl font-bold text-white">{s.value}</div>
                      <div className="text-sm text-white/80">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero devices — same DESKTOP_H and PHONE_H */}
            <div style={{ opacity:heroVisible?1:0, transform:heroVisible?'translateX(0)':'translateX(44px)', transition:'opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s' }}>
              <div className="flex items-end gap-5 justify-center">
                <div className="float-d" style={{ width:'62%', filter:'drop-shadow(0 28px 56px rgba(0,0,0,0.5))' }}>
                  <DesktopMockup screens={[<StachubSplashScreen key="sp"/>, <StachubMissionScreen key="ms"/>, <StachubTrustScreen key="tr"/>]} intervalMs={4000} screenHeight={DESKTOP_H}/>
                </div>
                <div className="float-p" style={{ width:'30%', marginBottom:'28px', filter:'drop-shadow(0 28px 56px rgba(0,0,0,0.5))' }}>
                  <IPhone17ProMockup screens={[<RetailTrackSplashScreen key="rts"/>, <IPhoneCashierScreen key="cs"/>, <IPhoneTrustScreen key="it"/>]} intervalMs={4000} screenHeight={PHONE_H}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <FadeUp>
        <section className="bg-gray-50 border-y border-gray-200 py-8">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-widest font-medium">Trusted by businesses across Africa</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{ icon:Shield, label:'Bank-grade Encryption', sub:'TLS 1.3 + AES-256' }, { icon:Clock, label:'Built Since 2024', sub:'Founded in Accra, Ghana' }, { icon:Headphones, label:'Real Human Support', sub:'WhatsApp & Email' }, { icon:Zap, label:'99.9% Uptime', sub:'Reliable infrastructure' }].map(({ icon:Icon, label, sub },i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2 p-4">
                  <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-xl flex items-center justify-center"><Icon size={22} className="text-[#1E40AF]"/></div>
                  <div className="font-semibold text-gray-900 text-sm">{label}</div>
                  <div className="text-xs text-gray-500">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeUp>

      {/* PRODUCTS */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp><div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h2><p className="text-xl text-gray-600">Built for Africa, designed for the world</p></div></FadeUp>
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeUp delay={100}>
              <div className="bg-white rounded-3xl p-8 border-l-4 border-[#1E40AF] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-[#1E40AF] rounded-2xl flex items-center justify-center text-4xl">🛍️</div>
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-full text-sm font-semibold"><span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>Live</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">RetailTrack</h3>
                <p className="text-lg text-gray-600 mb-4">Retail Management Platform</p>
                <p className="text-gray-700 mb-6">Smart retail management for Ghanaian and African shop owners. Track sales, manage inventory, monitor staff attendance and grow with AI-powered insights.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Sales Tracking','Staff Management','AI Advisor','Multi-Currency','Deliveries','Attendance'].map(f => <span key={f} className="border-2 border-[#1E40AF] text-[#1E40AF] px-3 py-1 rounded-full text-sm">{f}</span>)}
                </div>
                <DevicePair
                  desktopScreens={[<RetailTrackDashboard key="d"/>, <RetailTrackInventory key="i"/>]}
                  phoneScreens={[<RetailTrackSplashScreen key="s"/>, <RetailTrackCashier key="c"/>]}
                />
                <a href="https://retailtrackgh.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full mt-6 bg-[#1E40AF] text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg">
                  Visit RetailTrack <ExternalLink size={16}/>
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="bg-white rounded-3xl p-8 border-l-4 border-purple-600 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-4xl">🔮</div>
                  <div className="flex items-center gap-2 text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full text-sm font-semibold">🔮 In Development</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">What's Next?</h3>
                <p className="text-lg text-gray-600 mb-4">New Products Coming 2026</p>
                <p className="text-gray-700 mb-6">We are constantly building new products to solve real challenges in education, health, finance and agriculture. Stay tuned.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['HealthTech','FinTech','EdTech','AgriTech'].map(f => <span key={f} className="border-2 border-purple-600 text-purple-600 px-3 py-1 rounded-full text-sm">{f}</span>)}
                </div>
                <DevicePair
                  desktopScreens={[<ComingSoonScreen key="s1"/>]}
                  phoneScreens={[<ComingSoonScreen key="s2"/>]}
                  bg="bg-gradient-to-br from-purple-50 to-blue-50"
                />
                <button className="w-full mt-6 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-all hover:bg-purple-50">Follow us for updates →</button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp><div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Users Say</h2><p className="text-xl text-gray-600">Real businesses, real results</p></div></FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t,i) => (
              <FadeUp key={i} delay={i*120}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col gap-4">
                  <Stars count={t.rating}/>
                  <p className="text-gray-700 leading-relaxed flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                    <div className="w-10 h-10 bg-[#1E40AF] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{t.avatar}</div>
                    <div><div className="font-semibold text-gray-900 text-sm">{t.name}</div><div className="text-xs text-gray-500">{t.role}</div></div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={300}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="text-center sm:border-r sm:border-gray-200 sm:pr-8"><div className="text-5xl font-bold text-gray-900">5.0</div><Stars count={5}/><div className="text-sm text-gray-500 mt-1">Average rating</div></div>
              <div className="text-center sm:pl-4"><div className="text-4xl font-bold text-[#1E40AF]">500+</div><div className="text-sm text-gray-500 mt-1">Active businesses</div></div>
              <div className="text-center sm:border-l sm:border-gray-200 sm:pl-8"><div className="text-4xl font-bold text-[#F59E0B]">14+</div><div className="text-sm text-gray-500 mt-1">Countries reached</div></div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* APPROACH — line z-10, numbers z-20 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp><div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Approach</h2><p className="text-xl text-gray-600">How we go from idea to product</p></div></FadeUp>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute z-10 h-0.5 bg-[#1E40AF]" style={{ top:'40px', left:'calc(16.67% + 32px)', right:'calc(16.67% + 32px)' }}/>
            {[
              { num:1, icon:'🔍', title:'Identify Real Problems', desc:'We listen to businesses, students and communities to find real problems worth solving.' },
              { num:2, icon:'⚙️', title:'Build Simple & Powerful', desc:'We design and engineer solutions that are easy to use but powerful enough for real business needs.' },
              { num:3, icon:'🚀', title:'Launch & Grow Together', desc:'We deploy, support our users and keep improving based on real feedback from the ground.' }
            ].map((step,i) => (
              <FadeUp key={step.num} delay={i*150}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 bg-[#1E40AF] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto relative z-20">{step.num}</div>
                  <div className="text-5xl text-center mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp><div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who We Are</h2></div></FadeUp>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp delay={100}>
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">Stachub is a technology company founded in Ghana with a vision to build world-class software for businesses and students everywhere. We believe the next great tech companies will come from Africa — and we are building them.</p>
                <div className="space-y-4">
                  {[{ icon:'📅', label:'Founded', value:'2024' }, { icon:'📍', label:'Based in', value:'Accra, Ghana 🇬🇭' }, { icon:'💡', label:'Focus', value:'SaaS · EdTech · AI Integration' }, { icon:'👥', label:'Team', value:'Small, passionate, African-first team' }].map((item,i) => (
                    <div key={i} className="flex items-start gap-3"><span className="text-2xl">{item.icon}</span><div><span className="font-semibold text-gray-900">{item.label}:</span>{' '}<span className="text-gray-700">{item.value}</span></div></div>
                  ))}
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-3">
                  <p className="font-semibold text-gray-900 mb-2">Why trust Stachub?</p>
                  {['Registered technology company in Ghana','Live product with 500+ active users','Transparent pricing — no hidden fees','Your data is encrypted and never sold','Backed by real users with real results'].map((point,i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 text-sm"><CheckCircle size={16} className="text-green-500 shrink-0"/>{point}</div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="space-y-4">
                {[{ bg:'#1E40AF', val:'2+', label:'Products Built & Deployed' }, { bg:'#F59E0B', val:'500+', label:'Businesses Using RetailTrack' }, { bg:'#0F172A', val:'14+', label:'Countries Reached' }].map((c,i) => (
                  <div key={i} className="text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all" style={{ background:c.bg }}>
                    <div className="text-5xl font-bold mb-2">{c.val}</div>
                    <div className="text-xl">{c.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-gradient-to-br from-[#1E40AF] via-[#1E3A8A] to-[#1E40AF] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp><div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4">What Drives Us</h2></div></FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            {[{ icon:'🎯', title:'Global First', desc:'We build for everyone — starting from Ghana, scaling to every country where business owners need powerful, simple tools.' }, { icon:'💡', title:'Simple & Powerful', desc:'The best solutions are ones anyone can use. We obsess over simplicity without sacrificing power.' }, { icon:'🌍', title:'Built to Scale', desc:'We build from Accra with ambition for the world. The hub is yours — wherever you are.' }].map((v,i) => (
              <FadeUp key={i} delay={i*120}>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all hover:-translate-y-1">
                  <div className="text-6xl mb-4">{v.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{v.title}</h3>
                  <p className="text-white/90">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp><div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Common Questions</h2><p className="text-xl text-gray-600">Everything you need to know before you start</p></div></FadeUp>
          <FadeUp delay={100}>
            <div className="space-y-3">{faqs.map((faq,i) => <FAQItem key={i} q={faq.q} a={faq.a}/>)}</div>
            <p className="text-center text-gray-500 mt-8 text-sm">Still have questions?{' '}<a href="#contact" className="text-[#1E40AF] font-semibold hover:underline">Contact us directly →</a></p>
          </FadeUp>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="py-24 bg-[#F8FAFF]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp><div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Mission</h2><p className="text-xl text-gray-600">We are always looking for passionate people who want to build the future of software</p></div></FadeUp>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <FadeUp delay={100}><div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"><h3 className="text-2xl font-bold text-gray-900 mb-3">Software Developer</h3><p className="text-gray-600 mb-4">Open applications</p><div className="flex flex-wrap gap-2 mb-6">{['React','Node.js','PostgreSQL','Mobile'].map(t => <span key={t} className="bg-[#1E40AF]/10 text-[#1E40AF] px-3 py-1 rounded-lg text-sm font-medium">{t}</span>)}</div><button className="w-full bg-[#1E40AF] text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg">Apply Now</button></div></FadeUp>
            <FadeUp delay={200}><div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"><h3 className="text-2xl font-bold text-gray-900 mb-3">Product Designer</h3><p className="text-gray-600 mb-4">Open applications</p><div className="flex flex-wrap gap-2 mb-6">{['UI/UX','Figma','User Research'].map(t => <span key={t} className="bg-[#F59E0B]/10 text-[#F59E0B] px-3 py-1 rounded-lg text-sm font-medium">{t}</span>)}</div><button className="w-full bg-[#F59E0B] text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg">Apply Now</button></div></FadeUp>
          </div>
          <FadeUp delay={300}><p className="text-center text-gray-600">Send your CV and portfolio to{' '}<a href="mailto:hello@stachubgh.com" className="text-[#1E40AF] font-semibold hover:underline">hello@stachubgh.com</a></p></FadeUp>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp><div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2><p className="text-gray-600 text-lg">We typically reply within 2 hours on business days</p></div></FadeUp>
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeUp delay={100}>
              <div className="space-y-6">
                {[{ icon:'📧', label:'Email', value:'hello@stachubgh.com', href:'mailto:hello@stachubgh.com' }, { icon:'💬', label:'WhatsApp', value:'+233 500 593 722', href:'https://wa.me/233500593722' }, { icon:'📍', label:'Location', value:'Accra, Ghana 🇬🇭', href:null }].map((item,i) => (
                  <div key={i} className="flex items-start gap-4"><span className="text-3xl">{item.icon}</span><div><div className="font-semibold text-gray-900 mb-1">{item.label}</div>{item.href?<a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] hover:underline">{item.value}</a>:<div className="text-gray-700">{item.value}</div>}</div></div>
                ))}
                <div className="pt-4">
                  <div className="font-semibold text-gray-900 mb-4">Follow Us</div>
                  <div className="space-y-3">
                    {[{ icon:Instagram, label:'@stachubhq', url:'https://instagram.com/stachubhq' }, { icon:Twitter, label:'@stachubhq', url:'https://twitter.com/stachubhq' }, { icon:Linkedin, label:'@stachubhq', url:'https://linkedin.com/company/stachubhq' }, { icon:MessageCircle, label:'@stachubhq', url:'https://wa.me/233500593722' }].map((s,i) => {
                      const Icon=s.icon;
                      return <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-[#1E40AF] transition-colors"><Icon size={20}/><span>{s.label}</span></a>;
                    })}
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shrink-0"/>
                  <div><div className="font-semibold text-green-800 text-sm">We're online</div><div className="text-green-700 text-xs">Average reply time: under 2 hours</div></div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="bg-gray-50 rounded-2xl p-8">
                {formState==='sent' ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"><CheckCircle size={32} className="text-green-600"/></div>
                    <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                    <p className="text-gray-600">Thanks for reaching out. We'll get back to you within 2 hours.</p>
                    <button onClick={() => setFormState('idle')} className="text-[#1E40AF] font-semibold hover:underline text-sm">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData,name:e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 outline-none transition-all"/>
                    <input type="email" placeholder="Your Email" required value={formData.email} onChange={e => setFormData({...formData,email:e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 outline-none transition-all"/>
                    <input type="text" placeholder="Company / Organisation (optional)" value={formData.company} onChange={e => setFormData({...formData,company:e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 outline-none transition-all"/>
                    <textarea placeholder="Your Message" rows={4} required value={formData.message} onChange={e => setFormData({...formData,message:e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 outline-none transition-all resize-none"/>
                    {formState==='error' && <p className="text-red-600 text-sm">Something went wrong. Please email us directly at hello@stachubgh.com</p>}
                    <button type="submit" disabled={formState==='sending'} className="w-full bg-[#F59E0B] text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0">
                      {formState==='sending'?'Sending...':'Send Message →'}
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F172A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <StachubLogo variant="white" className="mb-4"/>
              <p className="text-gray-400 mb-6">Your Business. Our Software. Anywhere.</p>
              <div className="flex gap-4 flex-wrap">
                {[{ icon:Instagram, url:'https://instagram.com/stachubhq' }, { icon:Twitter, url:'https://twitter.com/stachubhq' }, { icon:Linkedin, url:'https://linkedin.com/company/stachubhq' }, { icon:MessageCircle, url:'https://wa.me/233500593722' }, { icon:Github, url:'https://github.com/stachubhq' }].map((s,i) => { const Icon=s.icon; return <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"><Icon size={18}/></a>; })}
              </div>
            </div>
            <div><h4 className="font-bold text-lg mb-4">Products</h4><div className="space-y-3"><a href="https://retailtrackgh.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">RetailTrack</a><div className="text-gray-500">More Coming Soon</div></div></div>
            <div><h4 className="font-bold text-lg mb-4">Company</h4><div className="space-y-3">{['about','careers','contact'].map(l => <a key={l} href={`#${l}`} className="block capitalize text-gray-400 hover:text-white transition-colors">{l}</a>)}</div></div>
            <div>
              <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-4 text-sm">Get product updates</p>
              <div className="flex flex-wrap gap-2">
                <input type="email" placeholder="Email" className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#F59E0B] outline-none transition-all"/>
                <button className="shrink-0 bg-[#F59E0B] text-white px-4 py-2 rounded-lg hover:bg-[#D97706] transition-all whitespace-nowrap">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© 2026 Stachub. All rights reserved.</div>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span>Built with ❤️ in Accra, Ghana 🇬🇭</span>
              <a href="mailto:hello@stachubgh.com" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="mailto:hello@stachubgh.com" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}