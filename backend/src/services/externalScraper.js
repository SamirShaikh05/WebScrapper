import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeExternalArticle(url) {
  try {
    const { data } = await axios.get(url, {
      timeout: 8000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; BeyondChatsBot/1.0; +https://beyondchats.com)"
      }
    });

    const $ = cheerio.load(data);

    // Generic content extraction (works for most blogs)
    const paragraphs = $("p")
      .map((_, el) => $(el).text().trim())
      .get()
      .filter(text => text.length > 50);

    return paragraphs.join("\n\n");
  } catch (err) {
    console.error("Failed to scrape:", url);
    return null;
  }
}
