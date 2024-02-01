import { IonContent, IonItem, IonList, IonPage } from '@ionic/react';
import  mercedes from "../assets/images/mercedes.jpg";
import {My_header} from "../components/include/My_header";
import  "../assets/css/profil.css";
const Profil: React.FC = () => {
    
    const nbr_annonce = 20;
    const nbr_favoris = 5;
    const nbr_vente = 2;
    const email = 'max@gmail.com';
    const image = mercedes;
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
                        <div className='profil_content'>
                            <center>
                                <h4>{nbr_favoris}</h4>
                                <p>Favoris</p>
                            </center>
                        </div>
                    </div>
                </div>
                        
                
            </IonContent>
        </IonPage>
      );
    };
    

export default Profil;
