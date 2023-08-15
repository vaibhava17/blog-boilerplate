import React, { useEffect } from 'react'
import List from './components/List'
import axios from 'axios'
import { commentsAPI } from './constants'
import CreateComment from './CreateComment'

const CommentList = ({ postId }) => {
  const [comments, setComments] = React.useState([]);

  const fetchComments = async () => {
    await axios.get(`${commentsAPI}/posts/${postId}/comments`).then(res => {
      if (res.status == "200") {
        setComments(res.data);
      }
    });
  }
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <List
        dataSource={comments}
        renderItem={(item, i) => {
          return (
            <div key={i}>
              {item.content}
            </div>
          )
        }}
      />
    </div>
  )
}

export default CommentList