export const loadPost = async() =>{
    const postresponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosresponse = fetch('https://jsonplaceholder.typicode.com/photos');
    
    const [post, photos]= await Promise.all([postresponse,photosresponse]);
    
    const postjson=await post.json();
    const photosjson=await photos.json();
    
    const postandphotos=postjson.map((post,index)=>{
      return{...post,cover:photosjson[index].url}
    });
    return postandphotos;
}