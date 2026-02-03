// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Siya Anand',
    title: 'Student | Economics',
    image: getAsset('images/profile.png'), // Customize or replace with your profile image
    description:
      'am an economics undergraduate specialising in data science, with academic interests in political economy, international law, and institutional analysis. My work focuses on understanding how policy decisions, governance structures, and macroeconomic forces shape markets, particularly in emerging economies. I engage in research, data-driven analysis, and policy writing that bridges theory with real-world decision-making.\n' +
      '\n' +
      'Christ University\n' +
      '\n' +
      'I am pursuing a BSc in Economics with Data Science (Honours) at Christ University, Bengaluru, where my coursework integrates economic theory with quantitative and computational methods. Alongside academics, I have engaged in applied research, data analysis projects, and financial modelling focused on policy and macroeconomic questions.\n' +
      '\n' +
      'Excel Projects.',
    tagline: 'G.O.A.T.',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Siya Anand – Student',
    description: "Portfolio website to be added soon.",
  },

  animatedText: ['Student', 'Internation law and Policy', 'International Law', 'Investment Banking'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'State Stalement',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'Christ (Deemed-To-Be) University',
      degree: 'Bsc Economics with Data Science',
      year: '2025-2029',
      image: getAsset('images/education/placeholder.png'),
      description: ['Brief description of your focus or thesis'],
    },
    {
      institution: 'Christ Academy',
      degree: 'Schooling',
      year: '2023',
      image: getAsset('images/education/placeholder.png'),
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'UNCTIRL on international Trade Laws',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },
              ],
    },
    {
      title: 'Another Certificate',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Mentor',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'IIM Ranchi',
      time: (2025 – Present)',
      desp: ['Mentoring Young minds for a brigher tomorrow'],
    },
    {
      title: 'President',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Model UN Society',
      time: '(2024-2025)',
      desp: ['5 training sessions resulying in 20+awards'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'US and the increasing defense budget',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Excel analysis on how the military and defense expense despite increasing, decreases as a ratio in the overall budget',
      Githublink: 'https://github.com/your-username/your-project',
    },
      ],


  research: [
    {
      title: 'Your Paper or Research Title',
      authors: 'Your Name, Collaborator Name',
      conferences: 'Conference or Journal, Publisher',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'siyaanand@gmail.com',
    linkedin: 'https://www.linkedin.com/in/Siya-linkedin/',
    github: 'https://github.com/your-username',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
