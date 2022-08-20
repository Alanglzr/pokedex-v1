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
      <div className="row">
      <h1>Generación</h1>
      {
        generations.map((generation, index) => {

            return(
                  <h2 className="card col-3 text-uppercase" key={index}>
                    <Link to={`lista-pokemon/${index+1}`} 
                    style={{ color: '	#000000', textDecoration: 'none' }}>{generation.name}</Link>
                  </h2>

            )
        })
      }
      </div>
    </div>
  );
};

export default Home;
