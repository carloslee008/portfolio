import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    commutecalculator,
    keepersite,
    tindog,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "HTML",
      icon: html,
    },
    {
      title: "CSS",
      icon: css,
    },
    {
      title: "JavaScript",
      icon: javascript,
    },
    {
      title: "React JS",
      icon: reactjs,
    },
    {
      title: "Tailwind CSS",
      icon: tailwind,
    },
    {
      title: "Node JS",
      icon: nodejs,
    },
    {
      title: "MongoDB",
      icon: mongodb,
    },
    {
      title: "Three JS",
      icon: threejs,
    },
  ];

  
  const projects = [
    {
      name: "Commute Calculator",
      description:
        "Using Google Maps API, created a mobile-friendly site that can search the routes from one address to another while displaying distance, time, and gas cost.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "googlemapsAPI",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: commutecalculator,
      source_code_link: "https://carloslee008.github.io/commute-calculator/",
    },
    {
      name: "Keeper",
      description:
        "An app where you can save and delete notes. Used React practices such as hooks and refs to save and pass data onto a backend (MongoDB atlas).",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: keepersite,
      source_code_link: "https://rococo-druid-fd9fd0.netlify.app/",
    },
    {
      name: "TinDog",
      description:
        "A recreation of tinder, but for dogs. Worked with a variety of bootstrap components and CSS styles to create a startup website.",
      tags: [
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tindog,
      source_code_link: "https://carloslee008.github.io/tindog/",
    },
  ];
  
  export { services, projects };