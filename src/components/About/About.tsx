import Container from "../Container/Container"
import "./About.scss"
import AboutCard from "./AboutCard/AboutCard"
import aboutImg1 from "../../images/about/1.svg"
import aboutImg2 from "../../images/about/2.svg"
import aboutImg3 from "../../images/about/3.svg"

const About = () => {
  return (
    <div className="about mb-[60px]">
      <Container>
        <div className="about__cards flex justify-between gap-5">
          <AboutCard icon={aboutImg1} />
          <AboutCard icon={aboutImg2} />
          <AboutCard icon={aboutImg3} />
        </div>
      </Container>
    </div>
  )
}

export default About