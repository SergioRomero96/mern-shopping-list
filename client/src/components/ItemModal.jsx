import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toogle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }
        // Agrego el item atraves de la accion
        this.props.addItem(newItem);
        //Cerrar Modal
        this.toogle();
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated ? <Button color="primary" className="mb-3" onClick={this.toogle} >Add Item</Button> : <h4 className="mb-3">Please log in to manage items</h4>}

                <Modal isOpen={this.state.modal} toggle={this.toogle} >
                    <ModalHeader toggle={this.toogle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" placeholder="name item"
                                    onChange={this.onChange} />
                                <Button color="primary" className="mt-2" block>Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(
    mapStateToProps,
    { addItem }
)(ItemModal);