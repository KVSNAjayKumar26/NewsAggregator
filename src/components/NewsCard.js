import React from 'react'
import './NewsCard.css';
const NewsCard = ({ title, description, url, urlToImage }) => {
  return (
    <div className='news-card'>
        <img src={urlToImage || 'public/images.png'} alt={title} className='news-image' />
        <div className='news-content'>
            <h3>{title}</h3>
            <h3>{description}</h3>
            <a href={url} target='_blank' rel='noopener noreferer' className='read-more'>
                Read More
            </a>
        </div>
    </div>
  );
};

export default NewsCard;