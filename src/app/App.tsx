import { useState, useEffect } from 'react';
import { StachubLogo } from './components/StachubLogo';
import {
  MacBookMockup,
  iPhoneMockup,
  RetailTrackDashboard,
  RetailTrackCashier,
  RetailTrackInventory,
  ComingSoonScreen
} from './components/DeviceMockups';
import { Menu, X, Instagram, Twitter, Linkedin, MessageCircle, Github } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <StachubLogo variant={scrolled ? 'default' : 'white'} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-[#1E40AF]' : 'text-white hover:text-[#F59E0B]'}`}>
                Products
              </a>
              <a href="#about" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-[#1E40AF]' : 'text-white hover:text-[#F59E0B]'}`}>
                About
              </a>
              <a href="#careers" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-[#1E40AF]' : 'text-white hover:text-[#F59E0B]'}`}>
                Careers
              </a>
              <a href="#contact" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-[#1E40AF]' : 'text-white hover:text-[#F59E0B]'}`}>
                Contact
              </a>
            </div>

            <button className="hidden md:block bg-[#F59E0B] text-white px-6 py-2.5 rounded-xl hover:bg-[#D97706] transition-all hover:-translate-y-0.5 shadow-lg">
              Get in Touch
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl">
            <div className="px-6 py-4 space-y-4">
              <a href="#products" className="block text-gray-700 hover:text-[#1E40AF]">
                Products
              </a>
              <a href="#about" className="block text-gray-700 hover:text-[#1E40AF]">
                About
              </a>
              <a href="#careers" className="block text-gray-700 hover:text-[#1E40AF]">
                Careers
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-[#1E40AF]">
                Contact
              </a>
              <button className="w-full bg-[#F59E0B] text-white px-6 py-2.5 rounded-xl">
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1E40AF] via-[#1E3A8A] to-[#1E40AF] pt-24">
        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, white 35px, white 37px),
                             repeating-linear-gradient(-45deg, transparent, transparent 35px, white 35px, white 37px)`
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                <span className="text-xl">🇬🇭</span>
                Proudly Built in Ghana
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Building Africa's
                <br />
                <span className="text-[#F59E0B]">Digital Future</span>
              </h1>

              <p className="text-xl text-white/80 max-w-xl">
                We create world-class software products that solve real problems for African
                businesses, students and organizations.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#1E40AF] px-8 py-3.5 rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl">
                  Explore Our Products
                </button>
                <button className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-semibold hover:-translate-y-1 transition-all hover:bg-white/10">
                  About Us
                </button>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  { label: 'Products', value: '2+' },
                  { label: 'Businesses', value: '500+' },
                  { label: 'Countries', value: '14+' },
                  { label: 'Support', value: '24/7' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Device mockups */}
            <div className="relative">
              <div className="flex items-end gap-4 justify-center">
                {/* MacBook */}
                <div className="w-2/3 relative" style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))' }}>
                  <MacBookMockup
                    screens={[
                      <RetailTrackDashboard key="dash" />,
                      <RetailTrackInventory key="inv" />
                    ]}
                  />
                </div>

                {/* iPhone overlapping */}
                <div className="w-1/4 -ml-16 mb-8 relative z-10" style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))' }}>
                  <iPhoneMockup
                    screens={[
                      <RetailTrackCashier key="cash" />,
                      <RetailTrackInventory key="inv2" />
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Built for Africa, designed for the world</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* RetailTrack Card */}
            <div className="bg-white rounded-3xl p-8 border-l-4 border-[#1E40AF] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-[#1E40AF] rounded-2xl flex items-center justify-center text-4xl">
                  🛍️
                </div>
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Live
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">RetailTrack</h3>
              <p className="text-lg text-gray-600 mb-4">Retail Management Platform</p>

              <p className="text-gray-700 mb-6">
                Smart retail management for Ghanaian and African shop owners. Track sales, manage
                inventory, monitor staff attendance and grow with AI-powered insights.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Sales Tracking', 'Staff Management', 'AI Advisor', 'Multi-Currency', 'Deliveries', 'Attendance'].map(
                  (feature) => (
                    <span
                      key={feature}
                      className="border-2 border-[#1E40AF] text-[#1E40AF] px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  )
                )}
              </div>

              {/* Device mockups in card */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="flex items-end gap-4 justify-center">
                  <div className="w-3/5">
                    <MacBookMockup
                      screens={[
                        <RetailTrackDashboard key="dash" />,
                        <RetailTrackInventory key="inv" />
                      ]}
                    />
                  </div>
                  <div className="w-1/5 -ml-8 mb-4">
                    <iPhoneMockup
                      screens={[
                        <RetailTrackCashier key="cash" />,
                        <RetailTrackInventory key="inv2" />
                      ]}
                    />
                  </div>
                </div>
              </div>

              <a
                href="https://retailtrackgh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#1E40AF] text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg"
              >
                Visit RetailTrack →
              </a>
            </div>

            {/* More Coming Soon Card */}
            <div className="bg-white rounded-3xl p-8 border-l-4 border-purple-600 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-4xl">
                  🔮
                </div>
                <div className="flex items-center gap-2 text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full text-sm font-semibold">
                  🔮 In Development
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">What's Next?</h3>
              <p className="text-lg text-gray-600 mb-4">New Products Coming 2026</p>

              <p className="text-gray-700 mb-6">
                We are constantly building new products to solve Africa's biggest challenges in
                education, health, finance and agriculture. Stay tuned.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['HealthTech', 'FinTech', 'EdTech', 'AgriTech'].map((feature) => (
                  <span
                    key={feature}
                    className="border-2 border-purple-600 text-purple-600 px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Blurred device mockups */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 mb-6">
                <div className="flex items-end gap-4 justify-center">
                  <div className="w-3/5">
                    <MacBookMockup screens={[<ComingSoonScreen key="soon1" />]} />
                  </div>
                  <div className="w-1/5 -ml-8 mb-4">
                    <iPhoneMockup screens={[<ComingSoonScreen key="soon2" />]} />
                  </div>
                </div>
              </div>

              <button className="w-full border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-all hover:bg-purple-50">
                Follow us for updates →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE BUILD SECTION */}
      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600">How we go from idea to product</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#1E40AF] via-[#1E40AF] to-[#1E40AF] mx-32"></div>

            {[
              {
                num: 1,
                icon: '🔍',
                title: 'Identify Real Problems',
                desc: 'We listen to African businesses, students and communities to find the real problems worth solving.'
              },
              {
                num: 2,
                icon: '⚙️',
                title: 'Build Simple & Powerful',
                desc: 'We design and engineer solutions that are easy to use but powerful enough to handle real business needs.'
              },
              {
                num: 3,
                icon: '🚀',
                title: 'Launch & Grow Together',
                desc: 'We deploy, support our users and keep improving based on real feedback from the ground.'
              }
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 bg-[#1E40AF] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto relative z-10">
                    {step.num}
                  </div>
                  <div className="text-5xl text-center mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who We Are</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - text */}
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Stachub is a technology company founded in Ghana with a vision to build world-class
                software for African businesses and students. We believe the next great tech
                companies will come from Africa — and we are building them.
              </p>

              <div className="space-y-4">
                {[
                  { icon: '📅', label: 'Founded', value: '2024' },
                  { icon: '📍', label: 'Based in', value: 'Kumasi, Ghana 🇬🇭' },
                  { icon: '💡', label: 'Focus', value: 'SaaS · EdTech · AI Integration' },
                  { icon: '👥', label: 'Team', value: 'Small, passionate, African-first team' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="font-semibold text-gray-900">{item.label}:</span>{' '}
                      <span className="text-gray-700">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - stat cards */}
            <div className="space-y-4">
              <div className="bg-[#1E40AF] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="text-5xl font-bold mb-2">2+</div>
                <div className="text-xl">Products Built & Deployed</div>
              </div>
              <div className="bg-[#F59E0B] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-xl">Businesses Using RetailTrack</div>
              </div>
              <div className="bg-[#0F172A] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="text-5xl font-bold mb-2">14+</div>
                <div className="text-xl">African Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#1E40AF] via-[#1E3A8A] to-[#1E40AF] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'African First',
                desc: 'We build for African realities, local languages and African markets first. Not as an afterthought.'
              },
              {
                icon: '💡',
                title: 'Simple & Powerful',
                desc: 'The best solutions are ones anyone can use. We obsess over simplicity without sacrificing power.'
              },
              {
                icon: '🌍',
                title: 'Built to Scale',
                desc: 'We build from Ghana with ambition for all 54 African countries and beyond.'
              }
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all hover:-translate-y-1"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/90">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS SECTION */}
      <section id="careers" className="py-24 bg-[#F8FAFF]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-xl text-gray-600">
              We are always looking for passionate people who want to build Africa's digital future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Software Developer</h3>
              <p className="text-gray-600 mb-4">Open applications</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Node.js', 'PostgreSQL', 'Mobile'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#1E40AF]/10 text-[#1E40AF] px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="w-full bg-[#1E40AF] text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg">
                Apply Now
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Product Designer</h3>
              <p className="text-gray-600 mb-4">Open applications</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['UI/UX', 'Figma', 'User Research'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#F59E0B]/10 text-[#F59E0B] px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="w-full bg-[#F59E0B] text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg">
                Apply Now
              </button>
            </div>
          </div>

          <p className="text-center text-gray-600">
            Send your CV and portfolio to{' '}
            <a href="mailto:hello@stachubgh.com" className="text-[#1E40AF] font-semibold hover:underline">
              hello@stachubgh.com
            </a>
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📧</span>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a
                    href="mailto:hello@stachubgh.com"
                    className="text-[#1E40AF] hover:underline"
                  >
                    hello@stachubgh.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">💬</span>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/233500593722"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E40AF] hover:underline"
                  >
                    +233 500 593 722
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Location</div>
                  <div className="text-gray-700">Kumasi, Ghana 🇬🇭</div>
                </div>
              </div>

              <div className="pt-6">
                <div className="font-semibold text-gray-900 mb-4">Follow Us</div>
                <div className="space-y-3">
                  {[
                    { icon: Instagram, label: '@stachubhq', url: 'https://instagram.com/stachubhq' },
                    { icon: Twitter, label: '@stachubhq', url: 'https://twitter.com/stachubhq' },
                    { icon: Linkedin, label: '@stachubhq', url: 'https://linkedin.com/company/stachubhq' },
                    { icon: MessageCircle, label: '@stachubhq', url: 'https://wa.me/233500593722' }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 hover:text-[#1E40AF] transition-colors"
                      >
                        <Icon size={20} />
                        <span>{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right side - contact form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company / Organization (optional)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F59E0B] text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F172A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Column 1 - Brand */}
            <div>
              <StachubLogo variant="white" className="mb-4" />
              <p className="text-gray-400 mb-6">Building Africa's Digital Future</p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, url: 'https://instagram.com/stachubhq' },
                  { icon: Twitter, url: 'https://twitter.com/stachubhq' },
                  { icon: Linkedin, url: 'https://linkedin.com/company/stachubhq' },
                  { icon: MessageCircle, url: 'https://wa.me/233500593722' },
                  { icon: Github, url: 'https://github.com/stachubhq' }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2 - Products */}
            <div>
              <h4 className="font-bold text-lg mb-4">Products</h4>
              <div className="space-y-3">
                <a
                  href="https://retailtrackgh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  RetailTrack
                </a>
                <div className="text-gray-500">More Coming Soon</div>
              </div>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <div className="space-y-3">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </a>
                <a href="#careers" className="block text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Column 4 - Stay Updated */}
            <div>
              <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-4 text-sm">Get product updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 outline-none transition-all"
                />
                <button className="bg-[#F59E0B] text-white px-4 py-2 rounded-lg hover:bg-[#D97706] transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2026 Stachub. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Built with ❤️ in Ghana 🇬🇭
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
