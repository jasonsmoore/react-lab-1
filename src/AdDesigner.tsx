import { useState } from "react";
import Ad from "./Ad";

function AdDesigner() {
    const [flavor, setFlavor] = useState('');
    const [theme, setTheme] = useState('light');
    const [font, setFont] = useState(20);
    const fontChange = {
        fontSize: font,
    };
    return (
        <div className='adDesign'>
            <h2>Ad Designer</h2>
            <Ad flavor={flavor} darkTheme={theme === 'dark' ? true : false} fontSize={font} />
            {/* <div className={`voteBox ${theme}`}>
                <strong>Vote for:</strong> 
                <p style={fontChange}>{flavor}</p>
            </div> */}
            <h3>What to Support</h3>
            <div className='voteButtons'>
                <button className={ flavor === 'Chocolate' ? 'selected' : '' } onClick={() => setFlavor('Chocolate')}>Chocolate</button>
                <button className={ flavor === 'Vanilla' ? 'selected' : '' } onClick={() => setFlavor('Vanilla')}>Vanilla</button>
                <button className={ flavor === 'Strawberry' ? 'selected' : '' } onClick={() => setFlavor('Strawberry')}>Strawberry</button>
            </div>
            <h3>Color Theme</h3>
            <div className='themeChange'>
                <button className={ theme === 'light' ? 'selected' : '' } onClick={() => setTheme('light')}>Light</button>
                <button className={ theme === 'dark' ? 'selected' : '' } onClick={() => setTheme('dark')}>Dark</button>
            </div>
            <h3>Font Size</h3>
            <div className='fontChange'>
                <button onClick={() =>setFont(font-1)}>Down</button>
                {font}
                <button onClick={() => setFont(font+1)}>Up</button>
            </div>
        </div>
    );
};

export default AdDesigner;