import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    objects: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onTodoClick: (id) => {dispatch(toggleTodo(id))}
  }
}


class NewPost extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="row">
        <h1>Welcome to New Post Page</h1>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPost));
