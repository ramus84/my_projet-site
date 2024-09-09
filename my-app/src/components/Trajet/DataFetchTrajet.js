import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'

function DataFetchtrajet() {
    const initialState = {
        loading: true,
        error: '',
        trajets : {}
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    trajets: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    trajets: {},
                    error: "Something went wrong"
                }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('http://localhost:5000/alltrajets')
        .then((response) =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data});
        })
        .catch((error) =>{
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])


  return (
    <div>
        {state.loading ? 'Loading...' : state.trajet.map((trajet, index)=>{
            return(
                <div key={index}>
                <Link to={`/trajet/${trajet._id}`}>
                    <h1>{trajet.compagnie}</h1>
                </Link>
                    <h1>{trajet.villeDepart}</h1>
                    <p>{trajet.villeArrivee}</p>
                    <p>{trajet.prix}</p>
                </div>
            )
        })}
    </div>
  )
}

export default DataFetchtrajet