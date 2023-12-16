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
      {props.name && props.nameAthlete ? (
        <section>
          <span className="name-activity">
            {props.name} de {props.nameAthlete}
          </span>
        </section>
      ) : (
        props.name && (
          <section>
            <span className="name-activity">{props.name}</span>
          </section>
        )
      )}
      {props.date && (
        <section>
          {" "}
          <CalendarIcon /> {props.date}
        </section>
      )}
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
