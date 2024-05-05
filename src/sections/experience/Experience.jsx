import "./Experience.css";

const Exp = ({
  duration,
  position,
  company,
  description,
  anchor,
}) => {
  return (
    <div className="exp">
      <div className="from">{duration}</div>
      <div className="card">
        <a href={anchor} target="_blank">
          <h3>{`${position} @ ${company}`}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div id="experience">
      <h2>EXPERIENCE</h2>
      <div className="jobs">
        <Exp
          duration="2023 — Present"
          position="Fullstack/Backend Developer"
          company="The Rocket Code"
          anchor="https://therocketcode.com/"
          description="Building web applications and APIs for clients and projects using any technology that fits the job."
        />
        <Exp
          duration="2017 — 2022"
          position="Live Risk Trader"
          company="Intervalo Colombia"
          anchor="https://www.intervalo-colombia.com/en/home/"
          description="I was in charge of administering and supervising different softwares used for handling probabilities and customer information."
        />
      </div>
    </div>
  );
};

export default Experience;
