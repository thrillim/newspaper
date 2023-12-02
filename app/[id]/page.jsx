'use client'
import NavBar from "../../components/NavBar";
import NewsCard from '../../components/NewsCard';

// Newspaper page
import { useEffect, useState } from 'react';

const HomePage = ({ params }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      fetch(`https://newsdata.io/api/1/news?apikey=pub_32853489b697cf2bea5dbc515b878139235d7&country=vi&category=${params.id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          // Then try to parse it as JSON
          return response.json();
        })
        .then(data => {
          // Filter out articles without images
          const filteredArticles = data.results.filter(article => article.image_url !== null);
          // Use the filtered data
          setArticles(filteredArticles);
        })
        .catch(error => {
          // Handle the error
          // console.log(error)
        });
    };
    fetchArticles();
  }, []);

  return (
    <div className="newspaper-page bg-base-100">
      <div className="p-5 gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {articles.map((article) => (
          <NewsCard key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
