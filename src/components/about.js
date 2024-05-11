import about from "../images/about.png";
import about01 from "../images/about01.png";

export default function About() {
  return (
    <>
      <h1>About us</h1>
      <p className="about">
        We specialize in simplifying property management, offering tailored
        solutions for property owners and tenants alike. With a dedicated team
        of professionals committed to excellence, we prioritize transparency,
        efficiency, and client satisfaction. Whether you're seeking reliable
        management services or a comfortable rental experience, trust us to
        exceed your expectations. Get in touch today and experience the
        difference with homebound.{" "}
      </p>
      <img className="aboutpng" src={about} />
      <h3>Join our Team</h3>
      <p className="about1">
        We’re hiring! If you’re interested in joining the Hometime team, take a
        look at our job openings. We’re a fully remote company with team members
        in Australia, the Philippines, Indonesia, and Argentina.
      </p>
      <img className="aboutpng01" src={about01} />
    </>
  );
}
