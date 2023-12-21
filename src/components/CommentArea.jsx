import React from "react";
import CommentsList from "./CommentsList";

class CommentArea extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            comments: []
        }
    }

    componentDidMount() {
        const {elementId} = this.props
        this.fetchComments(elementId)
    }

    fetchComments(elementId){
        fetch(`https://striveschool-api.herokuapp.com/api/books/${elementId}/comments`, {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDc1NWI1MjViYjAwMThlZDA4MTQiLCJpYXQiOjE3MDMxNjc4MjksImV4cCI6MTcwNDM3NzQyOX0.WoIELI94qbbsBNflw6IW3ANvpmEXbJ6j1ZgkIjI_f40"
            }
            })
          .then((response) => response.json())
          .then((data) => {
            this.setState({ comments: data });
          })
          .catch((error) => {
            console.error("Errore nel fetch delle recensioni:", error);
          });
      }
    
      render() {
        const { comments } = this.state;
    
        return (
          <div>
            <h3>Recensioni:</h3>
            <CommentsList comments={comments} />
          </div>
        );
      }
    }
    
export default CommentArea;