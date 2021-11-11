import { useState } from "react";

interface VoteBox {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

function Ad({flavor, fontSize, darkTheme}: VoteBox) {
    const fontChange = {
        fontSize,
    };
    return (
        <div className={`voteBox ${darkTheme === true ? 'dark' : 'light'}`}>
            <strong>Vote for:</strong> 
            <p style={fontChange}>{flavor}</p>
        </div>
    );
};

export default Ad;