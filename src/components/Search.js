import React, { useState } from "react"
import "../style/Search.scss"

const Search = (props) => {
    const [searchInput, setSearchInput] = useState(props.searchTerms)
    const [departDate, setDepartDate] = useState(props.searchTerms.departDate)
    const [returnDate, setReturnDate] = useState(props.searchTerms.returnDate)

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setSearchInput((prevSearchInput) => ({
            ...prevSearchInput,
            [name]: value
        }))
    }

    const setReturn = () => {
        setSearchInput((prevSearchInput) => ({
            ...prevSearchInput,
            isReturn: true
        }))
    }

    const setOneWay = () => {
        setSearchInput((prevSearchInput) => ({
            ...prevSearchInput,
            isReturn: false
        }))
    }

    const handleDepartDateChange = (event) => {
        const value = event.target.value
        setDepartDate(() => value)
    }
    const handleReturnDateChange = (event) => {
        const value = event.target.value
        setReturnDate(() => value)
    }

    const handleSearch = () => {
        props.setSearchTerms(() => ({ ...searchInput, departDate, returnDate }))
    }

    return (
        <div className="search-box">
            <button onClick={setReturn}>Return Trip</button>
            <button onClick={setOneWay}>One-way Trip</button>
            <div className="search-term">
                <label htmlFor="origin">Origin City: </label>
                <select
                    id="origin"
                    name="origin"
                    value={searchInput.origin}
                    onChange={handleInputChange}
                >
                    <option value="AKL">Auckland</option>
                    <option value="WLG">Wellington</option>
                    <option value="CHC">Christchurch</option>
                </select>
            </div>
            <div className="search-term">
                <label htmlFor="destination">Destination City: </label>
                <select
                    id="destination"
                    name="destination"
                    value={searchInput.destination}
                    onChange={handleInputChange}
                >
                    <option value="AKL">Auckland</option>
                    <option value="WLG">Wellington</option>
                    <option value="CHC">Christchurch</option>
                </select>
            </div>
            <div className="search-term">
                <label htmlFor="departure">Departure Date: </label>
                <input
                    type="date"
                    name="departure"
                    id="departure"
                    min="2020-04-14"
                    max="2020-04-17"
                    value={departDate}
                    onChange={handleDepartDateChange}
                />
            </div>

            {searchInput.isReturn && (
                <div className="search-term">
                    <label htmlFor="return">Return Date: </label>
                    <input
                        type="date"
                        name="return"
                        id="return"
                        min="2020-04-14"
                        max="2020-04-17"
                        value={returnDate}
                        onChange={handleReturnDateChange}
                    />
                </div>
            )}

            <div className="search-term">
                <label htmlFor="passengers">Passengers: </label>
                <input
                    type="number"
                    name="passengers"
                    id="passengers"
                    value={searchInput.passengers}
                    onChange={handleInputChange}
                />
            </div>
            <div className="searchTerm">
                <p>Max Price Per Passenger: ${searchInput.maxPrice}</p>
                <label htmlFor="maxPrice">Ticket Price: </label>
                <input
                    type="range"
                    id="maxPrice"
                    name="maxPrice"
                    min="0"
                    max="1500"
                    list="tickmarks"
                    value={searchInput.maxPrice}
                    onChange={handleInputChange}
                />
                <datalist id="tickmarks">
                    <option>0</option>
                    <option>250</option>
                    <option>500</option>
                    <option>750</option>
                    <option>1000</option>
                    <option>1250</option>
                    <option>1500</option>
                </datalist>
            </div>
            <button type="submit" onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}

export default Search
