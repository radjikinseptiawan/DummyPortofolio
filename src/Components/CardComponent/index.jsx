/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import './card.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function CardComponent({imageCard,titleCard,techCard,keyId}){
   
   useEffect(()=>{
    Aos.init({
        duration:1000,
        easing:'ease-in-out',
        once:false
    });
   },[])
   return(<>
    <div className="card-box" data-aos = 'fade-up' key={keyId}>
        <div className='card-img'>
        <img src={imageCard}></img>
        </div>
        
        <div>
        <h2>{titleCard}</h2>
        <p>{techCard}</p>
        </div>

        <div className='card-button'>
        <button>View</button>
        <button>Source Code</button>
        </div>
    </div>
    </>)
}