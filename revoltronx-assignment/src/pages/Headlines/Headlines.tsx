import React, { useState, useEffect } from "react";
import styles from './Headlines.module.css'

interface Article {
  title: string;
  source: { name: string };
  publishedAt: string;
  url: string;
}

const Headlines: React.FC = () => {
  const [headlines, setHeadlines] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        console.log(import.meta.env.VITE_API_KEY)
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch news headlines.");
        }

        const data = await response.json();
        setHeadlines(data.articles.slice(0, 5));
      } catch (error) {
        console.log(error)
        setError("Failed to fetch news headlines. Please try again later.");
      }
    };

    fetchHeadlines();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest News Headlines</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul className={styles.headlineList}>
          {headlines.map((article, index) => (
            <li key={index} className={styles.headlineItem}>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.headlineLink}>
                <h2 className={styles.headlineTitle}>{article.title}</h2>
              </a>
              <div className={styles.headlineDetails}>
                <span className={styles.headlineSource}>{article.source.name}</span>
                <span className={styles.headlineDate}>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Headlines;
