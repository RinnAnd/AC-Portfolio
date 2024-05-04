import "./About.css";

const About = () => {
  return (
    <div id="about-main">
      <h2>ABOUT</h2>
      <div className="paragraph">
        <p>
          I'm a primarily backend developer with a passion for design as well.
          My current stack that keeps on evolving is{" "}
          <span>
            <a target="_blank" href="https://nodejs.org/en">Node.js</a>
          </span>
          ,{" "}
          <span>
            <a target="_blank" href="https://nestjs.com/">Nest.js</a>
          </span>
          ,{" "}
          <span>
            <a target="_blank" href="https://go.dev/">Golang</a>
          </span>
          ,{" "}
          <span>
            <a target="_blank" href="https://www.typescriptlang.org/">TypeScript</a>
          </span>{" "}
          and either{" "}
          <span>
            <a target="_blank" href="https://www.postgresql.org/">PostgreSQL</a>
          </span>{" "}
          or{" "}
          <span>
            <a target="_blank" href="https://www.mongodb.com/">MongoDB</a>
          </span>
          . I'm also familiar with frontend technologies like{" "}
          <span>
            <a target="_blank" href="https://react.dev/">React</a>
          </span>
          ,{" "}
          <span>
            <a target="_blank" href="https://vuejs.org/">Vue.js</a>
          </span>{" "}
          and{" "}
          <span>
            <a target="_blank" href="https://nextjs.org/">Next.js</a>
          </span>
          , and I'm always looking to expand my horizons.
        </p>
        <p>
          As I delved deeper into the world of software engineering, I found my
          true calling in the backend. There's something magical about
          architecting the unseen, weaving together databases and APIs to create
          seamless digital experiences.
        </p>
        <p>
          I'm well aware that my journey is far from over. Every day, I strive
          to learn something new, to push the boundaries of what I know and what
          I can do. I'm always on the lookout for new challenges, new
          opportunities to grow and evolve as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
