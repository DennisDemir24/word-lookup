import { useState } from "react"
import { addWord } from "../services/api"

const AddWordPage = () => {
    const [word, setWord] = useState('')
    const [synonyms, setSynonyms] = useState('')

    const handleAddWord = async () => {
      try {
        const synonymsArray = synonyms.split(',').map((s) => s.trim())
        await addWord({ word, synonyms: synonymsArray })
        setWord('')
        setSynonyms('')
        // history.push('/') // Redirect to the home page after adding a word
      } catch (error) {
        console.error('Error adding word:', error)
        // Handle error (show an error message, etc.)
      }
    }

  return (
    <section className='add-word-section'>
      <div className='form-wrapper'>
        <p>Word</p>
        <input
          type='text'
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <br />
        <p> Synonyms (comma-separated):</p>
        <input
          type='text'
          value={synonyms}
          onChange={(e) => setSynonyms(e.target.value)}
        />
        <br />
        <button onClick={handleAddWord}>Add Word</button>
      </div>
    </section>
  )
}

export default AddWordPage