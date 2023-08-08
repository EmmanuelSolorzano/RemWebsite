import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Comments.css";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {

    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("/django/api/comments/")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .then(res => console.log(res))
      .catch(err => {
        this.setState({ loading: false });
      });
  }
  

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    fetch("/django/api/comments/")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .then(res => console.log(res))
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className="commsec container bg-light shadow">
        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>¡Déjanos un comentario!</h6>
            <CommentForm addComment={this.addComment} />
          </div>
          <div className="col-8  pt-3 bg-white scroll">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
