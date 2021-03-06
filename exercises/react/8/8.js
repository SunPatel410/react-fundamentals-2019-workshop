import ReactDOM from 'react-dom'
import React, { useState } from 'react'

// TODO: can you lift the `name` state up into `JournalApp`
// and pass it down as a prop into journal header?
// DO NOT worry about the login button for now!
// we're going to talk about this in the next exercise :)

const JournalHeader = () => {
  const [name, setName] = useState('')

  const login = () => {
    console.log('Do not worry about implementing me right now')
  }

  return (
    <div className="journal-header-wrapper">
      <h1 className="journal-header">Journal App</h1>
      <h2 className="journal-subheader">Journal for {name}</h2>
      <button className="journal-login" onClick={login}>
        Login
      </button>
    </div>
  )
}

const JournalApp = () => {
  return (
    <div>
      <JournalHeader />
    </div>
  )
}

ReactDOM.render(<JournalApp />, document.getElementById('react-root'))
