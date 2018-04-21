import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    auth: state.authentication,
    main: state.main
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onTodoClick: (id) => {dispatch(toggleTodo(id))}
  }
}


class App extends Component {
  render() {
    return (
        <div className="container-fluid">
            <nav className="row navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">BlogSite</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/"> Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/post/1"> Post</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/author/1"> Author</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/newpost"> New Post</Link>
                    </li>
                  </ul>
                </div>
            </nav>
            {this.props.children}
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// {JSON.stringify(this.props.auth)}<br />
// {JSON.stringify(this.props.main)}
