export default function ArticleDetail({ article }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>{article.title}</h2>

      <div style={{ whiteSpace: "pre-wrap" }}>
        {article.content}
      </div>

      {article.references?.length > 0 && (
        <>
          <h4>References</h4>
          <ul>
            {article.references.map((ref, i) => (
              <li key={i}>
                <a href={ref} target="_blank">{ref}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
