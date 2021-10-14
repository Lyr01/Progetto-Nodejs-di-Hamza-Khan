import React,{useEffect, useState} from 'react'
import axios from 'axios';
import './Post.css'
import Loading from '../components/Loading/Loading';
import { boolean } from 'yup/lib/locale';

function Post() {
    
    const [listOfPlaces, setListOfPlaces] = useState([]);
    const [loading, setLoading] = useState(boolean);


    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:8080/upload").then((response) => {
          setListOfPlaces(response.data);
          setLoading(false)
        });
      }, []);
    return (
        <div>
            {loading?<Loading />:listOfPlaces.map((value, key) => {
                return (
                    <div className="post" key={value.id}>
                        <div className="title">{value.title}</div>
                        <div className="citta">Città: {value.citta}</div>
                        <div className="image"><img src={`http://localhost:8080/images/${value.image}`} alt="img"></img></div>
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
