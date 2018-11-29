import React from 'react';

import ItemThumbnail from '../ItemThumbnail';

import './Item.css';


const Item = ({ title, description, files }) => (
  <div className="item">
    <div className='item-container'>
      <ItemThumbnail file={files[0]} />
    </div>
    <div className='text-container'>
      <h4>{title}</h4>
      <p>{description || <em>no description provided</em>}</p>
    </div>
  </div>
);

export default Item;
