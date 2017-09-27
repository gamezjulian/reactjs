import React from 'react';
import { Drawer, MenuItem } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

export default class RemoveProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = { open: this.props.open };
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.open });
    }

    closeModal(e) {
        this.setState({ open: false });
    }

    render() {
        return (
            <Drawer
                open={this.state.open}
                openSecondary={true}>
                <Subheader inset={true}>Do you want to delete it?</Subheader>
                <Divider />
                <br />
                <RaisedButton
                    label="Yes"
                    onClick={this.props.onRemove}
                />
                <RaisedButton
                    label="No"
                    onClick={this.closeModal}
                />
            </Drawer>
        );
    }
}