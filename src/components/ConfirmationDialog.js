import React from 'react';

import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

export default class ConfirmationDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = { open: false }
    }

    handleRequestClose = e => {
        this.setState({ open: false });

        this.props.onClose();
    }

    handleRequestDelete = () => {
        this.setState({ open: false });

        this.props.onRemove();
    }

    handleRequestOpen = () => {
        this.setState({ open: true });
    }

    render() {
        return (
            <div>
                <Button color="primary" disabled={this.props.disabled} onClick={this.handleRequestOpen} >Delete</Button>
                <Dialog
                    open={this.state.open}
                >
                    <DialogTitle>{this.props.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.props.content}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="primary">
                            Cancel
                    </Button>
                        <Button onClick={this.handleRequestDelete} color="primary">
                            Delete
                    </Button>
                    </DialogActions>

                </Dialog>
            </div>
        );
    }
}