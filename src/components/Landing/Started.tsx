import React, { useRef, useState } from 'react';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';

export function Started() {
  const modal = useRef<HTMLIonModalElement>(null);

  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const handleButtonClick = () => {
    // Close the modal before navigating to another page
    setShowModal(false);

    // Replace '/your-link' with the actual path you want to navigate to
    history.push('/started');
  };
  return (
    <div>


        <IonButton onClick={() => setShowModal(true)}
         color={"danger"} id="open-modal" 
         expand="block">
            <p >commencer</p>
        </IonButton>

        <IonModal trigger="open-modal"
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75]}
          handleBehavior="cycle" isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <div className="block">

            <br />


                <IonButton style={{width:"100%"}}  onClick={handleButtonClick}
                  >
                    <p >S'inscrire ou se connecter</p>
                </IonButton>

            <br />
            <a href="https://reprizymilaybe.netlify.app/">
                <IonButton style={{width:"100%"}}  >
                    <p >Voir site Web</p>
                </IonButton>
            </a>
            
          </div>
        </IonModal>
    </div>
  );
}

