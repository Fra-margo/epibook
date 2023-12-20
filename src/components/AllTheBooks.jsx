import React from "react";
import fantasy from '../data/books/fantasy.json';
import {Row, Col, Card} from "react-bootstrap";

const AllTheBooks = () => {
  console.log(fantasy)

  return (
    <Row>
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooks