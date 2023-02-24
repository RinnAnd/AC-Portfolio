import React from "react";
import Project from "../Project/Project";
import './Experience.css'

const projects = [
  {
    name: "Happy Hour Helper",
    demonstration:
      "https://www.linkedin.com/feed/update/urn:li:activity:7031695345189273600?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7031695345189273600%29",
    code: "https://github.com/RetriveAgustin/Happy-Hour-Helper",
    description: "Liquor ecommerce web app, with many products built using forms that dispatch functions onto the backend and that connect with the database, with an integrated admin dashboard that allows the information from the website to be manipulated without any code knowledge",
  },
  {
    name: "Dogstagram",
    demonstration: "https://www.linkedin.com/feed/update/urn:li:activity:7031276269493190657/",
    code: "https://github.com/RinnAnd/PI-DOGS",
    description: "Dog classification web app built using the PERN stack, it allows the dogs to be filtered and visualized with a variety of traits that define the dog breed, also included the posibility to create a new dog with the form and to make a list of favorites",
  },
  {
    name: "Meals App",
    demonstration: "https://meals-app-indol.vercel.app",
    code: "https://github.com/RinnAnd/MealsApp",
    description: "Web app for meal recipes classification built on React using the context API, this one allows to find recipes by name or even to find a random recipe, all of this using fetch functions connected to a recipe API",
  },
];

const Experience = () => {
  return (
    <div id="experience">
      <div className="exp_intro">
        <h1>Here's some of my work;</h1>
      </div>
      <div className="center_box_exp">
        {projects.map((project) => {
          return (            
              <Project project={project} />            
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
