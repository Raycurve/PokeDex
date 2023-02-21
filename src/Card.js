import { useEffect, useState } from 'react';
import './App.css';

export default function Card({val,ur}){
    const [dat,setDat] =useState({});
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch(ur)
        .then((res)=>res.json())
        .then((data)=>{
            setDat(data);
            // console.log(data.id);
            setLoading(false)
        })
},[val,ur])
   

    return(
        <div className="maincard">
            <div className='Main-ca'>
            <div className="artboard">
                    <div className="card">
                        <div className="card__side card__side--back">
                        <div className="card__cover">
                            <h4 className="card__heading">
                            <span className="card__heading-span">Skill Set</span>
                            </h4>
                        </div>
                        <div className="card__details">
                            {!loading? 
                                <ul>
                                    <li style={{ textTransform: 'uppercase'}}>Name: {dat.name}</li>
                                    <li>ID: {dat.id}</li>
                                    <li>HP: {dat.stats[0].base_stat}</li>
                                    <li>Attack: {dat.stats[1].base_stat}</li>
                                    <li>Defense: {dat.stats[2].base_stat}</li>
                                    <li>Type: {dat.types[0].type.name}</li>
                                    
                                </ul>
                                : <div>Loading...</div>
                        
                        }
                            
                        </div>
                        </div>
                        <div className="card__side card__side--front"  > 
                 <div className='Ima'  style={!loading ? {backgroundImage: `url(${dat.sprites.other.dream_world.front_default})`} : {backgroundImage:    `url('https://media.baamboozle.com/uploads/images/125978/1629738053_29014_gif-url.gif')` }}></div>

                        <div className="card__theme">
                            <div className="card__theme-box">
                            {/* <p className="card__subject">Web Developer</p> */}
                            <p className="card__title">{dat.name}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>


            </div>
            {/* <p className='cardText'>{val}</p>
            <p className='cardText'>{dat.id}</p>
            {/* <p className='cardText'>{dat.sprites.front_default}</p> */}
            {/* {loading ? <div>Loading...</div> : <img src={dat.sprites.front_default} alt='im'/>} */} 
        </div>
    )
}