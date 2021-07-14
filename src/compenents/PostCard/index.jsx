export const PostsCard = (props) =>{
   const post = props.post
   
return(
    <div className="post">
        <img src={post.cover} alt={post.title}/>
        <div className="post-content">
        <h1>{post.title}</h1>
        <h2>{post.id}</h2>
        <p>{post.title}{post.title}{post.title}{post.title}{post.title}{post.title}{post.title}</p>
        </div>
      </div>
      );
    }
    export default PostsCard;