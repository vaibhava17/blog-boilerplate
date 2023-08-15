import React, { useState } from 'react'

const CreateForm = ({
  label,
  name,
  onSubmit
}) => {
  const [value, setValue] = useState('')
  return (
    <form onSubmit={onSubmit}>
      <label>{label}:</label>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        name={name}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default CreateForm