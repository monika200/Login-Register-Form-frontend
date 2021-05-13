import React from 'react'
import {  useHistory } from 'react-router-dom';
function Start() {
    const history = useHistory();
    return (
        <div className="container">
            <h1 className="text-center">Please Login to start Learning!!!!!</h1>
             
            <button className="bg-success" onClick={() => {
                            history.push('/login');
                            // this.refreshPage();
                        }}>Login</button>
            
        </div>
    )
}

export default Start
