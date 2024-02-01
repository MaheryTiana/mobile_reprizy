import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import {My_header} from "../components/include/My_header";
import Publication from '../components/main/Publication';
const Accueil: React.FC = () => {
  return (
    <IonPage>
        <My_header titre="Repr'Izy"></My_header>
      <IonContent fullscreen>
        <Publication isFav={true} key={0} marque="mercedes" modele="mercedes C63" auteur="Max" image={["img", "img2"]} mine={false} />
        <Publication isFav={false} key={1} marque="mercedes" modele="mercedes C63" auteur="Max" image={["img","img2"]} mine={false} />
        <Publication isFav={false} key={2} marque="mercedes" modele="mercedes C63" auteur="Max" image={["img","img2"]} mine={false}  />
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
