import './styles.css';

export const SearchInput = ({searchValue, handleChange}) =>{
    return(
    <input className="text-input"
      type="search" 
      onChange={handleChange} 
      value={searchValue} 
      placeholder='faça sua busca'/>  
      );
}