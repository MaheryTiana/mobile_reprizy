import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import {My_header} from "../components/include/My_header";
import Publication from '../components/main/Publication';
const Favoris: React.FC = () => {
  return (
    <IonPage>
        <My_header titre="Favoris"></My_header>
      <IonContent fullscreen>
        <Publication isFav={true} mine={false} key={0} marque="mercedes" modele="mercedes C63" auteur="Max" image={["img","img2"]} />
        <Publication isFav={true} mine={false} key={1} marque="mercedes" modele="mercedes C63" auteur="Max" image={["img","img2"]} />
        <Publication isFav={true} mine={false} key={2} marque="mercedes" modele="mercedes C63" auteur="Max" image={["img","img2"]} />
      </IonContent>
    </IonPage>
  );
};

export default Favoris;
