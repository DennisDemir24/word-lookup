const apiUrl = 'https://word-lookup-0clw.onrender.com/api'

export const addWord = async (wordData) => {
  try {
    const response = await fetch(`${apiUrl}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
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
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
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
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
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