import React, {PureComponent} from 'react';

const withRandom = (Component) => {
	class WithRandom extends PureComponent {
		state = {
			id: null,
		};

		componentDidMount() {
			this.updateId();
			this.interval = setInterval(this.updateId, 5000);
		}

		componentWillUnmount() {
			clearInterval(this.interval);
		}

		updateId = () => {
			const id = Math.floor(Math.random() * 25) + 1;
			this.setState({id});
		};

		render() {
			const {id} = this.state;
			return <Component {...this.props} dataId={id} />;
		}
	}

	return WithRandom;
};

export default withRandom;
