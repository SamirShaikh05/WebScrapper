# BeyondChats – Blog Scraper & Content Enhancement System

This project is developed as part of the **BeyondChats Full Stack Developer Intern Assignment**.  
It is built in phases, following real-world backend and automation practices.

---

## Phase 1 – Blog Scraping & REST API (Completed)

### Objective
- Scrape blog articles from BeyondChats(Last 5)
- Store them in MongoDB Databse
- Expose RESTful CRUD APIs

### Tech Stack
Node.js (ES Modules), Express.js, MongoDB Atlas, Mongoose, Axios, Cheerio, dotenv

### Core Features
- Scrapes the **5 oldest blog articles** from: https://beyondchats.com/blogs/
- Prevents duplicate inserts using `sourceUrl` and MongoDB upsert
- Idempotent scraper (safe to re-run)
- Clean REST API design

### Article Fields
- `title`
- `content` (excerpt)
- `sourceUrl` (unique)
- `isUpdated`
- timestamps

### API Endpoints
GET /api/articles
GET /api/articles/:id
POST /api/articles
PUT /api/articles/:id
DELETE /api/articles/:id

## Phase 2 – Automated Content Enhancement (Work in Progress)
Objective

Automate article improvement using external research and AI.

Current Workflow

Stored Articles
→ Google Search (SerpAPI)
→ External Article URLs
→ Full Content Scraping
→ LLM-based Enhancement (in progress)
→ Update via REST API

Completed So Far

- Automation script separated from backend server

- Google search integration using SerpAPI

- Filters out original domain results

- Scrapes full content from external articles

- Robust scraping with browser-like User-Agent

In Progress

- LLM prompt design

- AI-based content rewriting

- Updating articles with enhanced content

- Marking articles as updated

Author

Samir Shaikh
