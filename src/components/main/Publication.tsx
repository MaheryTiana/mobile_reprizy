
import { IonButton, IonIcon } from '@ionic/react';
import { add, starOutline,star } from 'ionicons/icons';
import React, { useEffect, useState } from 'react'; 
import '../../assets/css/publication.css';


import Carousel from './Carousel';

export default function Publication({marque,modele,auteur,image,isFav}) {

    const [fav,setFav] = useState(isFav);
    const [icon_src,setIcon_src] = useState(starOutline);

    function add_favorite() {
        
    }
    function remove_favorite() {
        
    }

    useEffect(()=>{
        if (fav==true) {
            setIcon_src(star);
        }else{
            setIcon_src(starOutline);
        }
    });

    function perform() {
        
        if (fav==false) {
            add_favorite();
            setIcon_src(star);
            setFav(true);

        }else{
            remove_favorite();
            setIcon_src(starOutline);
            setFav(false);
        }
      
    }
    return (

    <div className="card" style={{marginTop:"20px"}}>
        <div className="card-image">
        <Carousel image={image}/>
        </div>
        <div className="category"> {marque}</div>
        <div className='pub_footer'>
            <div className="heading">{modele}
                <div className="author"> Auteur : <span className="name">{auteur}</span></div>
            </div>
            <div className="favorite">
                <button onClick={()=>{perform()}} style={{backgroundColor:'transparent'}}>
                <IonIcon  className='favorite_icon' icon={icon_src} />
                </button>
                
            </div>
        </div>
    </div>
    
    );
}


        