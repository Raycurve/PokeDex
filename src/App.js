
import './App.css';
import Card from './Card.js';
import React,{ useEffect, useState } from 'react';

export default function App() {
  
    // let O=0;
    const [inf,setinf] = useState([]);
    const [off,setOff] = useState(0);
    const [Loading, setLoad] = useState(true);
    
    const [O,setO] = useState(0);
    const FetchDa=React.useCallback(({O})=>{
      setOff(off+O);
      // console.log("loda"+off);
      // console.log("yay"+`https://pokeapi.co/api/v2/pokemon?offset=${off}&limit=24`);
      
      setLoad(true);
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${O}&limit=24`)
      .then((res)=>res.json())
      .then((data)=>{
        setinf(data.results);
        console.log(data.results);
        console.log(`https://pokeapi.co/api/v2/pokemon?offset=${O}&limit=24`)
        setLoad(false);
      },[O])
    })

    useEffect(()=>{
      
      FetchDa({O});
    },[]);
    
  
  return (
    <>
    {Loading?<div className='Loader'><p className='zero'>h</p></div>:
    <div className='main'>
      {inf.map((inf)=>{
        return(
          <>
          <Card val={inf.name} ur={inf.url} />
          
          {/* <h4>{inf.name}</h4> */}
          </>
        )
      })}
    </div>
}

    <button onClick={()=>{
      setO(O-24)
      FetchDa({O})}}>Prev</button>
    <br />
    <button onClick={()=>{
      setO(O+24)
      FetchDa({O})}}>Next</button>
    
    {/* <br />
    <button >{off}</button> <br/>
    <button>`https://pokeapi.co/api/v2/pokemon?offset=${off}&limit=24`</button> */}
    </>
  );
}

