import React,{useState,useEffect} from 'react';
import { fetchRandomCharacter } from './api';
function RickAndMortyV2() {
    const [character,setCharacter] = useState(null);
    const [onLoading,setLoading] = useState(true)

    useEffect(()=>{
        const fecthCharacter= async () =>{
            try {
                //llamar aqui al api
                const randomCharacter = await fetchRandomCharacter();
                setCharacter(randomCharacter)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
            
        };
        fecthCharacter();
    },[])

    return (
        <div>
                <h1>Personaje de Rick and Morty</h1>
                {onLoading ? (<p>Cargando los personajes...</p>
                ):(
                    <div>
                    <h2>{character.name}</h2>
                    <img src={character.image}
                     alt={character.name}
                     style={{maxWidth:'200px', minHeight:'200px'}}   
                     />
                    </div>
                )
                }
        </div>
      );
}

export default RickAndMortyV2;