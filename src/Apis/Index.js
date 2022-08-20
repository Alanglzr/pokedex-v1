export const apiGeneration = async (id = "")=> {
    const res = await fetch("https://pokeapi.co/api/v2/generation/"+id);
    return await res.json();
}

export const apiSpecie = async (id = "")=> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await res.json();
}

export const apiDescripcion = async (id = "")=> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    return await res.json();
}