import { React, useEffect, useState } from "react";
import { apiSpecie } from "../Apis/Index";
import { Link, useSearchParams } from "react-router-dom";


const Pokemon = () => {
  const [species, setSpecies] = useState([]);

  async function fetch(){
    const values = await apiSpecie();

    console.log('====================================');
    console.log(values.results);
    setSpecies(values.results)
    console.log('====================================');
    }

  useEffect(()=>{
   
    fetch();
    
  },[]);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "";

  const handleFilter = (e) => { 
    setSearchParams({filter: e.target.value});
  };

  return (
    <div className="container">
      <h1>Pokemon</h1>
      <input value={filter} onChange={handleFilter} type="text" placeholder="Busqueda" />
      {
        species.filter(specie => {
          if (!filter) return true;
          const name = specie.name.toLowerCase();
          return name.includes(filter.toLocaleLowerCase())

        }).map((specie, index) => {

            return(
                <h2 key={index}>
                  <Link to={index.toString()}>{specie.name}</Link>
                </h2>
            )
        })
      }
    </div>
  );
};

export default Pokemon;