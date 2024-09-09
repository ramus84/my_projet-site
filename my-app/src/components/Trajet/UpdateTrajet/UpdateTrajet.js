import React from 'react'

function UpdateTrajet({trajet}) {
  return (
    <div>
        <form action={`http://localhost:5000/updatetrajet/${trajet._id}?_method=PUT`} method='post'>
            <label for="compagnie">compagnie</label>
            <input type="text" name="compagnie" defaultValue={trajet.compagnie}/>
            <label for="villeDepart">Ville de départ</label>
            <input type="text" name="villeDepart" defaultValue={trajet.villeDepart}/>
            <label for="villeArrivee"> d'arrivée :</label>
            <input type="text" name="villeArrivee" defaultValue={trajet.villeArrivee}/>
            <label for="dateDepart">Date de départ</label>
            <input type="date" name="dateDepart" defaultValue={trajet.dateDepart}/>
            <label for="dateArrivee">Date de d'arrivée</label>
            <input type="date" name="dateArrivee" defaultValue={trajet.dateArrivee}/>
            <label for="prix">Prix trajet</label> 
            <input type="date" name="prix" defaultValue={trajet.prix}/>


           
            

            <input type="submit" value="Mettre a jour le trajet"/>
        </form>

        <form action={`http://localhost:5000/deletetrajet/${trajet._id}?_method=DELETE`} method='post'>

            <input type='submit' value="Supprimer le trajet" />
        </form>

    </div>
  )
}

export default UpdateTrajet