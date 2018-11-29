import React from 'react';

import Item from '../Item';

import './ItemsList.css';

const ItemsList = ({ items }) => (
  <div className="itemsList">
    <h1>Items List</h1>
    {items && items.map(item => 
      <Item 
        key={item._id} 
        {...item} 
        />
    )}
  </div>
);

export default ItemsList;
