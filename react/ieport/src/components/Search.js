import {useState} from 'react'

function Search({query, setQuery}){
    return <div>
        <label>Search a person : </label>
        <input 
        type="text"
        value={query}
        onChange={(e)=>{
            setQuery(e.target.value)
    
        }}
        />
        
    </div>
}

export default Search;