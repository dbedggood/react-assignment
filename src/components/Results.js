import React from "react"
import Flight from "./Flight"
import getTrips from "../functions/getTrips"
import "../style/Results.scss"

const Results = (props) => {
    const {
        isReturn,
        origin,
        destination,
        departDate,
        returnDate,
        passengers
    } = props.searchTerms

    const trips = getTrips(props.searchTerms)

    return (
        <div className="results">
            <div className="trip-info">
                <h2>
                    {origin} > {destination} {isReturn && "> " + origin}
                </h2>
                <div className="dates">
                    <p>Depart: {departDate}</p>
                    {isReturn && <p>Return: {returnDate}</p>}
                </div>
            </div>
            <hr />
            {trips.map((trip, index) => (
                <Flight key={index} info={trip} passengerCount={passengers} />
            ))}
        </div>
    )
}

export default Results
