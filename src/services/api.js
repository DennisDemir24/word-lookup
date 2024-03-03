const apiUrl = '/api'

export const addWord = async (wordData) => {
  try {
    const response = await fetch(`${apiUrl}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wordData),
    })

    if (!response.ok) {
      throw new Error('Failed to add word')
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error adding word:', error)
    throw error
  }
}

export const searchWord = async (word) => {

  try {
    const response = await fetch(`${apiUrl}/search/${word}`)

    if (!response.ok) {
      throw new Error('Failed to search word')
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error searching word:', error)
    throw error
  }
}