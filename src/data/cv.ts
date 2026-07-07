export const profile = {
  name: 'Anudeep Das',
  email: 'anudeep.das@uwaterloo.ca',
  eyebrow: 'AI Safety & Security · University of Waterloo',
  scholar: 'https://scholar.google.com/citations?user=fJxvR1gAAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/anudeep-das-6652451a7/',
};

export interface Publication {
  title: string;
  authors: string; // use **Das, A.** to bold your name
  venue: string;
  year: number;
  award?: string;
  awardHref?: string;
  href?: string;
}

export const publications: Publication[] = [
  {
    title: 'Backdooring Bias in Large Language Models',
    authors: '**Das, A.**, Chantasantitam, P., Singh, G., He, L., Ponomarenko, M., & Kerschbaum, F.',
    venue: 'arXiv preprint',
    year: 2026,
    href: 'https://arxiv.org/abs/2602.13427',
  },
  {
    title: 'Do Concept Replacement Techniques Really Erase Unacceptable Concepts?',
    authors: '**Das, A.**, Singh, G., Chantasantitam, P., & Asokan, N.',
    venue: 'arXiv preprint',
    year: 2025,
    href: 'https://arxiv.org/abs/2506.08991',
  },
  {
    title: 'Espresso: Robust Concept Filtering in Text-to-Image Models',
    authors: '**Das, A.**, Duddu, V., Zhang, R., & Asokan, N.',
    venue: 'ACM CODASPY',
    year: 2025,
    award: 'Best Paper Award',
    awardHref: 'https://cs.uwaterloo.ca/news/anudeep-das-vasisht-duddu-rui-zhang-n-asokan-win-best-paper-award-codaspy-2025',
    href: 'https://doi.org/10.1145/3714393.3726502',
  },
  {
    title: 'Attesting Distributional Properties of Training Data for Machine Learning',
    authors: 'Duddu, V., **Das, A.**, Khayata, N., Yalame, H., Schneider, T., & Asokan, N.',
    venue: 'ESORICS',
    year: 2024,
    href: 'https://link.springer.com/chapter/10.1007/978-3-031-70879-4_1',
  },
  {
    title: 'Accord: Application-Driven Networking in the Datacentre',
    authors: 'Mortazavi, S. H., Shafieirad, H., Bahnasy, M., Munir, A., Cheng, Y., **Das, A.**, & Ganjali, Y.',
    venue: 'IEEE/ACM UCC',
    year: 2021,
    href: 'https://doi.org/10.1145/3468737.3494102',
  },
];

export interface ResearchTheme {
  title: string;
  blurb: string;
}

// export const researchThemes: ResearchTheme[] = [
//   {
//     title: 'Backdoors in large language models',
//     blurb:
//       'How fine-tuning-time adversaries can implant targeted, hard-to-detect bias into LLMs, and what it takes to surface and remove it.',
//   },
//   {
//     title: 'Concept erasure & filtering in generative models',
//     blurb:
//       'Whether “erased” concepts in text-to-image models are really gone — and how to filter unacceptable concepts robustly, even against adaptive adversaries.',
//   },
//   {
//     title: 'Attesting properties of training data',
//     blurb:
//       'Cryptographic and ML techniques for proving distributional properties of confidential training data without revealing the data itself.',
//   },
// ];

export interface Row {
  when: string;
  title: string;
  org?: string;
  detail?: string;
  amount?: string;
  href?: string;
}

export const experience: Row[] = [
  {
    when: '2024 — now',
    title: 'PhD Researcher',
    org: 'University of Waterloo',
    detail: 'Adversarial machine learning: LLM backdoors, concept erasure in generative models.',
  },
  {
    when: '2024',
    title: 'Lead Machine Learning Architect',
    org: 'Shoplogix',
    detail:
      "Led ML implementation and deployment; built Shoplogix's first AI product, an LLM-based chat agent orchestrated on Amazon ECS.",
  },
  {
    when: '2023',
    title: 'Undergraduate Research Fellow',
    org: 'University of Waterloo',
    detail:
      'With N. Asokan and Vasisht Duddu: adversarially robust attestation of confidential ML training data using multi-party computation.',
  },
  {
    when: '2023',
    title: 'Data Engineer',
    org: 'Shoplogix',
    detail:
      "Cut an ELT pipeline's runtime from 3 hours to 15 minutes; architected two new pipelines on AWS Lambda, SQS, S3, and PostgreSQL.",
  },
  {
    when: '2021',
    title: 'Machine Learning Engineer',
    org: 'VTS',
    detail:
      "Designed and productionized the company's first NLP pipeline (SageMaker, ULMFiT); content classifier at 95% accuracy.",
  },
  {
    when: '2020',
    title: 'ML Research Engineer',
    org: 'Huawei Technologies',
    detail:
      'Deep Q-Network routing strategy for datacentre networks with PyTorch and NetworkX, reaching 98% effectiveness.',
  },
  {
    when: '2020',
    title: 'ML Software Developer',
    org: 'BlackBerry',
    detail:
      "Shipped man-in-the-middle attack detection in BlackBerry's Mobile Threat Detection apps using C++ CURL and SSL libraries.",
  },
];

export const awards: Row[] = [
  {
    when: '2026',
    title: 'Queen Elizabeth II Graduate Scholarship in Science & Technology',
    amount: '$15,000',
  },
  { when: '2026', title: "President's Graduate Scholarship", amount: '$5,000' },
  {
    when: '2025',
    title: 'Coefficient Giving (formerly OpenPhilanthropy) Research Gift',
    detail: 'For research on LLM backdoors.',
    amount: '$80,416',
    href: 'https://uwaterloo.ca/computer-science/news/anudeep-das-collaborators-awarded-58100-usd-open-philanthropy-advance-research-stealthy-resilient-llm-backdoors',
  },
  {
    when: '2025',
    title: 'David R. Cheriton Graduate Scholarship',
    amount: '$10,000/year × 2 years',
  },
  { when: '2023', title: 'Undergraduate Research Fellowship', amount: '$7,500' },
  { when: '2023', title: 'Math Undergraduate Research Award', amount: '$6,000' },
  { when: '2022', title: "President's Research Award", amount: '$1,500' },
  { when: '2018', title: "President's Scholarship of Distinction", amount: '$2,000' },
];

export const teaching: Row[] = [
  {
    when: '2025',
    title: 'Teaching Assistant',
    org: 'CS 446/646: Software Design & Architecture',
  },
  {
    when: '2024',
    title: 'Teaching Assistant',
    org: 'CS 135: Designing Functional Programs',
  },
  {
    when: '2025 — now',
    title: 'Reviewer',
    org: 'Proceedings on Privacy Enhancing Technologies (PoPETs)',
  },
  { when: '2025', title: 'Reviewer', org: 'CPI Graduate Student Conference' },
];
