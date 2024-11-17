import React, { useEffect, useState } from 'react'
import { fetchNews } from '../api';
import NewsCard from '../components/NewsCard';
import './Home.css';

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('general');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNews = async () => {
            setLoading(true);
            const news = await fetchNews(category);
            setArticles(news);
            setLoading(false);
        };
        getNews();
    }, [category])
  return (
    <div className='home'>
        <header>
            <h1>News Aggregator</h1>
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="general">General</option>
                <option value="technology">Technology</option>
                <option value="sports">Sports</option>
                <option value="health">Health</option>
            </select>
        </header>
        <div className='news-container'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                articles.map((article, index) => (
                    <NewsCard key={index} {...article} />
                ))
            )}
        </div>
    </div>
  );
};

export default Home;