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
    address: ["İskender Mah. 106 Cad.", "No:36-38/4, Merkez / Isparta"],
    mapQuery: "İskender+Mah+106+Cad+Isparta",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5!2d30.560273!3d37.760335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ1JzM3LjIiTiAzMMKwMzMnMzcuMCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",
  },
  {
    id: "burdur",
    label: "Burdur",
    address: ["Burdur Şubesi", "Merkez / Burdur"],
    mapQuery: "Burdur+Merkez",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12500!2d30.2903!3d37.7203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b3a0a0a0a0a0%3A0x0!2sBurdur!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",
  },
];

export const DEFAULT_BRANCH = "isparta";
