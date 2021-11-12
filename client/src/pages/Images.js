import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './Images.css'

function Images() {
    const [listOfImages, setListOfImages] = useState([]); 
    const url = window.location.pathname 
    const id = url.split("/").pop();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/${id}`).then((response) => {
            setListOfImages(response.data);
            console.log(response.data)
        });
        }, [id]);   

        return (
            <div>
                {listOfImages.map((value, key) => {
                    return (
                        <div className="image" key={value.id}>
                            {console.log(value.image)}
                            <img src={`http://localhost:8080/images/${value.image}`} alt="img"></img>
                        </div>
                    )
                })}
            </div>
        )
    }

export default Images
