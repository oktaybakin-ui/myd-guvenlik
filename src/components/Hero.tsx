"use client";

import { FiShield, FiUsers, FiAward } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(200,169,81,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(200,169,81,0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <FiShield className="text-gold" size={16} />
              <span className="text-gold text-sm font-medium">
                Profesyonel Güvenlik Çözümleri
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Güvenliğiniz{" "}
              <span className="text-gold">Bizim İşimiz</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              MYD Özel Güvenlik olarak, en son teknolojiyi profesyonel insan
              kaynağı ile birleştirerek, işletmenize özel 7/24 kesintisiz
              güvenlik hizmeti sunuyoruz.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#iletisim"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-lg transition-all text-base pulse-gold"
              >
                Ücretsiz Teklif Alın
              </a>
              <a
                href="#hizmetler"
                className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-lg transition-all text-base"
              >
                Hizmetlerimiz
              </a>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-2 gap-5">
            <div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                <FiShield className="text-gold" size={24} />
              </div>
              <div className="text-3xl font-bold text-gold mb-1">500+</div>
              <div className="text-sm text-gray-400">Güvenlik Personeli</div>
            </div>

            <div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                <FiUsers className="text-gold" size={24} />
              </div>
              <div className="text-3xl font-bold text-gold mb-1">150+</div>
              <div className="text-sm text-gray-400">Mutlu Müşteri</div>
            </div>

            <div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                <FiAward className="text-gold" size={24} />
              </div>
              <div className="text-3xl font-bold text-gold mb-1">15+</div>
              <div className="text-sm text-gray-400">Yıllık Deneyim</div>
            </div>

            <div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                <FiShield className="text-gold" size={24} />
              </div>
              <div className="text-3xl font-bold text-gold mb-1">7/24</div>
              <div className="text-sm text-gray-400">Kesintisiz Hizmet</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#132040"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
