import React from 'react';
import ReactDOM from 'react-dom';
import ItemThumbnail from './ItemThumbnail';

const testFile = {
  title: 'testFile',
  thumbPath: 'test.com'
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemThumbnail file={testFile} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
