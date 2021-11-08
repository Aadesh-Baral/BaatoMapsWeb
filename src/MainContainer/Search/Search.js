import React, {useState } from 'react'
import Baato from "@klltech/baato-js-client";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const searchAPI = (query) => {new Baato.Search()
        .setApiVersion("1.0")  // default
        .setBaseUrl(`https://api.baato.io/api`) // detault Baato base URL
        .setKey("bpk.MLkcow8vhdKGJkMivqaw1OiCMAKspIfgbyW-C8-AsLbB")
        .setQuery(query) // string query to search for
        .setLimit(5) // limit the number of responses
        .doRequest()
        .then(response => {
         setSearchResults(response['data']); // search response
        })};
    const handleSearchQueryChange =  (event) => {
        setSearchQuery(event.target.value)
        if(event.target.value.length>0){
            searchAPI(event.target.value)
        } else{
            setSearchResults([])
        }
        console.log(event.target.value, searchResults)
    }
    var searchClass = ['search']
    if(searchResults.length>0){
        searchClass = ['search', 'active']
    }
    const clearSearchField = () =>{
        setSearchQuery('')
        setSearchResults([])
    }
    return (
        <div className='search_container'>
            <div className={searchClass.join(' ')}>
                <i className='bx bx-search'></i>
                <input placeholder='Search your destination' onChange={handleSearchQueryChange} value={searchQuery}/>
                {searchQuery.length>0?<i onClick={clearSearchField} className='bx bxs-x-circle'></i>:null}
            </div>
            { searchQuery.length>0?(
                <div className='search_results'>
                    {searchResults.map((places) => (
                        <div className='search_result_place' key={places['place_id']}>{places['name']}</div>
                    ))}
                </div>
            ):null}

        </div>
    )

};

export default Search;
