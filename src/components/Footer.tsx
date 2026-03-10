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
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-7">
              <div className="bg-white rounded-lg px-1.5 py-1">
                <Image src="/logo.jpg" alt="MYD" width={36} height={36} className="rounded" />
              </div>
              <div className="leading-tight">
                <span className="text-base font-bold">MYD</span>
                <span className="block text-[9px] text-red-light tracking-[2px] uppercase font-semibold">Özel Güvenlik</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-7">
              Güvenlik hizmetlerinde profesyonel çözümler sunuyor, operasyonlarınızı daha güvenilir ve verimli hale getiriyoruz.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.href} target={item.href !== "#" ? "_blank" : undefined} rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 bg-white/8 rounded-lg flex items-center justify-center hover:bg-red transition-all duration-300 text-white/40 hover:text-white">
                  <item.Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-7">Kurumsal</h4>
            <ul className="space-y-3.5">
              {pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 text-sm hover:text-white transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-7">Hizmetlerimiz</h4>
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/hizmetler" className="text-white/40 text-sm hover:text-white transition-colors duration-200">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-7">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiPhone className="text-red-light mt-0.5 flex-shrink-0" size={14} />
                <a href="tel:+905437125904" className="text-white/40 text-sm hover:text-white transition-colors duration-200">0 (543) 712 59 04</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="text-red-light mt-0.5 flex-shrink-0" size={14} />
                <a href="mailto:info@mydozelguvenlik.com" className="text-white/40 text-sm hover:text-white transition-colors duration-200">info@mydozelguvenlik.com</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-red-light mt-0.5 flex-shrink-0" size={14} />
                <span className="text-white/40 text-sm">İskender Mah. 106 Cad.<br />No:36-38/4, Merkez / Isparta</span>
              </li>
            </ul>

            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mt-8 mb-4">Çalışma Saatleri</h4>
            <div className="text-white/40 text-sm space-y-1.5">
              <p>Hafta İçi: 08:30 - 18:00</p>
              <p>Cumartesi: 09:00 - 14:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-xs">&copy; {new Date().getFullYear()} MYD Özel Güvenlik Hizmetleri. Tüm hakları saklıdır.</p>
          <div className="flex gap-5 text-xs text-white/25">
            <a href="#" className="hover:text-white transition-colors duration-200">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Hizmet Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
