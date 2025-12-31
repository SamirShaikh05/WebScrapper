import express from "express";
import {getAllArticles, getArticleById, updateArticle,} from "../controllers/articleController.js";

const router = express.Router();

// Read
router.get("/", getAllArticles);
router.get("/:id", getArticleById);

// Update
router.put("/:id", updateArticle);

export default router;
