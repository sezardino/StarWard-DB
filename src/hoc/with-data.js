import React, {Component} from 'react';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components//error-indicator';

const withData = (View, getData) => {
	return class extends Component {
		state = {
			data: null,
			loading: true,
			error: false,
		};

		componentDidMount() {
			this.updateList();
		}

		onListLoad = (data) => {
			this.setState({
				data,
				loading: false,
			});
		};

		onError = (error) => {
			this.setState({error: true, loading: false});
			console.error(error);
		};

		updateList = () => {
			getData().then(this.onListLoad).catch(this.onError);
		};

		render() {
			const {data, loading, error} = this.state;
			const spinner = loading ? <Spinner /> : null;
			const errorIndicator = error ? <ErrorIndicator /> : null;
			const content = !(loading || error) ? <View {...this.props} data={data} /> : null;

			return (
				<React.Fragment>
					{spinner}
					{errorIndicator}
					{content}
				</React.Fragment>
			);
		}
	};
};

export default withData;
