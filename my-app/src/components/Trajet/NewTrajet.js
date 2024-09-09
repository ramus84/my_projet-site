import React from 'react'

function NewTrajet() {
  return (

    <form action="http://localhost:5000/nouveautrajet" method="post">
        <label for="compagnie">compagnie</label>
        <input type="text" name="compagnie"/>
        <label for="villeDepart">Ville de départ</label>
        <input type="text" name="villeDepart"/>
        <label for="villeArrivee">Ville d'arrivée</label>
        <input type="text" name="villeArrivee" />
        <label for="dateDepart">Date de départ</label>
        <input type="date" name="dateDepart" />
        <label for="dateArrivee">Date d'arrivée</label>
        <input type="date" name="dateDepart" />
        <label for="prix">Prix du trajet</label>
        <input type="date" name="prix" />

        <input type="submit"/>
    </form>
  )
}

export default NewTrajet