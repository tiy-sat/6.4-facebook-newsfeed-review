import React from 'react'

export default React.createClass({
  componentWillMount(){
    this.setState({ liked: false });
  },
  onHandleClickLike(e){
    console.log(this.props.count);
    this.setState({ liked: this.state.liked ? false : true })
    e.preventDefault();
  },
  render() {
    return (
      <article>
        <h2>{this.props.author_name}</h2>
        <p>{this.props.text}</p>
        <a href="#"
           className={this.state.liked ? "red" : "blue"}
           onClick={this.onHandleClickLike}>like me</a>
      </article>
    )
  }
})
