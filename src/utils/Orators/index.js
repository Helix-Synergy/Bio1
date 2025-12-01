// Orator Images
import mohammed from "../../assets/Orators/Mohammed.jpg";
import cristiano from "../../assets/Orators/cristiano-jose.jpg";
import Paulo from "../../assets/Orators/Paulo-Cesar-De-Morais.jpg";
import Thomas from "../../assets/Orators/thomas-webster.jpg";

// Orator Banners
import mohammed_banner from "../../assets/Orator Banners/mohammed_banner.jpg";
import cristiano_banner from "../../assets/Orator Banners/cristiano_banner..jpg";
import paulo_banner from "../../assets/Orator Banners/paulo_banner.jpg";
import thomas_banner from "../../assets/Orator Banners/thomas_banner.jpg";

// Orator Display List
export const orators = [
  {
    id: "cristiano-jose-de-andrade",
    image: cristiano,
    name: "Dr. Cristiano Jose De Andrade",
    from: "Brazil",
    about: "Prof",
    link: "/biotechnology-summit-orators/cristiano-jose-de-andrade",
  },
  {
    id: "paulo-cesar-de-morais",
    image: Paulo,
    name: "Dr. Paulo Cesar De Morais",
    from: "Brazil",
    about: "CEO & Prof.",
    link: "/biotechnology-summit-orators/paulo-cesar-de-morais",
  },
  {
    id: "thomas-j-webster",
    image: Thomas,
    name: "Dr. Thomas J Webster",
    from: "United States",
    about: "Prof",
    link: "/biotechnology-summit-orators/thomas-j-webster",
  },
  {
    id: "mohamed-hosni",
    image: mohammed,
    name: "Mohamed Hosni",
    from: "United Kingdom",
    about: "Doctor",
    link: "/biotechnology-summit-orators/mohamed-hosni",
  },
];

// Individual Orator Data
export const cristiano_data = {
  id: "cristiano-jose-de-andrade",
  image: cristiano,
  from: "Brazil",
  name: "Dr. Cristiano Jose De Andrade",
  banner: cristiano_banner,
  about:
    "Dr. Andrade studied Food Engineering at Federal University of Lavras in 2008. He received his PhD degree in 2016 at UNICAMP. Currently a Professor at the Federal University of Santa Catarina, he conducts research in food technology and nanostructured biomaterials. His contributions help shape sustainable food processing technologies across Brazil and Latin America.",
};

export const Paulo_Ceasar_data = {
  id: "paulo-cesar-de-morais",
  image: Paulo,
  from: "Brazil",
  name: "Dr. Paulo Cesar De Morais",
  banner: paulo_banner,
  about:
    "Paulo C. DE MORAIS (H-60), PhD, was Full Professor of Physics at the University of Brasilia (UnB) – Brazil up to 2013. Since then, he has been Full Professor of the Catholic University of Brasilia (UCB) and Visiting Professor at the Faculty of Ceilândia – UnB. His work in nanoscience and nanobiotechnology has received numerous international awards and recognition.",
};

export const thomas_data = {
  id: "thomas-j-webster",
  image: Thomas,
  from: "United States",
  name: "Dr. Thomas J Webster",
  banner: thomas_banner,
  about:
    "Dr. Thomas J. Webster (H-index: 121) received his PhD in biomedical engineering from Brown University and has authored over 850 publications. He has founded several medical companies and is internationally recognized for his work on nanomedicine and regenerative medicine. Dr. Webster continues to mentor researchers across the world in innovative healthcare technologies.",
};

export const mohamed_data = {
  id: "mohamed-hosni",
  image: mohammed,
  from: "United Kingdom",
  name: "Mohamed Hosni",
  banner: mohammed_banner,
  about:
    "Mr. Mohamed Hosni is a Consultant Obstetrician and Gynaecologist at Imperial College Hospitals, London. With years of expertise in women's reproductive health and advanced minimally invasive surgery, he is dedicated to enhancing patient care, medical education, and international collaboration in the field of gynaecology.",
};

// Routing Map
export const orators_details_map = {
  "cristiano-jose-de-andrade": cristiano_data,
  "paulo-cesar-de-morais": Paulo_Ceasar_data,
  "thomas-j-webster": thomas_data,
  "mohamed-hosni": mohamed_data,
};
