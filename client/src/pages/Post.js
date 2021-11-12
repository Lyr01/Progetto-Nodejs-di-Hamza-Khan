import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './Post.css'

function Post() {
    
    const [listOfPlaces, setListOfPlaces] = useState([]);

    let history = useHistory();
    
    useEffect(() => {
        axios.get("http://localhost:8080/api/places").then((response) => {
          setListOfPlaces(response.data);
        });
      }, []);




    return (
        <div>
            {listOfPlaces.map((value, key) => {
                return (
                    <div className="post" key={value.id} onClick={() => {history.push(`/post/${value.id}`)}}>
                        <div className="title">{value.title}</div>
                        <div className="citta">Città: {value.citta}</div>
                        <div className="image">
                            <img src={`http://localhost:8080/images/${value.Images[0].image}`} alt="img"></img>
                        </div>
                        <div className="descrizione">{value.descrizione}</div>
                        <div className="indirizzo">Indirizzo: {value.indirizzo}</div>
                        <div className="footer">{value.nome} {value.cognome}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Post
