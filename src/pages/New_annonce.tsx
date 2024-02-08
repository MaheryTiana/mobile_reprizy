import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar,IonToast } from '@ionic/react';
import { useEffect, useState } from 'react';
import Import_photo from '../components/annonce/Import_photo';

import {My_header} from "../components/include/My_header";


import { Camera, CameraResultType } from '@capacitor/camera';
import Carousel from '../components/main/Carousel';
import  "../assets/css/new_annonce.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

import My_url from '../My_url';
import axios from 'axios';
import { get ,post,handleChange} from "../axios_utils.js";
import Loader from '../components/loader/Loader';

const New_annonce: React.FC = () => {
    const [base64URL, setBase64URL] = useState([]);
    const [loader,setLoader] = useState(true);
    const [loader2,setLoader2] = useState(false);
    const [images,setImages] = useState([]);
    const [message,setMessage] = useState("");
    const [categorie,setCategorie] = useState([]);
    const [type,setType] = useState([]);
    const [marque,setMarque] = useState([]);
    const [modele,setModele] = useState([]);
    const [transmission,setTransmission] = useState([]);
    const [energie,setEnergie] = useState([]);
    const [etat,setEtat] = useState([]);
    const [formData, setFormData] = useState(new FormData());




    useEffect(()=>{
            // Assuming the `get` function is imported or available in scope

            async function fetchData() {
                try {
                const url = My_url+"/Annonces/newAnnonce"; // Replace with your actual URL
                const response = await get(url);
                console.log("data mine : "+response.data.data[0]); // Access the data property of the response object
                setCategorie(response.data.data[0]);
                setMarque(response.data.data[1]);
                setEtat(response.data.data[2]);
                setEnergie(response.data.data[3]);
                setModele(response.data.data[4]);
                setTransmission(response.data.data[5]);
                setType(response.data.data[6]);
                setLoader(false);
                } catch (error) {
                console.error('There was an error fetching the data:', error);
                }
            }
            
            fetchData();

    },[]);



    //one
        const takePicture = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
        });
        
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        var web = image.webPath;
        var local = image.base64String;
        // Can be set to the src of an image now
        
        // alert("srouce web : "+web);
        // alert("srouce local : "+local);
        
        };
        // many
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


        const take_many = async () => {
            const many = await Camera.pickImages();
            const photos = many.photos;
          
            // Array to store base64 URLs
            const base64URLs = [];
          
            for (let i = 0; i < photos.length; i++) {
              const src = photos[i].webPath;
              console.log("many : " + src);
          
              try {
                // Fetch base64 data for the image
                const base64Data = await getBase64(src);
                base64URLs.push(base64Data);
              } catch (error) {
                console.error("Error fetching base64 data:", error);
              }
            }
          
            // Set base64URL state
            setBase64URL(base64URLs);
          
            // Set images state
            const webPaths = photos.map(photo => photo.webPath);
            setImages(webPaths);
          };

        const handleInput = (e) => {
            handleChange(e, formData, setFormData);
            // console.log(formData.values);
        }

        const handleSubmit = async (e)=>{
            setLoader2(true);
            e.preventDefault();
            try {
                // setLoader(true);
                // setMessage("oke")
                base64URL.forEach(url => {
                    formData.append("images", url);
                  });
                formData.forEach((value, key) => {
                    console.log(`${key}: ${value}`);
                });
                const response = await post(formData,setFormData,My_url+"/Annonces")
                if (response.data.error != null) {
                    setMessage(response.data.error);
                    setLoader2(false);
                }else{
                    setMessage("ok be")
                    setLoader2(false);
                }
                
            } catch (error) {
                
            }
        }
    
     


  return (
    <IonPage>
        <My_header titre="Nouvelle Annonce"></My_header>
      <IonContent fullscreen>
        {loader == true &&(
        <>
            <Loader/>
            </>)}
        <form onSubmit={handleSubmit}>
        <div className='form_card'>

                <>
            <Swiper
                direction={'vertical'}
                pagination={{
                type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >



                <SwiperSlide key={1}>
                {images !==null && images.length!==0 ?(

                    <div className="image_container">                   
                        <Carousel image={images}/>                       
                    </div>
                ):(
                    <>
                    <button type='button' onClick={()=>{take_many();}}  >
                        <div className="take_container"> 
                            <div className="take_header"> 
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                                <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p>Importer des images</p>
                            </div>  
                        </div>

                    </button>

                </>

                )}

                <div className='slide1_contains'>
                    <IonList>
                        <IonItem className='slide1_item'>
                            <IonSelect onIonChange={handleInput} name='idcategorie' >
                            <div slot="label">
                                Categorie
                            </div>
                            {
                                categorie.map((cat,ind)=>(
                                    <IonSelectOption key={ind} value={cat.id}>{cat.nom}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>

                        <IonItem className='slide1_item'>
                            <IonSelect onIonChange={handleInput}  name='idtype' >
                            <div slot="label">
                                Type
                            </div>

                            {
                                type.map((tp,ind)=>(
                                    <IonSelectOption key={ind} value={tp.id}>{tp.nom}</IonSelectOption>
                                ))
                            }
                            
                            </IonSelect>
                        </IonItem>
                        

                        <IonItem className='slide1_item'>
                            <IonSelect onIonChange={handleInput} name='idmarque' >
                            <div slot="label">
                                Marque
                            </div>
                            {
                                marque.map((mq,ind)=>(
                                    <IonSelectOption key={ind} value={mq.id}>{mq.nom}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>

                        <IonItem className='slide1_item'>
                            <IonSelect onIonChange={handleInput} name='idmodele' >
                            <div slot="label">
                                Modele
                            </div>
                            {
                                modele.map((md,ind)=>(
                                    <IonSelectOption key={ind} value={md.id}>{md.nom}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>
                        
                    </IonList>
                </div>



                </SwiperSlide>


                <SwiperSlide key={2}>

                <div className='slide2_contains'>
                    <IonList>
                        <IonItem className='slide2_item'>
                            <IonSelect onIonChange={handleInput} name='idtransmission' >
                            <div slot="label">
                                Transmission
                            </div>
                            {
                                transmission.map((trs,ind)=>(
                                    <IonSelectOption key={ind} value={trs.id}>{trs.nom}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>

                        <IonItem className='slide2_item'>
                            <IonSelect onIonChange={handleInput} name='idenergie'  >
                            <div slot="label">
                                Energie
                            </div>
                            {
                                energie.map((eg,ind)=>(
                                    <IonSelectOption key={ind} value={eg.id}>{eg.nom}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>
                        

                        <IonItem className='slide2_item'>
                            <IonSelect onIonChange={handleInput} name='idetat' >
                            <div slot="label">
                                Etat du vehicule
                            </div>
                            {
                                etat.map((et,ind)=>(
                                    <IonSelectOption key={ind} value={et.id}>{et.nom}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>

                        <IonInput onIonChange={handleInput} name='libelle' className='slide2_item' style={{width:"92%",marginLeft:"5%"}} label="Titre" type="text" placeholder="Tapez pour ecrire"></IonInput>
                        <IonInput onIonChange={handleInput} name='annee' className='slide2_item' style={{width:"92%",marginLeft:"5%"}} label="Année" type="number" min={0} max={3000} placeholder="Tapez pour ecrire"></IonInput>
                        <IonInput onIonChange={handleInput} name='place' className='slide2_item' style={{width:"92%",marginLeft:"5%"}} label="Nombre de place" type="number" min={0} placeholder="Tapez pour ecrire"></IonInput>
                        <IonInput onIonChange={handleInput} name='prix' className='slide2_item' style={{width:"92%",marginLeft:"5%"}} label="Prix" type="number" min={0} placeholder="Tapez pour ecrire"></IonInput>
                        
                        
                    </IonList>
                </div>

                </SwiperSlide>

                <SwiperSlide key={3} className='slide3_contains'>
                    <IonList>
                        <IonItem >

                            <div style={{width:'100%', height:'70px'}}>
                                <h4 className='annonce_title'>Description : </h4>
                            </div>
                        </IonItem>
                        

                        <div className='new_description'>
                        <IonItem >
                        
                            <IonTextarea
                                label="Description"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Tapez pour ecrire"
                                name='description'
                            ></IonTextarea>
                        
                        </IonItem>
                        </div>



                        <center style={{marginTop:'30px'}}>
                            <IonButton color={"tertiary"} type="submit" >Poster</IonButton>
                            {message && <IonToast isOpen={true} message={message} duration={5000} color={'success'}/>}
                             
                        </center>


                    </IonList>

                    
                    

                </SwiperSlide>

            </Swiper>
            </>

        </div>
        </form>           
        
      </IonContent>
    </IonPage>
  );
};

export default New_annonce;
