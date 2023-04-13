import './Project.css'

const ProjectRev = ({ project }) => {
    const { title, description, screen, technologies, codeURL, demoURL } =
      project;
  
    return (
      <div className="project_main_rev">
        <div className="text_info">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="technologies">
          {technologies.map((tech) => (
            <div className="tech_box">
              <h3>{tech}</h3>
            </div>
          ))}
        </div>
        <div className="urls">
          <a target="_blank" href={codeURL}>Code</a>
          <a target="_blank" href={demoURL}>Demo</a>
        </div>
        </div>
        <div className="demo_info">
          <div className="project_img_rev">
            <img src={screen} alt="" />
          </div>
        </div>
      </div>
    );
  };

export default ProjectRev