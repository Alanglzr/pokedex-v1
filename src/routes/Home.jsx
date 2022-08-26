import { React, useEffect, useState } from "react";
import { apiGeneration} from "../Apis/Index";
import { Link } from "react-router-dom";


const Home = () => {
  const [generations, setGenerations] = useState([]);

  async function fetch(){

    const values = await apiGeneration();
    
    console.log('====================================');
    console.log(values.results);
    setGenerations(values.results)
    console.log('====================================');
    }

  useEffect(()=>{
   
    fetch();
    
  },[]);

  return ( 
    <div className="container">
      <div className="container row">
      <h1>Generación</h1>
      {
        generations.map((generation, index) => {

            return(
                  <h3 className="card-title card col-12 col-md-4 col-xl-3 text-uppercase mx-1  d-flex justify-content-center" key={index}>
                    <Link to={`lista-pokemon/${index+1}`}>{generation.name}</Link>
                  </h3>

            )
        })
      }
      </div>
    </div>
  );
};

export default Home;
