import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Calcul from './ajouter'//fichier qui ajoute le formulaire d'ajout de produit
import './App.css';
import { SocialIcon } from 'react-social-icons';

const App = () => {
  const usersData = [

  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>
        <center>EQUATION DU SECOND DEGREE<br />
          <span id="indice">a</span><span id="spanx">x</span><sup>2</sup><span id="spanx"> + </span><span id="indice">b</span><span id="spanx">x + </span><span id="indice">c</span><span id="spanx"> = 0</span><br />
          <span id="titre">Entrer les indices a , b et c pour voir la solution de l'equation.</span>
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
      <center>
        <footer>
          <SocialIcon url="https://mail.google.com/" />  <a href="#" id="gmail">naynah344@gmail.com</a><br />
          &nbsp;&nbsp;&nbsp; <SocialIcon url="https://facebook.com/" />  <a href="https://www.facebook.com/feno.tanteliniaina" id="gmail">Nantenaina Rakotoarimalala</a><br /><br/>
          Copyright@nantenaina 2019
          </footer>
      </center>
    </div>
  )
}

export default App