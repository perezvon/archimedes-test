import React from 'react';
import { compose } from 'react-apollo';

import ItemsList from '../../components/ItemsList';
import itemsQuery from '../../graphql/itemsQuery';


class ItemsListContainer extends React.Component {
	render() {
    const { data } = this.props;
		let items = data.project && data.project.items;
		console.log(items)
		return (
			<ItemsList
				items={items}
			/>
		);
	}
}

export default compose(
	itemsQuery,
)(ItemsListContainer);
