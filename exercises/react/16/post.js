import React from 'react'

const Post = props => {
  return (
    <div>
      <a href="">{props.post.title}</a>
      <span>Posted on {props.post.date}</span>
    </div>
  )
}

export default Post
