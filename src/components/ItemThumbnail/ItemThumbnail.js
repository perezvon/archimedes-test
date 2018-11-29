import React from 'react';

import './ItemThumbnail.css';

const ItemThumbnail = ({ file }) => (
  <div className="itemThumbnail">
    <img src={file.thumbPath || 'placeholder.png'} title={file.title} alt={file.title}/>
  </div>
);

export default ItemThumbnail;
