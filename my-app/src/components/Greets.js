import React from "react";


function Greet({name, age, children}){

    return (
            <div>
            <h1>Hello {name} vous avez {age} !</h1>
            {children}
            </div>
    )
}

export default Greet;