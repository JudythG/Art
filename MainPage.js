import React from "react";
import NavBar from "./NavBar";

function MainPage () {

    return (
         <div>
            <NavBar visibility="hidden"></NavBar>
            <div class="content">Welcome to The MET Searchable Collection</div>
            <p class="main_content">Click over to the Search page and enter a search condition to browse the collection.</p>
            <img class="center_img" style={{borderRadius: 5}} src="https://www.metmuseum.org/-/media/images/homepage/simple-cards/events/date-night_1200x810_2,-d-,15,-d-,22.jpg?h=567&amp;iar=0&amp;mw=840&amp;w=840&amp;sc_lang=en&amp;hash=43668F8D0457D6125FBFC497E10EA76F" alt="The MET Fifth Avenue entrance" />
        </div>
    )
}

export default MainPage;
