import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonFooter, IonHeader, IonInput, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
// import  "../assets/css/Register.css";

const Register: React.FC = () =>{

    return(
        <IonPage >

            <IonContent fullscreen >
                

    <div>
     
      <form action="/accueil" method="POST">
        
        <br/>
        <br/>
        <IonInput className="myinput" label="Nom" type="text"></IonInput>
        <IonInput className="myinput" label="Prenom" type="text"></IonInput> 
        <IonInput className="myinput" label="Date de naissance" type="date"></IonInput>    
        <IonInput className="myinput" label="Adresse" type="text"></IonInput>   
        <IonInput className="myinput" label="Numero CIN" type="text"></IonInput>
        <IonInput style={{marginLeft:"10px"}} label="Email" type="email"></IonInput>
        <IonInput style={{marginLeft:"10px"}} label="Mot de passe" type="password"></IonInput>
        <br/>
        <center>
            <IonButton routerLink="/accueil">S'inscrire</IonButton>
        </center>

      
      </form>
    </div>
    


            </IonContent>
        </IonPage>
        
    );
};

export default Register;