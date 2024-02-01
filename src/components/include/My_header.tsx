import {  IonButton, IonButtons, IonHeader, IonIcon, IonImg, IonLabel, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "../../assets/css/my_header.scss";
import  logo from "../../assets/images/favicon_menu.png";

import { logOutOutline} from 'ionicons/icons';

export function My_header({titre}) {
    
    return(
        <IonHeader translucent={true}>
            <IonToolbar>
                
                {/* <IonImg className="my_image"  src={logo} alt="logo"></IonImg> */}
                <IonToolbar>
                    <IonButtons slot="start">
                        <a href="/main/accueil">
                            <IonImg className="my_image"  src={logo} alt="logo"></IonImg>
                        </a>
                    </IonButtons>
                        <center>
                        <IonTitle className="my_title">{titre}</IonTitle>
                        </center>
                    <IonButtons slot="end">
                        <a href="/logout">
                            <IonButton  >
                                <IonIcon  icon={logOutOutline}></IonIcon>
                            </IonButton>
                        </a>
                    </IonButtons>
                </IonToolbar>
                
                
            </IonToolbar>
        </IonHeader>

    );
}