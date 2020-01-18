import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteItemClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return (
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({ _id, name }) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem className="clearfix">
                                {name}
                                {this.props.isAuthenticated ? <Button className="remove-btn float-right" color="danger" size="sm"
                                    onClick={this.onDeleteItemClick.bind(this, _id)}>&times;</Button> : null}

                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        );
    }
}



const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(
    mapStateToProps,
    { getItems, deleteItem }
)(ShoppingList);