import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonFab, IonFabButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { listCircleOutline, add,addCircleOutline,personCircleOutline,notificationsOutline, starOutline, homeOutline} from 'ionicons/icons';

import  "./assets/css/menu.scss";
import Accueil from "./pages/Accueil";
import New_annonce from './pages/New_annonce';
import Favoris from './pages/Favoris';
import Mes_annonces from './pages/Mes_annonces';
import Profil from './pages/Profil';

export function Principale() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/main" to="/main/mes_annonces" />

          {/* <Route path="/main/accueil" render={() => <Accueil />} exact={true} /> */}
          <Route path="/main/new_annonce" render={() => <New_annonce />} exact={true} />
          {/* <Route path="/main/mes_favoris" render={() => <Favoris />} exact={true} /> */}
          <Route path="/main/mes_annonces" render={() => <Mes_annonces />} exact={true} /> 
          <Route path="/main/profil" render={() => <Profil />} exact={true} />
          
          {/* <Route path="/radio" render={() => <RadioPage />} exact={true} />
          <Route path="/library" render={() => <LibraryPage />} exact={true} />
          <Route path="/search" render={() => <SearchPage />} exact={true} /> */}
        </IonRouterOutlet>

        <IonTabBar className="tab-menu" slot="bottom">



        {/* <IonTabButton className="tab-menu-button" tab="favoris" href="/main/mes_favoris">
            <IonIcon icon={starOutline} />
            <IonLabel>Mes Favoris</IonLabel>
          </IonTabButton> */}


          <IonTabButton className="tab-menu-button" tab="mes_annonces" href="/main/mes_annonces">
            <IonIcon icon={listCircleOutline} />
            {/* <IonLabel>Mes Annonces</IonLabel> */}
          </IonTabButton>


          <IonTabButton className="tab-menu-button"  tab="new_annonce" href="/main/new_annonce">
            <IonIcon icon={addCircleOutline} />
            {/* <IonLabel>Annonce</IonLabel> */}
          </IonTabButton>

          {/* <IonTabButton  className="tab-menu-button"  tab="accueil" href="/main/accueil">
            <IonIcon icon={homeOutline} />
            <IonLabel>Notifications</IonLabel>
          </IonTabButton>           */}

          <IonTabButton  className="tab-menu-button"  tab="profil" href="/main/profil">
            <IonIcon icon={personCircleOutline} />
            {/* <IonLabel>Profil</IonLabel> */}
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  );
}
