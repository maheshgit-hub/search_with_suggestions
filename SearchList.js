import React, { useState } from 'react'
import "./search.css"
var data = require("./data.json")
const SearchList = () => {
  const [value, setValue] = useState("")

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    console.log("search",searchTerm)
  }

  return (
      <div className='App'>
        <h1>Search</h1>

        <div className='search-container'>
          <div className='search-inner'>
            <input type='text' value={value} onChange={onChange}></input>
            <button onClick={() => onSearch(value)}>Search</button>
          </div>
          <div className='dropdown'>
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                console.log(searchTerm)
              console.log(item)
                const fullname = item.full_name.toLowerCase();
                console.log(fullname)
                return (
                  searchTerm &&
                  fullname.startsWith(searchTerm) &&
                  fullname !== searchTerm
                )
              })
              // .slice(0,10)
              .map((item) => (
                <div
                 onClick={() => onSearch(item.full_name)}
                  className='dropdown-row'
                  key={item.full_name}
                  >
                    {item.full_name}
                </div>
              ))}
          </div>
        </div>
      </div>
  )

}

export default SearchList
