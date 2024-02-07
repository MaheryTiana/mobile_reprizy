import { Camera, CameraResultType } from "@capacitor/camera";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonFooter, IonHeader, IonInput, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import  "../assets/css/Register.css";

import {post,handleChange} from "../axios_utils.js";

import My_url from "../My_url";
const Register: React.FC = () =>{

  const [base64URL, setBase64URL] = useState("");
  const [formData, setFormData] = useState(new FormData());
  const [image,setImage] = useState('');
  const histo = useHistory();


  const handleInput = (e) => {
    handleChange(e, formData, setFormData);
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.append("image", base64URL);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    const apiUrl = My_url+"/auth/register";
    const response = await post(formData, setFormData, apiUrl);

    if (response.data.error) {
      console.log("register error  : "+response.data.error);
    }else{
      console.log(response.data.data);
      localStorage.setItem('token',response.data.data[1].token);
      histo.push('/');
    }

  }


  const getBase64 = async (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          let reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
        .catch(reject);
    });
  };



const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality:  90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });

  var web = image.webPath;
  console.log("web " + web);
  setImage(web);

  getBase64(web)
    .then((result) => {
      
      setBase64URL(result);
      console.log('====================================');
      console.log("base : "+result);
      console.log('====================================');
    })
    .catch((err) => {
      console.log(err);
    });
};

    return(
        <IonPage >

            <IonContent fullscreen >
              <center>
            {image !==null && image !=='' ?(

              <div className="pdp_container">    
                             
                  <img src={image} alt="4x4" onClick={()=>{takePicture();}} />                      
              </div>
              ):(
              <>
              <button type='button' style={{borderRadius:'400px'}} onClick={()=>{takePicture();}}  >
                  <div className="register_take_container"> 
                      <div className="register_take_header"> 
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                          <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p>Choisir une photo de profil</p>
                      </div>  
                  </div>

              </button>

              </>

              )}    </center>            

    <div>
     
      <form action="/accueil" method="POST" style={{marginTop:'20px'}} onSubmit={handleSubmit}>
        
        <IonInput onIonChange={handleInput} name="nom" className="myinput" label="Nom" type="text"></IonInput>
        <IonInput onIonChange={handleInput} name="prenom" className="myinput" label="Prenom" type="text"></IonInput> 

        <IonInput onIonChange={handleInput} name="cin" className="myinput" label="Numero CIN" type="text"></IonInput>
        <IonInput onIonChange={handleInput} name="username" style={{marginLeft:"10px"}} label="Email" type="text"></IonInput>
        <IonInput onIonChange={handleInput} name="mdp" style={{marginLeft:"10px"}} label="Mot de passe" type="password"></IonInput>
        
        <center style={{marginTop:'20px'}}>
            <IonButton color={"tertiary"}  type="submit">S'inscrire</IonButton>
        </center>

      
      </form>
    </div>

            </IonContent>
        </IonPage>
        
    );
};

export default Register;