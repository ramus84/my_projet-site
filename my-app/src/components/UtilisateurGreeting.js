import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
         message: 'Welcome Guest'
      }
    }

    updateNom(){
        this.setState({
            // message : "Welcom Utiliateur"
            isLoggedIn: true
        })
    }
  render() {
        
            let result;
            if(this.state.isLoggedIn){
                result = <div>Welcome Fréd </div>
            }
            else{
                result = <div>Welcome Guest <button onClick={()=>this.updateNom()}>Se connecter</button></div>
            }
            
            return <div>{result}</div>
  }
}

export default UserGreeting