import React from 'react'

function Add(props,) {
  return (
    <form onSubmit={props.onSubmit} >
      <input onChange={props.onChange} type="text" name="text" value={props.text.title} />
      <button type="submit">Add to List</button>
    </form>
  )
}

export default Add

