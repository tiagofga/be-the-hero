import React from 'react';


function Header ( {children} ) {
    return (
        <header>
            <h1>Be The Hero {children}</h1>
        </header>
    );
}

export default Header;