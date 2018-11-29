import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import itemsQuery from '../../graphql/itemsQuery';
import ItemsListContainer from './ItemsListContainer';

const mocks = [
  {
    request: {
      query: itemsQuery,
      variables: {
        id: '1',
      },
    },
    result: {
      data: {
        project: { 
          id: '1', 
          items: [{
            _id: '2',
            title: 'a great test item',
            description: 'dee dee',
            files: [{
              _id: 12,
              name: 'filename',
              title: 'fileTitle',
              type: 'image/jpeg',
              path: 'https://s3.amazonaws.com/iiif-orpheus/ryWNLxG5Qz-AmbrosianIliadPict47Achilles.jpg',
              thumbPath: 'http://iiif.orphe.us/ryWNLxG5Qz-AmbrosianIliadPict47Achilles.jpg/full/90,/0/default.jpg'
            }]
          }]},
      },
    },
  },
];


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ItemsListContainer id={1}/>
    </MockedProvider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('loads the data', () => {
  
});