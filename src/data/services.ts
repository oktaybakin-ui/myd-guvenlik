import { FiShield, FiFileText, FiCamera, FiUsers, FiHome, FiTruck } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface ServiceData {
  slug: string;
  icon: IconType;
  title: string;
  shortDesc: string;
  desc: string;
  features: string[];
  details: string[];
  image: string;
}

export const services: ServiceData[] = [
  {
    slug: "ozel-guvenlik",
    icon: FiShield,
    title: "Özel Güvenlik Hizmetleri",
    shortDesc: "Yetkin personel ve standartlara uygun operasyon yapısı ile sürdürülebilir güvenlik hizmetleri sunuyoruz.",
    desc: "Silahlı ve silahsız özel güvenlik görevlilerimiz ile tesislerinizin 7/24 fiziksel güvenliğini sağlıyoruz. 5188 sayılı kanun kapsamında faaliyet gösteren firmamız, her türlü güvenlik ihtiyacınıza profesyonel çözümler üretir.",
    features: ["7/24 Nöbet Sistemi", "Devriye Hizmetleri", "Giriş-Çıkış Kontrol", "Olay Müdahale", "Personel Eğitimi", "Mevzuat Uyumluluk"],
    details: [
      "Deneyimli ve sürekli eğitimli güvenlik personeli kadromuz ile tesislerinizin güvenliğini en üst düzeyde sağlıyoruz.",
      "Tüm operasyonlarımız 5188 sayılı kanun ve ilgili mevzuata tam uyumlu olarak yürütülmektedir.",
      "GPS takip ve dijital raporlama sistemlerimiz ile güvenlik süreçlerini anlık olarak izliyor ve raporluyoruz.",
      "Her tesis için özel güvenlik planı hazırlayarak ihtiyaca yönelik çözümler üretiyoruz.",
    ],
    image: "/services/services1.png",
  },
  {
    slug: "site-yonetimi",
    icon: FiHome,
    title: "Site & Rezidans Yönetimi",
    shortDesc: "Site ve rezidanslarda güvenlik, temizlik, teknik bakım ve yönetim hizmetlerini profesyonel ekibimizle sağlıyoruz.",
    desc: "Büyük ölçekli site, rezidans ve toplu konut projelerinde güvenlik, temizlik, teknik bakım ve idari yönetim hizmetlerini entegre bir yapıda sunuyoruz.",
    features: ["Site Güvenliği", "Temizlik Yönetimi", "Teknik Bakım", "İdari Yönetim", "Otopark Yönetimi", "Sakin İlişkileri"],
    details: [
      "Site ve rezidans yönetiminde güvenlik, temizlik ve teknik bakımı tek çatı altında birleştiriyoruz.",
      "Profesyonel yönetim kadromuz ile sakinlerin yaşam kalitesini artırıyoruz.",
      "Otopark yönetimi, ortak alan bakımı ve teknik arıza müdahale hizmetleri sunuyoruz.",
      "Şeffaf raporlama ve düzenli toplantılarla yönetim kurulu ile koordineli çalışıyoruz.",
    ],
    image: "/services/services2.png",
  },
  {
    slug: "risk-analizi",
    icon: FiFileText,
    title: "Risk Analizi & Danışmanlık",
    shortDesc: "Mevzuata uygun potansiyel tehditleri belirliyor, güvenlik planları ve önleyici çözümler geliştiriyoruz.",
    desc: "Tesisleriniz ve operasyonlarınız için kapsamlı risk analiz raporları hazırlıyor, potansiyel tehditleri belirleyerek önleyici güvenlik stratejileri geliştiriyoruz.",
    features: ["Tehdit Değerlendirmesi", "Güvenlik Açığı Analizi", "Mevzuat Uyumluluk", "Önleyici Tedbirler", "Acil Durum Planları", "Periyodik Denetim"],
    details: [
      "Tesislerinizin fiziksel ve operasyonel risk seviyelerini detaylı olarak analiz ediyoruz.",
      "Mevzuata uygun risk analiz raporları hazırlayarak yasal gerekliliklerinizi karşılıyoruz.",
      "Acil durum eylem planları oluşturarak olası senaryolara karşı hazırlıklı olmanızı sağlıyoruz.",
      "Periyodik denetim ve değerlendirmelerle güvenlik seviyenizi sürekli güncel tutuyoruz.",
    ],
    image: "/services/services3.png",
  },
  {
    slug: "temizlik-hijyen",
    icon: FiCamera,
    title: "Temizlik & Hijyen Hizmetleri",
    shortDesc: "Endüstriyel ve kurumsal alanlarda profesyonel temizlik, hijyen yönetimi ve dezenfeksiyon hizmetleri sunuyoruz.",
    desc: "Endüstriyel tesisler, ofisler, hastaneler ve kurumsal alanlarda profesyonel temizlik, hijyen yönetimi ve dezenfeksiyon hizmetleri sunuyoruz.",
    features: ["Endüstriyel Temizlik", "Ofis Temizliği", "Dezenfeksiyon", "Hijyen Yönetimi", "Zemin Bakımı", "Cam Temizliği"],
    details: [
      "Profesyonel ekipman ve endüstriyel temizlik ürünleri ile en yüksek hijyen standartlarını sağlıyoruz.",
      "Hastane, okul ve kamu kurumlarında dezenfeksiyon ve hijyen yönetimi hizmetleri veriyoruz.",
      "Düzenli temizlik programları ile çalışma ortamlarınızın sürekli temiz kalmasını sağlıyoruz.",
      "İş güvenliği standartlarına uygun kimyasal ve ekipman kullanımı ile hizmet veriyoruz.",
    ],
    image: "/services/services4.png",
  },
  {
    slug: "lojistik-destek",
    icon: FiTruck,
    title: "Lojistik & Operasyon Desteği",
    shortDesc: "Personel taşıma, sevkiyat güvenliği ve operasyonel lojistik süreçlerinde entegre destek sağlıyoruz.",
    desc: "Personel taşımacılığı, sevkiyat güvenliği ve operasyonel lojistik süreçlerinde entegre ve profesyonel destek hizmetleri sunuyoruz.",
    features: ["Personel Taşıma", "Sevkiyat Güvenliği", "Araç Yönetimi", "Rota Optimizasyonu", "GPS Takip", "Operasyonel Planlama"],
    details: [
      "Personel servis hizmetleri ile çalışanlarınızın güvenli ve zamanında ulaşımını sağlıyoruz.",
      "Sevkiyat güvenliği hizmetimiz ile değerli kargolarınızın güvenle taşınmasını garanti ediyoruz.",
      "GPS takip sistemi ile tüm araçlarımızı anlık olarak izliyor ve raporluyoruz.",
      "Rota optimizasyonu ile zaman ve maliyet tasarrufu sağlıyoruz.",
    ],
    image: "/services/services1.png",
  },
  {
    slug: "dijital-yonetim",
    icon: FiUsers,
    title: "Dijital Yönetim Çözümleri",
    shortDesc: "GPS takip, dijital raporlama ve personel yönetim sistemi ile operasyonları anlık izliyor ve raporluyoruz.",
    desc: "Dijital altyapılar ve akıllı sistemlerle güvenlik operasyonlarınızı anlık izliyor, ölçüyor ve raporlanabilir hale getiriyoruz.",
    features: ["GPS Takip Sistemi", "Dijital Raporlama", "Personel Yönetimi", "Anlık İzleme", "Performans Analizi", "CCTV Entegrasyonu"],
    details: [
      "GPS tabanlı personel takip sistemi ile güvenlik görevlilerimizin lokasyonlarını anlık izliyoruz.",
      "Dijital raporlama altyapımız ile tüm güvenlik olaylarını kayıt altına alıyor ve raporluyoruz.",
      "Personel yönetim sistemi ile mesai, izin ve performans süreçlerini dijital ortamda yönetiyoruz.",
      "CCTV entegrasyonu ile kamera sistemlerinizi merkezi izleme merkezimizden takip ediyoruz.",
    ],
    image: "/services/services2.png",
  },
];
