import React, { useState } from 'react';
function Reactions({isDarkMode}) {
    //1- contador de likes
    const [likes,setLikes] = useState(0);
    //2- contador de me encanta
    const [loves,setLoves] = useState(0);
    //3- contador de dislike
    const [dislike,setDislikes] = useState(0);
    //4- contador de me enoja
    const [displease,setDisplease] = useState(0);


    //incrementamos los me gusta
    const handleLikes = () =>{
        setLikes(likes + 1);
    }
    //incrementamos los me encanta
    const handleLoves = () =>{
        setLoves(loves + 1);
    }
    //incrementamos los dislikes
    const handleDislikes = () =>{
        setDislikes(dislike+1)
    }

    //incrementamos los me enoja
    const handleDisplease = () =>{
        setDisplease(displease+1)
    }
    return (
        <div className={`app ${isDarkMode? 'dark': 'light'}`}>
            <div>
                <button onClick={handleLikes}>{likes} {likes ===1? 'Like': 'Likes'}</button>
            </div>
            <div>
                <button onClick={handleLoves}>{loves} {loves ===1? 'Love': 'Loves'}</button>
            </div>
            <div>
                <button onClick={handleDislikes}>{dislike} {dislike ===1? 'Dislike': 'Dislikes'}</button>
            </div>
            <div>
                <button onClick={handleDisplease}>{displease} {displease ===1? 'Displeasure': 'Displeasures'}</button>
            </div>
        </div>
      
    );
}

export default Reactions;