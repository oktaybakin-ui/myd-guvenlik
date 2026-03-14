export interface Branch {
  id: string;
  label: string;
  address: string[];
  mapQuery: string;
  mapEmbed: string;
}

export const branches: Branch[] = [
  {
    id: "isparta",
    label: "Isparta",
    address: ["Kutlubey Mh. 1017 Sk. No:2/4", "Merkez / Isparta", "(Mimar Sinan Camii Girişi Karşısı - Topkaya Kuyumcu Üstü)"],
    mapQuery: "Kutlubey+Mh+1017+Sk+Isparta",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5!2d30.560273!3d37.760335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ1JzM3LjIiTiAzMMKwMzMnMzcuMCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",
  },
  {
    id: "burdur",
    label: "Burdur",
    address: ["Burç Mh. Şehit Özpolat Cd. No:1/D", "Zemin Kat D:11, Merkez / Burdur"],
    mapQuery: "Burç+Mah+Şehit+Özpolat+Cad+No:1+Burdur",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1570.5!2d30.28833!3d37.72139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5c8d6e7b8a9f0%3A0x1234567890abcdef!2sBur%C3%A7+Mh.+%C5%9Eehit+%C3%96zpolat+Cd.+Burdur!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",
  },
];

export const DEFAULT_BRANCH = "isparta";
