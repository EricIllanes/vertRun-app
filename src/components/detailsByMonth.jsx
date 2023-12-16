import { useSelector } from "react-redux";
import NavBar from "./navBar";
import CardActivities from "./cardActivities";
import "../styles/detailsByMonth.css";

export default function DetailsMonth() {
  const { activitiesSpecificMonth } = useSelector((state) => state);
  const date = new Date(activitiesSpecificMonth[0][0].date.toString());
  const nameMonth = date.toLocaleString("es-ES", { month: "long" });
  
  return (
    <div className="container-detailview">
      <NavBar />
      <main className="main-detailview">
        <h2>Actividades realizadas en {nameMonth}: </h2>
        {activitiesSpecificMonth[0]?.map((activities, index) => (
          <section key={index}>
            <CardActivities
            
              name={activities.name}
              type={activities.type}
              date={activities.date}
              distance={activities.distance}
              time={activities.time}
              elevation={activities.elevation_gain}
            />
          </section>
        ))}
      </main>
    </div>
  );
}
