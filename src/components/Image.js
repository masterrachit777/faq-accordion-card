import React from "react"

function Image(){
    return(
        <picture>
            <source media="(min-width: 750px)" srcSet="images/illustration-woman-online-desktop.svg" />
            <img id="women-img" src="images/illustration-woman-online-mobile.svg" alt="women online image" />
        </picture>
    );
}

export default Image;