import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const SingleBook = (props) => {
    const { isSelected, onSelect } = props;
    const [borderStyle, setBorderStyle] = useState('none')
    useEffect(() => {
      setBorderStyle(isSelected ? '3px solid red' : 'none' )
    }, [isSelected])
    return (
      <>
        <Card
          onClick={onSelect}
          style={{ border: borderStyle}}
        >
          <Card.Img variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }

export default SingleBook