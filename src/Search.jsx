import { useState } from "react";
import React from 'react';
import Gresult from "./Gresult";



const Search = () => {
    const [img, setImg]=useState();
    const inputEvent=(e)=>{
    const data= e.target.value;
    setImg(data);
    }
    return (
        <div className="center-align">
            <input type="text" placeholder="Search here"
            value={img}
            onChange={inputEvent}/>
            {img===""? null: <Gresult name={img}/>}
        </div>
    )
}
export  default Search;