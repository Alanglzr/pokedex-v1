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

        return (
        <div className="container d-flex">
            
          <div className="col-6">
            <h2 className="text-capitalize ">
            #{ pokemon.id }
            - { pokemon.name }
            </h2>
        
            <div className="d-flex">
                {
                pokemon.types?.map( type =>{
                    return(
                    <div className="card col-2 text-center fw-bold text-uppercase">
                        { type.type.name }
                    </div>)
            })
            }
            </div>
            <div>    
            {pokemon.sprites ? (
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} height="250" width="250" className="img-thumbnail border border-dark"  />
            ) : ( 
            null
        )
       }
            </div>
        </div>

        <div className="col-6">
            <button class="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#boton1" aria-expanded="false" aria-controls="boton1">
                Habilidades
            </button> <br/>
            <div class="collapse" id="boton1">
                <div class="card card-body">
                    { pokemon.abilities?.map( ability => {
                        return(
                            <div className="text-capitalize">
                                { ability.ability.name } 
                            </div>
                        )
                    }) }
                </div>
            </div>

            <button class="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#boton2" aria-expanded="false" aria-controls="boton2">
                Movimientos
            </button><br/>
            <div class="collapse" id="boton2">
                <div class="card card-body">
                    { pokemon.moves?.slice(0, 4).map( move => {
                        return(
                            <div className="text-capitalize">
                                { move.move.name }
                            </div>
                        )
                    })}
                </div>
            </div>

            <button class="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#boton3" aria-expanded="false" aria-controls="boton3">
                Estadisticas
            </button>
            <div class="collapse" id="boton3">
                <div class="card card-body">
                    { pokemon.stats?.map( stat => {
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