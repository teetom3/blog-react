import React from 'react'
import { useState } from 'react'
import PostItem from '../components/PostItem'
import { DUMMY_POSTS } from '../data'

const CategoryPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='author-posts'>
    {posts.length > 0 ? <div className='container author-posts__container'>
     {
     posts.map(({id, thumbnail, category, title, description, authorID}) => <PostItem key={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID} />)
     }

     </div> : <h2 className='center'>No post founds</h2>}

    
     
 </section>
  )
}

export default CategoryPosts