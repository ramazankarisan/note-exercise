import React, { useState } from 'react'
// import Edit from './Edit'

const NoteView = (props) => {
  const [editShow, setEditShow] = useState(false)
  const [text, setText] = useState(props.body)

  const changeEdit = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <button onClick={() => setEditShow(!editShow)}>Edit</button>
      {editShow && <textarea onChange={changeEdit} name="" id="" cols="30" rows="10" value={text}></textarea>}

      {
        !editShow && <div className="card">
          <p> <b>Title: </b>{props.title}</p>
          <p> <b>Time: </b>{props.time}</p>
          <p> <b>Body: </b>{text}</p>

        </div>
      }
    </>
  )
}

export default NoteView
