import React, {Component} from 'react';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components//error-indicator';

const withData = (View) => {
	return class WithData extends Component {
		state = {
			data: null,
			loading: true,
			error: false,
		};

		componentDidMount() {
			const {dataId} = this.props;
			if (dataId === null) {
				this.setState({loading: false});
			} else {
				this.updateData();
			}
		}

		componentDidUpdate(prevProps) {
			if (this.props.dataId !== prevProps.dataId) {
				this.updateData();
			}
		}

		onDataLoad = (data) => {
			this.setState({
				data,
				loading: false,
			});
		};

		onError = (error) => {
			this.setState({error: true, loading: false});
			console.error(error);
		};

		updateData = () => {
			const {dataId = ``, getData} = this.props;
			getData(dataId).then(this.onDataLoad).catch(this.onError);
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
