import { useState } from 'react'
import NoteView from './NoteView'

const NoteList = (props) => {

  const [showbody, setShowbody] = useState(false)

  const clickHandler = () => {
    setShowbody(!showbody)
  }

  return (
    <>
      <h2 className="heading" onClick={clickHandler}>{props.title}</h2>

      {showbody && <NoteView title={props.title} time={props.time} body={props.body} />}
    </>
  )
}

export default NoteList


