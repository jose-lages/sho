import React from 'react';

const App = () => {
  const categories = [
    {
      title: 'Hats',
      id: 1,
    },
    {
      title: 'Jackets',
      id: 2,
    },
    {
      title: 'Shoes',
      id: 3,
    },
    {
      title: 'Women',
      id: 4,
    },
    {
      title: 'Men',
      id: 5,
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
