import WordModel from "../models/word.model";

export const addWord = async (req, res) => {
    try {
      const { word, synonyms } = req.body

      // Check if the word already exists in the database
      let existingWord = await WordModel.findOne({ word })

      if (existingWord) {
        // If the word exists, update its synonyms
        existingWord.synonyms = Array.from(
          new Set([...existingWord.synonyms, ...synonyms])
        )
      } else {
        // If the word doesn't exist, create a new entry
        existingWord = new WordModel({
          word,
          synonyms,
        })
      }

      // Save the word to the database
      await existingWord.save()

      res.status(200).json({ message: 'Word added successfully.' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
}

export const getSynonyms = async (req, res) => {
    try {
      const { word } = req.params

      // Find the word in the database
      const existingWord = await WordModel.findOne({ word })

      if (existingWord) {
        // If the word exists, return its synonyms
        const synonyms = existingWord.synonyms
        res.status(200).json({ word, synonyms })
      } else {
        // If the word doesn't exist, return an empty array
        res.status(200).json({ word, synonyms: [] })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
}