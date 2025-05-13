const fetchData = async () => {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Could not fetch data");
        }
        const data = await response.json();
        const pokemonSprites = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprites;
        imgElement.style.display = "block"
    }
    catch(error){
        console.error(error.status)
    }
}

