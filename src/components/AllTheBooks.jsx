import React from "react";
import fantasy from '../data/books/fantasy.json';
import history from '../data/books/history.json';
import horror from '../data/books/horror.json';
import romance from '../data/books/romance.json';
import scifi from '../data/books/scifi.json';
import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

class Books extends React.Component{
  state = {bookFantasy: fantasy[0]}

  render() {
    return (
      <Row>
        {fantasy.map((book) => (
          <Col md={3} key={book.asin}>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={book.img} alt="copertina libro"/>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  {book.price}
                  <br />
                  {book.category}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}


export default Books