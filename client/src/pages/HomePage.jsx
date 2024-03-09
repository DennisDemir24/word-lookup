import { useState } from 'react'
import { getRandomWord } from '../services/api'
import SearchForm from '../components/SearchForm/SearchForm'
import Card from '../components/Card/Card'
import './pages.css'

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([])
  const [searchMessage, setSearchMessage] = useState('')


  const handleSearchResults = (results) => {
    setSearchResults(results)
    setSearchMessage(
      results.length === 0
        ? 'No such word exists in the dictionary. You can add it and its synonyms using the add word button.'
        : ''
    )
  }

  const onGenerateRandomWord = async () => {
    const randomWord = await getRandomWord()
    setSearchResults([randomWord])
    setSearchMessage('')
  }

  return (
    <>
      <section className='home-section'>
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
          <div className='form-wrapper'>
            <SearchForm onSearchResults={handleSearchResults} />
            <p>Or</p>
            <button
              onClick={onGenerateRandomWord}
              className='add-button'
              style={{ backgroundColor: '#593C8F', color: '#fff' }}
            >
              Generate random Word
            </button>
          </div>
          {searchResults.length === 0 && (
            <p style={{ color: '#fff', textAlign: 'center' }}>
              {searchMessage}
            </p>
          )}

          {searchResults.map((result) => (
            <>
              <Card key={result.word}>
                <h3 className='word-title'>{result.word}</h3>
                <p className='synonym-title'>Synonyms:</p>
                <div className='tag-wrapper'>
                  {result.synonyms.map((synonym) => (
                    <span className='synonym-tag' key={synonym}>
                      {synonym}
                    </span>
                  ))}
                </div>
              </Card>
            </>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
