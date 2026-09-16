import './searchBar.css';
import { useRef } from 'react';

export function SearchBar() {
    const searchRef = useRef(null);
    return(
        <>
            <form>
                <input id="searchInput" ref={searchRef}/>
                <input id="searchButton" type="submit" value="Search" onClick={async () => {
                    const response = fetch('http://localhost:5001/api/')
                }
                }/>
            </form>
            <button
                onClick = {async ()=>{
                    const res = await fetch('http://localhost:5001/api/hello')
                    const data = await res.json()
                }}
            ></button>
        </>
    )
}