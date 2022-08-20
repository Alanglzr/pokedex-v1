import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiGeneration } from "../Apis/Index";

export function Generation() {
    let { generationId } = useParams();
    const [generacion, setGeneracion] = useState([]);
    async function fetchGen(id){
        
        const values = await apiGeneration(id);
        
        console.log('====================================');
            console.log(values);
            setGeneracion(values);
        console.log('====================================');
        }

    useEffect(()=>{
        console.log(generationId);
        fetchGen(generationId)
    },[])

    const numero = (generaciones)=>{
        let arr = generaciones.url.split('/').slice(6).join('');
        return arr
    }

        return (
            <div className="container">
                <div className="row">
                    <h1 className="text-capitalize">{generacion.main_region?.name}</h1>
                {
        generacion.pokemon_species && generacion.pokemon_species.map((generaciones, index) => {
            return(
                  <h2 className="card col-3 text-capitalize" key={index}>
                    N°{numero(generaciones)}<Link to={`../../pokemon/${numero(generaciones)}`} 
                    style={{ color: '	#000000', textDecoration: 'none' }}>{generaciones.name} {generaciones.id}</Link>
                  </h2>
            )
        })
      }
                </div>
            </div>
    )
 }