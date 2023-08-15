import React, { useEffect } from 'react'
import List from './components/List'
import axios from 'axios'
import { postsAPI } from './constants'
import CreateComment from './CreateComment'
import CommentList from './CommentList'

const PostList = () => {
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = async () => {
    await axios.get(`${postsAPI}/posts`).then(res => {
      if (res.status == "200") {
        setPosts(res.data);
      }
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <List
        dataSource={posts}
        renderItem={(item, i) => {
          return (
            <div key={i}>
              {item.title}
              <CommentList postId={item.id} />
              <div className='add-comment'>
                <CreateComment postId={item.id} />
              </div>
            </div>
          )
        }}
      />
    </div>
  )
}

export default PostList