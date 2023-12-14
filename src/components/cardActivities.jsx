import "../styles/cardActivities.css"
export default function CardActivities(props){
    return(
        <div className="card">
             <section>{props.nameAthlethe}</section>
            <section>{props.name}</section>
            <section>{props.type}</section>
            <section>{props.date}</section>
            <section>{props.distance}</section>
            <section>{props.time}</section>
            <section>{props.elevation}</section>

        </div>
    )
}