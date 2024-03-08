import { Schema, model } from 'mongoose'

const wordSchema = new Schema({
    word: {
        type: String,
        required: true
    },
    synonyms: [String]
})

const WordModel = model('Word', wordSchema)

export default WordModel