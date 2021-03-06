import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import fetch from 'so-fetch-js'
import Spinner from '../../spinner'
import JournalHeader from './journal-header'
import Post from './post'

const JournalApp = () => {
  const userIdForName = name => {
    return {
      alice: 1,
      bob: 2,
      charlotte: 3,
    }[name]
  }

  const [name, setName] = useState('')
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const userId = userIdForName(name)

    if (!userId) return

    fetch(`http://localhost:3000/posts?userId=${userId}`).then(response => {
      setPosts(response.data)
    })
  }, [name])

  return (
    <div>
      <JournalHeader name={name} setName={setName} />

      {posts ? (
        <ul>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <Post post={post} />
              </li>
            )
          })}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

ReactDOM.render(<JournalApp />, document.getElementById('react-root'))
