import React, { useState } from 'react'
import '../App.css'
const Navbar = ({setQuery, setData, getData}) => {
    let [searchKey, setSearchKey] = useState('');
    console.log('navbar', searchKey);
  return (
    <div className="navbar">
        <h1>Unsplash.com</h1>
        <div className="serchbox">
            <input 
                type="text" 
                id='search' 
                name='search'
                placeholder='Search..'
                onChange={(e)=> setSearchKey(e.target.value)}
            />
            <input 
                type="submit" 
                id='submit' 
                name='submit'
                onClick={()=>{
                    setData([]);
                    setQuery(searchKey);
                    getData();
                }}
            />
        </div>
    </div>
  )
}

export default Navbar