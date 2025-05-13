const fetchData = async () => {
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");
        
    }
    catch(error){
        console.error(error.status)
    }
}