import { useEffect, useState } from "react"
import Suggestions from "./suggestions";


export default function SearchAutoCOmplete() {
  
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);
    
    function handleChange(event) {
        const query = event.target.value.toLowerCase()
        setSearchParam(query);

        if(query.length > 1){
            const filteredData = users && users.length ? 
            users.filter(item=> item.toLowerCase(). indexOf(query) > -1)
            : []
            setFilteredUsers(filteredData);
            setShowDropdown(true)
        } else {
            setShowDropdown(false);
        }
    }

    function handleClick(event) {
        console.log(event.target.innerText)
        setShowDropdown(false);
        setSearchParam(event.target.innerText)
        setFilteredUsers([])
    }
    
    
    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            if (data && data.users && data.users.length) {
             setUsers(data.users.map((userItem) => userItem.firstName));
             setLoading(false)
             setError(null)   
            }  
        } catch (error) {
            setLoading(false);
           console.log(error); 
           setError(error);
        }
    }

    useEffect(() => {
    fetchListOfUsers()
  }, [])
  console.log(users, filteredUsers)

  if(error){
    <div>{setError}</div>
  }

  if(loading) {
    <div>Loading data ! Please Chill </div>
  }
  
  return <div className="search-autocomplete-container">
    <input
    name="search-users"
    type="text"
    placeholder="search-name-of-users"
    value={searchParam}
    onChange={handleChange}
    />
    {
      showDropdown && <Suggestions data={filteredUsers}  handleClick={handleClick}/>  
    }
  </div>  
}