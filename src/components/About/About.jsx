import "./About.css";
import coder from "../../assets/coder.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="about_main">
        <div className="about_img">
          <img src={coder} alt="" width={400} />
        </div>
        <div className="about_text">
          <span>{"<About me />"}</span>
          <h1>A dedicated developer based in Medellín, Colombia</h1>
          <p>
            I possess an impressive arsenal of skills that allow me to build web
            applications and parttake throughout the whole process, knowing how
            to build from the backend all the way to the frontend. I'm a team
            player that excels on delivering my tasks in record times and great
            quality, from the clean code to the look of the product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
