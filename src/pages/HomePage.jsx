import { useState } from "react"
import SearchForm from "../components/SearchForm"

const HomePage = () => {
    const [searchResults, setSearchResults] = useState([])

    const handleSearchResults = (results) => {
      setSearchResults(results)
    }

    console.log(searchResults)
  return (
    <>
      <section>
        <div>
          <div>
            <h1>Look up a word</h1>
          </div>
          <div>
            <SearchForm onSearchResults={handleSearchResults} />
          </div>
          {/* <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => console.log(result.synonyms))}
          </ul> */}
        </div>
      </section>
    </>
  )
}

export default HomePage