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


class Post extends Component {
  constructor(props) {
      super(props);

      this.state = {
        id: this.props.match.params.id
      };

      console.log(this.props);
  }

  render() {
    return (
      <div className="row">
        <h1>Welcome to The Post Page</h1>
        <p>{this.state.id}</p>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
