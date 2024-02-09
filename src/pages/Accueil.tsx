import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';

import {My_header} from "../components/include/My_header";
import Publication from '../components/main/Publication';
import My_url from '../My_url';
import { get } from "../axios_utils.js";
import Loader from '../components/loader/Loader';

const Accueil: React.FC = () => {

  const [data,setData] =  useState([]);
  const [loader,setLoader] = useState(true);
  
  useEffect(()=>{
    // Assuming the `get` function is imported or available in scope

    async function fetchData() {
        try {
        const url = My_url+"/Annonces"; // Replace with your actual URL
        const response = await get(url);
        console.log(response); // Access the data property of the response object
        console.log(response.data.data[0]);
        
        setData(response.data.data[0]);
        for (let i = 0; i < data.length; i++) {
          let temp = response.data.data[i];
          console.log('====================================');
          console.log(JSON.stringify(temp));
          
          console.log(" data : "+temp+"/ "+data.length);
          console.log('====================================');
          
        }
        setLoader(false);
        } catch (error) {
        console.error('There was an error fetching the data:', error);
        }
    }
    
    fetchData();

},[]);

  return (
    <IonPage>
        <My_header titre="Repr'Izy"></My_header>
      <IonContent fullscreen>
        {loader==true&&(
          <Loader/>
        )}
        {data!==null && data.length !==0 ?(
          data.map((dt,ind)=>(
            (dt.etatAnnonce !== 20 &&(
              
              <Publication date = {dt.date} key={ind} marque={dt.marque.nom}
              modele={"dt.modele"} auteur={dt.user.prenom +" "+dt.user.nom } 
              image={dt.images} mine={false} titre={dt.libelle} id_pub = {dt.id } is_fav = {false}/>

            ))
            // <p key={ind}>{dt.modele.nom}</p>
          )
        )):(
          <><p>NEANT</p></>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
