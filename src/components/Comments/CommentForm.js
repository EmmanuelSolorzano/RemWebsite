import React, { Component } from "react";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      comment: {
        nombre: "",
        anonimo: false,
        descripcion: "",
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    // loading status and clear error
    this.setState({ error: "", loading: true });

    // persist the comments on server
    let { comment } = this.state;
    fetch("remsport.com.mx:8000/api/comments/", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(comment),
})
  .then(res => {
    if (!res.ok) {
      // Si la respuesta del servidor no es exitosa, lanzamos un error para que lo capture el bloque catch
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(res => {
    if (res.error) {
      this.setState({ loading: false, error: res.error });
    } else {
      // add time return from api and push comment to parent state
      comment.time = res.time;
      this.props.addComment(comment);

      // clear the message box
      this.setState({
        loading: false,
        comment: { ...comment, descripcion: "" }
      });
    }
  })
  .catch(err => {
    this.setState({
      error: "Something went wrong while submitting form.",
      loading: false
    });
  });
}

  /**
   * Simple validation
   */
  isFormValid() {
    return ((this.state.comment.nombre !== "") || this.state.anonimo !== false) && this.state.comment.descripcion !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.name}
              className="form-control"
              placeholder="Nombre"
              name="nombre"
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.descripcion}
              className="form-control"
              placeholder="Comentario"
              name="descripcion"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-primary">
              Comentar &#10148;
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}