import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

const item = {
  title: 'example item',
  description: 'deedle dum',
  files: [
    {
      title: 'title',
      thumbPath: 'fakePath.url'
    }
  ]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Item {...item}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
