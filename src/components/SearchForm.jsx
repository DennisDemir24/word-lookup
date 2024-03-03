/* eslint-disable react/prop-types */
import {useState} from 'react'
import { searchWord } from '../services/api'

const SearchForm = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = async () => {
    try {
      const results = await searchWord(searchQuery)
      onSearchResults(results)
    } catch (error) {
      console.error('Error searching words:', error)
      // Handle error (show an error message, etc.)
    }
  }

  return (
    <div>
      <h2>Search Words</h2>
      <label>
        Search for a word:
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchForm