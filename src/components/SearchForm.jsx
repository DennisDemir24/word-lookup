/* eslint-disable react/prop-types */
import { useState } from 'react'
import { searchWord } from '../services/api'

const SearchForm = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = async () => {
    try {
      const results = await searchWord(searchQuery)

      // Match results with the search query
      const matchedResults = results.filter((result) => {
        // Replace this condition with your matching logic
        return result.word.toLowerCase().includes(searchQuery.toLowerCase())
      })

      onSearchResults(matchedResults)
      setSearchQuery('')
    } catch (error) {
      console.error('Error searching words:', error)
      // Handle error (show an error message, etc.)
    }
  }

  return (
    <div>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        style={{
          backgroundColor: '#593C8F',
          color: 'white',
        }}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default SearchForm
