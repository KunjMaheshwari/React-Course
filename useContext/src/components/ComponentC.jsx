import React, {useContext} from 'react';
import { UserContext } from './ComponentA';

function ComponentC(){

    const user = useContext(UserContext);
    return (
        <div className="box">
            <h1>Component C</h1>
            <p>{`Byee ${user}`}</p>
        </div>
    )
}

export default ComponentC;