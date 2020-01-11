import React, { Component } from 'react';
import {  ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems,deleteItem } from '../actions/itemActions';
import  PropTypes  from 'prop-types';

class ShoppingList extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    onDeleteItemClick = (id) =>{
        this.props.deleteItem(id);
    }

    

    render() {
        
        const { items } = this.props.item;
        return (
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem className="clearfix">
                                    {name}
                                    <Button className="remove-btn float-right" color="danger" size="sm"
                                        onClick={this.onDeleteItemClick.bind(this,id)}>&times;</Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(
    mapStateToProps,
    { getItems, deleteItem }
)(ShoppingList);