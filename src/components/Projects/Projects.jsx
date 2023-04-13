import Project from "../Project/Project";
import ProjectRev from "../Project/ProjectRev";
import "./Projects.css";

const projectObj = [
  {
    title: "Kibo!",
    description:
      "Kibo is a simple chat application that was born when I decided to build an app where no record would remain, the participants in the room can talk and videocall each other but it ends there.",
    screen:
      "https://res.cloudinary.com/dprhkqxon/image/upload/v1681403308/yyow2seqsaucnedeuzuk.png",
    technologies: ["React", "Socket.io", "ChakraUI", "WebRTC"],
    codeURL: "https://github.com/RinnAnd/kibo",
    demoURL: "https://kibo-six.vercel.app/",
  },
  {
    title: "Happy Hour Helper",
    description:
      "Liquor ecommerce web app, with many products built using forms that dispatch functions onto the backend and that connect with the database, with an integrated admin dashboard that allows the information from the website to be manipulated without any code knowledge.",
    screen:
      "https://res.cloudinary.com/dprhkqxon/image/upload/v1681403978/fbvoh9lqsknjoonpvinc.png",
    technologies: ["PERN", "MaterialUI"],
    codeURL: "https://github.com/RetriveAgustin/Happy-Hour-Helper",
    demoURL:
      "https://www.linkedin.com/feed/update/urn:li:activity:7031695345189273600?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7031695345189273600%29",
  },
  {
    title: "MealsApp",
    description:
      "Web app for meal recipes classification built on React using the context API, this one allows to find recipes by name or even to find a random recipe, all of this using fetch functions connected to a recipe API.",
    screen:
      "https://res.cloudinary.com/dprhkqxon/image/upload/v1681407677/rdfg0omwulzzf1futyvc.png",
    technologies: ["React", "ContextAPI"],
    codeURL: "https://github.com/RinnAnd/MealsApp",
    demoURL: "https://meals-app-indol.vercel.app",
  },
  {
    title: "Dogstagram",
    description:
      "Dog classification web app built using the PERN stack, it allows the dogs to be filtered and visualized with a variety of traits that define the dog breed, also included the posibility to create a new dog with the form and to make a list of favorites.",
    screen:
      "https://res.cloudinary.com/dprhkqxon/image/upload/v1681408778/b880h8wut4scdnsdwr1n.png",
    technologies: ["PERN", "Redux"],
    codeURL: "https://github.com/RinnAnd/PI-DOGS",
    demoURL:
      "https://www.linkedin.com/feed/update/urn:li:activity:7031276269493190657/",
  },
];

const Projects = () => {
  return (
    <div id="experience">
      <div className="projects_main">
        <span>{"<FeaturedProjects />"}</span>
        <Project project={projectObj[0]} />
        <ProjectRev project={projectObj[1]} />
        <Project project={projectObj[2]} />
        <ProjectRev project={projectObj[3]} />
      </div>
    </div>
  );
};

export default Projects;
