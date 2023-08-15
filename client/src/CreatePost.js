import React from 'react'
import CreateForm from './components/CreateForm'
import axios from 'axios'
import { postsAPI } from './constants'

const CreatePost = () => {

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${postsAPI}/posts`, {
      title: e.target.title.value
    });
  }
  return (
    <div>
      <CreateForm
        label="Title"
        type="text"
        name="title"
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default CreatePost