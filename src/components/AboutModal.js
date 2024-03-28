import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './AboutModal.css';

/**
 * Class component representing a modal for displaying about information.
 * @extends React.Component
 */
export default class AboutModal extends React.Component {
    /**
     * Constructor for AboutModal component.
     * @param {Object} props - Properties passed to the component.
     */
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    /**
     * Opens the modal.
     */
    handleOpen = () => {
        this.setState({ open: true });
    }

    /**
     * Closess the modal.
     */
    handleClose = () => {
        this.setState({ open: false });
    }

    /**
     * Renders the AboutModal component.
     * @returns {JSX.Element} JSX representing the AboutModal component.
     */
    render() {
        const { quote, quoteAuthor, name, header } = this.props;
        const { open } = this.state;

        return (
            <div>
                <Button variant="outlined" onClick={this.handleOpen} id="custom">{name}</Button>
                <Modal
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper',
                        border: '2px solid #000', boxShadow: 24, p: 4,
                    }}>

                        <Typography id="modal-modal-title" variant="h6" component="h2">{header}</Typography>
                        {quote &&
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {quote}
                            </Typography>
                        }
                        {quoteAuthor &&
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Quote Author: {quoteAuthor}
                            </Typography>
                        }
                    </Box>
                </Modal>
            </div >
        );
    }
}

