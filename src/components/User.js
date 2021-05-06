import React, { Component } from "react";

class User extends Component {
    render(){
        return(
            <p>This is a <i><b>class</b></i> component.</p>
        );
    }
}

/*Başka componentlerin içinde yeniden kullanmak için export edilmeli*/
export default User;