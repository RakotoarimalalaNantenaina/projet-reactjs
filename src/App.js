import React, { useState } from 'react' 
import 'bootstrap/dist/css/bootstrap.css';
import Calcul from './ajouter'//fichier qui ajoute le formulaire d'ajout de produit
import './App.css';

const App = () => {
  const usersData = [
    
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
		user.id = users.length
		setUsers([ ...users, user ])
  }

  return (
    <div className="container">
    <h1>
      <center>EQUATION DU SECOND DEGREE<br/>
        <span id="indice">a</span><span id="spanx">x</span><sup>2</sup><span id="spanx"> + </span><span id="indice">b</span><span id="spanx">x + </span><span id="indice">c</span><span id="spanx"> = 0</span>
      </center>
    </h1>
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">

      <center id="centrecalcul">
        <div className="flex-row" id="calcul">
          <div className="flex-large">
      
            <Calcul addUser={addUser} />
        
          </div><br></br>
        </div>
        </center> 
      </div>
      <div className="col-md-4"></div>
      </div>
    </div>
  )
}

export default App