import { useState } from "react"
import SearchForm from "../components/SearchForm"
import Card from "../components/Card/Card"

const HomePage = () => {
    const [searchResults, setSearchResults] = useState([])

    const handleSearchResults = (results) => {
      setSearchResults(results)
    }


  return (
    <>
      <section>
        <div>
          <div>
            <h1
              style={{
                color: '#593C8F',
              }}
            >
              Look up a word
            </h1>
          </div>
          <div>
            <SearchForm onSearchResults={handleSearchResults} />
          </div>
          <ul>
            {searchResults.map((result) => 
                <Card key={result.word}>
                  <h3>{result.word}</h3>
                  <p>Synonyms: {result.synonyms.join(', ')}</p>
                </Card>
            )}
          </ul>
        </div>
      </section>
    </>
  )
}

export default HomePage