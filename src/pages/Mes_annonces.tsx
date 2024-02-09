import { IonContent, IonHeader, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import { useEffect, useState } from 'react';

import {My_header} from "../components/include/My_header";
import Publication from '../components/main/Publication';
import My_url from '../My_url';
import { get } from "../axios_utils.js";
import Loader from '../components/loader/Loader';
const Mes_annonces: React.FC = () => {
  const [data,setData] =  useState([]);
  const [loader,setLoader] = useState(true);
  
  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      fetchData();
      event.detail.complete();
    }, 2000);
  }

    async function fetchData() {
      try {
      const url = My_url+"/Annonces/myAnnonces"; // Replace with your actual URL
      const response = await get(url);
      console.log("data mine.data : "+response.data.data); // Access the data property of the response object
      console.log(response);
      
        setData(response.data.data[0]);
      setLoader(false);
      } catch (error) {
      console.error('There was an error fetching the data:', error);
      }
  }
  useEffect(()=>{
    // Assuming the `get` function is imported or available in scope 
    fetchData();

},[]);


  return (
    <IonPage>
        <My_header titre="Mes annonces"></My_header>
        <IonContent fullscreen >
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {loader==true ?(
          <Loader/>
        ):(
          
        
        
        data!==null && data.length !==0 ?(
          data.map((dt,ind)=>(

            
                          <Publication date = {dt.date} key={ind} marque={dt.marque.nom}
                          modele={dt.modele.nom} auteur={dt.user.prenom +" "+dt.user.nom } 
                          image={dt.images} mine={false} titre={dt.libelle} id_pub = {dt.id } etat = {dt.etatAnnonce}/>
            // (dt[0].etatAnnonce !== 20 &&(
            // ))
          //   <center>
          //   <p key={ind}>{dt.modele.nom}</p>
          // </center>
          )
        )):(
          <>
            <center>
              <p>NEANT</p>
            </center>
          </>
        )
        
        )}
        
        </IonContent>
    </IonPage>
  );
};

export default Mes_annonces;
