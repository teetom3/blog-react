import React, { useState,useEffect } from 'react'
import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import PostItem  from './PostItem'
import { DUMMY_POSTS } from '../data'
import Loader from './Loader'





const Posts = () => {
    const[posts, setPosts] = useState(DUMMY_POSTS)
      const [isLoading, setIsloading] = useState(false)

        useEffect(() => {
          const fetchPosts = async () => {
          setIsloading(true);  
          }
        })
        if(isLoading){
          return <Loader/>
        }





  return (
    <section className='posts'>
       {posts.length > 0 ? <div className='container posts__container'>
        {
        posts.map(({id, thumbnail, category, title, description, authorID}) => <PostItem key={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID} />)
        }

        </div> : <h2 className='center'>No post founds</h2>}

       
        
    </section>
  )
}

export default Posts