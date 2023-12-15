import {
  CalendarIcon,
  ClockIcon,
  DistanceIcon,
  ElevationIcon,
  RunIcon,
} from "../assets/Icons";
import "../styles/cardActivities.css";
export default function CardActivities(props) {
  return (
    <div className="card">
      <section>
        {" "}
        <RunIcon /> {props.name}
      </section>
      <section>
        {" "}
        <CalendarIcon /> {props.date}
      </section>
      <section>
        <DistanceIcon /> {props.distance} km
      </section>
      <section>
        {" "}
        <ClockIcon /> {props.time}
      </section>
      <section>
        <ElevationIcon />
        {props.elevation} metros
      </section>
    </div>
  );
}
