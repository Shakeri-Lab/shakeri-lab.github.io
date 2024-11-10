import { NewsItem } from '@/types';

export const news: NewsItem[] = [
  // Most recent first
  {
    date: "November 2024",
    title: "Paper Accepted at NeurIPS Workshop",
    content: "Our paper was accepted at NeurIPS Workshop on Responsibly Building the Next Generation of Multimodal Foundational Models.",
    links: [{
      text: "Workshop Website",
      url: "https://asu-apg.github.io/rbfm/"
    }]
  },
  {
    date: "October 2024",
    title: "Cancer Center Grant Award",
    content: "UVA Comprehensive Cancer Center awarded us $42,500 to develop Multiscale Computational and Experimental Framework for Analyzing Melanoma Cell Drug Responses through Stochastic Dynamics."
  },
  {
    date: "November 2024",
    title: "Brain Institute Grant Award",
    content: "Brain Institute awarded us $20k to develop ML methods for Characterizing Neural Dynamics of Auditory Reconstruction in the Central Auditory System."
  },
  {
    date: "October 2024",
    title: "Invited Talk at SIAM",
    content: "Dr. Shakeri presented 'Enhancing Network Design and Dynamics through Spectral and Topological Analysis' at the 9th SIAM Annual Meeting of Central States Section, Kansas City."
  },
  {
    date: "July 2024",
    title: "ACC 2024 Session Chair",
    content: "Dr. Shakeri served as the session chair for Machine Learning at the 2024 American Control Conference in Toronto."
  },
  {
    date: "July 2024",
    title: "Paper Published at ACC 2024",
    content: "Our paper 'Operator-Based Detecting, Learning, and Stabilizing Unstable Periodic Orbits of Chaotic Attractors' was published.",
    links: [{
      text: "Read on IEEE Xplore",
      url: "https://ieeexplore.ieee.org/abstract/document/10644947"
    }]
  },
  {
    date: "May 2024",
    title: "Paper Published in PLOS ONE",
    content: "Our paper 'MAD-FC: A fold change visualization with readability, proportionality, and symmetry' was published.",
    links: [{
      text: "Read Paper",
      url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0304632"
    }]
  },
  {
    date: "October 2024",
    title: "Presentation at NIH Workshop",
    content: "Our work: 'BPS-RL: Reinforcement Learning Trained Bolus Priming System' was presented at the NIDDK AI Workshop on Artificial Intelligence in Precision Medicine of Diabetes.",
    links: [{
      text: "Workshop Details",
      url: "https://www.niddk.nih.gov/news/meetings-workshops/2024/artificial-intelligence-in-precision-medicine-of-diabetes-2024"
    }]
  },
  {
    date: "June 2024",
    title: "International Talk",
    content: "Dr. Shakeri presented at the 44th International Symposium on Forecasting in Dijon, France."
  },
  {
    date: "September 2024",
    title: "Paper Published in Network Science",
    content: "Our paper 'The art of interconnections: Achieving maximum algebraic connectivity in multilayer networks' was published."
  },
  {
    date: "March 2024",
    title: "Paper Published in Frontiers",
    content: "Our paper 'Biophysical modulation and robustness of itinerant complexity in neuronal networks' was published in Frontiers in Network Physiology."
  },
  {
    date: "March 2023",
    title: "Preprint Available: Contra-Analysis",
    content: "Our paper 'Contra-Analysis for Determining Negligible Effect Size in Scientific Research' is now available on arXiv.",
    links: [{
      text: "Read on arXiv",
      url: "https://arxiv.org/abs/2303.09428"
    }]
  },
  {
    date: "2023",
    title: "Paper Published in ISA Transactions",
    content: "Our paper 'A purely data-driven framework for prediction, optimization, and control of networked processes' has been published.",
    links: [{
      text: "View Publication",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0019057823"
    }]
  },
  {
    date: "2023",
    title: "Paper Published in European Journal of Operational Research",
    content: "Our paper 'Competitive pricing under local network effects' has been published.",
    links: [{
      text: "View Publication",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0377221723"
    }]
  },
  {
    date: "2023",
    title: "IEEE BigData Conference Paper",
    content: "Our paper 'Leveraging Deep Learning to Improve COVID-19 Forecasting Using Wastewater Viral Load' was presented at IEEE BigData 2023.",
    links: [{
      text: "View Paper",
      url: "https://ieeexplore.ieee.org/document/proceedings"
    }]
  },
  {
    date: "2022",
    title: "Paper Published in SIEDS",
    content: "Our paper 'GeoTyper: Automated Pipeline from Raw scRNA-Seq Data to Cell Type Identification' was presented at SIEDS 2022.",
    links: [{
      text: "View Paper",
      url: "https://ieeexplore.ieee.org/document/proceedings"
    }]
  },
  {
    date: "2022",
    title: "Preprint: Simple Model of Cortical Intraregional Metastability",
    content: "Our paper 'A Simple Model of Cortical Intraregional Metastability' is available on bioRxiv.",
    links: [{
      text: "Read on bioRxiv",
      url: "https://www.biorxiv.org/content/10.1101/2022.09"
    }]
  },
  {
    date: "2021",
    title: "Paper Published in Nanomedicine",
    content: "Our collaborative work on 'Zn-based physiometacomposite nanoparticles: distribution, tolerance, imaging, and antiviral and anticancer activity' has been published.",
    links: [{
      text: "View Publication",
      url: "https://www.tandfonline.com/doi/full/journal"
    }]
  },
  {
    date: "2020",
    title: "Paper Published in Physical Review E",
    content: "Our paper 'Designing optimal multiplex networks for certain Laplacian spectral properties' has been published.",
    links: [{
      text: "View Publication",
      url: "https://journals.aps.org/pre/abstract/"
    }]
  }
  // Add more publications as needed
].sort((a, b) => {
  // Convert dates to timestamps for proper sorting
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();
  return dateB - dateA; // For descending order (newest first)
});