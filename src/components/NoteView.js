import React from 'react'

const NoteView = (props) => {
  return (
    <div className="card">
      <p> <b>Title: </b>{props.title}</p>
      <p> <b>Time: </b>{props.time}</p>
      <p> <b>Body: </b>{props.body}</p>

    </div>
  )
}

export default NoteView
