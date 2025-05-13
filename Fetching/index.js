const fetchData = async () => {
    try{
        const pokemonName = document.getElementById("pokemonName").ariaValueMax.toLowerCase();
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");
        if(!response.ok){
            throw new Error("Could not fetch data");
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error.status)
    }
}

fetchData();