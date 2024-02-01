import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonFooter, IonHeader, IonInput, IonLabel, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
// import  "../assets/css/Login.css";


const Login: React.FC = () =>{

    return(
        <IonPage >

            <IonContent >



    

    <div>
     
      <form action="/accueil" method="POST" style={{marginTop:'20px'}}>

        <IonInput name="email" style={{marginLeft:"10px"}} label="Email" type="email" placeholder="example@gmail.com"></IonInput>

        <IonInput name="password" style={{marginLeft:"10px", top: "5px"}} label="Mot de passe" type="password" placeholder="8 characters"></IonInput>

        <center style={{marginTop:'30px'}}>
            <IonButton color={"tertiary"} routerLink="/main/accueil">Se connecter</IonButton>
        </center>
      
      </form>
    
    </div>

            </IonContent>

            <IonFooter>

            </IonFooter>
        </IonPage>
        
    );
};

export default Login;