import { PostsCard } from '../PostCard/index';
export const Posts = ({post}) =>(
<div className="posts">
{post.map(post=>(
 <PostsCard key={post.id} post={post} />
 
 
 ))}
</div>
)                      