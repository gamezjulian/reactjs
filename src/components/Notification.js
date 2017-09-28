import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import NotificationStore from '../stores/NotificationStore';

export default class Notification extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false, message: '' };
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    componentWillMount() {
        NotificationStore.on('change', () => {
            this.setState({
                open: true,
                message: NotificationStore.getMessage()
            });
        });
    }

    handleRequestClose() {
        this.setState({
            open: false,
          });
    }

    render() {
        return (
            <Snackbar
                open={this.state.open}
                message={this.state.message}
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
            />
        );
    }
}