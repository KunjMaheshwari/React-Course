import React, { useState, useEffect } from 'react';


function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() =>{
        window.addEventListener("resize", handleResize);

        return () => { //CLEAN UP Function.
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener removed.")
        }
    }, []);

    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`;
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>        
        </>
    )
}

export default MyComponent;