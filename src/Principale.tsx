import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonFab, IonFabButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { listCircleOutline, add,addCircleOutline,personCircleOutline,notificationsOutline, starOutline} from 'ionicons/icons';

import  "./assets/css/menu.scss";
import Accueil from "./pages/Accueil";
import New_annonce from './pages/New_annonce';
import Favoris from './pages/Favoris';
export function Principale() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* <Redirect exact path="/prin" to="/home" /> */}

          <Route path="/accueil" render={() => <Accueil />} exact={true} />
          <Route path="/new_annonce" render={() => <New_annonce />} exact={true} />
          <Route path="/mes_favoris" render={() => <Favoris />} exact={true} />

          {/* <Route path="/radio" render={() => <RadioPage />} exact={true} />
          <Route path="/library" render={() => <LibraryPage />} exact={true} />
          <Route path="/search" render={() => <SearchPage />} exact={true} /> */}
        </IonRouterOutlet>

        <IonTabBar className="tab-menu" slot="bottom">



        <IonTabButton className="tab-menu-button" tab="favoris" href="/mes_favoris">
            <IonIcon icon={starOutline} />
            {/* <IonLabel>Mes Favoris</IonLabel> */}
          </IonTabButton>


          <IonTabButton className="tab-menu-button" tab="annonces" href="/mes_annonces">
            <IonIcon icon={listCircleOutline} />
            {/* <IonLabel>Mes Annonces</IonLabel> */}
          </IonTabButton>

          <IonTabButton className="tab-menu-button"  tab="new_annonce" href="/new_annonce">
            <IonIcon icon={addCircleOutline} />
            {/* <IonLabel>Annonce</IonLabel> */}
          </IonTabButton>
          
          <IonTabButton  className="tab-menu-button"  tab="notification" href="/notification">
            <IonIcon icon={notificationsOutline} />
            {/* <IonLabel>Notifications</IonLabel> */}
          </IonTabButton>

          <IonTabButton  className="tab-menu-button"  tab="search" href="/search">
            <IonIcon icon={personCircleOutline} />
            {/* <IonLabel>Profil</IonLabel> */}
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  );
}
