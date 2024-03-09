/* eslint-disable no-undef */
import { useState, useEffect } from "react"
import { getRandomWord } from "../services/api"
import SearchForm from "../components/SearchForm/SearchForm"
import Card from "../components/Card/Card"
import './pages.css'

const HomePage = () => {
    const [searchResults, setSearchResults] = useState([])
    const [searchMessage, setSearchMessage] = useState('')
    const [randomWord, setRandomWord] = useState([])

    const callOpenAI = async () => {
        console.log("OPEN AI")
        const response = await fetch('https://api.openai.com/v1/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: `Create a sentence with the word ${randomWord.word}`,
            max_tokens: 1000,
        })
      })
      const data = await response.json()
      console.log("DATA",data)
    }

    const handleSearchResults = (results) => {
      setSearchResults(results)
      console.log("results",searchResults)
      setSearchMessage(results.length === 0 ? 'No such word exists in the dictionary. You can add it and its synonyms using the add word button.' : '')
      callOpenAI()
    }

    useEffect(() => {
      const fetchRandomWord = async () => {
        const word = await getRandomWord()
        setRandomWord(word)
      }
      fetchRandomWord()
    }, [])

    console.log("random word",randomWord)



  return (
    <>
      <section className="home-section">
        <div>
          <div>
            <h1
              style={{
                color: '#593C8F',
              }}
            >
              Search for a word
            </h1>
          </div>
          <div className="form-wrapper">
            <SearchForm onSearchResults={handleSearchResults} />
          </div>
          {searchResults.length === 0 && (
            <p style={{ color: '#fff', textAlign: 'center' }}>{searchMessage}</p>
          )}
          <ul>
            {searchResults.map((result) => (
              <>
                <Card key={result.word}>
                  <h3>{result.word}</h3>
                  <p>Synonyms:</p>
                  <div className="tag-wrapper">
                    {result.synonyms.map((synonym) => (
                      <span className="synonym-tag" key={synonym}>{synonym}</span>
                    ))}
                  </div>
                </Card>
              </>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default HomePage