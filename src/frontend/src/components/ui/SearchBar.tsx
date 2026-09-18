import './searchBar.css';
import { useRef } from 'react';

export function SearchBar() {
    const searchRef = useRef(null);
    return(
        <>
            <form>
                <input type="text" id="searchInput" ref={searchRef}/>
                <input id="searchButton" type="submit" value="Search" onClick={async () => {
                    try {
                        const sending = prompt("Search: ")
                        const response = await fetch('http://localhost:5001/api/photos/'+sending);
                        const data = await response.json();
                        alert(data.message);
                    }
                    catch (error) {
                        console.error(error);
                        alert(error);
                    }
                }
                }/>
            </form>
            <button></button>
        </>
    )
}