import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

const quickLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Eğitimler", href: "/egitimler" },
  { label: "İletişim", href: "/iletisim" },
];

const socials = [
  { Icon: FaWhatsapp, href: "https://wa.me/905437125904" },
  { Icon: FaXTwitter, href: "#" },
  { Icon: FiInstagram, href: "https://www.instagram.com/mydguvenlik/" },
  { Icon: FiLinkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-gray-800">
      {/* Main */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        {/* Top: Brand + Description centered */}
        <div className="flex flex-col items-center text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="bg-white rounded-lg p-1.5">
              <Image src="/logo.jpg" alt="MYD" width={32} height={32} className="rounded" />
            </div>
            <div className="leading-tight">
              <span className="text-base font-bold text-white">MYD</span>
              <span className="block text-[10px] text-red tracking-[2px] uppercase font-semibold">Özel Güvenlik</span>
            </div>
          </Link>
          <p className="text-gray-500 text-lg leading-relaxed mb-6 whitespace-nowrap">
            Güvenlik, temizlik, lojistik ve personel yönetiminde profesyonel çözümler sunuyoruz.
          </p>
          <div className="text-gray-600 text-sm font-medium mb-3">Bizi Takip Edebilirsiniz:</div>
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href !== "#" ? "_blank" : undefined}
                rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white/50 hover:bg-red hover:border-red hover:text-white transition-all duration-300"
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Slogan centered */}
        <div className="border-t border-gray-800 pt-8 mb-12 text-center">
          <p className="text-2xl lg:text-3xl font-bold text-white italic">&ldquo;Siz Sadece Asıl İşinize Odaklanın!&rdquo;</p>
        </div>

        {/* Links - 2 columns centered */}
        <div className="border-t border-gray-800 pt-8 flex justify-center">
          <div className="grid sm:grid-cols-2 gap-10 max-w-2xl w-full text-center">
            {/* Quick Links */}
            <div>
              <h4 className="text-gray-600 text-[12px] uppercase tracking-[0.2em] font-semibold mb-5">Hızlı Bağlantılar</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-gray-500 text-[15px] hover:text-red transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gray-600 text-[12px] uppercase tracking-[0.2em] font-semibold mb-5">İletişim Bilgileri</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 justify-center">
                  <FiMapPin className="text-red mt-1 flex-shrink-0" size={14} />
                  <span className="text-gray-500 text-[15px]">MYD Yönetim Merkezi Isparta / Türkiye</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <FiPhone className="text-red flex-shrink-0" size={14} />
                  <a href="tel:+905437125904" className="text-gray-500 text-[15px] hover:text-white transition-colors">0 (543) 712 59 04</a>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <FiMail className="text-red flex-shrink-0" size={14} />
                  <a href="mailto:info@mydozelguvenlik.com" className="text-gray-500 text-[15px] hover:text-white transition-colors">info@mydozelguvenlik.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
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
