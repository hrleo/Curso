import { Component } from 'react';
import './styles.css';

import { Posts } from '../../compenents/post';
import {loadPost} from '../../utils/load-post/loadpost';
import { Button } from '../../compenents/button/button';
import { SearchInput } from '../../compenents/textInput';




class Home extends Component{
  state ={
    post:[],
    allPost:[],
    page: 0 ,
    PostPerPage:2,
    searchValue:''
  }; 
  
 async componentDidMount(){
    await this.loadPost();
  }
loadPost = async () =>{
   const postandphotos = await loadPost ();
   const {page, PostPerPage} = this.state;

   this.setState({ 
     post: postandphotos.slice(page, PostPerPage),
     allPost: postandphotos,   
    });
  }
  loadMorePost = () =>{
  const{
      page, 
      PostPerPage,
      allPost,
       post
    } = this.state;

  const nextPage = page + PostPerPage;
const nextPosts = allPost.slice(nextPage, nextPage + PostPerPage);
post.push(...nextPosts);
this.setState({post ,page:nextPage});

  }
  handleChange = (e) =>{  //função que vai receber a busca 
    const {value} = e.target;
    this.setState ({searchValue: value});

  }
  
render(){
  const {post,page,PostPerPage,allPost,searchValue}=this.state;
  const noMorePosts = page + PostPerPage >= allPost.length;
  const filteredPost = !!searchValue ? allPost.filter(post =>{ /*isso sera responsavel pela busca*/
    return post.title.toLowerCase().includes(
      searchValue.toLowerCase());
  }): post;
  
  return (
    <section className="container">
      <div className="search-container">
      {!! searchValue && (<h1>Busca: {searchValue}</h1>)}
      
      <SearchInput searchValue={searchValue} handleChange={this.handleChange}/>
      
      </div>
      
      {filteredPost.length > 0 &&(<Posts post={filteredPost} />)}
     

      {filteredPost.length === 0 && (
        <p>não existe</p>
      )}
      
       {!searchValue && (  
         /* caso o não tenha nenhuma busca o botão aparece dnv */
      <Button text="load more post"
      disable={noMorePosts}      
      onClick = {this.loadMorePost}/>) }
      
      </section>
  );
}
}
export default Home;
