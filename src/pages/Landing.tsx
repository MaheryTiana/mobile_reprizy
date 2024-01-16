    import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonInput, IonMenu, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar,withIonLifeCycle } from "@ionic/react";
    import  "../assets/css/Landing.css";

    import React from "react";
    import { Started } from "../components/Landing/Started";
    const Landing: React.FC = () =>{

        

        return(
            
            <IonPage  >

                <IonContent fullscreen ion-padding>

                <div className="landing_back-img">
                    <div className="landing_layer"></div>

                    <br />
                    <br />
                    <div className="one ">
                        <h1>Repr'Izy</h1>
                    </div>  

                    <br />
                    <br />
                    <br />
                    <IonCard >


                        {/* Bienvenue sur Repr'izy, l'application ultime pour trouver la voiture d'occasion parfaite qui correspond à 
                        vos besoins et à votre style de vie. Nous comprenons que l'achat d'une voiture d'occasion peut être une étape importante
                        , c'est pourquoi Repr'izy s'efforce de rendre cette expérience aussi simple et agréable que possible. */}
                        <IonCardContent >
                            Bienvenue sur Repr'izy, votre destination incontournable pour une expérience d'achat et 
                            de vente de voitures d'occasion simplifiée et transparente. Avec notre application conviviale,
                            nous mettons tout en œuvre pour faciliter chaque étape du processus, que vous soyez vendeur ou acheteur.
                        </IonCardContent>
                    </IonCard>
                    <br />
                    <br />
                    <br />

                    <center>

                        <Started/>
                    </center>
                </div>   
                </IonContent>

                <IonFooter>
                    
                </IonFooter>
            </IonPage>
            
        );
    };

    export default Landing;


