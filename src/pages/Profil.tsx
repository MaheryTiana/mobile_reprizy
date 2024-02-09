import { IonContent, IonItem, IonList, IonPage } from '@ionic/react';
import  mercedes from "../assets/images/mercedes.jpg";
import {My_header} from "../components/include/My_header";
import  "../assets/css/profil.css";
import { useEffect, useState } from 'react';
const Profil: React.FC = () => {
    
    
    

    const [nbr_annonce,setNbr_annonce] = useState(0);
    const [nbr_vente,setNbr_vente] = useState(0);
    const  [email,setEmail] = useState("");
    const [image,setImage] = useState("");

    // const nbr_favoris = 5;

    useEffect(()=>{
        var user_str = localStorage.getItem('user');
        console.log(user_str);
        var user = JSON.parse(user_str);
        setEmail(user.prenom + " "+user.nom);
        setImage(user.image);
        if (user.annonce) {
            setNbr_annonce(user.annonce);
            
        }
    
        if (user.vente) {
            setNbr_vente(user.vente);
            
        }
    });

    // const email = user.prenom + " "+user.nom;
    // const image = user.image;
    return (
        <IonPage>
            <My_header titre="Mon Profil"></My_header>
            <IonContent fullscreen>
                
                <div className='profil_card'>
                    <br/>
                    <center>
                        <div className="pdp_container">                                
                            <img src={image} alt="PROFIL" />                      
                        </div>
                        <div className="profil_name">                                
                            <p>{email}</p>                 
                        </div>
                        
                    </center>

                    <div className='profil_container'>
                        <div className='profil_content'>
                            <center>
                                <h4>{nbr_annonce}</h4>
                                <p>Annonces</p>
                            </center>
                        </div>
                        <div className='profil_content'>
                            <center>
                                <h4>{nbr_vente}</h4>
                                <p>Ventes</p>
                            </center>
                        </div>
                        {/* <div className='profil_content'>
                            <center>
                                <h4>{nbr_favoris}</h4>
                                <p>Favoris</p>
                            </center>
                        </div> */}
                    </div>
                </div>
                        
                
            </IonContent>
        </IonPage>
      );
    };
    

export default Profil;
