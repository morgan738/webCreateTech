import React from "react";

export default class Loading extends React.Component{

    render(){
        return(
            <div className='container'>
                <div className='centered loadFade-in'>
                    <h1 className='color'> Loading... </h1>
                        <img src = 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' className='loading'/>
                </div>
            </div>
        )
    }
}