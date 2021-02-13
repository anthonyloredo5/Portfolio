import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anthony Loredo',
  subtitle: 'Full Stack Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'BeachinIt.png',
    title: `Beachin' It`,
    info:
      'This application is designed to simplify finding a relaxing beach anywhere in Florida! Functionality includes: access to Google Maps location data for finding your beach, tide data for each location, input parameters based desired activities, and also lists nearby attractions/restaurants.',
    info2: '',
    url: '',
    repo: 'https://github.com/anthonyloredo5/Beachin-It', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ohMyGift.png',
    title: 'Oh My Gift',
    info:
      'Oh My Gift is a procrastinators best friend. This application will take user input such as person, category, and price range to return a gift to the users specification. This was built with a team and I was primarily responsible for the backend development. Those responsibilites included setting up the database and querying for specific data, then appending it to the page with the help of handlebars.',
    info2: '',
    url: 'https://peaceful-depths-70768.herokuapp.com/',
    repo: 'https://github.com/anthonyloredo5/Oh-My-Gift', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you have any questions please contact me.',
  btn: 'Email',
  email: 'anthonyloredo5@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anthony-loredo-27805a18a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anthonyloredo5',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
