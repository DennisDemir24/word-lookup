import express from "express";
import { addWord, getRandomWord, getSynonyms, searchWord } from "../controllers/wordController.js";
const router = express.Router();

router.post("/add", addWord);
router.get('/', (req, res) => res.send('Hello World!'))
router.get('/synonyms/:word', getSynonyms);
router.get('/search/:word', searchWord);
router.get('/random', getRandomWord);

export default router