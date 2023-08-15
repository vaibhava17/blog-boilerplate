import React from 'react'
import CreateForm from './components/CreateForm'
import axios from 'axios'
import { commentsAPI } from './constants'

const CreateComment = (props) => {
  const { postId = "" } = props

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${commentsAPI}/posts/${postId}/comments`, {
      content: e.target.content.value
    });
  }
  return (
    <div>
      <CreateForm
        label="Comment"
        type="text"
        name="content"
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default CreateComment