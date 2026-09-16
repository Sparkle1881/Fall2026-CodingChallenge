import './searchBar.css';
import { useRef } from 'react';

export function SearchBar() {
    const searchRef = useRef(null);
    return(
        <>
            <form>
                <input id="searchInput" ref={searchRef}/>
                <input id="searchButton" type="submit" value="Search" onClick={async () => {
                    try {
                        const response = await fetch('http://localhost:5001/api');
                        const data = await response.json();
                        alert(data);
                    }
                    catch (error) {
                        console.error(error);
                        alert(error);
                    }
                }
                }/>
            </form>
            <button
                // onClick = {async ()=>{
                //     const res = await fetch('http://localhost:5001/api/hello');
                //     const data = await res.json();
                //
                // }}
            ></button>
        </>
    )
}