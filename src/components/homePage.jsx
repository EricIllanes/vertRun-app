import NavBar from "./navBar";
import "../styles/homePage.css";
import { useEffect, useState } from "react";
import { filteredData, getData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CardActivities from "./cardActivities";

export default function HomePage() {
  const { dataInitial } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const [selected, isSelected] = useState(false);
  function onChangeSelect(event){
    console.log(event.target.value)
    dispatch(filteredData(event.target.value))
  }

  return (
    <div className="homepage-container">
      <header className="">
        <NavBar />
      </header>
      <section className="section-select">
        <select onChange={(event)=>onChangeSelect(event)}>
          <option value="all">Ambos</option>
          <option value="Eric">Eric</option>
          <option value="Hiromi">Hiromi</option>
        </select>
      </section>
      <main className="main-container">
        {dataInitial?.map((users) =>
          users?.activities.map((activities, index) => (
            <section key={index}>
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
