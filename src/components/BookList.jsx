import { useState } from 'react'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea';
import { Col, Form, Row } from 'react-bootstrap'

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)

 const handleBookSelect = (book) => {
    const newSelectedBook = selectedBook === book ? null : book;
    setSelectedBook(newSelectedBook)
  }

  return (
    <>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Search a book</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className='text-center'>
          {props.books
            .filter((b) =>
              b.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((b) => (
              <SingleBook
                key={b.asin}
                book={b}
                isSelected={selectedBook === b}
                onSelect={() => handleBookSelect(b)}
              />
            ))}
        </Col>
        <Col md={6} className='text-center overflow-auto' style={{ position: 'sticky', top: 10, height: '100vh', maxHeight: '80vh'}}>
          {selectedBook ? (
            <CommentArea asin={selectedBook ? selectedBook.asin : null} data-testid="cardgroup-item"/>
          ) : (
            <p>Seleziona un libro per visualizzare i commenti</p>
          )}
        </Col>
      </Row>
    </>
  )
}

export default BookList
