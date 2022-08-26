import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiSpecie } from "../Apis/Index";

export function Detalles() {
    let { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState({}); 
    async function fetchApi(id){
        
        const values = await apiSpecie(id);
        
        console.log('====================================');
            console.log(values);
            setPokemon(values);
        console.log('====================================');
        }

    useEffect(()=>{
        console.log(pokemonId);
        fetchApi(pokemonId);
    },[])

    const colors = {
        fire: '#EE8130',
        grass: '#7AC74C',
        electric: '#F7D02C',
        water: '#6390F0',
        ground: '#E2BF65',
        rock: '#B6A136',
        fairy: '#D685AD',
        poison: '#A33EA1',
        bug: '#A6B91A',
        dragon: '#6F35FC',
        psychic: '#F95587',
        flying: '#A98FF3',
        fighting: '#C22E28',
        ghost: '#735797',
        normal: '#A8A77A',
        dark: '#705746',
        steel: '#B7B7CE',
        ice: '#96D9D6'
    }

        return (
        <div className="container d-flex flex-sm-row flex-column">
            
          <div className="col-12 col-sm-6 m-1">
            <h2 className="pokemon-title text-capitalize m-2 ">
            N°{ pokemon.id } <span></span>
            - { pokemon.name }
            </h2>
        
            <div className="d-flex justify-content-center">
                {
                pokemon.types && pokemon.types.map( type =>{
                    return(
                    <div className="card col-2 text-center fw-bold text-uppercase m-2" style = {{background: colors[type.type.name] }}>
                        { type.type.name }
                    </div>)
            })
            }
            </div>
            <div className="d-flex justify-content-center">    
            { pokemon.sprites ? (
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} height="250" width="250" className="img-thumbnail border border-dark m-2 "/>
            ) : ( 
            null
        )
       }
            </div>
        </div>

        <div className="col-12 col-sm-6 m-1">
            <button class="btn btn-dark w-100 my-3 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#boton1" aria-expanded="false" aria-controls="boton1">
                Habilidades
            </button> <br/>
            <div class="collapse" id="boton1">
                <div class="card card-body">
                    { pokemon.abilities && pokemon.abilities.map( ability => {
                        return(
                            <div className="text-capitalize">
                                { ability.ability.name } 
                            </div>
                        )
                    }) }
                </div>
            </div>

            <button class="btn btn-dark w-100 my-3 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#boton2" aria-expanded="false" aria-controls="boton2">
                Movimientos
            </button><br/>
            <div class="collapse" id="boton2">
                <div class="card card-body">
                    { pokemon.moves && pokemon.moves.slice(0, 4).map( move => {
                        return(
                            <div className="text-capitalize">
                                { move.move.name }
                            </div>
                        )
                    })}
                </div>
            </div>

            <button class="btn btn-dark w-100 my-3 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#boton3" aria-expanded="false" aria-controls="boton3">
                Estadisticas
            </button>
            <div class="collapse" id="boton3">
                <div class="card card-body">
                    { pokemon.stats && pokemon.stats.map( stat => {
                        return(
                            <div className="text-capitalize">
                                {stat.stat.name} <span></span>
                                {stat.base_stat}
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
     </div>
    )
}