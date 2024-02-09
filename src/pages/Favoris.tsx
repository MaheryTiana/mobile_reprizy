import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import {My_header} from "../components/include/My_header";
import Publication from '../components/main/Publication';
import My_url from '../My_url';
import { get } from "../axios_utils.js";
import Loader from '../components/loader/Loader';
import { useEffect, useState } from 'react';
const Favoris: React.FC = () => {
  const [data,setData] =  useState([]);
  const [loader,setLoader] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
        try {
            const url = My_url + "/Annonces/favorites";
            const response = await get(url);
            console.log("API Response: ", response);
            setData(response.data.data); // Set the data
            setLoader(false);
        } catch (error) {
            console.error('There was an error fetching the data:', error);
        }
    }

    fetchData();
}, []);

  return (
    <IonPage>
        <My_header titre="Favoris"></My_header>
      <IonContent fullscreen>
      {loader==true&&(
          <Loader/>
        )}
        {data!==null && data.length !==0 ?(
          data.map((dt,ind)=>(

           

              <Publication date = {dt[0].date} key={ind} marque={dt[0].marque.nom}
              modele={dt[0].modele} auteur={dt[0].user.prenom +" "+dt[0].user.nom } 
              image={dt[0].images} mine={false} titre={dt[0].libelle} id_pub = {dt[0].id} is_fav ={true} />
            
            
                          // (dt[0].etatAnnonce !== 20 &&(
            // ))
          )
        )):(
          <><p>NEANT</p></>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Favoris;
