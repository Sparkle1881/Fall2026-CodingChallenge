import './ui.css';
import {SearchBar} from "./SearchBar";

export function Ui() {
    return (
        <section id="ui">
            <div id="backgroundBar"></div>
            <h1 id="homeButton">Home</h1>
            <h1 id="profileButton">Profile</h1>
            <h1 id="settingsButton">Settings</h1>
            <SearchBar></SearchBar>
        </section>
    )
}