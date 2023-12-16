import NavBar from "./navBar";
import "../styles/monthView.css";
import { useSelector, useDispatch } from "react-redux";
import CardActivities from "./cardActivities";
import { Link } from "react-router-dom";
import { getMonthSelected } from "../redux/actions";

export default function MonthView() {
  const { dataInitial } = useSelector((state) => state);
  const dispatch = useDispatch();
  const activitiesByMonth = dataInitial.reduce((acc, users) => {
    return (
      users.activities?.reduce((monthAcc, activity) => {
        const monthYear = activity.date.substring(0, 7);
        if (!monthAcc[monthYear]) {
          monthAcc[monthYear] = [];
        }
        monthAcc[monthYear].push(activity);
        return monthAcc;
      }, acc) || acc
    );
  }, {});

  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const monthlySummaries = Object.entries(activitiesByMonth).map(
    ([monthYear, activities]) => {
      const totalDistance = activities.reduce(
        (sum, activity) => sum + activity.distance,
        0
      );
      const totalTime = activities.reduce(
        (sum, activity) => sum + timeToSeconds(activity.time),
        0
      );
      const totalElevationGain = activities.reduce(
        (sum, activity) => sum + activity.elevation_gain,
        0
      );
      return {
        monthYear,
        totalDistance,
        totalTime,
        totalElevationGain,
      };
    }
  );
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };
  return (
    <main className="main-month">
      <NavBar />
      <h2>Resumen Mensual de Actividades de {dataInitial[0].name}</h2>
      <div className="container-resume">
        {monthlySummaries.map((summary) => (
          <section key={summary.monthYear}>
            <Link
            className="link-details"
              to={`/month/${summary.monthYear.slice(5, 7)}`}
              onClick={() =>
                dispatch(getMonthSelected(summary.monthYear.slice(5, 7)))
              }
            >
              <h3>{summary.monthYear}: <span className="details">(ver más)</span></h3>
            </Link>
            <section>
              <CardActivities
                distance={summary.totalDistance.toFixed(2)}
                time={formatTime(summary.totalTime)}
                elevation={summary.totalElevationGain}
                date={summary.monthYear}
              />
            </section>
          </section>
        ))}
      </div>
    </main>
  );
}
