import React from "react"
import "../style/Flight.scss"

const Flight = (props) => {
    const randomPhoto =
        "./aircraft" + Math.floor(Math.random() * 6 + 1) + ".jpg"
    const passengers = props.passengerCount
    const { departingFlight, returningFlight, price } = props.info
    const bookFlight = () => {
        alert(
            "Tickets booked! \nCost per passenger: $" +
                price +
                "\nPassenger Count: " +
                passengers +
                (passengers === 1 ? " passenger" : " passengers") +
                "\nTotal cost: $" +
                price * passengers
        )
    }

    return (
        <div className="flight">
            <div className="content-left">
                <h2>${price} per passenger</h2>
                <div className="details">
                    <div className="from-details">
                        <p>{departingFlight.plane}</p>
                        <p>
                            {departingFlight.from} > {departingFlight.to}
                        </p>
                        <p>Depart: {departingFlight.depart}</p>
                        <p>Arrive: {departingFlight.arrive}</p>
                    </div>
                    {returningFlight && (
                        <div className="to-details">
                            <p>{returningFlight.plane}</p>
                            <p>
                                {returningFlight.from} > {returningFlight.to}
                            </p>
                            <p>Depart: {returningFlight.depart}</p>
                            <p>Arrive: {returningFlight.arrive}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="content-right">
                <img src={randomPhoto} alt="aircraft" />
                <button onClick={bookFlight}>Book This Flight</button>
            </div>
        </div>
    )
}

export default Flight
