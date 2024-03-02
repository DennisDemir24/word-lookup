import express from "express";
import { addWord, getSynonyms } from "../controllers/word.controller";
const router = express.Router();

router.post("/add", addWord);
router.get('/', (req, res) => res.send('Hello World!'))
router.get('/synonyms/:word', getSynonyms);

export default router