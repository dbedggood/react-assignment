const compareFlightTimes = (departingFlight, returningFlight) => {
    if (departingFlight.date < returningFlight.date) {
        return true
    } else if (departingFlight.date === returningFlight.date) {
        const [
            arriveMinuteHours,
            arriveTimeOfDay
        ] = departingFlight.arrive.split(" ")
        const [
            departMinuteHours,
            departTimeOfDay
        ] = returningFlight.depart.split(" ")
        if (arriveTimeOfDay < departTimeOfDay) {
            return true
        } else if (arriveTimeOfDay > departTimeOfDay) {
            return false
        } else {
            const [arriveHours, arriveMinutes] = arriveMinuteHours.split(":")
            const [departHours, departMinutes] = departMinuteHours.split(":")
            console.log(arriveMinuteHours, departMinuteHours)
            if (arriveHours < departHours) {
                return true
            } else if (arriveHours > departHours) {
                return false
            } else {
                if (arriveMinutes < departMinutes) {
                    return true
                } else {
                    return false
                }
            }
        }
    } else {
        return false
    }
}

export default compareFlightTimes
