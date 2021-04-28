import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Forrest's Portfolio", // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my webpage!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Forrest',
  subtitle: "I'm a full stack developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'A lifelong learner, I was drawn to programming because creating inspired projects is what keeps me growing.',
  paragraphTwo: 'A tenacious personality drives me to always improve- between projects and beyond.',
  paragraphThree: 'Outside of programming I love music and hiking. I have played guitar for most of my life, especially spanish classical music as well as American and British blues music. I think of myself first and foremost a creative individual who enjoys the challenge of problem solving. ',
  resume: 'https://docs.google.com/document/d/1qUuasOiuLa5Xf6Gj7oNg6RqVe8aoefaOMyb98H96HsY/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Hygge real estate',
    info: 'A webpage to find rental data around Portland, OR using the Realy Mole API (No API key).',
    info2: 'Technologies: JavaScript, jQuery, Bootstrap',
    url: 'https://focused-curran-9e1d82.netlify.app/',
    repo: 'https://github.com/freiland/hygge-real-estate', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectOne.jpeg',
    title: 'Nombolo app',
    info: 'Nombolo is a Portland based startup, and I am only a small part of a great team of developers who are building this application. The Nombolo app allows people to ask questions to their communities and receive video responses from other users! On the mobile app, I have developed features such a the Featured Business section on the homescreen and reply functionality. ',
    info2: 'Technologies: React Native, GraphQL, DynamoDB',
    url: 'https://nombolo.com',
    repo: 'https://nombolo.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectTwo.jpg',
    title: 'The Tap Room',
    info: 'An online brew house. A user can add and delete kegs to the page, or pour themself a pint! ',
    info2: 'Technologies: React, JavaScript',
    url: 'https://thetaproom.netlify.app',
    repo: 'https://github.com/freiland/the-tap-room', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'freiland@email.arizona.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
   
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/forrestreiland',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/freiland',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
