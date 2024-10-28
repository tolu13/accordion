import { useState } from "react"


export default function GithubProfileFinder() {
    
    const [searchUsername, setSearchUsername] = useState();

    function handleSubmit() {

    }
 
 
    return <div className="github-profile-container">
       <div className="input-wrapper">
        <input
        name="search-by-username"
        type="text"
        placeholder="search Github Username..."
         />

         <button onClick={handleSumit}>Search</button>
       </div>
    </div>
}