import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonFooter, IonHeader, IonInput, IonLabel, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";

import { useState } from "react";
import { useHistory } from "react-router";

import My_url from "../My_url";
import Loader from "./loader/Loader";
// alert(My_url);

const Login: React.FC = () =>{

  const histo = useHistory();
  const [loader,setLoader] = useState(false);
  const [error,setError] = useState("");
  const [form_data,setForm_data] = useState({
    username : '',
    mdp:''
  }); 

  const handle_change = (e) =>{
    const {name,value} = e.target;
    console.log("change : "+value);
    setForm_data({
      ...form_data,
      [name]: value,
    });
  }

  const handle_submit = async (e) =>{
    setLoader(true);

    e.preventDefault();
    const apiUrl = My_url+"/auth/login";
    try {
      const data_send = new FormData();
      data_send.append('username',form_data.username);
      data_send.append('mdp',form_data.mdp);
      let config = {
        method : 'post',
        maxBodyLength : Infinity,
        url : apiUrl,
        headers: {
          'Content-Type' : 'multipart/form-data',
        },
       
        data : data_send
      };
      console.log(form_data.username);
      const response = await axios.request(config);

      if(response.data.error){
        setError(response.data.error);
        console.log('Error request : '+ response.data.error );
        setLoader(false);
        // alert(response.data.error);
      } else{
        console.log('logged '+ response.data.data[1].token );
        localStorage.setItem('token', response.data.data[1].token );
        setForm_data({
          username:'',
          mdp:''
        });

        var email = document.getElementById('email');
        email.value = "";

        var mdp = document.getElementById('mdp');
        mdp.value = "";

        setLoader(false);
        
        histo.push('/main/accueil')
      }
    } catch (error) {
      
      console.error('Errorrrrr : '+error );
    }
  }

    return(
        <IonPage >

            <IonContent >



    

    <div>
     
      <form  style={{marginTop:'20px'}} onSubmit={handle_submit} >

        <IonInput name="username" style={{marginLeft:"10px"}} id="email" label="Email" type="text"
         placeholder="example@gmail.com" 
          onIonChange={handle_change}
         ></IonInput>

        <IonInput name="mdp" id="mdp" style={{marginLeft:"10px", top: "5px"}} 
        label="Mot de passe" type="password" placeholder="8 characters"
        onIonChange={handle_change}
        ></IonInput>

        {loader && (<Loader/>) }

        <center style={{marginTop:'30px'}}>
            <IonButton color={"tertiary"}  type="submit">Se connecter</IonButton>
            {error !==''&&(
              <p style={{color:'red'}}>{error}</p>
            )}
        </center>
        

      </form>
    
    </div>

            </IonContent>

            <IonFooter>

            </IonFooter>
        </IonPage>
        
    );
};

export default Login;