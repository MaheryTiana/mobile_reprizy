import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import {My_header} from "../components/include/My_header";
import Publication from '../components/main/Publication';
const Mes_annonces: React.FC = () => {
  return (
    <IonPage>
        <My_header titre="Mes annonces"></My_header>
        <IonContent fullscreen >
            <Publication isFav={true} key={0} mine={true} marque="mercedes" modele="mercedes C63" auteur="Max" image={["img","img2"]} />
            <Publication isFav={true} key={1}  mine={true} marque="mercedes" modele="mercedes C63" auteur="Max" image={["img","img2"]} />
            <Publication isFav={true} key={2} mine={true}  marque="mercedes" modele="mercedes C63" auteur="Max" image={["img","img2"]} />
        </IonContent>
    </IonPage>
  );
};

export default Mes_annonces;
