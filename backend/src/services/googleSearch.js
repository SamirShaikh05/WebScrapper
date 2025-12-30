import axios from "axios";

export async function searchGoogle(query) {
  const res = await axios.get("https://serpapi.com/search", {
    params: {
      q: query,
      api_key: process.env.SERP_API_KEY,
      num: 5
    }
  });

  // Filter only blog/article-like results
  return res.data.organic_results
    .map(r => r.link)
    .filter(link => !link.includes("beyondchats.com"))
    .slice(0, 2);
}
