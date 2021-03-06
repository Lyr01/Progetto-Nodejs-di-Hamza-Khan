import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from 'axios';
import './Upload.css';

function Upload() {

    const [image, setImage] = useState([]);

    let history = useHistory();

    const schema = yup.object().shape({
        nome: yup.string().required(),
        cognome: yup.string().required(),
        title: yup.string().required(),
        citta: yup.string().required(),
        image: yup.string(),
        descrizione: yup.string().required(),
        indirizzo: yup.string().min(5).required(),
    })

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files;
        console.log(file.length)
        if (file.length > 5){
            alert("Please select max 5 files.");
            e.preventDefault();
        }
        else {
            setImage(file);
            alert("image selected");
        }
      };

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("nome", data.nome);
        formData.append("cognome", data.cognome);
        formData.append("title", data.title);
        formData.append("citta", data.citta);
        for (let i = 0; i < image.length; i++) {
            formData.append('image', image[i]);
          }
        formData.append("descrizione", data.descrizione);
        formData.append("indirizzo", data.indirizzo);

        if (image.length !== 0 && image.length <= 5) {
            axios.post("http://localhost:8080/api/places", formData)
            .then((res)=>{
                history.push("/post");
            })
            history.push("/loading");

        } else {
            alert("Insert Image or Please select max 5 files.")
        }
      };

      const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
      });

    return (
        <div className="createForm">
            <form  method="post" encType="multipart/form-data" className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                <label>Nome:</label>
                <p> {errors.nome?.message} </p>
                <input id="inputCreatePost" 
                type="text" 
                name="nome"
                autoComplete="off" 
                {...register('nome')}
                />

                <label>Cognome:</label>
                <p> {errors.cognome?.message} </p>
                <input id="inputCreatePost" 
                type="text" 
                name="cognome" 
                autoComplete="off" 
                {...register('cognome')}
                />

                <label>Titolo:</label>
                <p> {errors.title?.message} </p>
                <input id="inputCreatePost" 
                type="text" 
                name="title" 
                autoComplete="off" 
                {...register('title')}
                />

                <label>Citt??:</label>
                <p> {errors.citta?.message} </p>
                <input 
                id="inputCreatePost" 
                type="text" 
                name="citta" 
                autoComplete="off" 
                {...register('citta')}
                />

                <label>Imaggine:</label>
                <input 
                type="file"
                accept="image/png, image/gif, image/jpeg" 
                name="image"
                onChange={handleFileInput}
                multiple
                />

                <label>Descrizione:</label>
                <p> {errors.descrizione?.message} </p>
                <input id="inputCreatePost" 
                type="textarea" 
                name="descrizione" 
                autoComplete="off" 
                {...register('descrizione')}
                />  

                <label>Indirizzo:</label>
                <p> {errors.indirizzo?.message} </p>
                <input 
                id="inputCreatePost" 
                type="text" 
                name="indirizzo"  
                autoComplete="off" 
                {...register('indirizzo')}
                />
                
                <button type="submit">Invia</button>
            </form>
        </div>
    )
}

export default Upload
