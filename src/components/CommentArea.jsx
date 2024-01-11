import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = (props) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchComments = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
        props.asin,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmMwOWUwZGQxZDAwMTgyZDE3NWYiLCJpYXQiOjE3MDQ3MjE0MTcsImV4cCI6MTcwNTkzMTAxN30.OVsAcvQwTCUo_GBU9jMUQsyXsHDi9V_vvd_u_APOyxo',
          },
        }
      )
      if (response.ok) {
        let comments = await response.json()
        setComments(comments)
        setIsLoading(false)
        setIsError(false)
      } else {
        console.log('error')
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)
      await fetchComments()
    }

    fetchData()
  }, [props.asin])

  return (
    <div data-testid="comment-area" className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea