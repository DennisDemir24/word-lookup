const apiUrl = 'https://word-lookup-cd73.onrender.com/api'

export const addWord = async (wordData) => {
  try {
    const response = await fetch(`${apiUrl}/add`, {
      method: 'POST',
      mode: 'no-cors',
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
    const response = await fetch(`${apiUrl}/search/${word}`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })

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

export const getRandomWord = async () => {
  try {
    const response = await fetch(`${apiUrl}/random`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to get a random word')
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error getting a random word:', error)
    throw error
  }
}