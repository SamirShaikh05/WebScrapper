import Article from "../models/articleSchema.js";

// Get all articles
export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single article
export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update article (Phase 2 automation)
export const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      {
        content: req.body.content,
        isUpdated: req.body.isUpdated,
        references: req.body.references,
      },
      { new: true }
    );

    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
