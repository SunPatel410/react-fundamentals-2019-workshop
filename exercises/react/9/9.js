import ReactDOM from 'react-dom'
import React, { useState } from 'react'

// TODO: can you hook up the login button so it works?
// JournalApp should pass the `setName` function as a prop
// that JournalHeader can call when the button is pressed
const JournalHeader = props => {
  const login = () => {
    console.log('fix me!')
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
      <JournalHeader name={name} />
    </div>
  )
}

ReactDOM.render(<JournalApp />, document.getElementById('react-root'))
