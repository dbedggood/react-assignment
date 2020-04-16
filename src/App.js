import React, { useState } from "react"
import "./style/App.scss"
import Search from "./components/Search"
import Results from "./components/Results"

const App = () => {
    const [searchTerms, setSearchTerms] = useState({
        isReturn: true,
        origin: "AKL",
        destination: "CHC",
        departDate: "2020-04-14",
        returnDate: "2020-04-16",
        passengers: 1,
        maxPrice: 1000
    })

    return (
        <div className="App">
            <h1>Flight Search Engine</h1>
            <hr />
            <div className="content">
                <Search
                    searchTerms={searchTerms}
                    setSearchTerms={setSearchTerms}
                />
                <Results searchTerms={searchTerms} />
            </div>
        </div>
    )
}

export default App
