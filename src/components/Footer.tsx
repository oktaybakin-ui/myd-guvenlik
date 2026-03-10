import Link from "next/link";
import Image from "next/image";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const pages = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "S.S.S", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

const services = [
  "Fiziki Güvenlik",
  "Elektronik Güvenlik",
  "Etkinlik Güvenliği",
  "Yakın Koruma (VIP)",
  "Risk Analizi",
  "Dijital Çözümler",
];

const socialLinks = [
  { Icon: FiFacebook, href: "https://www.facebook.com/p/MYD-%C3%96ZEL-G%C3%9CVENL%C4%B0K-100067031853886/" },
  { Icon: FaXTwitter, href: "#" },
  { Icon: FiInstagram, href: "https://www.instagram.com/mydguvenlik/" },
  { Icon: FiLinkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="bg-white rounded-lg p-1.5">
                <Image src="/logo.jpg" alt="MYD" width={32} height={32} className="rounded" />
              </div>
              <div className="leading-tight">
                <span className="text-base font-bold">MYD</span>
                <span className="block text-[10px] text-red-light tracking-[2px] uppercase font-semibold">Özel Güvenlik</span>
              </div>
            </Link>
            <p className="text-white/35 text-[15px] leading-[1.7] mb-8">
              Profesyonel güvenlik hizmetleri ile operasyonlarınızı daha güvenilir ve verimli hale getiriyoruz.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.href} target={item.href !== "#" ? "_blank" : undefined} rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-white/[0.06] rounded-lg flex items-center justify-center hover:bg-red transition-all duration-300 text-white/35 hover:text-white">
                  <item.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] font-semibold mb-8 text-white/80">Kurumsal</h4>
            <ul className="space-y-4">
              {pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/35 text-[15px] hover:text-white transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] font-semibold mb-8 text-white/80">Hizmetlerimiz</h4>
            <ul className="space-y-4">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/hizmetler" className="text-white/35 text-[15px] hover:text-white transition-colors duration-200">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] font-semibold mb-8 text-white/80">İletişim</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <FiPhone className="text-red-light mt-1 flex-shrink-0" size={15} />
                <a href="tel:+905437125904" className="text-white/35 text-[15px] hover:text-white transition-colors duration-200">0 (543) 712 59 04</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="text-red-light mt-1 flex-shrink-0" size={15} />
                <a href="mailto:info@mydozelguvenlik.com" className="text-white/35 text-[15px] hover:text-white transition-colors duration-200">info@mydozelguvenlik.com</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-red-light mt-1 flex-shrink-0" size={15} />
                <span className="text-white/35 text-[15px] leading-relaxed">İskender Mah. 106 Cad.<br />No:36-38/4, Merkez / Isparta</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <h5 className="text-xs uppercase tracking-wider font-semibold mb-3 text-white/50">Çalışma Saatleri</h5>
              <div className="text-white/35 text-sm space-y-1.5">
                <p>Hafta İçi: 08:30 - 18:00</p>
                <p>Cumartesi: 09:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-sm">&copy; {new Date().getFullYear()} MYD Özel Güvenlik Hizmetleri. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-sm text-white/20">
            <a href="#" className="hover:text-white/50 transition-colors duration-200">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white/50 transition-colors duration-200">Hizmet Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
