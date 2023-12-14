import NavBar from "./navBar";
import "../styles/homePage.css";
import { useEffect, useState } from "react";
import { getData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CardActivities from "./cardActivities";

export default function HomePage() {
  const { dataInitial } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const [selected, isSelected] = useState(false);

  return (
    <div className="homepage-container">
      <NavBar />
      <main className="main-container">
        {dataInitial?.map((users) =>
          users?.activities.map((activities) => (
            <section key={activities.id}>
              <CardActivities
                nameAthlethe={users.name}
                name={activities.name}
                type={activities.type}
                date={activities.date}
                distance={activities.distance}
                time={activities.time}
                elevation={activities.elevation_gain}
              />
            </section>
          ))
        )}
      </main>
    </div>
  );
}
