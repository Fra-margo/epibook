import React, { useState } from 'react';
import SingleBook from './SingleBook';
import {Row, Col} from "react-bootstrap"

const Booklist = (props) => {
    const {books} = props
    const [searchQuery, setSearchQuery] = useState('');

    const getSearchQuery = (query) => {
      setSearchQuery(query);
    }

    const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div>
            <div>
                <input type="text"
                placeholder="Cerca per titolo" className='mb-3 ms-2'
                onChange={(e) => getSearchQuery(e.target.value)}/>
            </div>
            <Row>
                {filteredBooks.map((book, index) =>(
                    <Col md={3} key={index}>
                        <SingleBook book={book}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Booklist