import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import {My_header} from "../components/include/My_header";
import Publication from '../components/main/Publication';
const Home: React.FC = () => {
  return (
    <IonPage>
        <My_header titre="Repr'Izy"></My_header>
      <IonContent fullscreen>
        <Publication marque="mercedes" modele="mercedes C63" auteur="Max" image={["img","img2"]} />
        <Publication marque="mercedes" modele="mercedes C63" auteur="Max" image={["img","img2"]} />
        <Publication marque="mercedes" modele="mercedes C63" auteur="Max" image={["img","img2"]} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
