export const fetchRandomCharacter = async () =>{
    try {
        const response= await fetch('https://rickandmortyapi.com/api/character/');
        const data = await response.json();
        const random =Math.floor(Math.random() * data.results.length)
        return(data.results[random])
    } catch (error) {
        console.error('Error fetching the data', error);
    }

}