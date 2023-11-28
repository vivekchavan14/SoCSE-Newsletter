import { useState } from 'react';
import Newsletter from './Newsletter';

const NewsletterList = () => {
  const initialArticles = [
    {
      id: 1,
      title: 'News Article 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'News Article 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'News Article 3',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const [articles, setArticles] = useState(initialArticles);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    const filteredArticles = initialArticles.filter(article =>
      article.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setArticles(filteredArticles);
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="w-full mb-5 flex justify-center">
        <input
          type="text"
          placeholder="Search News Articles..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md text-base"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-5 max-w-screen-lg w-full">
        {articles.map(article => (
          <Newsletter
            key={article.id}
            title={article.title}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsletterList;
