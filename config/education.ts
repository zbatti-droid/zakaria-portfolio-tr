export interface EducationInterface {
  id: string;
  institution: string;
  degree: string;
  period: string;
  logo: string;
  url?: string;
}

export const education: EducationInterface[] = [
  {
    id: "licence-informatique",
    institution: "FST Errachidia",
    degree: "Licence Informatique — Génie Logiciel",
    period: "2021 – 2024",
    logo: "/education/fst-errachidia.svg",
    url: "https://www.fste-umi.ac.ma/",
  },
  {
    id: "deust-mip",
    institution: "Université Moulay Ismaïl",
    degree: "DEUST MIP — Mathématiques, Informatique, Physique",
    period: "2022 – 2023",
    logo: "/education/umi.svg",
    url: "https://www.umi.ac.ma/",
  },
  {
    id: "baccalaureat",
    institution: "Lycée Sidi Lahj Lhbib",
    degree: "Baccalauréat Sciences Physiques",
    period: "2020 – 2021",
    logo: "/education/lycee-sidi-lahj.svg",
  },
];
