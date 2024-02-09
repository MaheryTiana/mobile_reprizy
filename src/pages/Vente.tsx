import { IonButton, IonContent, IonInput, IonItem, IonList, IonPage, IonToast } from '@ionic/react';

import {My_header} from "../components/include/My_header";
import  "../assets/css/vente.css";
import { useParams } from 'react-router';
import Loader from '../components/loader/Loader';
import { useState } from 'react';
import My_url from '../My_url';

import { get ,post,handleChange} from "../axios_utils.js";

const Vente: React.FC = () => {
  const {id} = useParams();
  const [loader,setLoader] = useState(false);
  const [formData, setFormData] = useState(new FormData());
  const [message,setMessage] = useState("");

  const handleInput = (e) => {
    handleChange(e, formData, setFormData);
  }
  const handleSubmit = async (e)=>{
    // setLoader2(true);
    e.preventDefault();
    try {
        setLoader(true);
        // setMessage("oke")

        formData.append("idannonce",id);
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        const api_url = My_url+"/Ventes";
        const response = await post(formData,setFormData,api_url);
        if (response.data.error != null) {
            setMessage(response.data.error);
            setLoader(false);
        }else{
            setMessage("Vendue")
            setLoader(false);
        }
        
    } catch (error) {
        
    }
}

  
    return (
        <IonPage>
            <My_header titre=" Vente"></My_header>
          <IonContent fullscreen>
            {loader === true ?(
              <Loader/>
            ):(

              <div className='vente_card'>
      
                  <div className='vente_content'>
                      
                      <form  style={{marginTop:'20px'}} onSubmit={handleSubmit}>
  
                      <IonInput  name="cin" onIonChange={handleInput} className='vente_input' label="CIN" type="text" placeholder="tapez pour ecrire" required></IonInput>
  
                      <IonInput name="prix" onIonChange={handleInput} className='vente_input' label="Prix de Vente" type="text" placeholder="tapez pour ecrire" required></IonInput>
  
                      <center style={{marginTop:'30px'}}>
                          <IonButton color={"tertiary"} type="submit">Valider</IonButton>
                      </center>
                      {message && <IonToast isOpen={true} message={message} duration={5000} color={'success'}/>}
                             
                      </form>
                  
                  </div>
      
              </div>
            )}
                      
            
          </IonContent>
        </IonPage>
      );
    };
    

export default Vente;
