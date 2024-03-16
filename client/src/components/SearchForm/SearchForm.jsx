/* eslint-disable react/prop-types */
import { useState } from 'react'
import { searchWord } from '../../services/api'
import './SearchForm.css'

const SearchForm = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const results = await searchWord(searchQuery)

      // Match results with the search query
      const matchedResults = results.filter((result) => {
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
    <div className='form-wrapper'>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchForm
