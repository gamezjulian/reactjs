import React from 'react';
import { Drawer } from 'material-ui';
import Button from 'material-ui/Button';

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
                <br />
                <Button
                    label="Yes"
                    onClick={this.okModal}
                />
                <Button
                    label="No"
                    onClick={this.closeModal}
                />
            </Drawer>
        );
    }
}