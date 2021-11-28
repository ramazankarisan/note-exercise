import React, { useState } from 'react'

const Edit = () => {
  const [editShow, setEditShow] = useState(false)

  return (
    <div>

      {editShow && <textarea name="" id="" cols="30" rows="10"></textarea>}
    </div>
  )
}

export default Edit
