import React,{useState,useEffect} from 'react';

function RickAndMortyV1() {
    const [character,setCharacter] = useState(null);
    const [onLoading,setLoading] = useState(true)

    useEffect(()=>{
        const fecthCharacter= async () =>{
        //aca es donde vamos a hacer la llamada al api
        try {
            const response= await fetch('https://rickandmortyapi.com/api/character/');
            const data = await response.json();
            const random =Math.floor(Math.random() * data.results.length)
            setCharacter(data.results[random])
            setLoading(false)
        } catch (error) {
            console.error('Error fetching the data', error);
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

export default RickAndMortyV1;