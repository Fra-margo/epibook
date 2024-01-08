import { Component } from 'react'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea';
import { Col, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedBook: null,
  }

  handleBookSelect = (book) => {
    const newSelectedBook = this.state.selectedBook === book ? null : book;
    this.setState({ selectedBook: newSelectedBook })

  };

  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className='text-center'>
            {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
                <SingleBook 
                key={b.asin}
                book={b}
                isSelected={this.state.selectedBook === b}
                onSelect={() => this.handleBookSelect(b)} 
                />
            ))}
          </Col>
          <Col md={6} className='text-center' style={{ position: 'sticky', top: 10, height: '100vh' }}>
          {this.state.selectedBook ? (
              <CommentArea asin={this.state.selectedBook.asin} />
            ) : (
              <p>Seleziona un libro per visualizzare i commenti</p>
            )}
          </Col>
        </Row>
      </>
    )
  }
}

export default BookList
