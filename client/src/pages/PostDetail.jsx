import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className='container post-detail__container'>
      <div className='post-detail__header'>
        <PostAuthor/>
        <div className='post-detail__buttons'>
          <Link to={`/posts/werwer/edit`} className="btn sm primary">Edit</Link>
          <Link to={`/posts/werwer/delete`} className="btn sm danger">Delete</Link>
        </div>
        
        </div>  
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt=""/>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nihil consequatur quidem perferendis et quisquam alias itaque? Dolorem asperiores reiciendis repellendus facere ratione, provident dolore officia minima ut odit consequuntur deserunt enim sed illum molestias quidem vitae qui sequi architecto?
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam facere quis, aliquid reprehenderit vero aliquam maiores voluptatem quod optio temporibus recusandae necessitatibus! Nisi quibusdam impedit eos ratione. Exercitationem maiores neque ducimus, alias dolorum iste praesentium ipsum! Eius eveniet assumenda nostrum et recusandae expedita ex nihil.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam praesentium repellendus esse architecto facilis sint debitis officia exercitationem aut consequatur, amet iusto odit similique accusantium. Dignissimos dolorem nemo laborum!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ducimus at!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laborum itaque vel quod doloribus hic tempore magni nostrum corrupti, nam expedita nesciunt sequi similique natus. Laboriosam excepturi perferendis placeat, obcaecati quis laborum architecto voluptates optio dolores molestiae corrupti voluptas perspiciatis tempore cupiditate debitis corporis, adipisci expedita, suscipit reiciendis dicta atque veritatis iure accusamus? Sit numquam, a impedit animi dolorem eius maiores recusandae distinctio dolore excepturi quos quia tenetur nihil aliquam et reprehenderit repellat ab eaque. Debitis blanditiis provident ab. Odit ea enim eos, possimus ipsam a explicabo quisquam id eius voluptates ab unde officiis aliquam dolorum illum, harum porro veniam! Suscipit debitis quod voluptate placeat. Atque, aliquam soluta consequatur labore cupiditate illum quidem iste. Dicta laborum culpa expedita? Numquam ea, laborum quia, nobis ipsa eos, repudiandae odio unde illo deleniti dicta? Laborum molestias iste est cupiditate rerum eum minus sunt voluptas, similique doloremque nemo illo. Earum totam provident inventore commodi tenetur, velit itaque sed, dicta maxime optio rerum ex neque quasi, praesentium saepe expedita. Minima repellat unde quidem quas ipsam id saepe dolorum aliquam sapiente hic iure inventore eos porro in, animi adipisci? Perspiciatis, eaque, odit quis consequuntur sequi magnam distinctio nemo reprehenderit natus, iure laborum saepe quo corrupti quod.</p>
      </div>
    </section>
  )
}

export default PostDetail