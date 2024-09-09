import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import UpdateTrajet from '../UpdateTrajet/UpdateTrajet';


function FetchOneTrajet() {

    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    const [trajet, setTrajet] = useState({});

    useEffect(() =>{
        // axios.get('http://localhost:5000/trajet/'+params.id)
        axios.get(`http://localhost:5000/trajet/${params.id}`)
        .then((response) =>{
            setLoading(false);
            setTrajet(response.data);
            setError('')
        })
        .catch((error) =>{
            setLoading(false);
            setTrajet({});
            setError(error.message);
        })
    }, [])

  return (
    <div>
        <h1>{loading ? "Loading...." : trajet.compagnie}</h1>
        <h1>{loading ? "Loading...." : trajet.villeDepart}</h1>
        <h1>{loading ? "Loading...." : trajet.villeArrivee}</h1>
        <p>{loading ? "Loading...." : trajet.dateDepart}</p>
        <p>{loading ? "Loading...." : trajet.dateArrivee}</p>
        <p>{loading ? "Loading...." : trajet.prix}</p>

        <UpdateTrajet trajet={trajet} />
    </div>
  )
}
export default FetchOneTrajet