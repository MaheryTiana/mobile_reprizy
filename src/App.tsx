import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Login_Register from './pages/Login_Register';

import Landing from './pages/Landing';
import {Principale} from './Principale';
import "./global.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Landing />

        </Route>

        <Route exact path="/accueil">
          <Principale/>
        </Route>
      
        <Route exact path="/started">
          <Login_Register />
        </Route>

        <Route exact path="/logout">
          <Landing />
        </Route>

        {/* <Route exact path="/">
          <Login_Register />
        </Route> */}
        

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
