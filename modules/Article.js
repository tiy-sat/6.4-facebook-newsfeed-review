import React from 'react'
import Comment from "./Comment"
import Counter from "./Counter"

export default React.createClass({
  getDefaultProps(){
     return {
       count: 0,
       comments: [
         {
           author_name: "Courtney",
           author_img: "",
           text: "Lorem ipsum dolor sit amet"
         },{
           author_name: "Robin",
           author_img: "",
           text: "Lorem ipsum dolor sit amet"
         },{
           author_name: "Hanh",
           author_img: "",
           text: "Lorem ipsum dolor sit amet"
         }
       ]
     }
   },
  componentWillMount(){
    this.setState({errors: ""});
  },
  handleOnSubmit(e){
    // get data
    var data = {
      username: this.refs.username.state.value,
      password: this.refs.password.state.value
    }

    if(data.username.length < 4){
      this.setState({errors: "Username must be at least 4 characters!"});
    }

    //build ajax with data
    e.preventDefault();
  },
  handleOnChange(e){
    this.setState({textVal: e.target.value});
  },
  handleOnChildChange(e){
    this.setState({textVal: e.target.value});
  },
  render() {
    var articleScope = this;
    return (
      <div>
        <Counter count={this.props.count} />
        {this.props.comments.map(function(comment, i){
          return <Comment key={i} author_name={comment.author_name}
          count={articleScope.props.count} text={comment.text}/>
          })}
        </div>
    )
  }
})
