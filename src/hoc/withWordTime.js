import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

moment().locale('ru');


export default function withWordTime(WrappedComponent) {
    class DateTimePretty extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                timeDifference: moment().to(this.props.date)
            }
            this.updateState = this.updateState.bind(this);
        }

        componentDidMount() {
            this.timerID = setInterval(
                () => this.updateState(),
                1000
            );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        updateState() {
            this.setState({
                timeDifference: moment().to(this.props.date),
            });
        }

        render() {
            return <WrappedComponent {...this.props} date={this.state.timeDifference}/>;
        }
    }

    const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component';

    DateTimePretty.displayName = `DateTimePretty(${wrappedComponentName})`;
    return DateTimePretty;
}
