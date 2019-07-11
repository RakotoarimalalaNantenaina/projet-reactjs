import React, { useState } from 'react'
import './App.css';


const Calcul = props => {
	const initialFormState = { id: null, a: '', b: '', c: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
  }

  const delta = () => {
    var inseredelta = document.getElementById('a')// id de delta
    var x1 = document.getElementById('x1')
    var x2 = document.getElementById('x2')
    var positif = document.getElementById('solutionpositif')
    var affichedelta =  document.getElementById('delta')
    var afficheracinedelta = document.getElementById('racinedelta')


    var entiera = parseInt(user.a)//l'indice a
    var entierb = parseInt(user.b)//l'indice b  
    var entierc = parseInt(user.c)//l'indice c

    if(entiera===0){
      x1.innerHTML = ""
      x2.innerHTML = ""
      affichedelta.innerHTML = "" 
      afficheracinedelta.innerHTML = "" 
      positif.innerHTML =""                                                             
      inseredelta.innerHTML = "<span id='premierdegree'>L'équation devient une équation du premier degrée</span><br>"+
                              "<span id='entierb'>"+entierb+"</span> x + <span id='entierc'>" + entierc +"</span> = 0"
    }
    else{
   
    var delta = Math.pow(entierb,2) - 4 * ((entiera)* (entierc))// calcul delta

    inseredelta.innerHTML = delta //inserer le delta
      

    if(delta<0){
      inseredelta.innerHTML = "<span id='negatif'>Δ est négatif donc <br>la solution est vide <br> S = { }</span>"
      x1.innerHTML = ""
      x2.innerHTML = "" 
      positif.innerHTML ="" 
      affichedelta.innerHTML = "" 
      afficheracinedelta.innerHTML = "" 
    }
    else if(delta===0){
       x1.innerHTML = ""
       x2.innerHTML = ""
       positif.innerHTML =""
       affichedelta.innerHTML = "" 
       afficheracinedelta.innerHTML = "" 
      var doublesolution = - entierb / (2 * entiera) 
      affichedelta.innerHTML = "Δ = "+delta + "<br>"
      inseredelta.innerHTML =  "<span id=\"doublesolution\">Une Solution Unique<br> x<sub>1</sub>  = "+doublesolution+"<br> S = { " + doublesolution + " }</span>"
    }
    else{
      var zonetext1 = document.getElementById('zonetext1')
      var zonetext2 = document.getElementById('zonetext2')
      var zonetext3 = document.getElementById('zonetext3')

      var erreur = document.getElementById('erreur')
      var erreur1 = document.getElementById('erreur1')
      var erreur2 = document.getElementById('erreur2')
      inseredelta.innerHTML = ""
        x1.innerHTML = ""
        x2.innerHTML = ""
        positif.innerHTML =""
        affichedelta.innerHTML = "" 
        afficheracinedelta.innerHTML = ""

      if(zonetext1.value === ""){
        var vide = document.getElementById('a')
        vide.innerHTML = ""
        if(zonetext2.value === ""){
          erreur.innerHTML = "Veuillez remplir le champ 1"
        }
        if(zonetext3.value === ""){   
          erreur1.innerHTML = "Veuillez remplir le champ 2"
        }
        if(zonetext3.value === ""){   
          erreur2.innerHTML = "Veuillez remplir le champ 3"
        }

      }

      else{
      
      var racinedelta = Math.sqrt(delta) // calcul racinedelta
      var xprime = (-(entierb) + racinedelta) / (2 * entiera)
      var xsecond = (-(entierb) - racinedelta) / (2 * entiera)


      affichedelta.innerHTML = "Δ = <span id='spandelta'>"+delta + "</span><br>"
      afficheracinedelta.innerHTML = "√Δ = <span id='spandelta'>"+racinedelta + "</span><br>"
      inseredelta.innerHTML = "<span id=\"deuxracine\">Deux racines  distincts x<sub>1</sub>,x<sub>2</sub><br></span>"
      x1.innerHTML = "x<sub>1</sub> = " + xprime
      x2.innerHTML = "x<sub>2</sub> = " + xsecond + "<br>"
      positif.innerHTML = "<span id='solution'>S = { "+ xprime + " , " + xsecond + " }</span>"

      }

    }
  }
}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
        if (!user.a || !user.b || !user.c) return

        var inseredelta = document.getElementById('a')// id de delta
        var x1 = document.getElementById('x1')
        var x2 = document.getElementById('x2')
        var erreur = document.getElementById('erreur')
        var erreur1 = document.getElementById('erreur1')
        var erreur2 = document.getElementById('erreur2')
        var positif = document.getElementById('solutionpositif')

        if(isNaN(user.a)){
          erreur.innerHTML = 'Entrer un nombre'
          inseredelta.innerHTML = ""
          x1.innerHTML = ""
          x2.innerHTML =""
          positif.innerHTML = ""
          
        }
        else if(isNaN(user.b)){
          erreur1.innerHTML = 'Entrer un nombre'
          inseredelta.innerHTML = ""
          x1.innerHTML = ""
          x2.innerHTML =""
          positif.innerHTML = ""
        }
        else if(isNaN(user.c)){
          erreur2.innerHTML = 'Entrer un nombre'
          inseredelta.innerHTML = ""
          x1.innerHTML = ""
          x2.innerHTML =""
          positif.innerHTML = ""
        }
      else{
					var yes = document.getElementById('erreur')
          yes.innerHTML = "";
          var err1 = document.getElementById('erreur1')
          err1.innerHTML = "";
          var err2 = document.getElementById('erreur2')
          err2.innerHTML = "";
					props.addUser(user)
          setUser(initialFormState)	        
			}
			}}
		>	

          <table>
            <tbody>
              <tr>
                <td><label id="nom"><span id="indicea">Indice a</span> &nbsp;&nbsp;</label></td>
                <td><input id="zonetext1" type="text" name="a" value={user.a} onChange={handleInputChange} required/>
                <p id="erreur"></p>
                </td>
              </tr>
              <tr>
                <td><label id="nom"><span id="indicea">Indice b</span> </label></td>
                <td><input id="zonetext2"type="text" name="b" value={user.b} onChange={handleInputChange} required/>
                <p id="erreur1"></p>
                </td>
              </tr>
              <tr>
                <td><label id="nom"><span id="indicea">indice c</span> </label></td>
                <td><input type="text" id="zonetext3"  name="c" value={user.c} onChange={handleInputChange} required/>
                <p id="erreur2"></p>
                </td>
              </tr>
            </tbody>
            </table>
            <button id="boutton" type="submit" onClick={() => {delta()}} className="btn btn-primary btn-lg">Calculer</button><br/><br/>
            <h4 id="delta"></h4>
            <h4 id="racinedelta"></h4>
            <h4 id="a"></h4>
            <h6 id="x1"></h6>
            <h6 id="x2"></h6>
            <h6 id="solutionpositif"></h6>
    
		</form>

	)
}	
export default Calcul;