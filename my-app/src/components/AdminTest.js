import React, { Component } from 'react'

class AdminTest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isAdmin : false
      }
    }

  render() {

    return this.state.isAdmin ? <div><button>Edit</button></div> : <div>Veuillez vous connecter en temps qu'Admin</div>
  }
}

export default AdminTest    