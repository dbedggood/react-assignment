import { data } from "../flights.json"
import compareFlightTimes from "./compareFlightTimes"

const getTrips = (searchTerms) => {
    let trips = []

    const departingFlights = data.filter(
        (flight) =>
            flight.from === searchTerms.origin &&
            flight.to === searchTerms.destination &&
            flight.date === searchTerms.departDate &&
            flight.price <= searchTerms.maxPrice
    )

    if (searchTerms.isReturn) {
        const returningFlights = data.filter(
            (flight) =>
                flight.from === searchTerms.destination &&
                flight.to === searchTerms.origin &&
                flight.date === searchTerms.returnDate
        )

        departingFlights.forEach((departingFlight) => {
            returningFlights.forEach((returningFlight) => {
                const price = departingFlight.price + returningFlight.price
                const returnAfterDepart = compareFlightTimes(
                    departingFlight,
                    returningFlight
                )
                if (price <= searchTerms.maxPrice && returnAfterDepart) {
                    trips.push({
                        departingFlight,
                        returningFlight,
                        price
                    })
                }
            })
        })
    } else {
        departingFlights.forEach((departingFlight) => {
            trips.push({
                departingFlight,
                returningFlight: null,
                price: departingFlight.price
            })
        })
    }

    return trips
}

export default getTrips
