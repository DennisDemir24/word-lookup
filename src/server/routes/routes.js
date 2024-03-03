import express from "express";
import { addWord, getSynonyms, searchWord } from "../controllers/word.controller";
const router = express.Router();

router.post("/add", addWord);
router.get('/', (req, res) => res.send('Hello World!'))
router.get('/synonyms/:word', getSynonyms);
router.get('/search/:word', searchWord);

export default router