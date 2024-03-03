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

      // Update synonyms transitively
      synonyms.forEach(async (synonym) => {
        let synonymEntry = await WordModel.findOne({ word: synonym })

        if (synonymEntry) {
          synonymEntry.synonyms = Array.from(
            new Set([...synonymEntry.synonyms, word, ...synonyms])
          )
        } else {
          synonymEntry = new WordModel({
            word: synonym,
            synonyms: [word, ...synonyms],
          })
        }

        // Save the synonym entry to the database
        await synonymEntry.save()
      })

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

export const searchWord = async (req, res) => {
    try {
      const { word } = req.params

      // Search for the word or synonym in the database
      const result = await WordModel.find({
        $or: [
          { word: { $regex: word, $options: 'i' } }, // Case-insensitive search for the word
          { synonyms: { $in: [word] } },
        ],
      })

      res.status(200).json(result)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
}

export const getRandomWord = async (req, res) => {
  try {
    // Count the total number of documents in the WordModel collection
    const count = await WordModel.countDocuments()

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * count)

    // Retrieve a random word from the database
    const randomWord = await WordModel.findOne().skip(randomIndex)

    res.status(200).json(randomWord)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}