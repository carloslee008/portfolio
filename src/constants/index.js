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

  
  const testimonials = [
    {
      testimonial:
        "I'm a developer, so I know how to create your website to run across devices using the latest technologies available.",
      title: "Develop",
    },
    {
      testimonial:
        "I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.",
      title: "Design"
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Keeper",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, testimonials, projects };