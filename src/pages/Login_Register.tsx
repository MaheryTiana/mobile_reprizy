import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonFooter, IonHeader, IonInput, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { useEffect, useState } from "react";
import  "../assets/css/Login.css";
import "../global.css";
import Login from "../components/Login";
import Register from "../components/Register";

const Login_Register: React.FC = () =>{

    const [indice, setIndice] = useState(0);
    
  useEffect(()=>{
    change();
  },[]);
    // alert(indice)
    function change() {
        if (indice ==1) {
            setIndice(2)
            // setComponent(<Register/>)
            // alert(indice)
        }else{
            setIndice(1)
            // setComponent(<Login/>)
        }
    }
    return (
        <IonPage>
            <IonHeader>
            <div className="back-img">
              <div className="sign-in-text">
                {indice === 1 && (
                  <>
                    <h2 className="active">Se connecter</h2>
                    <a onClick={change}>
                      <h2 className="nonactive">S'inscrire</h2>
                    </a>
                  </>
                )}
                {indice === 2 && (
                  <>
                    <a onClick={change}>
                      <h2 className="nonactive">Se connecter</h2>
                    </a>
                    <h2 className="active">S'inscrire</h2>
                  </>
                  
                )}
              </div>
              <div className="layer"></div>
            </div>
            
            </IonHeader>
          <IonContent>
            
            {indice ==1 &&(
              <Login/>
            )
            }  
                    {indice ==2 &&(
              <Register/>
            )
            }  
          </IonContent>
          <IonFooter></IonFooter>
        </IonPage>
      );
    };

export default Login_Register;