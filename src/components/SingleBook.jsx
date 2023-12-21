import React, { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  handleToggleSelected = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <div>
        <Card
          style={{
            width: '18rem',
            border: selected ? '2px solid red' : 'none',
            cursor: 'pointer',
          }}
          onClick={this.handleToggleSelected}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
        {selected && <CommentArea elementId={book.asin} />}
      </div>
    );
  }
}

export default SingleBook;