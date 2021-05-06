import React, { Component } from "react";

function Card(props){
    return(
    <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:"100%"}} />
        <div className="container">
            <h4>
            <b>{props.name}</b>
            </h4>
            <p>{props.job}</p>
        </div>
    </div>
    );
}

export default Card;