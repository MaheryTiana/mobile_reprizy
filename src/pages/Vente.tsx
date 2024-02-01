import { IonButton, IonContent, IonInput, IonItem, IonList, IonPage } from '@ionic/react';

import {My_header} from "../components/include/My_header";
import  "../assets/css/vente.css";
const Vente: React.FC = () => {

    return (
        <IonPage>
            <My_header titre=" Vente"></My_header>
          <IonContent fullscreen>
            
            <div className='vente_card'>
    
                <div className='vente_content'>
                    
                    <form action="/accueil" method="POST" style={{marginTop:'20px'}}>

                    <IonInput name="cin" className='vente_input' label="CIN" type="text" placeholder="tapez pour ecrire"></IonInput>

                    <IonInput name="prix" className='vente_input' label="Prix de Vente" type="text" placeholder="tapez pour ecrire"></IonInput>

                    <center style={{marginTop:'30px'}}>
                        <IonButton color={"tertiary"} routerLink="/accueil">Valider</IonButton>
                    </center>
                    
                    </form>
                
                </div>
    
            </div>
                      
            
          </IonContent>
        </IonPage>
      );
    };
    

export default Vente;
