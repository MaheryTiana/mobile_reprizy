import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonFooter, IonHeader, IonInput, IonLabel, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
// import  "../assets/css/Login.css";


const Login: React.FC = () =>{

    return(
        <IonPage >

            <IonContent >



    

    <div>
     
      <form 
       action="/accueil" method="POST">
        
        <br/>
        <br/>

        <IonInput style={{marginLeft:"10px"}} label="Email" type="email" placeholder="example@gmail.com"></IonInput>
        <br/>
        <br/>
        <IonInput style={{marginLeft:"10px"}} label="Mot de passe" type="password" placeholder="8 characters"></IonInput>
        <br/>
        <center>
            <IonButton routerLink="/accueil">Se connecter</IonButton>
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