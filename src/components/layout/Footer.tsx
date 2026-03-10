import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const pages = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Eğitimler", href: "/egitimler" },
  { label: "S.S.S", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

const services = [
  "Fiziki Güvenlik", "Elektronik Güvenlik", "Etkinlik Güvenliği",
  "Yakın Koruma (VIP)", "Risk Analizi", "Dijital Çözümler",
];

const socials = [
  { Icon: FiFacebook, href: "https://www.facebook.com/p/MYD-%C3%96ZEL-G%C3%9CVENL%C4%B0K-100067031853886/" },
  { Icon: FaXTwitter, href: "#" },
  { Icon: FiInstagram, href: "https://www.instagram.com/mydguvenlik/" },
  { Icon: FiLinkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-gray-800">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="bg-white rounded-lg p-1.5">
                <Image src="/logo.jpg" alt="MYD" width={32} height={32} className="rounded" />
              </div>
              <div className="leading-tight">
                <span className="text-base font-bold text-white">MYD</span>
                <span className="block text-[10px] text-red tracking-[2px] uppercase font-semibold">Özel Güvenlik</span>
              </div>
            </Link>
            <p className="text-gray-500 text-[15px] leading-[1.9] mb-8">
              Profesyonel güvenlik hizmetleri ile operasyonlarınızı daha güvenilir ve verimli hale getiriyoruz.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white/50 hover:bg-red hover:border-red hover:text-white transition-all duration-300"
                >
                  <s.Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="text-white font-semibold text-[13px] uppercase tracking-[0.2em] mb-8">Kurumsal</h4>
            <ul className="space-y-4">
              {pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 text-[15px] hover:text-red transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-white font-semibold text-[13px] uppercase tracking-[0.2em] mb-8">Hizmetlerimiz</h4>
            <ul className="space-y-4">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/hizmetler" className="text-gray-500 text-[15px] hover:text-red transition-colors duration-200">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-white font-semibold text-[13px] uppercase tracking-[0.2em] mb-8">İletişim</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <FiPhone className="text-red mt-1 flex-shrink-0" size={15} />
                <a href="tel:+905437125904" className="text-gray-500 text-[15px] hover:text-white transition-colors">0 (543) 712 59 04</a>
              </li>
              <li className="flex items-start gap-4">
                <FiMail className="text-red mt-1 flex-shrink-0" size={15} />
                <a href="mailto:info@mydozelguvenlik.com" className="text-gray-500 text-[15px] hover:text-white transition-colors">info@mydozelguvenlik.com</a>
              </li>
              <li className="flex items-start gap-4">
                <FiMapPin className="text-red mt-1 flex-shrink-0" size={15} />
                <span className="text-gray-500 text-[15px] leading-[1.7]">İskender Mah. 106 Cad.<br />No:36-38/4, Merkez / Isparta</span>
              </li>
            </ul>
            <div className="mt-8 pt-5 border-t border-gray-800">
              <p className="text-gray-600 text-xs uppercase tracking-[0.2em] mb-3">Çalışma Saatleri</p>
              <p className="text-gray-500 text-[15px] leading-[1.8]">Hafta İçi: 08:30 - 18:00</p>
              <p className="text-gray-500 text-[15px] leading-[1.8]">Cumartesi: 09:00 - 14:00</p>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div className="border-t border-gray-800 mt-16 pt-10 text-center">
          <p className="text-2xl lg:text-3xl font-bold text-white italic">&ldquo;Siz Sadece Asıl İşinize Odaklanın!&rdquo;</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[13px]">&copy; {new Date().getFullYear()} MYD Özel Güvenlik Hizmetleri. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-[13px] text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Hizmet Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
