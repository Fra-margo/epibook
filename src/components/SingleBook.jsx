import React, { Component } from "react";
import {Card} from "react-bootstrap";

class SingleBook extends Component{
  constructor(props){
    super(props);

    this.state = {
      selected: false,
    }
  }

  handleToggleSelected = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
  }
  render(){
    const {title, img} = this.props.book
    const {selected} = this.state

    return(
      <Card style={{ width: '18rem', 
      border: selected ? '2px solid red' : 'none',
      cursor: 'pointer'}}
      onClick={this.handleToggleSelected}>
        <Card.Img variant="top" src={img} />
          <Card.Body>
          <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
    )
  }
}

export default SingleBook