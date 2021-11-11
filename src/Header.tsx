import { useState } from "react";

interface userProps {
    userName: string;
}

function Header({userName}: userProps){
    return (
        <div className='header'>
            <h1>Ice Cream Wars</h1>
            <p className='welcome'>{userName}</p>
        </div>
    )
};
export default Header;