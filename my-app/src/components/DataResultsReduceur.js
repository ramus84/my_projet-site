import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import './DataResultsReducer.css'
function DataResultsReducer() {
    const initialState = {
        loading: true,
        error: '',
        utilisateurs : {}
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS' :
                return{
                    loading: false,
                    utilisateurs: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR' :
                return{
                    loading: false,
                    utilisateurs: {},
                    error: "Something went wrong"
                }
            default :
                return state;
        }   
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() =>{
        axios.get('https://randomutilisateur.me/api/?results=60')
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data.results})
        })
        .catch(error =>{
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])

  return (
    <section className="grille">

        {state.loading ? 'Loading' : state.utilisateur.map((utilisateur, index)=>{
            return(
                <div key={index} className='border'>
                    <img src={utilisateur.picture.large} />
                    <h1>{utilisateur.name.title}. {utilisateur.name.first} {utilisateur.name.last}</h1>
                    <h2>{utilisateur.login.username}</h2>
                    <h2>{utilisateur.email}</h2>
                    <h2>{utilisateur.nat}</h2>
                    <h2>{utilisateur.location.city}, {utilisateur.location.country}</h2>
                </div>
            )
        })}

    </section>
  )
}

export default DataResultsReducer