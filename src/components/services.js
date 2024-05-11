import cleaning from "../images/cleaning.png";
import management from "../images/management.png";
import marketing from "../images/marketing.png";

export default function Services() {
  return (
    <>
      <span className="cleaning">
        <strong>Cleaning Service</strong>
      </span>
      <img className="cleaningPic" src={cleaning} />
      <p className="textCleaning">
        Attract more bookings and earn higher revenue with a clean and
        well-maintained Airbnb property. At Homebound, we have a network of
        expert property managers across Australia that take the hassle out of
        Airbnb cleaning. From regular cleaning to deep cleans between guests,
        we'll ensure your property meets and exceeds your guests' expectations
        for cleanliness and hygiene. Maximise your Airbnb’s success with a
        sparkling clean property.{" "}
      </p>
      <p className="management">
        <strong>Property Management</strong>
      </p>
      <img className="managementPic" src={management} />
      <p className="textManagement">
        Discover peace of mind with our comprehensive property management
        solutions. From meticulous tenant screening and rent collection to
        proactive maintenance and responsive communication, we handle every
        aspect of property care with dedication and expertise. Trust us to
        safeguard your investment while maximizing its value, allowing you to
        focus on what matters most.
      </p>
      <p className="marketing">
        <strong>Marketing</strong>
      </p>
      <img className="marketingPic" src={marketing} />
      <p className="textMarketing">
        We target tenants with an eye toward your preferences, assembling the
        perfect mix of marketing channels and messaging. This not only allows us
        to widen the pool of potential candidates, but to also attract and vet
        quality occupants.
      </p>
    </>
  );
}
