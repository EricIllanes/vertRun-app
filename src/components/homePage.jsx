import NavBar from "./navBar";
import "../styles/homePage.css";
import { useEffect, useState } from "react";
import { filteredData, getData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CardActivities from "./cardActivities";

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    dispatch(filteredData("Usuario 1"));
  }, []);
  const { dataInitial } = useSelector((state) => state);
  function onChangeSelect(event) {
    dispatch(filteredData(event.target.value));
  }
  return (
    <div className="homepage-container">
      <NavBar />
      <section className="section-select">
        <h2>
          Puedes ver a continuación las últimas actividades realizadas por dos
          atletas:{" "}
        </h2>
        <select
          onChange={(event) => onChangeSelect(event)}
          className="homepage-select"
        >
          <option value="Usuario 1">Usuario 1</option>
          <option value="Usuario 2">Usuario 2</option>
        </select>
      </section>
      <main className="main-container">
        {dataInitial?.map((users) =>
          users?.activities.slice(0, 4).map((activities, index) => (
            <section key={index}>
              <CardActivities
                nameAthlete={users.name}
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
