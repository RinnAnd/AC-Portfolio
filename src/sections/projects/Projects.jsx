import "./Projects.css";
import seos from "/seos.png";
import abent from "/abent.png";
import telfin from "/telfin.png";
import amex from "/amex.png";
import tefa from "/tefa.png";
import creze from "/creze.png";

const Project = ({ name, description, technologies, anchor, img }) => {
  return (
    <div className="project">
      <img src={img} alt="not found" />
      <div className="card">
        <a href={anchor} target="_blank">
          <h3>{name}</h3>
        </a>
        <p>{description}</p>
        <div className="tech">
          {technologies?.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects">
      <h2>PROJECTS <span>(I worked in)</span></h2>
      <div className="projects">
        <Project
          name="Fullstack developer • SEOS Energy"
          description="Had direct responsibility for the development of the website's CRM system, which included the development of the backend and the connection of it with the frontend. Also implemented third party APIs for user background checks."
          technologies={["JavaScript", "React", "Node", "MongoDB", "GraphQL", "Mongoose"]}
          anchor="https://www.seosenergy.co/"
          img={seos}
        />
        <Project
          name="Backend developer • Abent3t"
          description="Built the backend of the website, which included the development of the API and the connection of it with the frontend."
          technologies={["Node", "Express", "OOP", "TypeScript", "PostgreSQL", "React", "TanStack Query"]}
          anchor="https://www.abent3t.com/"
          img={abent}
        />
        <Project
          name="Fullstack developer • Telfin"
          description="Main responsible for the development of the website's API for the catalog section and the building of the frontend for the aforementioned section. Also dealt with the whole signup process and user verification."
          technologies={["Next.js", "Supabase", "Stripe", "TypeScript", "SQL", "TailwindCSS", "Metamaps"]}
          anchor="https://www.telfin.mx/"
          img={telfin}
        />
        <Project
          name="Backend developer • Amex"
          description="Worked on an internal tool that implemented a detokenization process as a web service. The tool was used to detokenize credit card numbers and other sensitive data."
          technologies={["Golang", "Docker", "SQL"]}
          img={amex}
        />
        <Project
          name="Frontend developer • Personal Portfolio"
          description="Designed, developed and deployed a customized personal portfolio website using React."
          technologies={["React", "Framer-Motion", "Vite", "Vercel", "CSS"]}
          anchor="https://estefania-londono.vercel.app/"
          img={tefa}
        />
        <Project
          name="Fullstack developer • Creze"
          description="Developed specific features and bug fixes for the website's admin panel and user website."
          technologies={["Vue.js", "Node", "Koa", "Sass", "Vuex", "Knex", "MySQL"]}
          anchor="https://creze.com/"
          img={creze}
        />
      </div>
    </div>
  );
};

export default Projects;
