
import { IonButton, IonIcon } from '@ionic/react';
import { add, starOutline,star } from 'ionicons/icons';
import React, { useEffect, useState } from 'react'; 
import { Link, useHistory } from 'react-router-dom';
import '../../assets/css/publication.css';


import Carousel from './Carousel';

export default function Publication({marque,modele,auteur,image,mine,titre,date,id_pub}) {
    const router = useHistory();
    // const [fav,setFav] = useState(isFav);
    const [icon_src,setIcon_src] = useState(starOutline);
    const etat = 1;

    const link_det = "/details_annonce/"+id_pub;
    function date_annonce(date){
        const dt = new Date(date);
        return dt.toLocaleString();
    }

    useEffect(()=>{
        // if (fav==true) {
        //     setIcon_src(star);
        // }else{
        //     setIcon_src(starOutline);
        // }
    });

    function perform() {
        
        // if (fav==false) {
        //     add_favorite();
        //     setIcon_src(star);
        //     // setFav(true);

        // }else{
        //     remove_favorite();
        //     setIcon_src(starOutline);
        //     // setFav(false);
        // } 
    }

    return (
        
<a href={link_det}   >
    <div className="card" style={{marginTop:"20px"}} >
        <div className="card-image">
        <Carousel image={image}/>
        </div>
        <div className="category"> {marque} - {titre}</div>
        {mine===true ?(

        <div className='pub_footer'>
            <div className="heading"> 
                {modele}
                <div className="author"> 
                <span className="name">Etat :</span>
                {etat===10 && (
                     
                    <span style={{fontSize:'small'}}>Validée</span>
                )}
                    
                </div>
            </div>
            {/* {etat===1 &&(
                <div className="button_vendre">
                <a href="/vente/1">
                    <IonButton>
                        vendre
                    </IonButton> 
                </a>
            </div>
            )} */}
        </div>
        ):(
            <div className='pub_footer'>
            <div className="heading">
                {modele}
                <div className="name"> Auteur : <span className="author">{auteur}</span></div>
            </div>
            <div className="heading">
                
                <div className="name"> Publié le : <span className="author"> {date_annonce(date)}</span></div>
            </div>
            {/* <div className="favorite">
                <button onClick={()=>{perform()}} style={{backgroundColor:'transparent'}}>
                <IonIcon  className='favorite_icon' icon={icon_src} />
                </button>
                
            </div> */}
        </div>
        )}
    </div>
</a>
    );
}


        