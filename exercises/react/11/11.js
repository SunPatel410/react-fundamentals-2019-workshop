import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import posts from './posts'

const JournalHeader = props => {
  const login = () => {
    props.setName('Jack')
  }

  return (
    <div className="journal-header-wrapper">
      <h1 className="journal-header">Journal App</h1>
      <h2 className="journal-subheader">Journal for {props.name}</h2>
      <button className="journal-login" onClick={login}>
        Login
      </button>
    </div>
  )
}

const JournalApp = () => {
  const [name, setName] = useState('')
  return (
    <div>
      <JournalHeader name={name} setName={setName} />

      <ul>
        {/* TODO: can you create a <Post /> component that gets given a post as a prop and renders it onto the page? */}
        {posts.map(post => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </div>
  )
}

ReactDOM.render(<JournalApp />, document.getElementById('react-root'))
