// //Rendering List with .map()
// Create a functional component CardList that accepts an array of objects (items) with id and title properties. Use .map() to render a list of <div> elements, each displaying a title as a card.
import React from 'react';

const CardList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} style={styles.card}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '12px',
    margin: '8px',
    borderRadius: '8px',
    boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)'
  }
};

export default CardList;
