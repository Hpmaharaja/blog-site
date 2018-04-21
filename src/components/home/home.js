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


class Home extends Component {
  constructor(props) {
      super(props);

      this.state = {
        posts: [{
                  "userId": 1,
                  "id": 1,
                  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                  "userId": 1,
                  "id": 2,
                  "title": "qui est esse",
                  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                }]
      }

  }

  listPosts() {
    console.log('listPosts');
    var postList = [];
    this.state.posts.map((v,k) => {
      postList.push(<div className="box">
        <div><Link to={"/post/" + v.id}>Link to Post #{v.id}</Link></div>
        <div>THUMBNAIL</div>
        <div>{v.title.slice(0,14)}</div>
        <div>{v.body.slice(0,29)}</div>
        <div>AUTHOR NAME (optional)</div>
      </div>);
    });
    return postList;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col pageheading">
            <h1>Welcome to Blog Home Page</h1>
          </div>
        </div>

        <div className="row">
          {this.listPosts()}
        </div>
        
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
