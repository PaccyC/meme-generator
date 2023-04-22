import React from "react";
import memesData from "../memesData";
import { useState } from "react";

const Form=()=>{

    const[ meme,setMeme]=useState({
      topText:"",
      bottomText:"",
      randomImage:"http://i.imgflip.com/1bij.jpg"
    }
    )
    const [allMemeImages,setAllMemeIamges]=useState(memesData);
    
   function getMemeImage() {
       const memesArray = allMemeImages.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)
       const url=memesArray[randomNumber].url
       setMeme((prevMeme)=>{
         return {
            ...prevMeme,
            randomImage:url
         }
       })
    
   }
   
   return (
       <main>
           <div className="form">
               <input 
                   type="text"
                   placeholder="Top text"
                   className="form--input"
               />
               <input 
                   type="text"
                   placeholder="Bottom text"
                   className="form--input"
               />
               <button 
                   className="form--button"
                   onClick={getMemeImage}
               >
                   Get a new meme image 🖼
               </button>
           </div>
           <img src={meme.randomImage} className="meme--image" />

           </main>
    )
}
export default Form;