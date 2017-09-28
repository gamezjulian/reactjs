import React from 'react';
import { Drawer } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

export default class RemoveProject extends React.Component {
    constructor(props) {
        super(props);
        
        this.closeModal = this.closeModal.bind(this);
        this.okModal = this.okModal.bind(this);        
    }

    closeModal(e) {
        this.props.onClose();
    }

    okModal() {
        this.props.onRemove();
    }

    render() {
        return (
            <Drawer
                open={true}
                openSecondary={true}>
                <Subheader inset={true}>Do you want to delete it?</Subheader>
                <Divider />
                <br />
                <RaisedButton
                    label="Yes"
                    onClick={this.okModal}
                />
                <RaisedButton
                    label="No"
                    onClick={this.closeModal}
                />
            </Drawer>
        );
    }
}